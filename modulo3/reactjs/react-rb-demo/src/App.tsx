import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RBFooter from "./components/rb/RBFooter";
import HomeRB from "./pages/HomeRB";
import AboutRB from "./pages/AboutRB";
import RBNavbar from "./components/rb/RBNavbar";

export default function App() {
  return (
    <BrowserRouter>
      <RBNavbar />

      <Routes>
        <Route path="/" element={<HomeRB />} />
        <Route path="/about" element={<AboutRB />} />
      </Routes>

      <RBFooter />
    </BrowserRouter>
  );
}