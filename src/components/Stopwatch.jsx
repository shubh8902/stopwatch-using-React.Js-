import React, { useEffect, useState } from 'react'

function Stopwatch() {
    //State to store time
    const [time, setTime] = useState(0);
    //State to check Stopwatch is running or not
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
     let intervalId;
     if (isRunning) {
        // increasing time by 1 every 10 millisecond by using js setInterval method
        intervalId = setInterval(()=> setTime(time + 1), 10);
     }
     return ()=> clearInterval(intervalId);
    },[isRunning, time])

    //Minutes Calculation
    const minutes = Math.floor((time % 360000) / 6000);

    //Seconds Calculation
    const seconds = Math.floor((time % 6000) / 100);

    //Milliseconds Calculation
    const milliseconds = Math.floor(time % 100);

    //Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
    }

    //Method to reset time back to 0
    const reset = () => {
        setTime(0);
    }
    
  return (
    <div className="stopwatch">
        <h1 className='timer'>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}:{milliseconds.toString().padStart(2, '0')}</h1>
        <br />
        <br />
        <div className="buttons">
        <button type="button" onClick={startAndStop} class="btn btn-lg btn-success">{isRunning ? "Stop" : "Start"}</button>
        <button type="button" onClick={reset} class="btn btn-lg btn-danger">Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch