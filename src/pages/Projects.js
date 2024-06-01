import React, { useState } from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import RadioCard from "../components/Projects/RadioCard";
import { projectsData } from "../utils/constants";
import '../styles/Project.css';
import ParticleBackground from "../components/ParticleBackground/ParticleBackground";

const Projects = () => {
  const [selectedOption, setSelectedOption] = useState("ALL");
  
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const filteredData = selectedOption === "ALL" ? projectsData : projectsData.filter((data) => data.type === selectedOption);

  const options = ["ALL", "WEB-APP"];

  return (
    <>
      <ParticleBackground />
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-heading">PROJECTS</h2>
          <div className="radio-group">
            {options.map((value) => (
              <RadioCard
                key={value}
                value={value}
                isSelected={selectedOption === value}
                onChange={handleOptionChange}
              />
            ))}
          </div>
          <div className="projects-grid">
            {filteredData.map((data, index) => (
              <ProjectCard data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
