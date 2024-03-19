import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { BottomNavigation, Box, CssBaseline, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MobileAppBar from "./components/MobileAppBar";
import { SET_IS_MOBILE, SET_CURRENT_ROUTES } from "./store/general";
import useWindowDimension from "./hooks/useWindowDimension";
import {
  defaultRoute,
  loginRoutes,
  routeElements,
  routes,
} from "./constants/general";
import FabZoom from "./components/FabZoom";
import RunningWorkoutBottomSheet from "./components/RunningWorkoutBottomSheet";
import { Route as RouteType } from "./types";
import useSyncUserCredentials from "./hooks/useSyncUserCredentials";

function App() {
  const { isMobile } = useWindowDimension();
  const { data, loading, error } = useSyncUserCredentials();
  const userToken = useSelector((state: any) => state.userToken);
  const currentRoutes = useSelector((state: any) => state.currentRoutes);
  const allRoutes = [defaultRoute, ...currentRoutes];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_IS_MOBILE(isMobile));
  }, [dispatch, isMobile]);

  useEffect(() => {
    // Check if user is logged in (for example, check if user credentials exist in cookies)
    const isLoggedIn = !!userToken; // Adjust this condition based on your authentication logic

    // Dispatch action to set current routes based on user login status
    if (isLoggedIn) {
      dispatch(SET_CURRENT_ROUTES(routes));
    } else {
      dispatch(SET_CURRENT_ROUTES(loginRoutes));
    }
  }, [dispatch, userToken]);

  return (
    <Box className="flex">
      <CssBaseline />
      <BrowserRouter>
        {userToken && (
          <>
            {isMobile ? (
              <>
                <MobileAppBar />
                <MobileNavbar className="navbar" />
              </>
            ) : (
              <Navbar />
            )}
          </>
        )}

        <Box component="main" className="flex-grow bg-blue" id="main">
          {isMobile ? <Toolbar /> : null} {/* To push content down */}
          <Routes>
            {allRoutes.map((route: RouteType) => (
              <Route
                path={route.to}
                element={
                  routeElements[route.to as keyof typeof routeElements].element
                }
                key={`${route.text}${route.to}`}
              />
            ))}
          </Routes>
          {userToken && (
            <>
              <RunningWorkoutBottomSheet />
              {isMobile ? (
                <BottomNavigation className="navbar" />
              ) : (
                <FabZoom
                  icon={<AddIcon />}
                  color="primary"
                  className="fixed bottom-8 right-8 z-50 bg-blue-500 hover:bg-blue-700"
                  label="Add"
                  transitionDuration={500}
                  to="/create"
                  hideOnLocations={["/create", "/login", "/register"]}
                />
              )}
              {/* To push content up */}
            </>
          )}
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
