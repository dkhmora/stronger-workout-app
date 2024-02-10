import * as React from "react";
import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Image as ImageIcon } from "@mui/icons-material";
import { ExerciseData } from "../interfaces";

interface ExerciseListProps {
  exerciseData: ExerciseData;
}

export default function ExerciseListItem({ exerciseData }: ExerciseListProps) {
  const getListItemPrimaryText = ({ title, type }: ExerciseData) => (
    <Typography
      component="span"
      variant="body2"
      className="font-bold"
    >{`${title} (${type})`}</Typography>
  );

  const openExerciseDetailsDialog = (row: ExerciseData) => () => {
    console.log(row);
    /* place open exercise dialog here */
  };

  return (
    <ListItemButton
      alignItems="flex-start"
      role={undefined}
      onClick={openExerciseDetailsDialog(exerciseData)}
      dense
      className="p-0"
    >
      <Box className="flex flex-1 flex-row items-center mx-4 py-1 border-b border-neutral-700">
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={getListItemPrimaryText(exerciseData)}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="text.primary">
                {"<place exercise type here>"}
              </Typography>
            </React.Fragment>
          }
        />
      </Box>
    </ListItemButton>
  );
}
