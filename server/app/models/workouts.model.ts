import { Sequelize, DataTypes, Model } from "sequelize";

export interface WorkoutAttributes {
  id?: number;
  name: string;
  start: Date; // Optional because it may not be set
  duration: string; // seconds
  totalWeight: number;
  numberOfPersonalRecords: number;
  userId?: number;
}

export interface WorkoutInstance
  extends Model<WorkoutAttributes>,
    WorkoutAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutInstance>(
    "workout",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      start: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      totalWeight: {
        type: DataTypes.INTEGER,
      },
      numberOfPersonalRecords: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { underscored: true }
  );
