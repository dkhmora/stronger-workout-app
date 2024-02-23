import { Model } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";

export interface WorkoutExerciseSetsAttributes {
  id: number;
  workoutExerciseId: number;
  userId: number;
  setNumber: number;
  weight: number;
  reps: number;
}

export interface WorkoutExerciseSetsInstance
  extends Model<WorkoutExerciseSetsAttributes>,
    WorkoutExerciseSetsAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutExerciseSetsInstance>(
    "workoutExerciseSet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      workoutExerciseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      setNumber: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
      reps: {
        type: DataTypes.INTEGER,
      },
    },
    { underscored: true }
  );
