import { DBModels } from "app/models";
import { UserAttributes } from "app/models/user.model";

const userResolvers = {
  Query: {
    users: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.users.findAll();
    },
    user: async (
      parent: any,
      { id }: { id: number },
      { models }: { models: DBModels }
    ) => {
      return await models.users.findByPk(id);
    },
  },
  Mutation: {
    createUser: async (
      parent: any,
      user: UserAttributes,
      context: { models: DBModels }
    ) => {
      try {
        return await context.models.users.create({
          ...user,
          numberOfWorkouts: 0,
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

export default userResolvers;
