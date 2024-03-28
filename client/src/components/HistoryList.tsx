import * as React from "react";
import { List, Grid, Typography, Box } from "@mui/material";
import HistoryListItem from "./HistoryListItem";
import { WorkoutData } from "../interfaces";

interface HistoryListProps {
  workouts: WorkoutData[];
  className?: string;
}

export default function HistoryList({ workouts, className }: HistoryListProps) {
  const renderWorkouts = () => {
    return workouts.map((data: WorkoutData, index: number) => (
      <Grid
        item
        zeroMinWidth
        xs={12}
        sm={12}
        md={6}
        lg={4}
        key={`${data.title}-${data.start}-${data.end}-${index}`}
      >
        <HistoryListItem workoutData={data} />
      </Grid>
    ));
  };

  return (
    <Box>
      <List className={className}>
        <Grid container rowSpacing={2} columnSpacing={3} alignItems="stretch">
          {renderWorkouts()}
        </Grid>
      </List>
    </Box>
  );
}
