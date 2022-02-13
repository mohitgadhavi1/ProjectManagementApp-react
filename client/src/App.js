import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui/Header/Header";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Team from "./pages/Team";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 h-screen dark:bg-gray-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="auth" element={<Auth />} />

          <Route path="team" element={<Team />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
