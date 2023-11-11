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
  title: string;
  type: string;
  description: string;
  userCreated: string;
}