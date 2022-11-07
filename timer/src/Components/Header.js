import React from 'react';
import linkedin from '../Media/linkedin.png';
import github from '../Media/github.png';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <div className="name-and-class">
        <h3 className="name">Caio Oliveira</h3>
        <h4 className="class">Turma 24 B</h4>
      </div>
      <div className="title-div">
        <h1 className="title">Minecraft Timer</h1>
      </div>
      <div className="social-links">
        <img 
          className="linkedin"
          onClick={() => window.open('https://www.linkedin.com/in/caio-oliveira-de-sousa')} 
          src={linkedin} 
          alt="linkedin buttun"></img>
        <img 
          className="github"
          onClick={() => window.open('https://github.com/caiobacode')} 
          src={github} 
          alt="github-button"></img>
      </div>
    </div>
  );
}
  
export default Header;
