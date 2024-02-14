import { Model } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";

export interface SetAttributes {
  setNumber: string;
  weight: number;
  reps: number;
}

export interface WorkoutTemplateExerciseSetsInstance
  extends Model<SetAttributes>,
    SetAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutTemplateExerciseSetsInstance>(
    "workoutTemplateExerciseSet",
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
