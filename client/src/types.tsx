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

export type Route = {
  text: string;
  to: string;
  desktop: boolean;
  mobile: boolean;
  appBarTitle?: string;
};

export type RouteElements = {
  [key: string]: {
    element: JSX.Element;
    icon?: JSX.Element;
  };
};
