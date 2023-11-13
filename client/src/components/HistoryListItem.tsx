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

interface WorkoutListItemProps {
  workoutData: WorkoutData;
}

export default function HistoryListItem(props: WorkoutListItemProps) {
  const { workoutData } = props;

  const getListItemPrimaryText = ({ title, start, end }: any) =>
    `${title} (${start} - ${end})`;

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

  return (
    <Box sx={{ borderWidth: 1, borderRadius: 4, my: 1 }}>
      <ListItemButton
        alignItems="flex-start"
        role={undefined}
        onClick={openWorkoutDetailsDialog(workoutData)}
        dense
        sx={{ borderRadius: 4 }}
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
                <Box sx={{ display: "flex", flexDirection: "column" }}>
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

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    noWrap
                    sx={{ display: "inline" }}
                    component="span"
                    variant="overline"
                    color="text.primary"
                  >
                    <b>Best Set</b>
                  </Typography>
                  {getWorkoutList(workoutData.exercises)}
                </Box>
              </Box>
            </React.Fragment>
          }
        />
      </ListItemButton>
    </Box>
  );
}
