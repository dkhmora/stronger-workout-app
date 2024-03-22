import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";
import ProfileBox from "../components/ProfileBox";
import ProfileDashboard from "../components/ProfileDashboard";

export default function ProfilePage() {
  const isMobile = useSelector((state: RootState) => state.isMobile);
  const { name, numberOfWorkouts } = useSelector(
    (state: RootState) => state.userDetails
  );

  return (
    <Container className="p-4 md:p-12">
      {!isMobile ? (
        <Typography noWrap variant="h2" component="h2" className="mb-6">
          Profile
        </Typography>
      ) : null}

      <Box>
        {name && numberOfWorkouts && (
          <ProfileBox userName={name} numberOfWorkouts={numberOfWorkouts} />
        )}

        <ProfileDashboard className="mt-6 md:mt-12" />
      </Box>
    </Container>
  );
}
