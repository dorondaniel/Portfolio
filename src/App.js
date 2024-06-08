import './App.css';
import About from './components/about/About';
import Block from './components/about/Block';
import React, { useRef } from 'react';
import Photo from './components/photo/Photo';
import Button from './components/Button/Button';
import Contactform from './components/footer/Contactform';
import Cblock from './components/footer/Cblock';

function App() {
  const aboutRef = useRef(null);
  const footRef = useRef(null);

  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior:'smooth' });
    }
  };

  const handleContactClick = () => {
    if (footRef.current) {
      footRef.current.scrollIntoView({ behavior:'smooth' });
    }
  };

  const handleActivitiesClick = () => {
    window.open('https://github.com/dorondaniel', '_blank');
  };

  const handleResumeClick = () => {
    const confirmed = window.confirm("Do you want to download the resume?");

    if(confirmed){
      const anchor = document.createElement('a');
      anchor.href = '/DoronNoPhoto.pdf';
      anchor.download = 'Doron.pdf';
  
      anchor.click();
    }
  };

  return (
    <div className="App">
      <h1 className='Logo'>DORON&nbsp;<span>DANIEL</span></h1>
      <div className="photo-container">
        <div className="buttons-left">
          <Button onClick={handleAboutClick} className="primary">About</Button>
          <Button onClick={handleContactClick} className="secondary">Contact</Button>
        </div>
        <Photo/>
        <div className="buttons-right">
          <Button onClick={handleActivitiesClick} className="success">Activities</Button>
          <Button onClick={handleResumeClick} className="danger">Resume</Button>
        </div>
      </div>
      
      <div ref={aboutRef}>
        <br/>
        <Block/>
        <About />
      </div>
      <div ref={footRef}>
        <br/>
        <Cblock/>
        <Contactform />
      </div>
    </div>
  );
}

export default App;
