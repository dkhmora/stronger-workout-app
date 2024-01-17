import React from "react";
import { WorkoutExercises } from "../../types";
import { Typography } from "@mui/material";

interface TemplateListItemBodyProps {
  exercises: WorkoutExercises[];
}

export default function TemplateListItemBody({
  exercises,
}: TemplateListItemBodyProps) {
  const exercisesListText = exercises
    .map(({ exerciseData: { title }, sets }, index) => title)
    .join(", ");

  return (
    <Typography component="text" variant="caption" className="text-gray-400">
      {exercisesListText}
    </Typography>
  );
}
