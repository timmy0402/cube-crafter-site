import React, { useEffect } from "react";
import { useState, useRef } from "react";

export default function Timer() {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const [timerID,setTimerID] = React.useState(null);

    const startTimer = () => {
        if(!isRunning){
            setIsRunning(true);
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            },10);
            setTimerID(id);
        }
    };

    const stopTimer = () => {
        if(isRunning){
            clearInterval(timerID);
            setIsRunning(false);
        }
    }
    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.code === 'Space') {
            event.preventDefault(); // Prevent default spacebar scroll behavior
            if (isRunning) {
              stopTimer();
            } else {
              startTimer();
            }
          }
        };
    
        // Attach event listener
        document.addEventListener('keydown', handleKeyPress);
    
        // Cleanup event listener on component unmount
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
          if (timerID) clearInterval(timerID);
        };
      }, [isRunning, timerID]);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };

    const handleKeyUp = (event) => {
        if (event.key === " ") {
            console.log("key up");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === " ") {
            console.log("key down");
        }
    };


    return (
        <>
            <div className="timer">
                <p className="time">
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}:
                    {milliseconds.toString().padStart(2, "0")}
                </p>
            </div>
        </>
    );
}
