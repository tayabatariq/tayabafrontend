import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Tayaba = [
  {
    name: "Task Manager",
    description: "Ek simple task manager app jo tasks ko add, delete aur complete karne ka option deta hai.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/example/task-manager",
    live: "https://example.com/task-manager",
  },
  {
    name: "Weather App",
    description: "Yeh app real-time weather data show karti hai kisi bhi city ke liye.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/example/weather-app",
    live: "https://example.com/weather-app",
  },
  {
    name: "E-commerce Site",
    description: "Ek fully functional e-commerce website with cart & checkout features.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/example/ecommerce",
    live: "https://example.com/ecommerce",
  },
  {
    name: "Blog Website",
    description: "Ek modern blog site jisme users articles padh aur likh sakte hain.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/example/blog-site",
    live: "https://example.com/blog-site",
  },
  {
    name: "Portfolio Website",
    description: "Ek interactive portfolio website jisme animations aur modern design hai.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/example/portfolio",
    live: "https://example.com/portfolio",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Tayaba;
