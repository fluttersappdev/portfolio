import React from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience, contact } = portfolioData;

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        {/* Header Row */}
        <div className="section-header-row">
          <h2 className="section-title">Work Experience</h2>
          <a
            href={contact.resumeUrl}
            download="Shabbir_Tatariya_Resume.pdf"
            className="section-header-link"
            id="view-resume-btn"
          >
            View Full Resume
            <ArrowRight size={14} />
          </a>
        </div>

        {/* 2-Column Grid */}
        <div className="experience-grid">
          {experience.map((exp) => (
            <div key={exp.company} className="experience-card">
              <div
                className="exp-logo-box"
                style={{
                  background: `${exp.logoColor}15`,
                  borderColor: `${exp.logoColor}40`,
                  color: exp.logoColor,
                  fontWeight: "800",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="exp-logo-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              <div className="exp-info">
                <div className="exp-header">
                  <h3 className="exp-company">{exp.company}</h3>
                  <span className="exp-date">{exp.period}</span>
                </div>
                <div className="exp-role">{exp.role}</div>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
