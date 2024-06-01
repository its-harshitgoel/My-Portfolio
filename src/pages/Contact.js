import React from 'react';
import SocialMedia from '../components/SocialMedia';
import '../styles/Contact.css';
import ParticleBackground from '../components/ParticleBackground';


const Contact = () => {
  return (
    <div className='contact-section'>
      < ParticleBackground />
      <div className='contact-text'>
        <div className='social-media'>
          < SocialMedia />
        </div>
      </div>
    </div>
  )
};

export default Contact;
