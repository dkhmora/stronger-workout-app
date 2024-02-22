import { DBModels } from "app/models";
import { UserInstance } from "app/models/user.model";
import { WorkoutAttributes } from "app/models/workout.model";
import sequelize from "sequelize";

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
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) {
        throw new Error("User not found");
      }

      return await models.workouts.create({
        ...workout,
        userId: user.id,
      });
    },
  },
  Workout: {
    exercises: async (
      workout: WorkoutAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      return await models.exercises.findAll({
        include: [
          {
            model: models.workouts,
            where: { id: workout.id },
          },
        ],
        where: {
          [sequelize.Op.or]: [{ userId: user.id }, { userId: null }],
        },
      });
    },
    user: async (
      workout: WorkoutAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.users.findByPk(workout.userId);
    },
  },
};

export default workoutResolvers;
