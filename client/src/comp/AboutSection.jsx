import React from "react";
import "../App.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      {/* Section Header */}
      <div className="about-header">
        <h2>About <span>HackShop</span></h2>
        <p>
          Where learning meets real-world execution. Build projects, join teams, and grow your network.
        </p>
      </div>

      {/* Why HackShop */}
      <div className="about-cards">
        <div className="about-card">
          <div className="icon">🤝</div>
          <h3>Real Team</h3>
          <p>Work with passionate peers in structured, real-world teams.</p>
        </div>
        <div className="about-card">
          <div className="icon">💻</div>
          <h3>Real Projects</h3>
          <p>Hands-on development using MERN stack & industry tools.</p>
        </div>
        <div className="about-card">
          <div className="icon">🌐</div>
          <h3>Networking</h3>
          <p>600+ WhatsApp community & 100+ YouTube subscribers.</p>
        </div>
        <div className="about-card">
          <div className="icon">📜</div>
          <h3>Verified Certification</h3>
          <p>Earn certificates for work you actually complete.</p>
        </div>
      </div>

      {/* Roadmap Flow */}
      <div className="roadmap-container">
        <h3 className="roadmap-title">Your HackShop Journey</h3>
        <div className="roadmap">
          <div className="roadmap-step">
            <span>📌</span> Select Project
          </div>
          <div className="roadmap-arrow">➜</div>
          <div className="roadmap-step">
            <span>👥</span> Join Team
          </div>
          <div className="roadmap-arrow">➜</div>
          <div className="roadmap-step">
            <span>⚙</span> Work Agile
          </div>
          <div className="roadmap-arrow">➜</div>
          <div className="roadmap-step">
            <span>🏆</span> Get Certified
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="about-company">
        <p>
          HackShop is a student-powered innovation hub. We host hackathons, 
          workshops, and industry-inspired projects — all with one goal: 
          making you job-ready by working on actual solutions, not just theory.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
