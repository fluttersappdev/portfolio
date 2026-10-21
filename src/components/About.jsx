import React from "react";
import { ArrowRight, Smartphone, Code2, Server, PenTool, Sparkles, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  Smartphone: Smartphone,
  Code2: Code2,
  Server: Server,
  PenTool: PenTool,
  Sparkles: Sparkles,
  Cloud: Cloud,
};

export default function About() {
  const { personal, services } = portfolioData;

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Portrait Photo */}
          <div className="about-image-card">
            <img
              src={personal.profileImage}
              alt="Shabbir Tatariya"
              className="about-photo"
              loading="lazy"
            />
          </div>

          {/* Middle Column: Bio & CTA */}
          <div className="about-content">
            <h2 className="about-title">{personal.aboutHeading}</h2>
            <p className="about-text">{personal.aboutDescription}</p>
            <a href="#experience" className="btn-primary" id="about-cta-btn">
              More About Me
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Column: 3x2 Services Cards Grid */}
          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Code2;
              return (
                <div key={service.id} className="service-card">
                  <div
                    className="service-icon-box"
                    style={{
                      boxShadow: `0 0 14px ${service.color}33`,
                      color: service.color,
                      borderColor: `${service.color}44`,
                      background: `${service.color}14`,
                    }}
                  >
                    <IconComponent size={19} />
                  </div>
                  <span className="service-title">{service.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
