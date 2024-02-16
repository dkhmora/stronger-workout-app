import { DBModels } from "app/models";
import { ExerciseAttributes } from "app/models/exercise.model";

const exerciseResolvers = {
  Query: {
    exercises: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findAll();
    },
    exercise: async (
      parent: any,
      { id }: { id: number },
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findByPk(id);
    },
  },
  Mutation: {
    createExercise: async (
      parent: any,
      exercise: ExerciseAttributes,
      context: { models: DBModels }
    ) => {
      try {
        return await context.models.exercises.create({
          ...exercise,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  User: {
    exercises: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findAll({
        where: { userId: parent.id },
      });
    },
    workouts: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workouts.findAll({
        where: { userId: parent.id },
      });
    },
    workoutTemplates: async (
      parent: { id: string },
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workoutTemplates.findAll({
        where: { userId: parent.id },
      });
    },
  },
};

export default exerciseResolvers;
