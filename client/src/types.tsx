import { DBExerciseData } from "./interfaces";

export type WeightUnit = "lb" | "kg";
export type ExerciseSet = {
  numberOfReps: number;
  weight: number;
  personalRecord: boolean;
};
export type WorkoutExercises = {
  exerciseData: DBExerciseData;
  sets: ExerciseSet[];
};
