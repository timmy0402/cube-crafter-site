import React from "react";
import "../styles/Hero.css";
import Image from "next/image";
import ServerCount from "./ServerCount";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content-wrapper">
                <div className="logo">
                    <Image
                        src="/images/logo-transparent.webp"
                        alt="Cube Crafter Logo"
                        width={250}
                        height={250}
                        className="centered-logo"
                    />
                </div>
                <div className="hero-content">
                    <h1>Scramble & Solve with Ease</h1>
                    <p>
                        Join Cube Crafter and master the art of solving Rubik's
                        Cubes.
                    </p>
                    <ServerCount />
                    <div className="hero-buttons">
                        <a
                            href="https://discord.com/oauth2/authorize?client_id=1197268536918278236"
                            className="btn"
                        >
                            Invite Bot
                        </a>
                        <a href="/features" className="btn">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
