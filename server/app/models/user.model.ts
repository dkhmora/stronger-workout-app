import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface UserAttributes {
  firstName: string;
  middleName: string; // Optional because it may not be set
  lastName: string;
  birthDate: Date;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<UserInstance>(
    "user",
    {
      firstName: {
        type: DataTypes.STRING,
      },
      middleName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { underscored: true }
  );
