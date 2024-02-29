import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import RoundedButton from "../components/RoundedButton";

export default function HomePage() {
  return (
    <Container>
      <Box className="flex flex-col align-center justify-center items-center h-auto space-y-12 py-6 md:h-screen">
        <Box className="flex flex-col space-y-12 items-center text-center md:items-start md:text-left">
          <Typography
            variant="h2"
            component="h2"
            sx={{ typography: { sm: "h2", xs: "h3" } }}
          >
            Welcome to Stronger
          </Typography>

          <Typography
            variant="h4"
            component="h4"
            sx={{ typography: { sm: "h4", xs: "h5" } }}
          >
            Stronger is a workout web app that aims to mimic the features of the
            famed Strong Mobile App, but in a web-based format. Feel free to use
            the different features. Enjoy your workout!
          </Typography>
        </Box>

        <Paper className="flex flex-col space-y-4 mt-6 items-center p-6 rounded-3xl max-w-[500px] self-center">
          <Typography
            variant="h5"
            component="h5"
            sx={{ typography: { sm: "h5", xs: "h6" } }}
            textAlign={"center"}
          >
            Please login or register to use the app
          </Typography>

          <Box className="flex flex-row space-x-4 mt-6">
            <RoundedButton
              type="button"
              fullWidth
              variant="contained"
              href="/login"
            >
              Login
            </RoundedButton>

            <RoundedButton
              type="button"
              fullWidth
              variant="outlined"
              href="/register"
            >
              Register
            </RoundedButton>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
