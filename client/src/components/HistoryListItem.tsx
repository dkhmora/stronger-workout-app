import * as React from "react";
import {
  Avatar,
  Box,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Image as ImageIcon } from "@mui/icons-material";
import { WorkoutData } from "../Interfaces";

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

  return (
    <Box sx={{ borderWidth: 1, borderRadius: 4, m: 1 }}>
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
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {"<place workouts here>"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
    </Box>
  );
}
