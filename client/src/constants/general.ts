import React, { createElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HistoryIcon from "@mui/icons-material/History";
import StraightenIcon from "@mui/icons-material/Straighten";
import AddIcon from "@mui/icons-material/Add";

export const desktopNavbarItems = [
  { text: "Home", icon: createElement(HomeIcon), to: "/" },
  { text: "Profile", icon: createElement(PersonIcon), to: "/profile" },
  { text: "History", icon: createElement(HistoryIcon), to: "/history" },
  {
    text: "Exercises",
    icon: createElement(FitnessCenterIcon),
    to: "/exercises",
  },
  { text: "Measure", icon: createElement(StraightenIcon), to: "/measure" },
];

export const mobileNavbarItems = [
  ...desktopNavbarItems.slice(1, 3),
  { text: "Workout", icon: createElement(AddIcon), to: "/create" },
  ...desktopNavbarItems.slice(3),
];
