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
      category: {
        type: Sequelize.STRING,
      },
      bodyPart: {
        type: Sequelize.STRING,
      },
    },
    { underscored: true }
  );

  return Exercise;
};
