// src/comp/Projects.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css"; // Custom styles

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    ownerId: "68a0483dc80359097d742ab9" // Replace with logged-in user ID from auth
  });

  // Fetch projects from backend
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/projects/create", formData);
      setShowForm(false);
      setFormData({ title: "", description: "", techStack: "", ownerId: "USER_ID_HERE" });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="projects-container">
      {/* Top Bar */}
      <div className="projects-header">
        <h1>Explore Projects</h1>
        <button onClick={() => setShowForm(true)} className="create-btn">
          + Create Project
        </button>
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech-stack">{project.techStack}</span>
            <p className="owner">By: {project.owner?.name}</p>
          </div>
        ))}
      </div>

      {/* Create Project Modal */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Project Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Project Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Tech Stack (comma separated)"
                value={formData.techStack}
                onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                required
              />
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Create</button>
                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
