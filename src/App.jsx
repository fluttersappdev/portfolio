import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient Cosmic Atmosphere */}
      <div className="cosmic-background">
        <div className="cosmic-orb-1"></div>
        <div className="cosmic-orb-2"></div>
        <div className="cosmic-orb-3"></div>
        <div className="cosmic-planet-rim-bottom"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
