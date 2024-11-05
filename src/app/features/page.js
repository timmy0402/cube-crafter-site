import React from "react";
import "../../styles/Features.css";
import Image from "next/image";

const Features = () => {
    return (
        <>
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
                <Image
                    className="feature-image"
                    src="/images/scramble_mockup.webp"
                    width={900}
                    height={600}
                    alt="Scramble image"
                />
                <p className="descrption">
                    <strong>Supported puzzle:</strong> 2x2-7x7
                </p>
                <h2 className="header">Timer</h2>
                <p className="description">
                    Elevate your solving sessions with our built-in timer
                    feature. Designed for speed cubers of all levels, it allows
                    you to accurately measure your solving time with precision.
                </p>
                <p className="description">
                    <strong>Now Avaliable: </strong> Timer automatically log time into database
                </p>
                <p className="description">
                    Review up to <strong>10</strong> most recent solves. <strong>Delete</strong> whenver you felt like
                </p>
                <Image 
                    className="feature-image"
                    src="/images/time_mockup.webp"
                    width={900}
                    height={600}
                    alt="Time image"
                />
                <h2 className="header">Server Count</h2>
                <a href="https://top.gg/bot/1197268536918278236">
                    <Image 
                        src="https://top.gg/api/widget/1197268536918278236.svg"
                        width={300}
                        height={200}
                    />
                </a>

            </div>

        </>
    );
};

export default Features;
