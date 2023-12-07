import dbModels from "./app/models";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

let corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
};

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// // drop the table if it already exists
dbModels.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req: any, res: any) => {
  res.json({ message: "Welcome to stronger" });
});

require("./app/routes/exercise.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/workout.routes")(app);
require("./app/routes/workoutTemplate.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
