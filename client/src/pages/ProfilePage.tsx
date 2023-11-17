import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import HistoryList from "../components/HistoryList";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";
import { data } from "../temp_db/workouts";
import ProfileBox from "../components/ProfileBox";
import ProfileDashboard from "../components/ProfileDashboard";

export default function ProfilePage() {
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
          <Grid item sx={{ mt: 3, mb: 6 }}>
            <Typography noWrap variant="h2" component="div">
              Profile
            </Typography>
          </Grid>
        )}

        <Grid item sx={{ mb: 3 }}>
          <ProfileBox />
        </Grid>

        <Grid item>
          <ProfileDashboard />
        </Grid>
      </Grid>
    </Container>
  );
}
