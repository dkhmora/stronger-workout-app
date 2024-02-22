import { Sequelize, DataTypes, Model } from "sequelize";

export interface WorkoutTemplateAttributes {
  id?: number;
  name: string;
  lastUsedAt?: Date | null; // Optional because it may not be set
  userId?: number | null;
}

export interface WorkoutTemplateInstance
  extends Model<WorkoutTemplateAttributes>,
    WorkoutTemplateAttributes {}

export default (sequelize: Sequelize) =>
  sequelize.define<WorkoutTemplateInstance>(
    "workout_template",
    {
      name: {
        type: DataTypes.STRING,
      },
      lastUsedAt: {
        type: DataTypes.DATE,
      },
    },
    { underscored: true }
  );
