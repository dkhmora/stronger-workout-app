import * as React from "react";
import { Box, List } from "@mui/material";
import ExerciseListItem from "./ExerciseListItem";
import { ExerciseData, ExerciseColumn } from "../Interfaces";
import HistoryListItem from "./HistoryListItem";

export default function HistoryList(props: any) {
  const { workouts } = props;

  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "auto" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {workouts.map((data: any, index: number) => {
          return (
            <>
              <HistoryListItem workoutData={data} />
            </>
          );
        })}
      </List>
    </Box>
  );
}
