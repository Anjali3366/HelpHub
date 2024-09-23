import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./LandingPage/HomePage/Home";
import About from "./LandingPage/AboutPage/About";
import Service from "./LandingPage/ServicePage/Service";
import Contact from "./LandingPage/ContactPage/Contact";

import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "service":
        serviceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={serviceRef} className="h-[1100px]">
        <Service />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
