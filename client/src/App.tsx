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

function App() {
  const [windowDimension, setWindowDimension] = useState<number | null>(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension && windowDimension <= 640;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_IS_MOBILE", payload: isMobile });
  }, [dispatch, isMobile]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      <BrowserRouter>
        {isMobile ? <MobileNavbar /> : <Navbar />}

        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
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
