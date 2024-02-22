import { DBModels } from "app/models";
import { WorkoutExerciseSetsAttributes } from "app/models/workoutExerciseSets.model";

const workoutExerciseSetResolvers = {
  Query: {},
  Mutation: {
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

export default workoutExerciseSetResolvers;
