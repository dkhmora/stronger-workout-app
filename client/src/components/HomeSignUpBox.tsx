import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import RoundedButton from "../components/RoundedButton";

export default function HomeSignUpBox() {
  return (
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
  );
}
