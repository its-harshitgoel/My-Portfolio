import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SubmitButton from './SubmitButton';
import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);

        emailjs
            .sendForm('service_q6l8mbn', 'template_1n1eoxc', form.current, {
                publicKey: 'rvwQrJ9qHvMbgJ515',
            })
            .then(
                () => {

                    setTimeout(() => {
                        setIsSuccess(false);
                        setIsSending(false);
                    }, 1000);
                    setIsSuccess(true);
                },
                (error) => {
                    setIsSending(false);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <input type="text" id="name" name="user_name" placeholder='Your Name...' required/>
            </div>
            <div className="form-group">
                <input type="email" id="email" name="user_email" placeholder='Your Email...' required/>
            </div>
            <div className="form-group">
                <textarea id="message" name="message" placeholder='Message' required/>
            </div>

            <SubmitButton isSending={isSending} isSuccess={isSuccess} />

        </form>
    );
}

export default ContactForm;
