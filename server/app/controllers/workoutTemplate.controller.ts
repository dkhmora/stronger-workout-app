import { Op } from "sequelize";
import dbModels from "../models";
import { Request, Response } from "express";

const WorkoutTemplate = dbModels.workoutTemplates;

// Create and Save a new Workout Template
exports.create = (req: Request, res: Response) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Workout Template
  const workoutTemplate = {
    title: req.body.title,
    lastUsedAt: null,
  };

  // Save Workout Template in the database
  WorkoutTemplate.create(workoutTemplate)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Workout Template.",
      });
    });
};

// Retrieve all Workout Templates from the database.
exports.findAll = (req: Request, res: Response) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  WorkoutTemplate.findAll({ where: condition as any })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Workout Templates.",
      });
    });
};

// Find a single Workout Template with an id
exports.findOne = (req: Request, res: Response) => {
  const id = req.params.id;

  WorkoutTemplate.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Workout Template with id=" + id,
      });
    });
};

// Update a Workout Template by the id in the request
exports.update = (req: Request, res: Response) => {
  const id = req.params.id;

  WorkoutTemplate.update(req.body, {
    where: { id: id } as any,
  })
    .then((num) => {
      if (num.length == 1) {
        res.send({
          message: "Workout Template was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Workout Template with id=${id}. Maybe Workout Template was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Workout Template with id=" + id,
      });
    });
};

// Delete a Workout Template with the specified id in the request
exports.delete = (req: Request, res: Response) => {
  const id = req.params.id;

  WorkoutTemplate.destroy({
    where: { id: id } as any,
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Workout Template was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Workout Template with id=${id}. Maybe Workout Template was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Workout Template with id=" + id,
      });
    });
};

// Delete all Workout Templates from the database.
exports.deleteAll = (req: Request, res: Response) => {
  WorkoutTemplate.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Workout Templates were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all workoutTemplates.",
      });
    });
};
