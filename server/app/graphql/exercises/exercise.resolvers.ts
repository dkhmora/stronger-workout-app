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
      if (!user) throw new Error("User not found");

      return await models.exercises.findAll({
        where: { userId: null },
      });
    },
  },
  Mutation: {
    createExercise: async (
      parent: any,
      exercise: ExerciseAttributes,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      return await models.exercises.create({
        ...exercise,
        userId: user.id,
      });
    },
    linkExerciseToWorkout: async (
      parent: any,
      { workoutId, exerciseId }: WorkoutExercisesAttributes,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      const workout = await models.workouts.findByPk(workoutId);
      const exercise = await models.exercises.findByPk(exerciseId);

      if (!workout || !exercise) {
        throw new Error("Workout or exercise not found");
      }

      if (
        workout.userId !== user.id ||
        (exercise.userId && exercise.userId !== user.id)
      ) {
        throw new Error("Not authorized");
      }

      return await models.workoutExercises.create({
        workoutId,
        exerciseId,
      });
    },
    linkExerciseToWorkoutTemplate: async (
      parent: any,
      { workoutTemplateId, exerciseId }: WorkoutTemplateExercisesAttributes,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      const workoutTemplate = await models.workoutTemplates.findByPk(
        workoutTemplateId
      );
      const exercise = await models.exercises.findByPk(exerciseId);

      if (!workoutTemplate || !exercise) {
        throw new Error("Workout or exercise not found");
      }

      if (
        workoutTemplate.userId !== user.id ||
        (exercise.userId && exercise.userId !== user.id)
      ) {
        throw new Error("Not authorized");
      }

      return await models.workoutTemplateExercises.create({
        workoutTemplateId,
        exerciseId,
      });
    },
  },
  Exercise: {
    user: async (
      exercise: ExerciseAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");
      if (!exercise.userId) return null;
      if (exercise.userId !== user.id) throw new Error("Not authorized");

      return await models.users.findByPk(exercise.userId);
    },
  },
};

export default exerciseResolvers;
