import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { BottomNavigation, Box, CssBaseline, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MobileAppBar from "./components/MobileAppBar";
import { SET_IS_MOBILE } from "./store/general";
import useWindowDimension from "./hooks/useWindowDimension";
import {
  defaultRoute,
  loginRoutes,
  routeElements,
  mainRoutes,
} from "./constants/general";
import FabZoom from "./components/FabZoom";
import RunningWorkoutBottomSheet from "./components/RunningWorkoutBottomSheet";
import { Route as RouteType } from "./types";
import useSyncUserCredentials from "./hooks/useSyncUserCredentials";

function App() {
  const { isMobile } = useWindowDimension();
  const { data, loading, error } = useSyncUserCredentials();
  const userToken = useSelector((state: any) => state.userToken);
  const allRoutes = userToken
    ? [defaultRoute, ...mainRoutes]
    : [defaultRoute, ...loginRoutes];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_IS_MOBILE(isMobile));
  }, [dispatch, isMobile]);

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

        <Box component="main" className="flex-grow" id="main">
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

            <Route path="*" element={<Navigate to="/" />} />
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
