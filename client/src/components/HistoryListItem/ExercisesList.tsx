import * as React from "react";
import { Box, Typography } from "@mui/material";
import { WorkoutData } from "../../interfaces";
import { WorkoutExercises } from "../../types";
import { ExerciseSet } from "../../types";

export default function ExerciseList({
  workoutData,
}: {
  workoutData: WorkoutData;
}) {
  const getBestSetList = (workouts: WorkoutExercises[]) =>
    workouts.map(
      (
        {
          exerciseData: {
            id,
            title,
            type,
            description,
            userCreated,
            weightUnit,
          },
          sets,
        },
        index
      ) => {
        const bestOneRepMax = 0;
        let bestSet = sets[0];

        sets.forEach((set: ExerciseSet) => {
          const { numberOfReps, weight } = set;
          const oneRepMax = weight * (1 + 0.0333 * numberOfReps);

          if (oneRepMax > bestOneRepMax) {
            bestSet = set;
          }
        });

        return (
          <Typography
            noWrap
            component="div"
            variant="body2"
            color="text.secondary"
            key={`${title}${index}`}
          >
            {bestSet.numberOfReps} x {bestSet.weight} {weightUnit}
          </Typography>
        );
      }
    );

  const getExercisesList = (workouts: WorkoutExercises[]) => {
    return workouts.map(
      (
        { exerciseData: { id, title, type, description, userCreated }, sets },
        index
      ) => {
        const numberOfSets = sets.length;

        return (
          <Typography
            noWrap
            component="div"
            variant="body2"
            color="text.secondary"
            key={`${title}${index}`}
          >
            {numberOfSets} x {title} ({type})
          </Typography>
        );
      }
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography
          noWrap
          className="font-bold"
          component="div"
          variant="button"
          color="text.primary"
        >
          Exercises
        </Typography>
        {getExercisesList(workoutData.exercises)}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography
          noWrap
          className="font-bold"
          component="div"
          variant="button"
          color="text.primary"
        >
          Best Set
        </Typography>
        {getBestSetList(workoutData.exercises)}
      </Box>
    </Box>
  );
}
