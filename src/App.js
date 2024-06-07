import './App.css';
import './components/nav-bar/Navbar';
import Navbar from './components/nav-bar/Navbar';
import About from './components/about/About';
import React from 'react';
import Photo from './components/photo/Photo';


function App() {
  return (
    <div className="App">
      <h1 className='Logo'>DORON&nbsp;<span>DANIEL</span></h1>
      <Photo/>
      <About/>
    </div>
  );
}

export default App;
