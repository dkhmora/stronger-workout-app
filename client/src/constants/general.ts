import { createElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HistoryIcon from "@mui/icons-material/History";
import StraightenIcon from "@mui/icons-material/Straighten";
import AddIcon from "@mui/icons-material/Add";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import HistoryPage from "../pages/HistoryPage";
import ExercisesPage from "../pages/ExercisesPage";
import MeasurePage from "../pages/MeasurePage";

export const routes = [
  {
    text: "Home",
    icon: createElement(HomeIcon),
    to: "/",
    element: createElement(HomePage),
  },
  {
    text: "Profile",
    icon: createElement(PersonIcon),
    to: "/profile",
    element: createElement(ProfilePage),
  },
  {
    text: "History",
    icon: createElement(HistoryIcon),
    to: "/history",
    element: createElement(HistoryPage),
  },
  {
    text: "Exercises",
    icon: createElement(FitnessCenterIcon),
    to: "/exercises",
    element: createElement(ExercisesPage),
  },
  {
    text: "Measure",
    icon: createElement(StraightenIcon),
    to: "/measure",
    element: createElement(MeasurePage),
  },
];

export const mobileNavbarItems = [
  ...routes.slice(1, 3),
  { text: "Workout", icon: createElement(AddIcon), to: "/create" },
  ...routes.slice(3),
];

export const pathnameTitles = {
  "/": "Home",
  "/profile": "Profile",
  "/history": "History",
  "/create": "New Workout",
  "/exercises": "Exercises",
  "/measure": "Measure",
};
