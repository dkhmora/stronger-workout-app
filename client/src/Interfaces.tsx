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
}

export type ExerciseSet = {
  numberOfReps: number;
  weight: number;
  weightUnit: "lb" | "kg";
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
