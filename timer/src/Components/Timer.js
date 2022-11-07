import React, { useEffect, useState } from 'react';
import '../App.css';

function Timer() {
  const [totalTimeinMinutes, setTotalTimeInMinutes] = useState(15);
  const [totalTimeinSeconds, setTotalTimeInSeconds] = useState(totalTimeinMinutes * 60);
  const [wasStarted, setWasStarted] = useState(false);
  const seconds = totalTimeinSeconds % 60;

  const handleChangeSeconds = ({ target }) => {
    setTotalTimeInSeconds((totalTimeinMinutes * 60) + Number(target.value));
  };

  const handleChangeMinutes = ({ target }) => {
    if (target.value > 99) return;
    setTotalTimeInMinutes(Number(target.value));
    setTotalTimeInSeconds(Number(target.value) * 60);
  };

  useEffect(() => {
    if (!wasStarted) return; 
    console.log(totalTimeinSeconds);
    if (totalTimeinSeconds === 0) {
      window.alert('Time is over');
      return;
    }
    setTimeout(() => {
      setTotalTimeInSeconds(totalTimeinSeconds - 1);
      if (seconds !== 0) return;
      setTotalTimeInMinutes(totalTimeinMinutes - 1);
    }, 1000);
  }, [totalTimeinSeconds, totalTimeinMinutes, wasStarted, seconds]);

  return (
    <div className="main-div">
      <div className="timer">
      <button 
        disabled={wasStarted}
        className="start-btn" 
        type="button" 
        onClick={() => setWasStarted(true)}>Start</button>
      {
        wasStarted ? (
          <div className="running-inputs">
            <div className="minutes-started">
              <span>{totalTimeinMinutes.toString().padStart(2, '0')}</span>
            </div>
            <span className="two-points-started">:</span>
            <div className="seconds-started">
              <span>{seconds.toString().padStart(2, '0')}</span>
            </div>
          </div>)
          : (
          <div className="start-inputs">
          <input
            className="minutes-input"
            type="number"
            onChange={handleChangeMinutes}
            value={totalTimeinMinutes.toString().padStart(2, '0')}></input>
          <span className="two-points">:</span>
          <input 
            className="seconds-input"
            type="number"
            onChange={handleChangeSeconds}
            value={seconds.toString().padStart(2, '0')}></input> 
          </div>)
      }
      <button
        disabled={!wasStarted}
        className="finish-btn"
        type="buttun"
        onClick={() => setWasStarted(false)}>Stop</button>
      </div>
    </div>
  );
}

export default Timer;
