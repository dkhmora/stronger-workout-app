import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { BottomNavigation, Box, CssBaseline, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MobileAppBar from "./components/MobileAppBar";
import { SET_IS_MOBILE } from "./store/general";
import useWindowDimension from "./hooks/useWindowDimension";
import { routes } from "./constants/general";
import FabZoom from "./components/FabZoom";

function App() {
  const { isMobile } = useWindowDimension();
  const dispatch = useDispatch();

  // console.log(currentPath);

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
            <MobileNavbar className="navbar" />
          </>
        ) : (
          <Navbar />
        )}

        <Box component="main" className="flex-grow">
          {isMobile ? <Toolbar /> : null} {/* To push content down */}
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.to}
                element={route.element}
                key={`${route.text}${route.to}`}
              />
            ))}
          </Routes>
          {isMobile ? <BottomNavigation className="navbar" /> : null}
          {/* To push content up */}
          {!isMobile && window.location.pathname !== "/create" ? (
            <FabZoom
              icon={<AddIcon />}
              color="primary"
              className="fixed bottom-8 right-8 z-50 bg-blue-500 hover:bg-blue-700"
              label="Add"
              transitionDuration={500}
              to="/create"
            />
          ) : null}
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
