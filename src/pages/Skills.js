import React from "react";
import { skillsData } from "../utils/constants";
import "../styles/Skills.css";
import ParticleBackground from "../components/ParticleBackground/ParticleBackground";

const Skills = () => {
  return (
    <>
      <ParticleBackground />
      <div className="skills-container">
        <div className="skills-heading-container">
          <h1 className="skills-heading">SKILLS</h1>
          <h3 className="skills-subheading">Technologies Used</h3>
        </div>
        <div className="skills-grid">
          {skillsData.map((data, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{data.icon}</div>
              <h2 className="skill-name">{data.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
