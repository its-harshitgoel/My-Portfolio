import React from "react";
import "../styles/About.css";
import profile from "../utils/home-profile2.jpg";


const About = () => {
  return (
    <div className="center">
      <div className="container">
        <div className="section">
          <h2 className="sub-heading">ABOUT</h2>
          <div className="about-content">
            <img
              src={profile}
              alt="profile-image"
              className="profile-image"
            />
            <div className="text-content">
              <h1 className="heading">👋 Hey there</h1>
              <p className="description">
                I'm <span className="name">Harshit Goel</span>, a passionate
                software developer. I specialize in{" "}
                <span className="tech">Web Development</span>, crafting seamless
                user experiences and robust backend solutions. With a knack for
                problem-solving, I thrive on creating elegant code that makes
                an impact. I'm always exploring new tools and techniques to
                stay at the forefront of the ever-evolving tech landscape.
              </p>
              <p className="description">
                📫 Open to collaborations and exciting projects, I'm eager to
                connect with fellow developers and tech enthusiasts. Let's
                build something amazing together!
              </p>
              <p className="description">
                Happy coding! 🖥️
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
