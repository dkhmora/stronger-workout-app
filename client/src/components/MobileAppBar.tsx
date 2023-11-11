import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { pathnameTitles } from "../constants/general";

export default function MobileAppBar() {
  const location = useLocation();

  const getPathNameTitle = (pathname: string) =>
    pathnameTitles[pathname as keyof typeof pathnameTitles];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {getPathNameTitle(location.pathname)}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
