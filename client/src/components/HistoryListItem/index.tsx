import * as React from "react";
import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemButton,
  Paper,
} from "@mui/material";
import { Image as ImageIcon } from "@mui/icons-material";
import { WorkoutData } from "../../interfaces";
import HistoryExerciseList from "./ExercisesList";
import HistoryListItemHeader from "./WorkoutSummary";

interface WorkoutListItemProps {
  workoutData: WorkoutData;
}

export default function HistoryListItem({ workoutData }: WorkoutListItemProps) {
  const openWorkoutDetailsDialog = (row: any) => () => {
    console.log(row);
    /* place open workout dialog here */
  };

  return (
    <Paper className="rounded-3xl h-full">
      <ListItemButton
        alignItems="flex-start"
        role={undefined}
        onClick={openWorkoutDetailsDialog(workoutData)}
        dense
        className="flex-1 h-full justify-center rounded-3xl"
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>

        <Box className="flex-1 flex-col">
          <HistoryListItemHeader workoutData={workoutData} />
          <HistoryExerciseList workoutData={workoutData} />
        </Box>
      </ListItemButton>
    </Paper>
  );
}
