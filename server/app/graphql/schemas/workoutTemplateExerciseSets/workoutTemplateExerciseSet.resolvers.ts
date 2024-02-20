import { DBModels } from "app/models";
import { WorkoutTemplateExerciseSetsAttributes } from "app/models/workoutTemplateExerciseSets.model";

const workoutTemplateExerciseSetResolvers = {
  Query: {
    workoutTemplateExerciseSets: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workoutTemplateExerciseSets.findAll();
    },
    workoutTemplateExerciseSet: async (
      parent: any,
      { id }: { id: number },
      { models }: { models: DBModels }
    ) => {
      return await models.workoutTemplateExerciseSets.findByPk(id);
    },
  },
  Mutation: {
    createWorkoutTemplateExerciseSet: async (
      parent: any,
      workoutTemplateExerciseSet: WorkoutTemplateExerciseSetsAttributes,
      context: { models: DBModels }
    ) => {
      try {
        console.log(workoutTemplateExerciseSet);
        return await context.models.workoutTemplateExerciseSets.create({
          ...workoutTemplateExerciseSet,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  WorkoutTemplateExerciseSet: {
    exercise: async (
      workoutTemplateExerciseSet: WorkoutTemplateExerciseSetsAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findAll({
        include: [
          {
            model: models.workoutTemplateExercises,
            where: { id: workoutTemplateExerciseSet.workoutTemplateExerciseId },
          },
        ],
      });
    },
  },
};

export default workoutTemplateExerciseSetResolvers;
