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
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <Rocket className="logo-icon" size={28} />
            <span>EduAcademy</span>
          </Link>
          <p className="footer-desc">
            Empowering students with world-class education and modern skills.
            Join our community of lifelong learners today.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon">
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
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">Admissions</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Our Courses</h4>
          <ul>
            <li>
              <Link to="/courses">Web Development</Link>
            </li>
            <li>
              <Link to="/courses">UX/UI Design</Link>
            </li>
            <li>
              <Link to="/courses">Data Science</Link>
            </li>
            <li>
              <Link to="/courses">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/courses">Business Management</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-item">
            <MapPin size={20} />
            <span>123 Academy Blvd, Knowledge City</span>
          </div>
          <div className="contact-item">
            <Phone size={20} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail size={20} />
            <span>info@eduacademy.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} EduAcademy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
