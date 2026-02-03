import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";
import "./Showcase.css";

const Showcase: React.FC = () => {
  const projects = [
    {
      title: "Eco-Track App",
      student: "Sarah Jenkins",
      category: "Mobile Development",
      description:
        "A comprehensive sustainability tracking app built using React Native and Firebase.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "FinTech Dashboard",
      student: "Marcus Chen",
      category: "UX/UI Design",
      description:
        "A modern financial management interface focusing on accessibility and data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Brand Identity: Solis",
      student: "Elena Rodriguez",
      category: "Graphic Design",
      description:
        "Complete branding and visual strategy for a renewable energy startup.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "AI Chatbot Engine",
      student: "David Kim",
      category: "Machine Learning",
      description:
        "Custom NLP model optimized for customer support automation in e-commerce.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6ca20772d187?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="showcase-page">
      <Section className="showcase-hero">
        <div className="text-center">
          <h1 className="page-title">
            Innovation <span className="text-accent">Showcase</span>
          </h1>
          <p className="page-subtitle">
            A collection of outstanding projects and success stories from our
            talented community.
          </p>
        </div>
      </Section>

      <Section>
        <div className="projects-grid responsive-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="student-name">By {project.student}</p>
                <p className="project-desc">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="impact-stats">
          <div className="impact-item">
            <h2>500+</h2>
            <p>Hired by Top Tech Companies</p>
          </div>
          <div className="impact-item">
            <h2>$2.4M</h2>
            <p>Total Student Funding</p>
          </div>
          <div className="impact-item">
            <h2>120+</h2>
            <p>Industry Partnership Recognition</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Showcase;
