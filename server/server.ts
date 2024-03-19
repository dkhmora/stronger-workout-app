import dbModels from "./app/models";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {
  ApolloServer,
  ApolloServerOptionsWithTypeDefs,
  BaseContext,
} from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { resolvers, typeDefs } from "./app/graphql";
import http from "http";
import authMiddleware from "./app/middleware/auth";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

// Set up CORS options
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:6868",
  ...(process.env.CLIENT_ORIGIN || "").split(","),
];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`IP Address ${origin} Not allowed by CORS`));
    }
  },
};

const httpServer = http.createServer(app);

// Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
} as ApolloServerOptionsWithTypeDefs<BaseContext>);

apolloServer.start().then(() => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(corsOptions),
    authMiddleware,
    expressMiddleware(apolloServer, {
      context: async ({ req }: { req: any }) => {
        return { user: req.user, models: dbModels };
      },
    })
  );

  // Set port, listen for requests
  const PORT = process.env.NODE_DOCKER_PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

  // Entry route
  app.get("/", (req: any, res: any) => {
    res.json({ message: "Welcome to stronger" });
  });

  app.post("/verifyToken", (req, res) => {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Token is required" });
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET || "",
      (err: jwt.VerifyErrors | null, user: any) => {
        if (err) {
          return res.status(401).json({ error: "Invalid token" });
        }

        // Token is valid, you can send additional data from decoded object if needed
        res.status(200).json({ user });
      }
    );
  });
});
