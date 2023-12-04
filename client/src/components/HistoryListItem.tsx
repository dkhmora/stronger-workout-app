import * as React from "react";
import {
  Avatar,
  Box,
  Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  Image as ImageIcon,
  WatchLater as WatchLaterIcon,
  Speed as SpeedIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";
import { WorkoutData } from "../interfaces";
import { getHumanReadableTime, getWorkoutSummary } from "../helpers";
import { WorkoutExercises } from "../types";

interface WorkoutListItemProps {
  workoutData: WorkoutData;
}

export default function HistoryListItem({ workoutData }: WorkoutListItemProps) {
  const { duration, totalWeight, totalPersonalRecords } =
    getWorkoutSummary(workoutData);

  const getListItemPrimaryText = ({ title, start, end }: any) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          noWrap
          sx={{ display: "inline" }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          <b>{title}</b>
        </Typography>

        <Typography
          noWrap
          sx={{ display: "inline", py: 0.2 }}
          component="span"
          variant="body2"
          color="text.secondary"
        >
          {getHumanReadableTime(start)}
        </Typography>

        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <WatchLaterIcon fontSize="small" sx={{ mr: 0.3 }} />
            <Typography
              sx={{ display: "inline", verticalAlign: "middle" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              <b>{duration}</b>
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <SpeedIcon fontSize="small" sx={{ mr: 0.3 }} />
            <Typography
              noWrap
              sx={{ display: "inline", verticalAlign: "middle" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              <b>{totalWeight} lb</b>
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <EmojiEventsIcon fontSize="small" sx={{ mr: 0.3 }} />
            <Typography
              noWrap
              sx={{ display: "inline", verticalAlign: "middle" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              <b>{totalPersonalRecords} PRs</b>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const openWorkoutDetailsDialog = (row: any) => () => {
    console.log(row);
    /* place open workout dialog here */
  };

  const getExercisesList = (workouts: WorkoutExercises[]) => {
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
            color="text.secondary"
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
            color="text.secondary"
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
        sx={{
          borderRadius: 4,
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
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
