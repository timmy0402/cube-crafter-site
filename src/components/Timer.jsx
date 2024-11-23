import React, { useEffect } from "react";
import { useState, useRef } from "react";

export default function Timer() {
    const [recoredTimes, setRecordedTimes] = React.useState(new Array(10).fill(0));
    const [curr, setCurr] = React.useState(0);
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
            // updating the recorded time array
            // create copy to prevent mutating state
            const newTimes = [...recoredTimes];
            console.log(time);
            newTimes[curr] = time;
            setRecordedTimes(newTimes);

            // Move to the next index and reset the current time
            setCurr((prevCurr) => (prevCurr + 1) % 10);
            console.log(recoredTimes);
        }
    };
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "Space") {
                event.preventDefault(); // Prevent default spacebar scroll behavior
                if (!isRunning && !isReady) {
                    setIsReady(true);
                    console.log(time);
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

    const ao5 = recoredTimes.slice(0, 5).reduce((a, b) => a + b, 0) / 5;
    const ao10 = recoredTimes.slice(0, 10).reduce((a, b) => a + b, 0) / 10;

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
                    <p>ao5: {ao5}</p>
                </div>
                <div className="ao10">
                    <p>ao10: {ao10}</p>
                </div>
            </div>
        </>
    );
}
