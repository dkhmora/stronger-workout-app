import exercises, { ExerciseInstance } from "./exercise.model";
import users, { UserInstance } from "./user.model";
import workoutTemplates, {
  WorkoutTemplateInstance,
} from "./workoutTemplate.model";
import workouts, { WorkoutInstance } from "./workout.model";
import sets, { SetInstance } from "./sets.model";
import { ModelStatic, Sequelize } from "sequelize";
import dbConfig from "../config/db.config";

interface DBModels {
  sequelize: Sequelize;
  Sequelize: Sequelize;
  exercises: ModelStatic<ExerciseInstance>;
  sets: ModelStatic<SetInstance>;
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
  exercises: exercises(sequelize),
  sets: sets(sequelize),
  users: users(sequelize),
  workouts: workouts(sequelize),
  workoutTemplates: workoutTemplates(sequelize),
};

dbModels.users.hasMany(dbModels.exercises, { as: "User_Exercises" });
dbModels.users.hasMany(dbModels.workouts, { as: "User_Workouts" });
dbModels.users.hasMany(dbModels.workoutTemplates, {
  as: "User_Workout_Templates",
});
dbModels.workoutTemplates.belongsToMany(dbModels.exercises, {
  through: "workout_template_exercises",
});
dbModels.exercises.belongsToMany(dbModels.workoutTemplates, {
  through: "workout_template_exercises",
});
dbModels.workouts.hasOne(dbModels.workoutTemplates);
dbModels.workouts.belongsToMany(dbModels.exercises, {
  through: "workout_exercises",
});
dbModels.exercises.belongsToMany(dbModels.workouts, {
  through: "workout_exercises",
});

export default dbModels;
