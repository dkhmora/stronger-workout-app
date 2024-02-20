import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize";

export interface WorkoutTemplateExercisesAttributes {
  id?: number;
  workoutTemplateId: number;
  exerciseId: number;
}

export interface WorkoutTemplateExercisesInstance
  extends Model<WorkoutTemplateExercisesAttributes>,
    WorkoutTemplateExercisesAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutTemplateExercisesInstance>(
    "workout_template_exercise",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      workoutTemplateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      exerciseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { underscored: true }
  );
