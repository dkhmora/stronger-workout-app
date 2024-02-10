import { Container, Typography } from "@mui/material";
import React from "react";
import StartWorkoutMainSection from "../components/StartWorkoutMainSection";
import { RootState } from "../store/general";
import { useSelector } from "react-redux";

export default function StartWorkoutPage() {
  const isMobile = useSelector((state: RootState) => state.isMobile);

  return (
    <Container className="p-0 px-4 md:p-12">
      {!isMobile ? (
        <Typography noWrap variant="h2" component="h2">
          Start Workout
        </Typography>
      ) : null}

      <StartWorkoutMainSection />
    </Container>
  );
}
