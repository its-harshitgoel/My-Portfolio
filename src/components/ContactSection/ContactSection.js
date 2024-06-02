import React from 'react';
import ContactForm from './ContactForm';
import './ContactSection.css';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import SocialMedia from '../SocialMedia/SocialMedia';
import { CONTACT_INFO } from '../../utils/constants';

const ContactSection = () => {
    return (
        <div className="contactSection" id="contact">
            <ParticleBackground />
            <div className="contact-container">
                <div className="section-title">
                    <p>Contact</p>
                    <h2>Get In Touch</h2>
                </div>
                <div className="contactSection__wrapper">
                    <div className="left">
                        <div className="contact-info-item">
                            {CONTACT_INFO.map(({ icon, text }, index) => (
                                <div className="contact_element" key={index}>
                                    <div className="contact_icon">{icon}</div>
                                    <div className="contact_info">
                                        <p>{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <SocialMedia />
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
