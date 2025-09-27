import React, { useEffect, useState } from "react";

// Styles
import "./Newportflio.css";

// components
import { Heading } from "components/Heading/Heading";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

// Utils
import {
  getUniqueCategories,
  filterProjectsByCategory,
  isPrivateUrl,
} from "../../utils/helpers";

// Dummy Data
const dummyProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "featured",
    img: {
      url: "https://via.placeholder.com/300",
      alt: "Portfolio Project",
    },
    tagline: "Showcasing personal projects",
    description: "This is a modern portfolio website using React and Tailwind.",
    technologies: ["React", "CSS", "Tailwind"],
    repositoryUrl: "https://github.com/example/portfolio",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    category: "web",
    img: {
      url: "https://via.placeholder.com/300",
      alt: "E-Commerce App",
    },
    tagline: "Online shopping platform",
    description: "Full-stack e-commerce app with Stripe integration.",
    technologies: ["Node.js", "MongoDB", "React"],
    repositoryUrl: "private", // simulate private link
    liveUrl: "https://myecommerce.com",
  },
];

const NewPortfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = getUniqueCategories(dummyProjects);
    setCategories(uniqueCategories);

    if (uniqueCategories.length > 0 && !uniqueCategories.includes(selected)) {
      setSelected(uniqueCategories[0]);
    }
  }, [selected]);

  useEffect(() => {
    const filtered = filterProjectsByCategory(dummyProjects, selected);
    setFilteredProjects(filtered);
  }, [selected]);

  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="portfolio"
      id="portfolio"
    >
      <Heading text="Portfolio" style={{ padding: "3rem" }} />

      {categories.length > 0 && (
        <div className="list">
          {categories.map((category) => (
            <PortfolioItem
              title={category}
              key={category}
              active={selected === category}
              setSelected={setSelected}
              id={category}
            />
          ))}
        </div>
      )}

      <div className="row">
        {filteredProjects.map((item, index) => (
          <div className="column" key={`${item.id}-${index}`}>
            <img
              src={item?.img?.asset?.url || item?.img?.url || ""}
              alt={item?.img?.alt || item.title || "Project"}
            />
            <div className="overlay">
              <div className="left">
                <h3>{item.title}</h3>
                {item.tagline && <p>{item.tagline}</p>}
                {item.description && (
                  <p className="project-description">{item.description}</p>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="technologies">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="tech-tag">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="right">
                {/* Repository Link */}
                {!isPrivateUrl(item.repositoryUrl) ? (
                  <a
                    href={item.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Github Repo"
                    />
                  </a>
                ) : (
                  <a href="#_" title="Private Repo">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                    />
                  </a>
                )}

                {/* Live Link */}
                {!isPrivateUrl(item.liveUrl) ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live view"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkSquareAlt}
                      size="2x"
                      className="icon"
                    />
                  </a>
                ) : (
                  <a href="#_" title="Private Link">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      size="2x"
                      className="icon"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPortfolio;
