import exercisesModel, { ExerciseInstance } from "./exercise.model";
import usersModel, { UserInstance } from "./user.model";
import workoutTemplatesModel, {
  WorkoutTemplateInstance,
} from "./workoutTemplate.model";
import workoutsModel, { WorkoutInstance } from "./workout.model";
import workoutExercisesModel, {
  WorkoutExercisesInstance,
} from "./workoutExercises.model";
import workoutTemplateExercisesModel, {
  WorkoutTemplateExercisesInstance,
} from "./workoutTemplateExercises.model";
import workoutExerciseSetsModel, {
  WorkoutExerciseSetsInstance,
} from "./workoutExerciseSets.model";
import workoutTemplateExerciseSetsModel, {
  WorkoutTemplateExerciseSetsInstance,
} from "./workoutTemplateExerciseSets.model";
import { ModelStatic, Sequelize } from "sequelize";
import dbConfig from "../config/db.config";

export interface DBModels {
  sequelize: Sequelize;
  Sequelize: Sequelize;
  exercises: ModelStatic<ExerciseInstance>;
  workoutExercises: ModelStatic<WorkoutExercisesInstance>;
  workoutTemplateExercises: ModelStatic<WorkoutTemplateExercisesInstance>;
  workoutTemplateExerciseSets: ModelStatic<WorkoutTemplateExerciseSetsInstance>;
  workoutExerciseSets: ModelStatic<WorkoutExerciseSetsInstance>;
  users: ModelStatic<UserInstance>;
  workouts: ModelStatic<WorkoutInstance>;
  workoutTemplates: ModelStatic<WorkoutTemplateInstance>;
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const dbModels = <DBModels>{
  sequelize,
  exercises: exercisesModel(sequelize),
  workoutExercises: workoutExercisesModel(sequelize),
  workoutTemplateExercises: workoutTemplateExercisesModel(sequelize),
  workoutTemplateExerciseSets: workoutTemplateExerciseSetsModel(sequelize),
  workoutExerciseSets: workoutExerciseSetsModel(sequelize),
  users: usersModel(sequelize),
  workouts: workoutsModel(sequelize),
  workoutTemplates: workoutTemplatesModel(sequelize),
};

dbModels.users.hasMany(dbModels.exercises, {
  as: "User_Exercises",
});
dbModels.users.hasMany(dbModels.workouts, {
  as: "User_Workouts",
});
dbModels.users.hasMany(dbModels.workoutTemplates, {
  as: "User_Workout_Templates",
});
dbModels.workoutTemplates.belongsToMany(dbModels.exercises, {
  through: dbModels.workoutTemplateExercises,
});
dbModels.exercises.belongsToMany(dbModels.workoutTemplates, {
  through: dbModels.workoutTemplateExercises,
});
dbModels.workouts.hasOne(dbModels.workoutTemplates);
dbModels.workouts.belongsToMany(dbModels.exercises, {
  through: dbModels.workoutExercises,
});
dbModels.exercises.belongsToMany(dbModels.workouts, {
  through: dbModels.workoutExercises,
});
dbModels.workoutExercises.hasMany(dbModels.workoutExerciseSets, {
  as: "Workout_Exercise_Sets",
});
dbModels.workoutTemplateExercises.hasMany(
  dbModels.workoutTemplateExerciseSets,
  {
    as: "Workout_Template_Exercise_Sets",
  }
);
// Automatically increment set number when creating a new set
dbModels.workoutTemplateExerciseSets.beforeCreate(
  async (workoutTemplateExerciseSet: WorkoutTemplateExerciseSetsInstance) => {
    const lastSet = await dbModels.workoutTemplateExerciseSets.findOne({
      where: {
        workoutTemplateExerciseId:
          workoutTemplateExerciseSet.workoutTemplateExerciseId,
      },
      order: [["setNumber", "DESC"]],
    });

    workoutTemplateExerciseSet.setNumber = lastSet ? lastSet.setNumber + 1 : 1;
  }
);
dbModels.workoutExerciseSets.beforeCreate(
  async (workoutExerciseSet: WorkoutExerciseSetsInstance) => {
    const lastSet = await dbModels.workoutExerciseSets.findOne({
      where: {
        workoutExerciseId: workoutExerciseSet.workoutExerciseId,
      },
      order: [["setNumber", "DESC"]],
    });

    workoutExerciseSet.setNumber = lastSet ? lastSet.setNumber + 1 : 1;
  }
);

export default dbModels;
