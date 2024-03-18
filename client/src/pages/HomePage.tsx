import React from "react";
import { Container, Typography, Box } from "@mui/material";
import HomeSignUpBox from "../components/HomeSignUpBox";
import { useSelector } from "react-redux";

export default function HomePage() {
  const userCredentials = useSelector((state: any) => state.userCredentials);

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

        {userCredentials ? null : <HomeSignUpBox />}
      </Box>
    </Container>
  );
}
