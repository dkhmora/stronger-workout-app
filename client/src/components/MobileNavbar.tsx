import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import { mobileNavbarItems } from "../constants/general";

type MobileNavbarProps = {
  className?: string;
};

export default function MobileNavbar({ className }: MobileNavbarProps) {
  const [value, setValue] = React.useState(0);

  return (
    <nav>
      <Paper className="fixed bottom-0 left-0 right-0 z-1000" elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event: any, newValue: number) => {
            setValue(newValue);
          }}
          className={className}
        >
          {mobileNavbarItems.map(({ text, icon, to }, index) => (
            <BottomNavigationAction
              label={text}
              icon={icon}
              {...{ to }}
              component={Link}
              key={text + to}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </nav>
  );
}
