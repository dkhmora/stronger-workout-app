import { Sequelize, DataTypes, Model } from "sequelize";

export interface WorkoutTemplateAttributes {
  title: string;
  lastUsedAt?: Date | null; // Optional because it may not be set
}

export interface WorkoutTemplateInstance
  extends Model<WorkoutTemplateAttributes>,
    WorkoutTemplateAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutTemplateInstance>(
    "workout_template",
    {
      title: {
        type: DataTypes.STRING,
      },
      lastUsedAt: {
        type: DataTypes.DATE,
      },
    },
    { underscored: true }
  );
