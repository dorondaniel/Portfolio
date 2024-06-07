import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <nav className='Navbar'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact</a></li>
            <li><a href='/'>Resume</a></li>
            <li><a href='https://github.com/dorondaniel' target='_blank'>Projects</a></li>
        </nav>
     );
}
 
export default Navbar;