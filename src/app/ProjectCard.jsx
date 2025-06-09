import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.name} className="card-image" />
      <h3 className="card-title">{project.name}</h3>
      <p className="card-description">{project.description}</p>
      <div className="card-buttons">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn github">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn live">
            Live Project
          </a>
        )}
      </div>
      
    </div>
  );
};

export default ProjectCard;
