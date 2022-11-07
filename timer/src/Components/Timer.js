import React, { useEffect, useState } from 'react';

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
      console.log('Time is over');
      return;
    }
    setTimeout(() => {
      setTotalTimeInSeconds(totalTimeinSeconds - 1);
      if (seconds !== 0) return;
      setTotalTimeInMinutes(totalTimeinMinutes - 1);
    }, 1000);
  }, [totalTimeinSeconds, totalTimeinMinutes, wasStarted, seconds]);

  return (
    <div>
      <button type="button" onClick={() => setWasStarted(true)}>Start</button>
      {
        wasStarted ? (
          <div>
            <span>{totalTimeinMinutes.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, '0')}</span>
          </div>)
          : (
          <div>
          <input
            type="number"
            onChange={handleChangeMinutes}
            value={totalTimeinMinutes.toString().padStart(2, '0')}></input>
          <span>:</span>
          <input 
            type="number"
            onChange={handleChangeSeconds}
            value={seconds.toString().padStart(2, '0')}></input> 
          </div>)
      }
      <button
        type="buttun"
        onClick={() => setWasStarted(false)}>Stop</button>
    </div>
  );
}

export default Timer;
