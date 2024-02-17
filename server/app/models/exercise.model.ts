import { Model } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";

export interface ExerciseAttributes {
  name: string;
  description: string; // Optional because it may not be set
  category: string;
  bodyPart: string;
  userId?: number | null;
}

export interface ExerciseInstance
  extends Model<ExerciseAttributes>,
    ExerciseAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<ExerciseInstance>(
    "exercise",
    {
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      bodyPart: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
