import React from 'react';
import '../styles/Hero.css'; // Import the CSS file for styling
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content-wrapper">
                <div className="logo">
                    <Image
                        src="/images/logo-transparent.png"
                        alt="Cube Crafter Logo"
                        width={250}
                        height={250}
                        className="centered-logo"
                    />
                </div>
                <div className="hero-content">
                    <h1>Scramble & Solve with Ease</h1>
                    <p>Join Cube Crafter and master the art of solving Rubik's Cubes.</p>
                    <div className="hero-buttons">
                        <a href="https://discord.com/oauth2/authorize?client_id=1197268536918278236" className="btn">Invite Bot</a>
                        <a href="/learn-more" className="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
