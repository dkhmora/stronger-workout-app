import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HistoryList from "../components/HistoryList";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";
import { data } from "../temp_db/workouts";
import useGetWorkouts from "../hooks/useGetWorkouts";

export default function HistoryPage() {
  const isMobile = useSelector((state: RootState) => state.isMobile);
  const workouts = useSelector((state: RootState) => state.workouts);
  const { data, loading, error } = useGetWorkouts();

  return (
    <Container className="p-4 md:p-12">
      {!isMobile && (
        <Typography noWrap variant="h2" component="h2" className="mb-6">
          Workout History
        </Typography>
      )}

      <Box>
        <HistoryList workouts={workouts} className="py-0" />
      </Box>
    </Container>
  );
}
