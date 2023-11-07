import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import MeasurePage from "./pages/MeasurePage";
import ExercisesPage from "./pages/ExercisesPage";
import HistoryPage from "./pages/HistoryPage";

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

  return (
    <div className="App">
      <BrowserRouter>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/measure" element={<MeasurePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
