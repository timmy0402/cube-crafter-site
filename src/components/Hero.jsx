'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/Hero.css";
import ServerCount from "./ServerCount";

const STATS = [
    { v: "WCA",   l: "Official algos" },
    { v: "Daily", l: "Competitions" },
    { v: "Free",  l: "For any server" },
    { v: "24/7", l: "Uptime" },
];

const STICKER_COLORS = [
    'var(--sticker-y)', 'var(--sticker-r)', 'var(--sticker-w)',
    'var(--sticker-g)', 'var(--sticker-y)', 'var(--sticker-b)',
    'var(--sticker-w)', 'var(--sticker-o)', 'var(--sticker-r)',
];

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-grid">
                <div className="hero-copy">
                    <div className="hero-eyebrow">
                        <span className="hero-eyebrow-dot" aria-hidden="true" />
                        Discord bot for cubers
                    </div>
                    <h1 className="hero-title">
                        Scramble. Solve. Stay&nbsp;sharp.
                    </h1>
                    <p className="hero-sub">
                        Official WCA scrambles, visual cube renders, and a built-in
                        timer that auto-logs every solve — right where your community
                        already hangs out.
                    </p>
                    <div className="hero-buttons">
                        <a
                            className="btn btn-primary"
                            href="https://discord.com/oauth2/authorize?client_id=1197268536918278236"
                            aria-label="Invite Cube Crafter to your Discord"
                        >
                            Invite the bot →
                        </a>
                        <Link href="/features" className="btn btn-secondary" aria-label="See features">
                            See features
                        </Link>
                        <a
                            className="hero-vote"
                            href="https://top.gg/bot/1197268536918278236"
                            aria-label="Vote on top.gg"
                        >
                            ★ Vote on top.gg
                        </a>
                    </div>
                    <ServerCount />
                    <div className="hero-stats">
                        {STATS.map((s) => (
                            <div className="hero-stat" key={s.l}>
                                <div className="hero-stat-v">{s.v}</div>
                                <div className="hero-stat-l">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero-visual" aria-hidden="true">
                    <div className="hero-visual-glow" />
                    <div className="hero-logo-float">
                        <Image
                            src="/images/logo-transparent.webp"
                            alt="Cube Crafter Logo"
                            width={260}
                            height={260}
                            className="hero-logo"
                            priority
                        />
                    </div>
                    <div className="sticker-face">
                        {STICKER_COLORS.map((c, i) => (
                            <span key={i} style={{ background: c }} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
