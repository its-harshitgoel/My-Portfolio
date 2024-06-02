import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SubmitButton = ({ isSending, isSuccess }) => {
    return (
        <button type="submit" className={isSuccess ? 'contact-button success' : 'contact-button'} disabled={isSending}>
            {isSuccess ? <FaCheck /> : ' Send'}
            {isSuccess && <span className="sent-text">   Sent!</span>}
        </button>
    );
}

export default SubmitButton;
