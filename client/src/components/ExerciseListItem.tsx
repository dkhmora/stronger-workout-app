import * as React from "react";
import {
  Avatar,
  Divider,
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

export default function ExerciseListItem(props: ExerciseListProps) {
  const { exerciseData } = props;

  const getListItemPrimaryText = ({ title, type }: ExerciseData) =>
    `${title} (${type})`;

  const openExerciseDetailsDialog = (row: ExerciseData) => () => {
    console.log(row);
    /* place open exercise dialog here */
  };

  return (
    <>
      <ListItemButton
        alignItems="flex-start"
        role={undefined}
        onClick={openExerciseDetailsDialog(exerciseData)}
        dense
      >
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={getListItemPrimaryText(exerciseData)}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {"<place exercise type here>"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
}
