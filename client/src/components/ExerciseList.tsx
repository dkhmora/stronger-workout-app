import * as React from "react";
import { List } from "@mui/material";
import ExerciseListItem from "./ExerciseListItem";
import { ExerciseData } from "../interfaces";

interface ExerciseListProps {
  exercises: ExerciseData[];
}

export default function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <List className="py-0">
      {exercises.map((exercise: ExerciseData, index) => (
        <ExerciseListItem
          exerciseData={exercise}
          key={`${index}${exercise.title}`}
        />
      ))}
    </List>
  );
}
