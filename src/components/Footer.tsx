import React from "react";
import { Link } from "react-router-dom";
import {
  Rocket,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <Rocket className="logo-icon" size={28} />
            <span>{SITE_CONFIG.name}</span>
          </Link>
          <p className="footer-desc">{SITE_CONFIG.description}</p>
          <div className="social-links">
            <a
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Facebook size={20} />
            </a>
            <a
              href={SITE_CONFIG.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Twitter size={20} />
            </a>
            <a
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Programs</Link>
            </li>
            <li>
              <Link to="/showcase">Showcase</Link>
            </li>
            <li>
              <Link to="/about">Admission</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-item">
            <MapPin size={20} />
            <span>{SITE_CONFIG.contact.address}</span>
          </div>
          <div className="contact-item">
            <Phone size={20} />
            <span>{SITE_CONFIG.contact.phone}</span>
          </div>
          <div className="contact-item">
            <Mail size={20} />
            <span>{SITE_CONFIG.contact.email}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
