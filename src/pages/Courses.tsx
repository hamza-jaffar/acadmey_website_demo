import React, { useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import "./Courses.css";

const Courses: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const allCourses = [
    {
      title: "Advanced Web Development",
      description:
        "Master modern frontend frameworks like React and Vue, plus Node.js backend integration.",
      tag: "Development",
      price: "$199",
      duration: "12 Weeks",
      level: "Advanced",
      students: "1.2k",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "UX/UI Design Mastery",
      description:
        "Learn professional design workflows, from wireframing to high-fidelity prototyping in Figma.",
      tag: "Design",
      price: "$149",
      duration: "8 Weeks",
      level: "Intermediate",
      students: "850",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Data Science Bootcamp",
      description:
        "Comprehensive training in Python, SQL, and machine learning for data-driven decision making.",
      tag: "Data",
      price: "$249",
      duration: "16 Weeks",
      level: "Intermediate",
      students: "2.1k",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Digital Marketing Pro",
      description:
        "Complete guide to SEO, social media growth, and conversion rate optimization strategies.",
      tag: "Marketing",
      price: "$129",
      duration: "6 Weeks",
      level: "Beginner",
      students: "3.4k",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Business Management",
      description:
        "Develop leadership skills and strategic thinking to manage teams and scale corporate projects.",
      tag: "Business",
      price: "$179",
      duration: "10 Weeks",
      level: "Advanced",
      students: "620",
      image:
        "https://images.unsplash.com/photo-1454165833767-0275080057d1?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Python for Beginners",
      description:
        "The perfect starting point for your coding journey. No previous experience required.",
      tag: "Development",
      price: "$99",
      duration: "4 Weeks",
      level: "Beginner",
      students: "5.6k",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Design",
    "Data",
    "Marketing",
    "Business",
  ];

  const filteredCourses =
    filter === "All"
      ? allCourses
      : allCourses.filter((course) => course.tag === filter);

  return (
    <div className="courses-page">
      <Section className="courses-hero">
        <div className="text-center">
          <h1 className="page-title">Our Courses</h1>
          <p className="page-subtitle">
            Broaden your horizons with our expert-led programs.
          </p>
        </div>
      </Section>

      <Section>
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="courses-grid responsive-grid">
          {filteredCourses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results text-center">
            <h3>No courses found in this category.</h3>
            <p>Try selecting another category or check back later.</p>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Courses;
