import { Button, Typography } from "@mui/material";
import React from "react";

export default function QuickStartSection({className}: {className?: string}) {
  return (
    <div className={className}>
      <Typography component="h6" variant="h6" className="font-bold mb-6">
        Quick Start
      </Typography>

      <Button
        variant="contained"
        className="bg-blue-500 px-8 rounded-xl w-full md:w-96 normal-case font-bold"
      >
        Start an Empty Workout
      </Button>
    </div>
  );
}
