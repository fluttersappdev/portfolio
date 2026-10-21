import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects, projectCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Header Row with Filter Pills and View All link */}
        <div className="projects-header-row">
          <h2 className="section-title">Featured Projects</h2>

          {/* Filter Tabs */}
          <div className="project-filter-tabs">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <a href="#contact" className="section-header-link" id="view-all-projects-btn">
            View All Projects
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Projects 4-Column Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <a
                href={project.link || "#contact"}
                target={project.link?.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="project-image-box"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
              </a>

              <div className="project-content">
                <h3 className="project-title">
                  <a
                    href={project.link || "#contact"}
                    target={project.link?.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link || "#contact"}
                    target={project.link?.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="project-action-btn"
                    aria-label={`Open ${project.title}`}
                    title="Open on Store"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
