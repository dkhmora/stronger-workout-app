import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  Box,
  Divider,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

interface ExerciseData {
  title: string;
  type: string;
  description: string;
  userCreated: string;
}

interface ExerciseListProps {
  exerciseData: ExerciseData;
}

export default function ExerciseListButton(props: ExerciseListProps) {
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
