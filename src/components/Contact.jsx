import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name || "Client"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glowing planetary curvature in the background */}
          <div className="contact-planet-glow"></div>

          <div className="contact-inner-grid">
            {/* Left Column: Information */}
            <div className="contact-left-col">
              <h2 className="contact-title">Let's Work Together</h2>
              <p className="contact-subtitle">
                Do you have a project in mind? I'm available for full-time remote
                roles and freelance projects. Let's discuss how I can help you.
              </p>

              <div className="contact-info-list">
                <a
                  href={`mailto:${contact.email}`}
                  className="contact-info-item"
                  id="contact-email-link"
                >
                  <span className="contact-icon-bubble">
                    <Mail size={16} />
                  </span>
                  <span>{contact.email}</span>
                </a>

                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="contact-info-item"
                  id="contact-phone-link"
                >
                  <span className="contact-icon-bubble">
                    <Phone size={16} />
                  </span>
                  <span>{contact.phone}</span>
                </a>

                <div className="contact-info-item">
                  <span className="contact-icon-bubble">
                    <MapPin size={16} />
                  </span>
                  <span>{contact.location}</span>
                </div>

                <div className="contact-info-item">
                  <span className="badge-dot"></span>
                  <span style={{ color: "#a7f3d0", fontWeight: 500 }}>
                    {contact.statusBadge}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp & Email quick buttons */}
              <div className="contact-direct-buttons">
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  id="contact-whatsapp-btn"
                >
                  <MessageSquare size={15} />
                  WhatsApp
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="btn-email-cta"
                  id="contact-email-btn"
                >
                  <Mail size={15} />
                  Email Me
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form that triggers client email/WhatsApp */}
            <form className="contact-form-col" onSubmit={handleSendMessage}>
              <div className="form-row-dual">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                className="contact-input"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="btn-send-message"
                id="contact-send-msg-btn"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
