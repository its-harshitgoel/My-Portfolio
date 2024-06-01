import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/Home.css';
import profile from '../utils/home-profile2.jpg';
import Type from '../components/Type';
import '../styles/SocialMedia.css';
import SocialMedia from '../components/SocialMedia';



function Home() {
  return (
    <div className="home-container">
      <ParticleBackground />
      <div className="content">
        <div className="row">
          <div className="home-image">
            <img className="profile-image" src={profile} alt="profile" />
          </div>
          <div className="home-down">
            <div className="home-text">
              <h1>Hi, My name is</h1>
            </div>
            <div>
              <h1 className="heading-name">
                <strong className="main-name">Harshit Goel</strong>
              </h1>
            </div>
            <div className="type-container">
              <h1>
                I am a <strong className="type"> <Type /></strong>
              </h1>
            </div>
          </div>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Home;
