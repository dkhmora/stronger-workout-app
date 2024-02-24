import { Model } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";

export interface ExerciseAttributes {
  id?: number;
  name: string;
  description: string;
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
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { underscored: true }
  );
