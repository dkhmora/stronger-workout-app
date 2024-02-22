import { DBModels } from "app/models";
import { ExerciseAttributes } from "app/models/exercise.model";
import { UserInstance } from "app/models/user.model";
import { WorkoutAttributes } from "app/models/workout.model";
import { WorkoutExerciseSetsAttributes } from "app/models/workoutExerciseSets.model";
import { WorkoutExercisesAttributes } from "app/models/workoutExercises.model";
import sequelize from "sequelize";

const workoutResolvers = {
  Query: {},
  Mutation: {
    createWorkout: async (
      parent: any,
      workout: WorkoutAttributes,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      return await models.workouts.create({
        ...workout,
        userId: user.id,
      });
    },
    createWorkoutExerciseSet: async (
      parent: any,
      workoutExerciseSet: WorkoutExerciseSetsAttributes,
      context: { models: DBModels }
    ) => {
      try {
        return await context.models.workoutExerciseSets.create({
          ...workoutExerciseSet,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  Workout: {
    exercises: async (
      workout: WorkoutAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      return await models.exercises.findAll({
        include: [
          {
            model: models.workouts,
            where: { id: workout.id },
          },
        ],
        where: {
          [sequelize.Op.or]: [{ userId: user.id }, { userId: null }],
        },
      });
    },
    user: async (
      workout: WorkoutAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!workout.userId) throw new Error("User not found");
      if (!user || user.id !== workout.userId)
        throw new Error("Not authorized");

      return await models.users.findByPk(workout.userId);
    },
  },
  WorkoutExercise: {
    exercise: async (
      exercise: ExerciseAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");
      if (exercise.userId && user.id !== exercise.userId)
        throw new Error("Not authorized");
      return await models.exercises.findByPk(exercise.id);
    },
    sets: async (
      workoutExercise: WorkoutExercisesAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workoutExerciseSets.findAll({
        where: { workoutExerciseId: workoutExercise.id },
      });
    },
  },
  WorkoutExerciseSet: {
    exercise: async (
      workoutExerciseSet: WorkoutExerciseSetsAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.exercises.findAll({
        include: [
          {
            model: models.workoutExercises,
            where: { id: workoutExerciseSet.workoutExerciseId },
          },
        ],
      });
    },
  },
};

export default workoutResolvers;
