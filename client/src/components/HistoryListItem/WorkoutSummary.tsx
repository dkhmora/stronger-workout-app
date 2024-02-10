import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { WorkoutData } from "../../interfaces";
import {
  WatchLater as WatchLaterIcon,
  Speed as SpeedIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";
import { getHumanReadableTime, getWorkoutSummary } from "../../helpers";

export default function WorkoutSummary({
  workoutData,
}: {
  workoutData: WorkoutData;
}) {
  const { title, start } = workoutData;
  const { duration, totalWeight, totalPersonalRecords } =
    getWorkoutSummary(workoutData);

  return (
    <Box className="flex-1 flex-col">
      <Typography
        noWrap
        className="font-bold"
        component="div"
        variant="body2"
        color="text.primary"
      >
        {title}
      </Typography>

      <Typography
        noWrap
        className="py-1"
        component="div"
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
          <WatchLaterIcon fontSize="small" />
          <Typography
            className="font-bold mx-1"
            component="div"
            variant="body2"
            color="text.secondary"
          >
            {duration}
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
          <SpeedIcon fontSize="small" />
          <Typography
            noWrap
            className="font-bold mx-1"
            component="div"
            variant="body2"
            color="text.secondary"
          >
            {totalWeight} lb
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
          <EmojiEventsIcon fontSize="small" />
          <Typography
            noWrap
            className="font-bold mx-1"
            component="div"
            variant="body2"
            color="text.secondary"
          >
            {totalPersonalRecords} PRs
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
