import React, { useEffect, useState } from 'react';

function Timer() {
  const [totalTimeinMinutes, setTotalTimeInMinutes] = useState(15);
  const [totalTimeinSeconds, setTotalTimeInSeconds] = useState(totalTimeinMinutes * 60);
  const [wasClicked, setWasClicked] = useState(false);
  const seconds = totalTimeinSeconds % 60;

  const handleChangeSeconds = ({ target }) => {
    setTotalTimeInSeconds((totalTimeinMinutes * 60) + Number(target.value));
  };
  const handleChangeMinutes = ({ target }) => {
    setTotalTimeInMinutes(Number(target.value));
    setTotalTimeInSeconds(Number(target.value) * 60);
  };
  useEffect(() => {
    if (wasClicked) {
      console.log(totalTimeinSeconds);
      if (totalTimeinSeconds === 0) {
        console.log('cabo');
      } else {
        setTimeout(() => {
          if (Number(seconds.toString().padStart(2, '0')) === 0) {
            setTotalTimeInMinutes(totalTimeinMinutes => totalTimeinMinutes - 1);
          }
          setTotalTimeInSeconds(totalTimeinSeconds - 1);
        }, 1000);
      }
    }
  }, [totalTimeinSeconds, wasClicked, seconds]);

  return (
    <div>
      <button type="button" onClick={() => setWasClicked(true)}>Start</button>
      {
        wasClicked ? (
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
    </div>
  );
}

export default Timer;
