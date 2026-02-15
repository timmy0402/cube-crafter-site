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
                        Elevate your Discord server with Cube Crafter. Get
                        official WCA scrambles, visual guides, and advanced
                        solve tracking directly in your community.
                    </p>
                    <p style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                        🔥 New: Daily Challenges & Leaderboards! 🔥
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
                        <a href="https://top.gg/bot/1197268536918278236" className="btn">
                            Vote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
