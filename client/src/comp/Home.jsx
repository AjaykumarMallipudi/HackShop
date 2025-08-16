import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import TeamMembers from "./TeamMembers";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="hack">Hack</span>
        <span className="shop">Shop</span>
      </div>
      <div className="nav-links">
        <a href="#Home">Home</a>
        <Link to="/projects">Projects</Link>
        <a href="#Courses">Courses</a>
        <a href="#about">About</a>
        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </nav>
  );
};


const Home = () => {
  const projectData = [
    {
      title: "Nutri Scan",
      description:
        "AI-powered nutrition tracker that analyzes food images and gives instant calories, protein, carbs, and fat info."
    },
    {
      title: "HackShop",
      description:
        "A project collaboration platform where innovators meet builders to turn ideas into reality."
    },
    {
      title: "Todo Manager",
      description:
        "Full-stack task management app with authentication, CRUD features, and responsive UI."
    },
    {
      title: "EduVerse",
      description:
        "Interactive e-learning platform with gamified learning paths and peer collaboration."
    },
    {
      title: "HealthTrack",
      description:
        "Health monitoring app with real-time tracking, personalized recommendations, and progress charts."
    },
    {
      title: "GreenSpace",
      description:
        "Platform to connect eco-friendly volunteers with sustainability-focused community projects."
    }
  ];

  return (
    
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Where Students <br />
            Don’t Just Learn, <br />
            They <span>Build with Hackshop</span>
          </h1>
          <p>Your ideas deserve more than a classroom. Let’s build them into something real.</p>

          <div className="hero-buttons">
            <button className="start-btn">Start Now</button>
            <button className="secondary-btn">Watch Video</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="/pnglogo.png" alt="Hackshop Hero" />
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="explore-page">
        <div className="explore-header">
          <h1>Explore Projects</h1>
          <p>Join exciting projects or start your own — collaborate, innovate, and build together.</p>
        </div>

        <div className="explore-cards">
          {projectData.map((project, index) => (
            <div key={index} className="explore-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                <button className="start-btn">Build</button>
                <button className="secondary-btn">Know More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>

  );
};

export default Home;
