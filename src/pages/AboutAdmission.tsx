import React from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import {
  CheckCircle2,
  FileText,
  CreditCard,
  HelpCircle,
  Rocket,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import "./AboutAdmission.css";

const AboutAdmission: React.FC = () => {
  const steps = [
    {
      icon: <FileText size={32} />,
      title: "Submit Application",
      description:
        "Fill out our online application form with your details and preferred course.",
    },
    {
      icon: <HelpCircle size={32} />,
      title: "Personal Interview",
      description:
        "A brief discussion with our counselors to understand your goals and background.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Fee Payment",
      description:
        "Secure your seat by completing the registration fee payment through our portal.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Start Learning",
      description:
        "Receive your login credentials and start your journey with our orientation!",
    },
  ];

  return (
    <div className="about-page">
      <Section className="about-hero">
        <div className="container about-grid">
          <div className="about-content">
            <span className="subtitle">Our Story</span>
            <h1 className="page-title">
              Empowering the Next Generation of{" "}
              <span className="text-accent">Leaders</span>
            </h1>
            <p className="about-text">
              {SITE_CONFIG.name} has been at the forefront of quality education.
              Our mission is to bridge the gap between traditional learning and
              industry requirements through{" "}
              {SITE_CONFIG.description.toLowerCase()}.
            </p>
            <p className="about-text">
              We believe that education should be accessible, practical, and
              inspiring. That's why we bring together the best educators and the
              latest technologies at {SITE_CONFIG.name}.
            </p>
            <div className="about-features">
              <div className="feature-small">
                <CheckCircle2 className="text-accent" />
                <span>Industry-ready curriculum</span>
              </div>
              <div className="feature-small">
                <CheckCircle2 className="text-accent" />
                <span>Expert mentorship</span>
              </div>
              <div className="feature-small">
                <CheckCircle2 className="text-accent" />
                <span>Lifetime access to resources</span>
              </div>
            </div>
          </div>
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
              alt="About Us"
              className="about-image"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="text-center mb-4">
          <span className="subtitle">Admissions</span>
          <h2 className="section-title">Your Path to Success Starts Here</h2>
          <p className="section-desc">
            Follow these simple steps to join our upcoming intake.
          </p>
        </div>

        <div className="steps-grid responsive-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              <div className="step-number">{index + 1}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Button size="lg">Start Application Process</Button>
        </div>
      </Section>
    </div>
  );
};

export default AboutAdmission;
