import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { personal, navLinks, contact } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section in viewport
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand">
            <span className="nav-brand-name">
              <span>{personal.firstName}</span>
              <span className="nav-brand-highlight">{personal.lastName}</span>
            </span>
            <span className="nav-brand-title">{personal.title}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${
                      activeSection === link.href.substring(1) ? "active" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Right Action */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="btn-primary"
              id="nav-hire-me-btn"
            >
              Hire Me
              <ArrowUpRight size={16} />
            </a>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: "10px" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Chat on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
