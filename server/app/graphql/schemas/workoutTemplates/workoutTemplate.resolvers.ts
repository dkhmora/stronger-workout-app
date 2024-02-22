import { DBModels } from "app/models";
import { UserInstance } from "app/models/user.model";
import { WorkoutTemplateAttributes } from "app/models/workoutTemplate.model";
import sequelize from "sequelize";

const workoutTemplateResolvers = {
  Query: {
    workoutTemplates: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workoutTemplates.findAll();
    },
    workoutTemplate: async (
      parent: any,
      { id }: { id: number },
      { models }: { models: DBModels }
    ) => {
      return await models.workoutTemplates.findByPk(id);
    },
  },
  Mutation: {
    createWorkoutTemplate: async (
      parent: any,
      workoutTemplate: WorkoutTemplateAttributes,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) {
        throw new Error("User not found");
      }

      return await models.workoutTemplates.create({
        ...workoutTemplate,
        userId: user.id,
      });
    },
  },
  WorkoutTemplate: {
    exercises: async (
      workoutTemplate: WorkoutTemplateAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      return await models.exercises.findAll({
        include: [
          {
            model: models.workoutTemplates,
            where: { id: workoutTemplate.id },
          },
        ],
        where: {
          [sequelize.Op.or]: [{ userId: user.id }, { userId: null }],
        },
      });
    },
    user: async (
      workoutTemplate: WorkoutTemplateAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!workoutTemplate.userId) throw new Error("User not found");
      if (!user || user.id !== workoutTemplate.userId)
        throw new Error("Not authorized");

      return await models.users.findByPk(workoutTemplate.userId);
    },
  },
};

export default workoutTemplateResolvers;
