const Exercise = require("./exercise.model");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      firstName: {
        type: Sequelize.STRING,
      },
      middleName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  return User;
};
