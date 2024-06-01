import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_q6l8mbn', 'template_1n1eoxc', form.current, {
                publicKey: 'rvwQrJ9qHvMbgJ515',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <input type="text" id="name" name="user_name" placeholder='Your Name...'/>
            </div>
            <div className="form-group">
                <input type="email" id="email" name="user_email" placeholder='Your Email...'/>
            </div>
            <div className="form-group">
                <textarea id="message" name="message" placeholder='Message'/>
            </div>
            <button type="submit" className='contact-button'>Send</button>
        </form>
    );
}

export default ContactForm;
