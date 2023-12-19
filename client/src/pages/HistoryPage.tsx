import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import HistoryList from "../components/HistoryList";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";
import { data } from "../temp_db/workouts";

export default function HistoryPage() {
  const isMobile = useSelector((state: RootState) => state.isMobile);
  const containerPadding = isMobile ? 2 : 3;

  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          p: containerPadding,
        }}
      >
        {!isMobile && (
          <Grid item sx={{ my: 3 }}>
            <Typography noWrap variant="h2" component="div">
              Workout History
            </Typography>
          </Grid>
        )}

        <Grid item>
          <HistoryList workouts={data} />
        </Grid>
      </Grid>
    </Container>
  );
}
