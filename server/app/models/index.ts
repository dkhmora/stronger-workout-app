import exercises, { ExerciseInstance } from "./exercise.model";
import users, { UserInstance } from "./user.model";
import workoutTemplates, {
  WorkoutTemplateInstance,
} from "./workoutTemplate.model";
import workouts, { WorkoutInstance } from "./workout.model";
import { ModelStatic, Sequelize } from "sequelize";
import dbConfig from "../config/db.config";

interface DBModels {
  sequelize: Sequelize;
  Sequelize: Sequelize;
  exercises: ModelStatic<ExerciseInstance>;
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
  users: users(sequelize),
  workouts: workouts(sequelize),
  workoutTemplates: workoutTemplates(sequelize),
};

dbModels.users.hasMany(dbModels.exercises, { as: "Exercises" });
dbModels.users.hasMany(dbModels.workouts, { as: "Workouts" });
dbModels.workoutTemplates.hasMany(dbModels.workouts);
dbModels.workouts.belongsTo(dbModels.workoutTemplates);

export default dbModels;
