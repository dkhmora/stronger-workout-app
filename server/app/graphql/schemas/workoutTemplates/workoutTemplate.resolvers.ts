import { DBModels } from "app/models";
import { WorkoutTemplateAttributes } from "app/models/workoutTemplate.model";

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
      context: { models: DBModels }
    ) => {
      try {
        return await context.models.workoutTemplates.create({
          ...workoutTemplate,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  WorkoutTemplate: {
    exercises: async (
      workoutTemplate: WorkoutTemplateAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findAll({
        include: [
          {
            model: models.workoutTemplates,
            where: { id: workoutTemplate.id },
          },
        ],
      });
    },
  },
};

export default workoutTemplateResolvers;
