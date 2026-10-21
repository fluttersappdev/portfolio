import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal, contact } = portfolioData;

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Column */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Availability Badge */}
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>{personal.availabilityBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              {personal.headlineLine1}
              <br />
              <span>Mobile App </span>
              <span className="gradient-text">Developer</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="hero-description">{personal.heroDescription}</p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <a href="#contact" className="btn-primary" id="hero-hire-btn">
                Hire Me
                <ArrowUpRight size={16} />
              </a>

              <a
                href={contact.resumeUrl}
                download="Shabbir_Tatariya_Resume.pdf"
                className="btn-secondary"
                id="hero-resume-btn"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Statistics Row */}
            <div className="hero-stats-row">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Visual Column */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Floating Top Pill positioned above laptop */}
            <div className="hero-tag-pill-container">
              <div className="hero-tag-pill">{personal.heroPill}</div>
            </div>

            {/* Visual with Cosmic Ring & Device Mockups */}
            <div className="hero-visual-wrapper">
              <div className="cosmic-ring"></div>
              <img
                src="/assets/mockups/hero-mockup-hd.png"
                alt="Mobile and Web App Mockups"
                className="hero-mockup-image"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
