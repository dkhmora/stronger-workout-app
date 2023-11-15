import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import HistoryList from "../components/HistoryList";
import { WorkoutData, WorkoutExercises } from "../Interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";

export default function HistoryPage() {
  const isMobile = useSelector((state: RootState) => state.isMobile);

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
          weightUnit: "lb",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 100,
            personalRecord: true,
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
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
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
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
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
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
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
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
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
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
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
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
      {
        exerciseData: {
          id: 1,
          title: "Bench Press",
          type: "Barbell",
          description: "Bench Press(Barbell) Description",
          userCreated: false,
          weightUnit: "kg",
        },
        sets: [
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
          {
            numberOfReps: 6,
            weight: 85,
            personalRecord: false,
          },
        ],
      },
    ]),
  ];

  const containerPadding = isMobile ? 2 : 3;

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        p: containerPadding,
      }}
    >
      {!isMobile && (
        <Grid item sx={{ mb: 3 }}>
          <Typography noWrap variant="h3" component="div">
            Workout History
          </Typography>
        </Grid>
      )}

      <Grid item>
        <HistoryList
          isMobile={isMobile}
          toolbarTitle="Workout History"
          workouts={data}
        />
      </Grid>
    </Grid>
  );
}
