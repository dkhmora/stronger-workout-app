import { DBModels } from "app/models";
import { UserAttributes, UserInstance } from "app/models/users.model";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

const userResolvers = {
  Query: {
    currentUser: async (
      parent: any,
      { id }: { id: string },
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user || user.id !== Number(id)) throw new Error("User not found");

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
    updateUser: async (
      parent: any,
      user: UserAttributes,
      { user: currentUser, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!currentUser || currentUser.id !== user.id) {
        throw new Error("User not found");
      }

      return await models.users.update(user, {
        where: { id: currentUser.id },
      });
    },
  },
  User: {
    numberOfWorkouts: async (
      parent: any,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      return await models.workouts.count({
        where: { userId: user.id },
      });
    },
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
