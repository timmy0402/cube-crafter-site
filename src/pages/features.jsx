import React from "react";
import "../styles/Features.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Features = () => {
    return (
        <>
            <Navbar />

            <div className="contents">
                <h1 className="title">Features</h1>
                <h2 className="header">Create Scramble</h2>
                <p className="description">
                    Scramble for all WCA puzzles are supported using csTimer
                    (WCA Official Scrambler) algorithms.
                </p>

                <h2 className="header">Image Generation</h2>
                <p className="description">
                    Transform your solving experience with our innovativeBot
                    create a detailed image of each face of your cube,
                    accurately reflecting the scramble. This tool ensures you
                    can easily verify and track your scramble, making practice
                    and competition preparation more precise and efficient than
                    ever before.
                </p>
                <p className="descrption">
                    <strong>Supported puzzle:</strong> 3x3
                </p>
                <h2 className="header">Timer</h2>
                <p className="description">
                    Elevate your solving sessions with our built-in timer
                    feature. Designed for speed cubers of all levels, it allows
                    you to accurately measure your solving time with precision.
                </p>
                <p className="description">
                    <strong>Comming: </strong> Track time and average time
                </p>
            </div>

            <Footer />
        </>
    );
};

export default Features;
