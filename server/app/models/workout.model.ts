import { Sequelize, DataTypes, Model } from "sequelize";

export interface WorkoutAttributes {
  title: string;
  start: Date; // Optional because it may not be set
  end: Date;
  totalWeight: number;
  numberOfPersonalRecords: number;
}

export interface WorkoutInstance
  extends Model<WorkoutAttributes>,
    WorkoutAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutInstance>(
    "workout",
    {
      title: {
        type: DataTypes.STRING,
      },
      start: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end: {
        type: DataTypes.DATE,
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
