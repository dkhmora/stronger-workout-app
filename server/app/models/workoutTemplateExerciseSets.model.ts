import { Model } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";

export interface WorkoutTemplateExerciseSetsAttributes {
  id: number;
  workoutTemplateExerciseId?: number;
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
      setNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
