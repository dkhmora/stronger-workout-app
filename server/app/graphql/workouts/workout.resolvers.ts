import { DBModels } from "app/models";
import { ExerciseAttributes } from "app/models/exercise.model";
import { UserInstance } from "app/models/user.model";
import { WorkoutAttributes } from "app/models/workout.model";
import { WorkoutExerciseSetsAttributes } from "app/models/workoutExerciseSets.model";
import { WorkoutExercisesAttributes } from "app/models/workoutExercises.model";
import moment from "moment";
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
        start: new Date(),
        userId: user.id,
        totalWeight: 0,
        duration: 0,
      });
    },
    endWorkout: async (
      parent: any,
      { id }: { id: number },
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      const workout = await models.workouts.findByPk(id);

      if (!workout) throw new Error("Workout not found");
      if (!workout.userId || workout.userId !== user.id)
        throw new Error("Not authorized");

      const duration = moment
        .duration(moment().diff(workout.start))
        .asSeconds();

      await models.workouts.update(
        { duration },
        {
          where: { id: workout.id, userId: user.id },
        }
      );

      workout.duration = duration; // Update the duration in the object

      return workout;
    },
    createWorkoutExerciseSet: async (
      parent: any,
      workoutExerciseSet: WorkoutExerciseSetsAttributes,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      const workoutExercise = await models.workoutExercises.findByPk(
        workoutExerciseSet.workoutExerciseId
      );

      if (!workoutExercise) throw new Error("Workout exercise not found");
      if (!workoutExercise.userId || workoutExercise.userId !== user.id)
        throw new Error("Not authorized");

      return await models.workoutExerciseSets.create({
        ...workoutExerciseSet,
        userId: user.id,
      });
    },
  },
  Workout: {
    exercises: async (
      workout: WorkoutAttributes,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

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
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      return await models.workoutExerciseSets.findAll({
        where: { workoutExerciseId: workoutExercise.id },
      });
    },
  },
};

export default workoutResolvers;
