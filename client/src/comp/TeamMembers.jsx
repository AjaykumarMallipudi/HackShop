import React from "react";
import "./TeamMembers.css";

const team = [
  { name: "Member 1", role: "Role 1", img: "/images/ajay.jpg" },
  { name: "Member 2", role: "Role 2", img: "/images/member2.jpg" },
  { name: "Member 3", role: "Role 3", img: "/images/member3.jpg" },
  { name: "Member 4", role: "Role 4", img: "/images/member4.jpg" },
  { name: "Member 5", role: "Role 5", img: "/images/member5.jpg" },
  { name: "Member 6", role: "Role 6", img: "/images/member6.jpg" },
];

const TeamMembers = () => {
  return (
    <section className="team-section">
      <h2 className="section-title">
        Our <span>Team</span>
      </h2>
      <p className="section-subtitle">
        Meet the amazing people behind Hackshop
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
