import React from "react";
import "../App.css"; // reuse styles, or make Explore.css if modularizing

const Explore = () => {
  const verticals = [
    {
      title: "💡 Hackathons & Ideathons",
      desc: "Collaborative sprints where students solve real-world problems with creativity and speed.",
    },
    {
      title: "🎨 Creatathons & Workshops",
      desc: "Hands-on experiences in AI/ML, Design, Content Creation, Filmmaking, and more.",
    },
    {
      title: "🌍 Culture-Infused Events",
      desc: "Events inspired by K-pop, Japanese fests, and global youth creativity formats.",
    },
    {
      title: "🎙️ Unfiltered: Real Talk Series",
      desc: "Raw, real-time convos with professionals, dropouts, and experienced seniors.",
    },
    {
      title: "🔬 Hackshop Labs",
      desc: "A student-powered R&D space solving challenges through internships and projects.",
    },
    {
      title: "🚀 Startup Incubation",
      desc: "From SkillStack to PeerPad — Hackshop helps students build real startups.",
    },
  ];

  return (
    <div className="explore-page">
      <header className="explore-header">
        <h1>Explore What Hackshop Offers</h1>
        <p>
          Dive into the verticals that make Hackshop a launchpad for student creators,
          doers, and future founders.
        </p>
      </header>

      <section className="explore-cards">
        {verticals.map((item, index) => (
          <div key={index} className="explore-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Explore;
