import { Op } from "sequelize";
import dbModels from "../models";
import { Request, Response } from "express";

const Workout = dbModels.workouts;

// Create and Save a new Workout
exports.create = (req: Request, res: Response) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Workout
  const workout = {
    name: req.body.title,
    start: req.body.start,
    duration: req.body.end,
    totalWeight: req.body.totalWeight,
    numberOfPersonalRecords: req.body.numberOfPersonalRecords,
  };

  // Save Workout in the database
  Workout.create(workout)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Workout.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req: Request, res: Response) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Workout.findAll({ where: condition as any })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving workouts.",
      });
    });
};

// Find a single Workout with an id
exports.findOne = (req: Request, res: Response) => {
  const id = req.params.id;

  Workout.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Workout with id=" + id,
      });
    });
};

// Update a Workout by the id in the request
exports.update = (req: Request, res: Response) => {
  const id = req.params.id;

  Workout.update(req.body, {
    where: { id: id } as any,
  })
    .then((num) => {
      if (num.length == 1) {
        res.send({
          message: "Workout was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Workout with id=${id}. Maybe Workout was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Workout with id=" + id,
      });
    });
};

// Delete a Workout with the specified id in the request
exports.delete = (req: Request, res: Response) => {
  const id = req.params.id;

  Workout.destroy({
    where: { id: id } as any,
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Workout was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Workout with id=${id}. Maybe Workout was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Workout with id=" + id,
      });
    });
};

// Delete all Workouts from the database.
exports.deleteAll = (req: Request, res: Response) => {
  Workout.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Workouts were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all workouts.",
      });
    });
};
