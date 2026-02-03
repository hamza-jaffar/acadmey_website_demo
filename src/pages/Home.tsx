import React from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { BookOpen, Users, Award, ChevronRight } from "lucide-react";
import "./Home.css";

const Home: React.FC = () => {
  const featuredCourses = [
    {
      title: "Advanced Web Development",
      description:
        "Master modern frontend frameworks and backend technologies with real-world projects.",
      tag: "Development",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "UX/UI Design Mastery",
      description:
        "Learn to create stunning user interfaces and seamless experiences from industry experts.",
      tag: "Design",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Data Science Bootcamp",
      description:
        "Dive deep into data analysis, machine learning, and statistical modeling with Python.",
      tag: "Data",
      price: "$249",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-subtitle">Excellence in Education</span>
            <h1 className="hero-title">
              Unlock Your Potential with{" "}
              <span className="text-accent">Premium Learning</span>
            </h1>
            <p className="hero-desc">
              Join thousands of students learning from industry leaders. We
              provide the tools, mentorship, and community you need to excel in
              your career.
            </p>
            <div className="hero-btns">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/courses")}
              >
                Explore Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "/about")}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
              alt="Academy Learning"
              className="hero-image"
            />
            <div className="hero-stats">
              <div className="stat-card">
                <Users className="stat-icon" />
                <div>
                  <h4>10k+</h4>
                  <p>Students</p>
                </div>
              </div>
              <div className="stat-card">
                <Award className="stat-icon" />
                <div>
                  <h4>50+</h4>
                  <p>Courses</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section dark>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon-box">
              <BookOpen />
            </div>
            <h3>Expert Mentors</h3>
            <p>
              Learn from professionals with years of experience in their
              respective fields.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-box">
              <Users />
            </div>
            <h3>Community Led</h3>
            <p>
              Join a global network of peers and collaborate on meaningful
              projects.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon-box">
              <Award />
            </div>
            <h3>Certified Skills</h3>
            <p>
              Get recognized certifications that help you stand out in the job
              market.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Courses */}
      <Section>
        <div className="section-header text-center">
          <span className="subtitle">Popular Programs</span>
          <h2 className="section-title">Explore Our Top Courses</h2>
        </div>
        <div className="courses-grid responsive-grid">
          {featuredCourses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Button variant="ghost" className="view-link">
            View All Courses <ChevronRight size={20} />
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="cta-section">
        <div className="cta-card">
          <h2>Ready to start your journey?</h2>
          <p>
            Admission for the Summer 2026 intake is now open. Limited seats
            available!
          </p>
          <Button variant="secondary" size="lg">
            Apply Now
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
