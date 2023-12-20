import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { Box, CssBaseline } from "@mui/material";
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

  const mainPadding = {
    my: isMobile ? 5 : 0,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <BrowserRouter>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Box sx={{ flexGrow: 1, overflow: "auto", ...mainPadding }}>
          {isMobile && <MobileAppBar />}
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.to}
                element={route.element}
                key={`${route.text}${route.to}`}
              />
            ))}
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
