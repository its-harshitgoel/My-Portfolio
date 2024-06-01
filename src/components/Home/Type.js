import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Web Developer",
          "Coder",
          "Tech Enthusiast",
          "Competitive Programmer",
          "Machine Learning Engineer",
          "Full Stack Developer",
          "Game Developer",
          "Data Scientist",
          "UI/UX Designer",
          "Blockchain Developer",
          "Ethical Hacker",
          "Mobile App Developer",
          "Cloud Architect",
          "DevOps Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
);

}

export default Type;