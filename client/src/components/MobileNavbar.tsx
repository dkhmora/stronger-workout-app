import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import { mobileNavbarItems } from "../constants/general";

export default function MobileNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event: any, newValue: number) => {
          setValue(newValue);
        }}
      >
        {mobileNavbarItems.map(({ text, icon, to }, index) => (
          <BottomNavigationAction
            label={text}
            icon={icon}
            {...{ to }}
            component={Link}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
