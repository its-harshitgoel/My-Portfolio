"use client";
import React, { useState } from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import RadioCard from "../components/Projects/RadioCard";
import { projectsData } from "../utils/constants";
import '../styles/Project.css';

const Projects = () => {
  const [selectedData, setSelectedData] = useState(projectsData);
  const valSelectFn = (value) =>
    setSelectedData(() => {
      return value === "ALL"
        ? projectsData
        : projectsData.filter((data) => data.type === value);
    });
  const options = ["ALL", "WEB-APP"];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="projects-heading">PROJECTS</h2>
        <div className="radio-group">
          {options.map((value) => (
            <RadioCard
              key={value}
              value={value}
              isSelected={selectedData === value}
              onChange={valSelectFn}
            />
          ))}
        </div>
        <div className="projects-grid">
          {selectedData.map((data, index) => (
            <ProjectCard data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
