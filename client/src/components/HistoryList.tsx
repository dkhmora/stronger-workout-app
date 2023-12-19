import * as React from "react";
import { List, Grid } from "@mui/material";
import HistoryListItem from "./HistoryListItem";
import { WorkoutData } from "../interfaces";

interface HistoryListProps {
  workouts: WorkoutData[];
}

export default function HistoryList({ workouts }: HistoryListProps) {
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
    <List sx={{ height: "100%", width: "100%" }}>
      <Grid container rowSpacing={3} columnSpacing={3} alignItems="stretch">
        {renderWorkouts()}
      </Grid>
    </List>
  );
}
