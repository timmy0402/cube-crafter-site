import React, { useEffect } from "react";
import { useState } from "react";

export default function Timer(){
    const [time, setTime] = React.useState(0);
    const [isRunning,setIsRunning] = React.useState(false);

    useEffect(() =>{
        let intervalID;
        if (isRunning){
            intervalID = setInterval(() => setTime(time+1),10);
        }
        return () => clearInterval(intervalID);
    },[isRunning, time]);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

      // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };
    return(        
        <>
            <div className="timer">
                <p className="time">
                    {seconds.toString().padStart(2, "0")}:
                    {milliseconds.toString().padStart(2, "0")}
                </p>
            </div>
        </>
    )
}