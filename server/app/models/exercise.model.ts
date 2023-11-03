module.exports = (sequelize, Sequelize) => {
  const Exercise = sequelize.define(
    "exercise",
    {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      userCreated: {
        type: Sequelize.BOOLEAN,
      },
    },
    { underscored: true }
  );

  return Exercise;
};
