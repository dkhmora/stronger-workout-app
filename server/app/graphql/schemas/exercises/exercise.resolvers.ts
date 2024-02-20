import { DBModels } from "app/models";
import { ExerciseAttributes } from "app/models/exercise.model";
import { WorkoutExercisesAttributes } from "app/models/workoutExercises.model";
import { WorkoutTemplateExercisesAttributes } from "app/models/workoutTemplateExercises.model";

const exerciseResolvers = {
  Query: {
    defaultExercises: async (
      parent: any,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findAll({
        where: { userId: null },
      });
    },
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
    linkExerciseToWorkout: async (
      parent: any,
      { workoutId, exerciseId }: WorkoutExercisesAttributes,
      { models }: { models: DBModels }
    ) => {
      try {
        return await models.workoutExercises.create({
          workoutId,
          exerciseId,
        });
      } catch (error) {
        console.error(error);
      }
    },
    linkExerciseToWorkoutTemplate: async (
      parent: any,
      { workoutTemplateId, exerciseId }: WorkoutTemplateExercisesAttributes,
      { models }: { models: DBModels }
    ) => {
      try {
        return await models.workoutTemplateExercises.create({
          workoutTemplateId,
          exerciseId,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  Exercise: {
    workoutSets: async (
      exercise: ExerciseAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workoutExerciseSets.findAll({
        where: { workoutExerciseId: exercise.id },
      });
    },
    workoutTemplateSets: async (
      exercise: ExerciseAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workoutTemplateExerciseSets.findAll({
        where: { workoutTemplateExerciseId: exercise.id },
      });
    },
    user: async (
      exercise: ExerciseAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      if (!exercise.userId) return null;

      return await models.users.findByPk(exercise.userId);
    },
  },
};

export default exerciseResolvers;
