import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

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
        <a href="#explore">Explore</a>
        <a href="#events">Events</a>
        <a href="#labs">HackShop Labs</a>
        <a href="#about">About</a>
        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
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
    </div>
  );
};

export default Home;
