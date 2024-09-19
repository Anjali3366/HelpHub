import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./LandingPage/HomePage/Home";
import About from "./LandingPage/AboutPage/About";
import Service from "./LandingPage/ServicePage/Service";
import Contact from "./LandingPage/ContactPage/Contact";
import Login from "./Componets/Login";
import SignUp from "./Componets/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
