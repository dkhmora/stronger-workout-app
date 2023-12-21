import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { BottomNavigation, Box, CssBaseline, Toolbar } from "@mui/material";
import MobileAppBar from "./components/MobileAppBar";
import { SET_IS_MOBILE } from "./store/general";
import useWindowDimension from "./hooks/useWindowDimension";
import { routes } from "./constants/general";

function App() {
  const { isMobile } = useWindowDimension();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_IS_MOBILE(isMobile));
  }, [dispatch, isMobile]);

  return (
    <Box className="flex">
      <CssBaseline />
      <BrowserRouter>
        {isMobile ? (
          <>
            <MobileAppBar />
            <MobileNavbar />
          </>
        ) : (
          <Navbar />
        )}

        <Box component="main" className="flex-grow">
          {isMobile ? <Toolbar /> : null}
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.to}
                element={route.element}
                key={`${route.text}${route.to}`}
              />
            ))}
          </Routes>
          {isMobile ? <BottomNavigation /> : null}
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
