import React, { useState } from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import './ProjectCard.css';

const ProjectCard = ({ data }) => {
  const { title, image, link, source } = data;
  const [showHover, setShowHover] = useState(false);
  const imageUrl = `/images/${image}.png`; // Adjust the path as needed

  return (
    <div
      className="project-card"
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <h3 className="project-title">{title}</h3>
      <div className="project-image-container">
        <img
          className="project-image"
          src={imageUrl}
          alt="project-img"
        />
        {showHover && (
          <div className="project-hover">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <FaLink className="project-icon" />
              </a>
            )}
            <a href={source} target="_blank" rel="noopener noreferrer">
              <FaGithub className="project-icon" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
