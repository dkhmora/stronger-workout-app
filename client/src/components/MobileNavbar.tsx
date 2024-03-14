import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import { routeElements, routes } from "../constants/general";

type MobileNavbarProps = {
  className?: string;
};

export default function MobileNavbar({ className }: MobileNavbarProps) {
  const currentNavIndex = routes.findIndex(
    (item) => item.to === window.location.pathname
  );
  const [value, setValue] = React.useState(
    currentNavIndex === -1 ? 0 : currentNavIndex
  );

  return (
    <nav>
      <Paper className="fixed bottom-0 left-0 right-0 z-50" elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event: any, newValue: number) => {
            setValue(newValue);
          }}
          className={className}
        >
          {routes.map(({ text, to, mobile }, index) =>
            mobile ? (
              <BottomNavigationAction
                label={text}
                icon={routeElements[to as keyof typeof routeElements]?.icon}
                {...{ to }}
                component={Link}
                key={text + to}
              />
            ) : null
          )}
        </BottomNavigation>
      </Paper>
    </nav>
  );
}
