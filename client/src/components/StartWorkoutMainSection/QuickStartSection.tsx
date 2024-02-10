import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { defaultWorkout } from "../../constants/general";
import { SET_CURRENT_WORKOUT } from "../../store/general";

export default function QuickStartSection({
  className,
}: {
  className?: string;
}) {
  const dispatch = useDispatch();

  const startNewWorkout = () => {
    dispatch(SET_CURRENT_WORKOUT(defaultWorkout));
  };

  return (
    <div className={className}>
      <Typography component="h6" variant="h6" className="font-bold mb-6">
        Quick Start
      </Typography>

      <Button
        variant="contained"
        className="bg-blue-500 px-8 rounded-xl w-full md:w-96 normal-case font-bold"
        onClick={startNewWorkout}
      >
        Start an Empty Workout
      </Button>
    </div>
  );
}
