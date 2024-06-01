import React from 'react';
import "../styles/About.css";
import profile from '../utils/home-profile2.jpg';
import CV from "../utils/resume-sample.pdf"
import Info from "../components/About/info";
import ParticleBackground from "../components/ParticleBackground";

const About = () => {
return (
  <section className='about section' id="about">
  <ParticleBackground />
  <h2 class="section__title">About Me</h2>
  <span class="section__subtitle">My Information</span>

  <div class="about__container container grid">
    <img src={profile} alt="" class="about__img"></img>

    <div class="about_data">
      <Info />
      <p class="about__description">I'm Harshit, a passionate software developer. I specialize in Web Development,
        crafting seamless user experiences and robust backend solutions.
        </p>
     
      <a download="" href={CV} class="button button--flex">Download CV</a>

    </div>

  </div>
</section>




)
}

export default About