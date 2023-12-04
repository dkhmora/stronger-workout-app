module.exports = (sequelize, Sequelize) => {
  const WorkoutTemplate = sequelize.define(
    "workout_template",
    {
      title: {
        type: Sequelize.STRING,
      },
      lastUsedAt: {
        type: Sequelize.DATE,
      },
    },
    { underscored: true }
  );

  return WorkoutTemplate;
};
