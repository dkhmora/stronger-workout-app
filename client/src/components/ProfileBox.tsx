import React from "react";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import {
  Person as PersonIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";

type ProfileBoxProps = { className?: string };

export default function ProfileBox({ className }: ProfileBoxProps) {
  return (
    <Button
      component={Paper}
      className={
        "md:transition md:delay-150 md:hover:-translate-y-1 md:duration-300 w-full md:w-7/12 lg:w-5/12 rounded-3xl " +
        className
      }
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        className="px-6 py-4"
      >
        <Grid item xs={3} md={3}>
          <Avatar className="w-14 h-14" data-testid="user-avatar">
            <PersonIcon fontSize="large" />
          </Avatar>
        </Grid>

        <Grid item xs={7} md={7}>
          <Box>
            <Typography
              variant="h6"
              color="text.primary"
              data-testid="user-name"
            >
              <b>Daryl Mora</b>
            </Typography>
            {/*TODO: Change to user name*/}
            <Typography variant="subtitle2" color="text.secondary">
              <b>444 workouts</b>
            </Typography>
            {/*TODO: Change to user number of workouts*/}
          </Box>
        </Grid>

        <Grid item xs={2} md={2}>
          <ArrowForwardIosIcon />
        </Grid>
      </Grid>
    </Button>
  );
}
