import { Sequelize, DataTypes, Model } from "sequelize";

export interface WorkoutAttributes {
  name: string;
  start: Date; // Optional because it may not be set
  duration: Date;
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
    },
    { underscored: true }
  );
