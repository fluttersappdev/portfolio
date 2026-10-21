import React from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { TechIcon } from "./TechIcons";

export default function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section className="tech-section" id="skills">
      <div className="container">
        {/* Section Header Row */}
        <div className="section-header-row">
          <h2 className="section-title">Tech Stack & Tools</h2>
          <a href="#projects" className="section-header-link" id="view-skills-btn">
            View All Skills
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 14 Tech Stack Cards Grid */}
        <div className="tech-grid">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech-card">
              <div className="tech-icon-wrap">
                <TechIcon name={tech.icon} size={28} />
              </div>
              <div className="tech-name">
                {tech.name}
                {tech.subtitle && (
                  <span className="tech-subtitle">{tech.subtitle}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
