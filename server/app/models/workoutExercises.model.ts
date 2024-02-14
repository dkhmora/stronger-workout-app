import { DataTypes, Model } from "sequelize";
import { Sequelize } from "sequelize";

export interface WorkoutExercisesAttributes {
  id: number;
}

export interface WorkoutExercisesInstance
  extends Model<WorkoutExercisesAttributes>,
    WorkoutExercisesAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutExercisesInstance>(
    "workout_exercise",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { underscored: true }
  );
