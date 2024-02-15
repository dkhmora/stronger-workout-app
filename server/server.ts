import dbModels from "./app/models";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./app/routes/user.routes";
import exerciseRoutes from "./app/routes/exercise.routes";
import workoutRoutes from "./app/routes/workout.routes";
import workoutTemplateRoutes from "./app/routes/workoutTemplate.routes";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";

dotenv.config();

const app = express();

// Set up CORS options
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:6868",
  ...(process.env.CLIENT_ORIGIN || "").split(","),
];

let corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`IP Address ${origin} Not allowed by CORS`));
    }
  },
};

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const httpServer = http.createServer(app);

// Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

apolloServer.start().then(() => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(corsOptions),
    expressMiddleware(apolloServer)
  );

  // Set port, listen for requests
  const PORT = process.env.NODE_DOCKER_PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

  // Drop the table if it already exists
  dbModels.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

  // Entry route
  app.get("/", (req: any, res: any) => {
    res.json({ message: "Welcome to stronger" });
  });

  // Initialize routes
  userRoutes(app);
  exerciseRoutes(app);
  workoutRoutes(app);
  workoutTemplateRoutes(app);
});
