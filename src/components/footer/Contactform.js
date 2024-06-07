import React from 'react';
import './Footer.css'

const Contactform = () => {
  return (
    <div className='Contactform'>
      <div className='Contacts'>
        <div className='ContactItem'>
          <a href="mailto:idorondaniel@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src='/gmail.png' alt='gmail'/>
          </a>
          <a className='det' href='mailto:idorondaniel@gmail.com' target="_blank" rel="noopener noreferrer">idorondaniel@gmail.com</a>
        </div>
        
        <div className='ContactItem'>
          <a href="https://wa.me/+919940441675" target="_blank" rel="noopener noreferrer">
            <img src='/receiver.png' alt='phone'/>
          </a>
          <a className='det' href='https://wa.me/+919940441675' target="_blank" rel="noopener noreferrer">+91-9940441675</a>
        </div>
        
        <div className='ContactItem'>
          <a href="https://github.com/dorondaniel" target="_blank" rel="noopener noreferrer">
            <img src='/github.png' alt='git'/>
          </a>
          <a className='det' href='https://github.com/dorondaniel' target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        
        <div className='ContactItem'>
          <a href="https://www.hackerrank.com/profile/dorondaniel_n_c1" target="_blank" rel="noopener noreferrer">
            <img src='/hacker.png' alt='hackerrank'/>
          </a>
          <a className='det' href='https://www.hackerrank.com/profile/dorondaniel_n_c1' target="_blank" rel="noopener noreferrer">Hackerrank</a>
        </div>
        
        <div className='ContactItem'>
          <a href="https://www.linkedin.com/in/doron-d-7b3b35200/" target="_blank" rel="noopener noreferrer">
            <img src='/linkedin.png' alt='linkedin'/>
          </a>
          <a className='det' href='https://www.linkedin.com/in/doron-d-7b3b35200/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        
        <div className='ContactItem'>
          <a href="https://leetcode.com/u/dorondaniel/" target="_blank" rel="noopener noreferrer">
            <img src='/leet.png' alt='leetcode'/>
          </a>
          <a className='det' href='https://leetcode.com/u/dorondaniel/' target="_blank" rel="noopener noreferrer">Leet Code</a>
        </div>
      </div>
      <div className='Illus'>
        <img src='/cowboy.png' alt='cowboy'/>
      </div>
    </div>
  );
};

export default Contactform;
