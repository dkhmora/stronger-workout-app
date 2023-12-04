import * as React from "react";
import { Box, List, Grid } from "@mui/material";
import HistoryListItem from "./HistoryListItem";
import { WorkoutData } from "../interfaces";

interface HistoryListProps {
  workouts: WorkoutData[];
  isMobile: boolean;
}

export default function HistoryList({ workouts, isMobile }: HistoryListProps) {
  const itemsPerRow = isMobile ? 1 : 2;

  const renderRows = () => {
    const rows = [];
    const totalItems = workouts.length;

    for (let i = 0; i < totalItems; i += itemsPerRow) {
      const row = workouts.slice(i, i + itemsPerRow);

      rows.push(
        <Grid container spacing={3} alignItems="stretch">
          {row.map((data: any, index: number) => (
            <Grid
              item
              xs={12 / itemsPerRow}
              md={12 / itemsPerRow}
              sx={{ my: 1 }}
              key={index}
            >
              <HistoryListItem workoutData={data} />
            </Grid>
          ))}
        </Grid>
      );
    }

    return rows;
  };

  return <List sx={{ height: "100%", width: "100%" }}>{renderRows()}</List>;
}
