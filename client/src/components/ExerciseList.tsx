import * as React from "react";
import { Box, List } from "@mui/material";
import ExerciseListButton from "./ExerciseListItem";
import { ExerciseData, ExerciseColumn } from "../Interfaces";

interface ExerciseListProps {
  toolbarTitle: string | null;
  columns: ExerciseColumn[];
  rows: ExerciseData[];
}

export default function ExerciseList(props: ExerciseListProps) {
  const { toolbarTitle, columns, rows } = props;

  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "auto" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {rows.map((row: ExerciseData, index) => {
          return (
            <>
              <ExerciseListButton exerciseData={row} />
            </>
          );
        })}
      </List>
    </Box>
  );
}
