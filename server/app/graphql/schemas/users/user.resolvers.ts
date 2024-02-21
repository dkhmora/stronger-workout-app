import { DBModels } from "app/models";
import { UserAttributes } from "app/models/user.model";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

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
    registerUser: async (
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
    loginUser: async (
      parent: any,
      { email, password }: { email: string; password: string },
      { models }: { models: DBModels }
    ) => {
      const user = await models.users.findOne({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }

      const token = sign({ id: user.id }, process.env.JWT_SECRET || "", {
        expiresIn: "24h",
      });

      return { user, token };
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
