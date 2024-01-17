import { WeightUnit, WorkoutExercises } from "./types";

export interface ExerciseData {
  title: string;
  type: string;
  description: string;
  userCreated: string;
}

export interface ExerciseColumn {
  id: "title" | "description" | "type" | "userCreated";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface DBExerciseData {
  id: number;
  title: string;
  type: string;
  description: string;
  userCreated: boolean;
  weightUnit: WeightUnit;
}

export interface WorkoutData {
  title: string;
  start: number;
  end: number;
  exercises: WorkoutExercises[];
}

export interface TemplateData {
  title: string;
  exercises: WorkoutExercises[];
}