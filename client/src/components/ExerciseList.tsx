import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Avatar,
  Box,
  Divider,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

interface ExerciseListProps {
  toolbarTitle: string | null;
  columns: any[];
  rows: any[];
}

interface ExerciseData {
  title: string;
  type: string;
}

export default function ExerciseList(props: ExerciseListProps) {
  const { toolbarTitle, columns, rows } = props;

  const getListItemPrimaryText = ({ title, type }: ExerciseData) =>
    `${title} (${type})`;

  return (
    <Box sx={{ height: "100%", width: "100%", overflow: "auto" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {rows.map((row, index) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={getListItemPrimaryText(row)}
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
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </Box>
  );
}
