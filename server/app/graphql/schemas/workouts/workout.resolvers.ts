import { DBModels } from "app/models";
import { WorkoutAttributes } from "app/models/workout.model";

const workoutResolvers = {
  Query: {
    workouts: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workouts.findAll();
    },
    workout: async (
      parent: any,
      { id }: { id: number },
      { models }: { models: DBModels }
    ) => {
      return await models.workouts.findByPk(id);
    },
  },
  Mutation: {
    createWorkout: async (
      parent: any,
      workout: WorkoutAttributes,
      context: { models: DBModels }
    ) => {
      try {
        return await context.models.workouts.create({
          ...workout,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  Workout: {
    exercises: async (
      workout: WorkoutAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findAll({
        include: [
          {
            model: models.workouts,
            where: { id: workout.id },
          },
        ],
      });
    },
  },
};

export default workoutResolvers;
