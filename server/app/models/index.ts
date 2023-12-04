const dbConfig = require("../config/db.config.ts");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.exercises = require("./exercise.model.ts")(sequelize, Sequelize);
db.users = require("./user.model.ts")(sequelize, Sequelize);
db.workouts = require("./workout.model.ts")(sequelize, Sequelize);
db.workoutTemplates = require("./workoutTemplate.model.ts")(
  sequelize,
  Sequelize
);

db.users.hasMany(db.exercises, { as: "Exercises" });
db.users.hasMany(db.workouts, { as: "Workouts" });
db.workoutTemplates.hasMany(db.workouts);
db.workouts.belongsTo(db.workoutTemplates);

module.exports = db;
