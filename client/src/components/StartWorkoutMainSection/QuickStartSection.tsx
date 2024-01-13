import { Button, Typography } from "@mui/material";
import React from "react";

export default function QuickStartSection() {
  return (
    <>
      <Typography component="h5" variant="h5">
        Quick Start
      </Typography>

      <Button
        variant="contained"
        className="bg-blue-500 my-6 px-8 rounded-xl w-full md:w-96"
      >
        Start an Empty Workout
      </Button>
    </>
  );
}
