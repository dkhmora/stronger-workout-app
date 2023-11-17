import React from "react";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import {
  Person as PersonIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";

export default function ProfileBox() {
  return (
    <Paper
      sx={{
        width: "50vh",
        padding: 2,
        marginBottom: 2,
        borderRadius: 4,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={0}
      >
        <Grid
          item
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Avatar sx={{ width: 60, height: 60 }}>
            <PersonIcon fontSize="large" />
          </Avatar>

          <Box sx={{ px: 2 }}>
            <Typography variant="h5">Daryl Mora</Typography>
            {/*TODO: Change to user name*/}
            <Typography variant="subtitle1" color="text.secondary">
              <b>444 workouts</b>
            </Typography>
            {/*TODO: Change to user number of workouts*/}
          </Box>
        </Grid>

        <Grid item>
          <ArrowForwardIosIcon />
        </Grid>
      </Grid>
    </Paper>
  );
}
