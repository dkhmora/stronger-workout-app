import { Model } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";

export interface WorkoutTemplateExerciseSetsAttributes {
  id: number;
  workoutTemplateExerciseId: number;
  userId: number;
  setNumber: number;
  weight: number;
  reps: number;
}

export interface WorkoutTemplateExerciseSetsInstance
  extends Model<WorkoutTemplateExerciseSetsAttributes>,
    WorkoutTemplateExerciseSetsAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutTemplateExerciseSetsInstance>(
    "workoutTemplateExerciseSet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      workoutTemplateExerciseId: {
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
