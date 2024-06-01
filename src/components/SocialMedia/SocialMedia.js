import React from 'react';
import { SiLeetcode } from 'react-icons/si';
import './SocialMedia.css';

function SocialMedia() {

  return (
    <div className="home-about-social">
    <div className="wrapper">
      <a href="https://www.leetcode.com/" target="_blank" rel="noreferrer">
      <div className="button">
        <div className="icon">
          <i><SiLeetcode /></i>
        </div>
        <span>Leetcode</span>
      </div>
      </a>
      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
      <div className="button" >
        <div className="icon">
          <i className="fa-brands fa-x-twitter"></i>
        </div>
        <span>Twitter</span>
      </div>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
      <div className="button">
        <div className="icon">
          <i className="fab fa-instagram"></i>
        </div>
        <span>Instagram</span>
      </div>
      </a>
      <a href="https://www.github.com/" target="_blank" rel="noreferrer">
        <div className="button">
          <div className="icon">
            <i className="fab fa-github"></i>
          </div>
          <span>Github</span>
        </div>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <div className="button">
          <div className="icon">
            <i className="fab fa-youtube"></i>
          </div>
          <span>YouTube</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <div className="button">
          <div className="icon">
            <i className="fab fa-linkedin"></i>
          </div>
          <span>LinkedIn</span>
        </div>
      </a>
    </div>
  </div>
  )
}

export default SocialMedia;