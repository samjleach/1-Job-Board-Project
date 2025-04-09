import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Navbar from "./components/navBar";
import "./styles/App.css";
import JobDetailsPage from "./pages/jobDetailsPage";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/job-details/:id"
          element={<JobDetailsPage />}
        />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
