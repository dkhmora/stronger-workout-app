module.exports = (sequelize, Sequelize) => {
  const Workout = sequelize.define(
    "workout",
    {
      title: {
        type: Sequelize.STRING,
      },
      start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      totalWeight: {
        type: Sequelize.INTEGER,
      },
      numberOfPersonalRecords: {
        type: Sequelize.INTEGER,
      },
    },
    { underscored: true }
  );

  return Workout;
};
