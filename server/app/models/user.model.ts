import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface UserAttributes {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  numberOfWorkouts: number;
  bodyWeight: number;
  height: number;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<UserInstance>(
    "user",
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.STRING,
      },
      numberOfWorkouts: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      bodyWeight: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
    },
    { underscored: true }
  );
