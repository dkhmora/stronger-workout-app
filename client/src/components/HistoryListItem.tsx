import * as React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Image as ImageIcon } from "@mui/icons-material";
import { WorkoutData, WorkoutExercises } from "../Interfaces";
import { getDuration, getHumanReadableTime, getTotalWeight } from "../helpers";

interface WorkoutListItemProps {
  workoutData: WorkoutData;
}

export default function HistoryListItem(props: WorkoutListItemProps) {
  const { workoutData } = props;

  const getListItemPrimaryText = ({ title, start, end }: any) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
        <Typography
          noWrap
          sx={{ display: "inline" }}
          component="span"
          variant="button"
          color="text.primary"
        >
          <b>{title}</b>
        </Typography>

        <Typography
          noWrap
          sx={{ display: "inline" }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          {getHumanReadableTime(start)}
        </Typography>

        <Box sx={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
          <Typography
            sx={{ display: "inline", mr: 2 }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            <b>{getDuration(start, end)}</b>
          </Typography>

          <Typography
            noWrap
            sx={{ display: "inline", mr: 2 }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {/* TODO: Change to selected user weight in store */}
            <b>{getTotalWeight(workoutData)} lb</b>
          </Typography>

          <Typography
            noWrap
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            <b>{"<number of personal records>"}</b>
          </Typography>
        </Box>
      </Box>
    );
  };

  const openWorkoutDetailsDialog = (row: any) => () => {
    console.log(row);
    /* place open workout dialog here */
  };

  const getWorkoutList = (workouts: WorkoutExercises[]) => {
    return workouts.map(
      ({
        exerciseData: { id, title, type, description, userCreated },
        sets,
      }) => {
        const numberOfSets = sets.length;

        return (
          <Typography
            noWrap
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {numberOfSets} x {title} ({type})
          </Typography>
        );
      }
    );
  };

  const getBestSetList = (workouts: WorkoutExercises[]) => {
    return workouts.map(
      ({
        exerciseData: { id, title, type, description, userCreated, weightUnit },
        sets,
      }) => {
        const bestOneRepMax = 0;
        let bestSet = sets[0];

        sets.forEach((set) => {
          const { numberOfReps, weight } = set;
          const oneRepMax = weight * (1 + 0.0333 * numberOfReps);

          if (oneRepMax > bestOneRepMax) {
            bestSet = set;
          }
        });

        return (
          <Typography
            noWrap
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {bestSet.numberOfReps} x {bestSet.weight} {weightUnit}
          </Typography>
        );
      }
    );
  };

  return (
    <Paper sx={{ borderRadius: 4, height: "100%" }}>
      <ListItemButton
        alignItems="flex-start"
        role={undefined}
        onClick={openWorkoutDetailsDialog(workoutData)}
        dense
        sx={{ borderRadius: 4, height: "100%" }}
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={getListItemPrimaryText(workoutData)}
          secondary={
            <React.Fragment>
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
                    sx={{ display: "inline" }}
                    component="span"
                    variant="button"
                    color="text.primary"
                  >
                    <b>Exercises</b>
                  </Typography>
                  {getWorkoutList(workoutData.exercises)}
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
                    sx={{ display: "inline" }}
                    component="span"
                    variant="button"
                    color="text.primary"
                  >
                    <b>Best Set</b>
                  </Typography>
                  {getBestSetList(workoutData.exercises)}
                </Box>
              </Box>
            </React.Fragment>
          }
        />
      </ListItemButton>
    </Paper>
  );
}
