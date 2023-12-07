import { Express } from "express";

export default (app: Express) => {
  const exercises = require("../controllers/exercise.controller.ts");
  const router = require("express").Router();

  // Create a new Exercise
  router.post("/", exercises.create);

  // Retrieve all Exercises
  router.get("/", exercises.findAll);

  // Retrieve a single Exercise with id
  router.get("/:id", exercises.findOne);

  // Update a Exercise with id
  router.put("/:id", exercises.update);

  // Delete a Exercise with id
  router.delete("/:id", exercises.delete);

  // Delete all Exercises
  router.delete("/", exercises.deleteAll);

  app.use("/api/exercises", router);
};
