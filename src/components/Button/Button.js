import React from 'react';
import './Button.css';

const Button = ({ onClick, children, className, style, type = "button" }) => {
  return (
    <button 
      type={type} 
      className={`custom-button ${className}`} 
      onClick={onClick} 
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
