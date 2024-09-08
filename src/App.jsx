import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

import Home from "./LandingPage/HomePage/Home";
import About from "./LandingPage/AboutPage/About";
import Service from "./LandingPage/ServicePage/Service";
import Contact from "./LandingPage/ContactPage/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
