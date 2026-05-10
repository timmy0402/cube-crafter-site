import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/FeaturesGrid.css";

import scrambleMockup from "../../public/images/scramble_mockup.webp";
import stopwatchMockup from "../../public/images/stopwatch_mockup.webp";
import dailyMockup from "../../public/images/daily_mockup.webp";
import timeMockup from "../../public/images/time_mockup.webp";

// 9-cell sticker patterns — 'Y' is yellow last-layer; '-' is any non-yellow
// side color (rendered as a muted neutral so the recognizable yellow shape
// reads at a glance).
const OLL_PATTERN = ['Y', '-', 'Y', '-', 'Y', '-', 'Y', '-', 'Y'];
const PLL_PATTERN = ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'];

// DualAlgPreview — two mini sticker faces side-by-side (OLL + PLL) with the
// command labels under each. Stand-in for an OLL/PLL screenshot until real
// mockups exist.
const DualAlgPreview = () => (
    <div className="alg-preview alg-preview-dual">
        <div className="alg-preview-pair">
            <div className="alg-preview-face">
                {OLL_PATTERN.map((c, i) => (
                    <span key={i} className="alg-preview-cell" data-color={c} />
                ))}
            </div>
            <span className="alg-preview-label">OLL · 57 cases</span>
        </div>
        <div className="alg-preview-pair">
            <div className="alg-preview-face">
                {PLL_PATTERN.map((c, i) => (
                    <span key={i} className="alg-preview-cell" data-color={c} />
                ))}
            </div>
            <span className="alg-preview-label">PLL · 21 cases</span>
        </div>
    </div>
);

// Per-image focal point — original screenshots are full Discord-window
// mockups; the actual bot embed sits center-left on most. object-position
// shifts the cover-crop so the embed (not the empty sidebar chrome) lands in
// the visible area at the row's half-canvas width.
const ROW_FEATURES = [
    {
        id: "scramble",
        tag: "/scramble",
        title: "Official WCA scrambles",
        desc: "Generate scrambles for 2×2 through 7×7, plus Pyraminx, Megaminx, Skewb and Square-1 — every face rendered inline so the cube state is right there in chat.",
        img: scrambleMockup,
        focal: "42% 62%",
    },
    {
        id: "time",
        tag: "/time",
        title: "Keep track of your times",
        desc: "Log every solve to your personal record. Pull up your latest 10, 50, or 100 times whenever you want, right inside Discord — no spreadsheet required.",
        img: timeMockup,
        focal: "32% 50%",
    },
    {
        id: "stopwatch",
        tag: "/stopwatch",
        title: "Built-in stopwatch",
        desc: "Start, stop, +2, DNF, save or delete — every action a button. Each confirmed solve auto-logs to your timer history with no extra commands.",
        img: stopwatchMockup,
        focal: "30% 50%",
    },
    {
        id: "daily",
        tag: "/leaderboard",
        title: "Daily competitions",
        desc: "A server-wide daily scramble. Everyone solves the same cube, climbs the same leaderboard. Compete with your community without leaving the chat.",
        img: dailyMockup,
        focal: "32% 50%",
    },
];

const FeatureRow = ({ feature, flip }) => (
    <article className="fg-row" data-flip={flip ? "true" : undefined}>
        <div
            className="fg-row-media"
            style={{ "--focal": feature.focal }}
        >
            <div className="fg-row-glow" aria-hidden="true" />
            <div className="fg-row-frame">
                <Image
                    src={feature.img}
                    alt={feature.title}
                    placeholder="blur"
                    sizes="(max-width: 960px) 100vw, 560px"
                />
            </div>
        </div>
        <div className="fg-row-content">
            <span className="fg-tag">{feature.tag}</span>
            <h3 className="fg-row-title">{feature.title}</h3>
            <p className="fg-row-desc">{feature.desc}</p>
        </div>
    </article>
);

const FeaturesGrid = () => {
    return (
        <section className="fg-section">
            <div className="fg-inner">
                <header className="fg-header">
                    <div>
                        <div className="fg-eyebrow">What it does</div>
                        <h2 className="fg-title">
                            Everything a cubing server needs
                        </h2>
                    </div>
                    <p className="fg-lede">
                        Six commands, no setup. The bot meets your community where it
                        already is.
                    </p>
                </header>

                <div className="fg-rows">
                    {ROW_FEATURES.map((f, i) => (
                        <FeatureRow key={f.id} feature={f} flip={i % 2 === 1} />
                    ))}
                </div>

                <div className="fg-bottom-row">
                    <article className="fg-card">
                        <div className="fg-card-media">
                            <DualAlgPreview />
                        </div>
                        <div className="fg-card-body">
                            <span className="fg-tag">/oll · /pll</span>
                            <h3 className="fg-card-title">
                                OLL & PLL reference
                            </h3>
                            <p className="fg-card-desc">
                                All 57 OLL and 21 PLL cases at your fingertips, with
                                notation ready to copy into your timer.
                            </p>
                        </div>
                    </article>
                    <article className="fg-card fg-card-cta">
                        <div className="fg-card-body fg-card-cta-body">
                            <span className="fg-tag">/invite</span>
                            <h3 className="fg-card-title">Free for any server</h3>
                            <p className="fg-card-desc">
                                One slash command to invite. No paywall, no rate limits,
                                no nonsense.
                            </p>
                            <div className="fg-card-cta-actions">
                                <a
                                    className="fg-card-cta-btn"
                                    href="https://discord.com/oauth2/authorize?client_id=1197268536918278236"
                                >
                                    Add to Discord →
                                </a>
                                <Link
                                    className="fg-card-cta-link"
                                    href="/commands"
                                >
                                    See all commands
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
