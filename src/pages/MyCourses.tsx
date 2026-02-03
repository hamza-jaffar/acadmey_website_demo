import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import { BookOpen, GraduationCap } from "lucide-react";
import "./MyCourses.css";

const MyCourses: React.FC = () => {
  // Simple state to simulate enrolled courses (could be pulled from localStorage or context later)
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  useEffect(() => {
    // Demo data for "Selected/Enrolled" courses
    const selected = [
      {
        title: "Advanced Web Development",
        description:
          "Master modern frontend frameworks and backend technologies with real-world projects.",
        tag: "In Progress",
        progress: "45%",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      },
      {
        title: "UX/UI Design Mastery",
        description:
          "Learn to create stunning user interfaces and seamless experiences from industry experts.",
        tag: "Selected",
        progress: "0%",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
      },
    ];
    setEnrolledCourses(selected);
  }, []);

  return (
    <div className="my-courses-page">
      <Section className="my-courses-hero">
        <div className="text-center">
          <h1 className="page-title">My Learning Dashboard</h1>
          <p className="page-subtitle">
            Manage your selected courses and track your academic progress.
          </p>
        </div>
      </Section>

      <Section>
        <div className="dashboard-grid">
          <aside className="dashboard-sidebar">
            <div className="sidebar-card">
              <div className="user-profile">
                <div className="avatar">JD</div>
                <h3>John Doe</h3>
                <p>Student ID: #8829</p>
              </div>
              <nav className="sidebar-nav">
                <button className="nav-item active">
                  <BookOpen size={20} /> My Courses
                </button>
                <button className="nav-item">
                  <GraduationCap size={20} /> Certificates
                </button>
              </nav>
            </div>
          </aside>

          <div className="dashboard-content">
            <div className="content-header">
              <h2>Enrolled Courses</h2>
              <Button
                size="sm"
                onClick={() => (window.location.href = "/courses")}
              >
                Browse More
              </Button>
            </div>

            {enrolledCourses.length > 0 ? (
              <div className="enrolled-grid responsive-grid">
                {enrolledCourses.map((course, index) => (
                  <div key={index} className="enrolled-card">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="enrolled-img"
                    />
                    <div className="enrolled-info">
                      <span className="enrolled-tag">{course.tag}</span>
                      <h3>{course.title}</h3>
                      <div className="progress-bar-wrapper">
                        <div className="progress-label">
                          <span>Progress</span>
                          <span>{course.progress}</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: course.progress }}
                          ></div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-2"
                      >
                        Continue Lesson
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-courses text-center">
                <p>You haven't enrolled in any courses yet.</p>
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = "/courses")}
                >
                  Explore Academy
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MyCourses;
