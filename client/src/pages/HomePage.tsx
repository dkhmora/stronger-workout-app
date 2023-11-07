import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React from "react";

export default function HomePage() {
  return (
    <Container>
      <Grid xs={6} md={8} spacing={2}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ typography: { sm: "h2", xs: "h3" } }}
        >
          Welcome to Stronger
        </Typography>
      </Grid>
      <Grid xs={6} md={8}>
        <Typography
          variant="h4"
          component="h4"
          sx={{ typography: { sm: "h4", xs: "h5" } }}
        >
          Stronger is a workout web app that aims to mimic the features of the
          famed Strong Mobile App, but in a web-based format. Feel free to use
          the different features. Enjoy your workout!
        </Typography>
      </Grid>
    </Container>
  );
}
