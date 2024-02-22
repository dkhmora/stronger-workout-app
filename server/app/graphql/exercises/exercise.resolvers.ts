import { DBModels } from "app/models";
import { ExerciseAttributes } from "app/models/exercise.model";
import { UserInstance } from "app/models/user.model";
import { WorkoutExercisesAttributes } from "app/models/workoutExercises.model";
import { WorkoutTemplateExercisesAttributes } from "app/models/workoutTemplateExercises.model";

const exerciseResolvers = {
  Query: {
    defaultExercises: async (
      parent: any,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) {
        throw new Error("User not found");
      }

      return await models.exercises.findAll({
        where: { userId: null },
      });
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
