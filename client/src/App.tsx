import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import MeasurePage from "./pages/MeasurePage";
import ExercisesPage from "./pages/ExercisesPage";
import HistoryPage from "./pages/HistoryPage";
import { Box, CssBaseline } from "@mui/material";
import MobileAppBar from "./components/MobileAppBar";
import { SET_IS_MOBILE } from "./store/general";
import useWindowDimension from "./hooks/useWindowDimension";

function App() {
  const { isMobile } = useWindowDimension();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_IS_MOBILE(isMobile));
  }, [dispatch, isMobile]);

  const mainPadding = {
    py: isMobile ? 5 : 0,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <BrowserRouter>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Box sx={{ flexGrow: 1, overflow: "auto", ...mainPadding }}>
          {isMobile && <MobileAppBar />}
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/measure" element={<MeasurePage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
