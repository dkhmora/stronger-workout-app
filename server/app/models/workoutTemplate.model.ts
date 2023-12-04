module.exports = (sequelize, Sequelize) => {
  const WorkoutTemplate = sequelize.define(
    "workout_template",
    {
      title: {
        type: Sequelize.STRING,
      },
      lastUsedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  return WorkoutTemplate;
};
