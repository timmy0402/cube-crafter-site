import React, { useEffect } from "react";
import { useState, useRef } from "react";

export default function Timer() {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    const [isReady, setIsReady] = React.useState(false);
    const [timerID, setTimerID] = React.useState(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 10);
            setTimerID(id);
        }
    };

    const stopTimer = () => {
        if (isRunning) {
            clearInterval(timerID);
            setIsRunning(false);
        }
    };
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "Space") {
                event.preventDefault(); // Prevent default spacebar scroll behavior
                console.log("press ready: " + isReady);
                console.log("press running: " + isRunning);
                if (!isRunning && !isReady) {
                    setIsReady(true);
                    setTime(0);
                } else if (isRunning && !isReady) {
                    stopTimer();
                }
            }
        };
        const handleKeyUp = (event) => {
            if (event.code === "Space") {
                if (isReady && !isRunning) {
                    startTimer();
                    setIsReady(false);
                }
            }
        };

        // Attach event listener
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("keyup", handleKeyUp);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("keyup", handleKeyUp);
            if (timerID) clearInterval(timerID);
        };
    }, [isRunning, isReady, timerID]);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    return (
        <>
            <div className="timer">
                <p className="time">
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}:
                    {milliseconds.toString().padStart(2, "0")}
                </p>
            </div>
            <div className="average">
                <div className="ao5">
                    <p></p>
                </div>
                <div className="ao10"></div>"
            </div>
        </>
    );
}
