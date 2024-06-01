import React, { useRef, useEffect } from 'react';
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

    useEffect(() => {
        const handleMouseMove = (event) => {
            const element = document.querySelector('.right');
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const moveX = (x / rect.width - 0.5) * 200; 
            const moveY = (y / rect.height - 0.5) * 100; 

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        const handleMouseLeave = () => {
            const element = document.querySelector('.right');
            element.style.transition = 'transform 0.5s ease-out';
            element.style.transform = 'translate(0, 0)';
        };

        const rightElement = document.querySelector('.right');
        if (rightElement) {
            rightElement.addEventListener('mousemove', handleMouseMove);
            rightElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (rightElement) {
                rightElement.removeEventListener('mousemove', handleMouseMove);
                rightElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <input type="text" id="name" name="user_name" placeholder='Your Name...' />
            </div>
            <div className="form-group">
                <input type="email" id="email" name="user_email" placeholder='Your Email...' />
            </div>
            <div className="form-group">
                <textarea id="message" name="message" placeholder='Message' />
            </div>
            <button type="submit" className='contact-button'>Send</button>
        </form>
    );
}

export default ContactForm;
