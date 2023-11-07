import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HistoryIcon from "@mui/icons-material/History";
import StraightenIcon from "@mui/icons-material/Straighten";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";

export default function MobileNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event: any, newValue: number) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />
        <BottomNavigationAction label="Workout" icon={<AddIcon />} />
        <BottomNavigationAction
          label="Exercises"
          icon={<FitnessCenterIcon />}
        />
        <BottomNavigationAction label="Measure" icon={<StraightenIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
