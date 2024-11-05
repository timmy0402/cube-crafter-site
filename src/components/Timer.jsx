import React, { useEffect } from "react";
import { useState, useRef } from "react";

export default function Timer() {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        let intervalID;
        if (isRunning) {
            intervalID = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalID);
    }, [isRunning, time]);

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
                <input
                    ref={inputRef}
                    type="text"
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                />
            </div>
        </>
    );
}
