import { Express } from "express";

export default (app: Express) => {
  const workouts = require("../controllers/workout.controller.ts");
  const router = require("express").Router();

  // Create a new Workout
  router.post("/", workouts.create);

  // Retrieve all Workouts
  router.get("/", workouts.findAll);

  // Retrieve a single Workout with id
  router.get("/:id", workouts.findOne);

  // Update a Workout with id
  router.put("/:id", workouts.update);

  // Delete a Workout with id
  router.delete("/:id", workouts.delete);

  // Delete all Workouts
  router.delete("/", workouts.deleteAll);

  app.use("/api/workouts", router);
};
