import React from "react";
// import "./ProjectCard.css";
import "./projectcard.css"; // ✅ exact match


const ProjectCard = ({ project }) => {
  return (
 <div className="card">
  <img src={project.image} alt={project.name} className="card-image" />
  <div className="card-content">
    <h3 className="card-title">{project.name}</h3>
    <p className="card-description">{project.description}</p>
    <div className="card-buttons">
      {project.github && (
        <a href={project.github} className="btn github" target="_blank" rel="noopener noreferrer">GitHub</a>
      )}
      {project.live && (
        <a href={project.live} className="btn live" target="_blank" rel="noopener noreferrer">Live Demo</a>
      )}
    </div>
  </div>
</div>

  );
};

export default ProjectCard;
