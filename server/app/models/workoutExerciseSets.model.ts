import { Model } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";

export interface SetAttributes {
  setNumber: string;
  weight: number;
  reps: number;
}

export interface WorkoutExerciseSetsInstance
  extends Model<SetAttributes>,
    SetAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutExerciseSetsInstance>(
    "workoutExerciseSet",
    {
      setNumber: {
        type: DataTypes.STRING,
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
