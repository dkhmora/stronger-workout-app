import dbModels from "./app/models";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./app/routes/user.routes";
import exerciseRoutes from "./app/routes/exercise.routes";
import workoutRoutes from "./app/routes/workout.routes";
import workoutTemplateRoutes from "./app/routes/workoutTemplate.routes";

dotenv.config();

const app = express();

// Set up CORS options
const allowedOrigins = process.env.CLIENT_ORIGIN
  ? process.env.CLIENT_ORIGIN.split(",")
  : ["http://localhost:3000"];

let corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

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

// Set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
