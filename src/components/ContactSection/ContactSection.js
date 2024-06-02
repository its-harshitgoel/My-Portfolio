import React from 'react'
import ContactForm from './ContactForm'
import { IoIosMail, IoIosCall, IoIosPin } from "react-icons/io";
import './ContactSection.css'
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import SocialMedia from '../SocialMedia/SocialMedia';

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
                            <div className="contact_element">
                                <div className="contact_icon"><IoIosMail />
                                </div>
                                <div className="contact_info">
                                    <p>its.harshitgoel@gmail.com</p>
                                </div>
                            </div>

                        
                            <div className="contact_element">
                                <div className="contact_icon"><IoIosCall />
                                </div>
                                <div className="contact_info">
                                    <p>+91 94513xxxxx</p>
                                </div>
                            </div>

                            <div className="contact_element">
                                <div className="contact_icon"><IoIosPin />
                                </div>
                                <div className="contact_info">
                                    <p>Bengaluru, India</p>
                                </div>
                            </div>
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

export default ContactSection