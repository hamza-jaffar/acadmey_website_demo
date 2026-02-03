import React from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import "./Contact.css";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="contact-page">
      <Section className="contact-hero">
        <div className="text-center">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Have questions? We're here to help you on your educational journey
            at {SITE_CONFIG.name}.
          </p>
        </div>
      </Section>

      <Section>
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-heading">Contact Information</h2>
            <p className="contact-desc">
              Reach out to us via any of these channels or fill out the form.
              Our team will get back to you within 24 hours.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Phone />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>{SITE_CONFIG.contact.phone}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <Mail />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>{SITE_CONFIG.contact.email}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <MapPin />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>{SITE_CONFIG.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="map-placeholder">
              <span>Interactive Map Placeholder</span>
              <p>Google Maps integrate here</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" required>
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="course">Course Information</option>
                  <option value="career">Career Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
