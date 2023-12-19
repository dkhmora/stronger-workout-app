import React from "react";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/general";
import ProfileBox from "../components/ProfileBox";
import ProfileDashboard from "../components/ProfileDashboard";

export default function ProfilePage() {
  const isMobile = useSelector((state: RootState) => state.isMobile);

  return (
    <Container className="py-4 md:p-12">
      {!isMobile ? (
        <Typography noWrap variant="h2" component="h2">
          Profile
        </Typography>
      ) : null}

      <ProfileBox className="my-6" />

      <ProfileDashboard className="my-6" />
    </Container>
  );
}
