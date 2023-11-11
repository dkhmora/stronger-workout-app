import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface MobileAppBarProps {
  title: string;
}

export default function MobileAppBar(props: MobileAppBarProps) {
  const { title } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
