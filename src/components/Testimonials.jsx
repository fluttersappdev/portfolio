import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Testimonials() {
  const { testimonials } = portfolioData;
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="feedback-section" id="testimonials">
      <div className="container">
        {/* Header Row with Navigation Controls */}
        <div className="section-header-row">
          <h2 className="section-title">Client Feedback</h2>
          <div className="feedback-header-controls">
            <button
              className="carousel-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="carousel-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3-Column Feedback Cards Grid */}
        <div className="feedback-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="feedback-card">
              <p className="feedback-quote">"{item.quote}"</p>

              <div className="feedback-author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-meta">
                  <span className="author-name">{item.name}</span>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
