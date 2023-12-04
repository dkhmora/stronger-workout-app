import * as React from "react";
import { Box, List } from "@mui/material";
import ExerciseListItem from "./ExerciseListItem";
import { ExerciseData } from "../interfaces";

interface ExerciseListProps {
  exercises: ExerciseData[];
}

export default function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "auto" }}>
      <List sx={{ width: "100%" }}>
        {exercises.map((exercise: ExerciseData, index) => {
          return (
            <>
              <ExerciseListItem
                exerciseData={exercise}
                key={`${index}${exercise.title}`}
              />
            </>
          );
        })}
      </List>
    </Box>
  );
}
