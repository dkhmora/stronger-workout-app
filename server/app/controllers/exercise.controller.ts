import { Op } from "sequelize";
import dbModels from "../models";
import { Request, Response } from "express";

const Exercise = dbModels.exercises;

// Create and Save a new Exercise
exports.create = (req: Request, res: Response) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Exercise
  const exercise = {
    name: req.body.title,
    description: req.body.description,
    category: req.body.category,
    bodyPart: req.body.bodyPart,
  };

  // Save Exercise in the database
  Exercise.create(exercise)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Exercise.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req: Request, res: Response) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Exercise.findAll({ where: condition as any })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving exercises.",
      });
    });
};

// Find a single Exercise with an id
exports.findOne = (req: Request, res: Response) => {
  const id = req.params.id;

  Exercise.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Exercise with id=" + id,
      });
    });
};

// Update a Exercise by the id in the request
exports.update = (req: Request, res: Response) => {
  const id = req.params.id;

  Exercise.update(req.body, {
    where: { id: id } as any,
  })
    .then((num) => {
      if (num.length == 1) {
        res.send({
          message: "Exercise was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Exercise with id=${id}. Maybe Exercise was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Exercise with id=" + id,
      });
    });
};

// Delete a Exercise with the specified id in the request
exports.delete = (req: Request, res: Response) => {
  const id = req.params.id;

  Exercise.destroy({
    where: { id: id } as any,
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Exercise was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Exercise with id=${id}. Maybe Exercise was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Exercise with id=" + id,
      });
    });
};

// Delete all Exercises from the database.
exports.deleteAll = (req: Request, res: Response) => {
  Exercise.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Exercises were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all exercises.",
      });
    });
};
