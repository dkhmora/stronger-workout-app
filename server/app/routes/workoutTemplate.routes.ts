import { Express } from "express";

export default (app: Express) => {
  const workoutTemplates = require("../controllers/workoutTemplate.controller.ts");
  const router = require("express").Router();

  // Create a new Workout Template
  router.post("/", workoutTemplates.create);

  // Retrieve all Workout Templates
  router.get("/", workoutTemplates.findAll);

  // Retrieve a single Workout Template with id
  router.get("/:id", workoutTemplates.findOne);

  // Update a Workout Template with id
  router.put("/:id", workoutTemplates.update);

  // Delete a Workout Template with id
  router.delete("/:id", workoutTemplates.delete);

  // Delete all Workout Templates
  router.delete("/", workoutTemplates.deleteAll);

  app.use("/api/workoutTemplates", router);
};
