import React from 'react';
import './RadioCard.css';

const RadioCard = ({ value, isSelected, onChange }) => {
  return (
    <div
      className={`radio-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onChange(value)}
    >
      {value}
    </div>
  );
};

export default RadioCard;
