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
import RegistrationPage from "../pages/RegisterPage";
import { Route, RouteElements } from "../types";

export const defaultRoute: Route = {
  text: "Home",
  to: "/",
  desktop: true,
  mobile: false,
};

export const routes: Route[] = [
  {
    text: "Profile",
    to: "/profile",
    desktop: true,
    mobile: true,
  },
  {
    text: "History",
    to: "/history",
    desktop: true,
    mobile: true,
  },
  {
    text: "Workout",
    appBarTitle: "New Workout",
    to: "/create",
    desktop: false,
    mobile: true,
  },
  {
    text: "Exercises",
    to: "/exercises",
    desktop: true,
    mobile: true,
  },
  {
    text: "Measure",
    to: "/measure",
    desktop: true,
    mobile: true,
  },
];

export const loginRoutes: Route[] = [
  {
    text: "Login",
    to: "/login",
    desktop: false,
    mobile: false,
  },
  {
    text: "Register",
    to: "/register",
    desktop: false,
    mobile: false,
  },
];

export const routeElements: RouteElements = {
  "/": {
    icon: createElement(HomeIcon),
    element: createElement(HomePage),
  },
  "/login": {
    element: createElement(LoginPage),
  },
  "/register": { element: createElement(RegistrationPage) },
  "/profile": {
    icon: createElement(PersonIcon),
    element: createElement(ProfilePage),
  },
  "/history": {
    icon: createElement(HistoryIcon),
    element: createElement(HistoryPage),
  },
  "/create": {
    icon: createElement(AddIcon),
    element: createElement(StartWorkoutPage),
  },
  "/exercises": {
    icon: createElement(FitnessCenterIcon),
    element: createElement(ExercisesPage),
  },
  "/measure": {
    icon: createElement(StraightenIcon),
    element: createElement(MeasurePage),
  },
};

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
