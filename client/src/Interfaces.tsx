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

export type WeightUnit = "lb" | "kg";

export interface DBExerciseData {
  id: number;
  title: string;
  type: string;
  description: string;
  userCreated: boolean;
  weightUnit: WeightUnit;
}

export type ExerciseSet = {
  numberOfReps: number;
  weight: number;
  personalRecord: boolean;
};

export type WorkoutExercises = {
  exerciseData: DBExerciseData;
  sets: ExerciseSet[];
};

export interface WorkoutData {
  title: string;
  start: number;
  end: number;
  exercises: WorkoutExercises[];
}
