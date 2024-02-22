import { DBModels } from "app/models";
import { ExerciseAttributes } from "app/models/exercise.model";
import { UserInstance } from "app/models/user.model";
import { WorkoutTemplateAttributes } from "app/models/workoutTemplate.model";
import { WorkoutTemplateExercisesAttributes } from "app/models/workoutTemplateExercises.model";
import sequelize from "sequelize";

const workoutTemplateResolvers = {
  Query: {
    defaultWorkoutTemplates: async (
      parent: any,
      args: null,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

      return await models.workoutTemplates.findAll({ where: { userId: null } });
    },
  },
  Mutation: {
    createWorkoutTemplate: async (
      parent: any,
      workoutTemplate: WorkoutTemplateAttributes,
      { user, models }: { user: UserInstance; models: DBModels }
    ) => {
      if (!user) throw new Error("User not found");

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
      if (!user) throw new Error("User not found");

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
  WorkoutTemplateExercise: {
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
      workoutTemplateExercise: WorkoutTemplateExercisesAttributes,
      args: null,
      { models }: { models: DBModels }
    ) => {
      return await models.workoutTemplateExerciseSets.findAll({
        where: { workoutTemplateExerciseId: workoutTemplateExercise.id },
      });
    },
  },
};

export default workoutTemplateResolvers;
