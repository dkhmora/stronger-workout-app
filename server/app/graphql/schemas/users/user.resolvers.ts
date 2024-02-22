import { DBModels } from "app/models";
import { UserAttributes, UserInstance } from "app/models/user.model";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

const userResolvers = {
  Query: {
    currentUser: async (
      parent: any,
      { id }: { id: number },
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user || user.id !== id) throw new Error("User not found");

      return await models.users.findByPk(user.id);
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
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) {
        throw new Error("User not found");
      }

      return await models.exercises.findAll({
        where: { userId: user.id },
      });
    },
    workouts: async (
      parent: any,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) {
        throw new Error("User not found");
      }

      return await models.workouts.findAll({
        where: { userId: user.id },
      });
    },
    workoutTemplates: async (
      parent: { id: string },
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) {
        throw new Error("User not found");
      }

      return await models.workoutTemplates.findAll({
        where: { userId: user.id },
      });
    },
  },
};

export default userResolvers;
