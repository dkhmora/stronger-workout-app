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
import StartWorkoutPage from "../pages/StartWorkoutPage";
import LoginPage from "../pages/LoginPage";

export const routes = [
  {
    text: "Home",
    icon: createElement(HomeIcon),
    to: "/",
    element: createElement(HomePage),
    desktop: true,
    mobile: false,
  },
  {
    text: "Profile",
    icon: createElement(PersonIcon),
    to: "/profile",
    element: createElement(ProfilePage),
    desktop: true,
    mobile: true,
  },
  {
    text: "History",
    icon: createElement(HistoryIcon),
    to: "/history",
    element: createElement(HistoryPage),
    desktop: true,
    mobile: true,
  },
  {
    text: "Workout",
    appBarTitle: "New Workout",
    icon: createElement(AddIcon),
    to: "/create",
    element: createElement(StartWorkoutPage),
    desktop: false,
    mobile: true,
  },
  {
    text: "Exercises",
    icon: createElement(FitnessCenterIcon),
    to: "/exercises",
    element: createElement(ExercisesPage),
    desktop: true,
    mobile: true,
  },
  {
    text: "Measure",
    icon: createElement(StraightenIcon),
    to: "/measure",
    element: createElement(MeasurePage),
    desktop: true,
    mobile: true,
  },
  {
    text: "Login",
    to: "/login",
    element: createElement(LoginPage),
    desktop: false,
    mobile: false,
  },
];

export const pathnameTitles = {
  "/": "Home",
  "/profile": "Profile",
  "/history": "History",
  "/create": "Start Workout",
  "/exercises": "Exercises",
  "/measure": "Measure",
};

export const defaultWorkout = {
  title: "",
  exercises: [],
  start: new Date(),
  end: null,
  notes: "",
};
