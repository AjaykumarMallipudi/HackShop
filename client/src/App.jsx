import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comp/Home";
import Login from "./comp/Login";
import Register from "./comp/Register"; // Import Register component
import Explore from "./comp/Explore";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
