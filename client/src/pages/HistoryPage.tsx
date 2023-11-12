import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import HistoryList from "../components/HistoryList";
import { WorkoutData, WorkoutExercises } from "../Interfaces";

export default function HistoryPage() {
  function createData(
    title: string,
    start: number,
    end: number,
    exercises: WorkoutExercises[]
  ): WorkoutData {
    return {
      title,
      start,
      end,
      exercises,
    };
  }

  const data = [
    createData("Leg Day", 1699747093, 1699749913, [
      {
        exerciseData: {
          id: 1,
          title: "Squat",
          type: "Barbell",
          description: "Squat Description",
          userCreated: false,
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 100,
            weightUnit: "lb",
          },
        ],
      },
    ]),
    createData("Push Day", 1699747093, 1699749913, [
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            weightUnit: "kg",
          },
        ],
      },
    ]),
  ];

  return (
    <Grid
      container
      sx={{ display: "flex", flexDirection: "column", flex: 1, p: 2 }}
    >
      <Grid item>
        <Typography noWrap variant="h3" component="div" sx={{ mb: 2 }}>
          Workout History
        </Typography>
      </Grid>

      <Grid item>
        <Paper sx={{ height: "100vh", borderWidth: 1, borderRadius: 5, p: 1 }}>
          <HistoryList toolbarTitle="Workout History" workouts={data} />
        </Paper>
      </Grid>
    </Grid>
  );
}
