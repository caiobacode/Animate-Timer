import React from 'react';
import linkedin from '../Media/linkedin.png';
import github from '../Media/github.png';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <h2>Minecraft Timer</h2>
      <p>Caio Oliveira</p>
      <img 
        onClick={() => window.open('https://www.linkedin.com/in/caio-oliveira-de-sousa')} 
        src={linkedin} 
        alt="linkedin buttun"></img>
      <img 
        onClick={() => window.open('https://github.com/caiobacode')} 
        src={github} 
        alt="github-button"></img>
    </div>
  );
}
  
export default Header;
