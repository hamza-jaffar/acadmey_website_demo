import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import AboutAdmission from "./pages/AboutAdmission";
import Contact from "./pages/Contact";
import MyCourses from "./pages/MyCourses";
import Showcase from "./pages/Showcase";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/about" element={<AboutAdmission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-courses" element={<MyCourses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
