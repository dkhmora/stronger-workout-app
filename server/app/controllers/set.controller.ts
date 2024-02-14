import { Op } from "sequelize";
import dbModels from "../models";
import { Request, Response } from "express";

const Set = dbModels.sets;

// Create and Save a new Set
exports.create = (req: Request, res: Response) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Set
  const set = {
    name: req.body.title,
    description: req.body.description,
    category: req.body.category,
    bodyPart: req.body.bodyPart,
  };

  // Save Set in the database
  Set.create(set)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Set.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req: Request, res: Response) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Set.findAll({ where: condition as any })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sets.",
      });
    });
};

// Find a single Set with an id
exports.findOne = (req: Request, res: Response) => {
  const id = req.params.id;

  Set.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Set with id=" + id,
      });
    });
};

// Update a Set by the id in the request
exports.update = (req: Request, res: Response) => {
  const id = req.params.id;

  Set.update(req.body, {
    where: { id: id } as any,
  })
    .then((num) => {
      if (num.length == 1) {
        res.send({
          message: "Set was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Set with id=${id}. Maybe Set was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Set with id=" + id,
      });
    });
};

// Delete a Set with the specified id in the request
exports.delete = (req: Request, res: Response) => {
  const id = req.params.id;

  Set.destroy({
    where: { id: id } as any,
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Set was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Set with id=${id}. Maybe Set was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Set with id=" + id,
      });
    });
};

// Delete all Exercises from the database.
exports.deleteAll = (req: Request, res: Response) => {
  Set.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Exercises were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all sets.",
      });
    });
};
