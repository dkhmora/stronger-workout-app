import { ExerciseData } from "../Interfaces";

function createData(
  title: string,
  type: string,
  description: string,
  userCreated: boolean
): ExerciseData {
  return {
    title,
    type,
    description,
    userCreated: userCreated ? "Yes" : "No",
  };
}

export const data = [
  createData(
    "Bench Press",
    "Barbell",
    "Bench Press(Barbell) Description",
    false
  ),
  createData(
    "Bench Press",
    "Dumbell",
    "Bench Press(Dumbell) Description",
    false
  ),
];
