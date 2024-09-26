import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./LandingPage/HomePage/Home";
import About from "./LandingPage/AboutPage/About";
import Service from "./LandingPage/ServicePage/Service";
import Contact from "./LandingPage/ContactPage/Contact";

import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
