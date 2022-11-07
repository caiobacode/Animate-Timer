import React from 'react';
import './App.css';
import Header from './Components/Header';
import Timer from './Components/Timer';
import Footer from './Components/Footer';
import mine from './Media/minecraft.mp4';

function App() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -59%)',
          zIndex: '-1',
        }}
      >
        <source src={mine} type="video/mp4" />
      </video>  
      <Header />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
