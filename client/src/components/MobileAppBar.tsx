import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { pathnameTitles } from "../constants/general";

export default function MobileAppBar() {
  const location = useLocation();

  const getPathNameTitle = (pathname: string) =>
    pathnameTitles[pathname as keyof typeof pathnameTitles];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography noWrap variant="h6" component="div">
            {getPathNameTitle(location.pathname)}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
