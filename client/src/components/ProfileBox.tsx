import React from "react";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";

export default function ProfileBox() {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2, borderRadius: 4 }}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item>
          <Avatar sx={{ width: 70, height: 70 }}>
            <PersonIcon fontSize="large" />
          </Avatar>
        </Grid>

        <Grid item>
          <Typography variant="h4">Daryl Mora</Typography>
          {/*TODO: Change to user name*/}
        </Grid>
      </Grid>
    </Paper>
  );
}
