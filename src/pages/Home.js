import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/Home.css';
import profile from '../utils/home-profile2.jpg';
import Type from '../components/Type';
import '../styles/SocialMedia.css';


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
          <div className="home-about-social">
            <div className="wrapper">
              <div className="button">
                <div className="icon">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <span>Facebook</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fa-brands fa-x-twitter"></i>
                </div>
                <span>Twitter</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <span>Instagram</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-github"></i>
                </div>
                <span>Github</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <span>YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
