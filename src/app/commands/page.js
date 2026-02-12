'use client';
import React from "react";
import "../../styles/Commands.css";

const commands = [
    {
        name: "/scramble",
        description: "Generates a random official WCA scramble and visual representation for the specified puzzle.",
        usage: "/scramble puzzle: 3x3"
    },
    {
        name: "/stopwatch",
        description: "Launches an interactive stopwatch to record your solves directly in Discord. Automatically logs results.",
        usage: "/stopwatch puzzle: 3x3"
    },
    {
        name: "/time",
        description: "Displays your 15 most recent solves and calculates current averages (Ao5, Ao12) for a puzzle.",
        usage: "/time puzzle: 3x3"
    },
    {
        name: "/delete_time",
        description: "Removes a specific solve from your history using its unique TimeID (found in /time output).",
        usage: "/delete_time id: 12345"
    },
    {
        name: "/oll",
        description: "View OLL (Orientation of the Last Layer) algorithms with visual guides. Supports filtering by group.",
        usage: "/oll group: Dot"
    },
    {
        name: "/pll",
        description: "View PLL (Permutation of the Last Layer) algorithms with visual guides. Supports filtering by group.",
        usage: "/pll group: Edges Only"
    },
    {
        name: "/personal_bests",
        description: "Show your personal records, including best single time and best averages for a specific puzzle.",
        usage: "/personal_bests puzzle: 3x3"
    },
    {
        name: "/invite",
        description: "Generates an invite link to add Cube Crafter to your own Discord server.",
        usage: "/invite"
    },
    {
        name: "/help",
        description: "Provides a list of all available commands with descriptions and usage examples.",
        usage: "/help"
    }
];

const Commands = () => {
    return (
        <div className="commands-container">
            <div className="commands-header">
                <h1 className="commands-title">Commands Reference</h1>
                <p className="commands-subtitle">Master every feature of Cube Crafter</p>
            </div>

            <div className="commands-grid">
                {commands.map((cmd, index) => (
                    <div key={index} className="command-card">
                        <div className="command-name">{cmd.name}</div>
                        <p className="command-description">{cmd.description}</p>
                        <div className="command-usage">
                            <span className="usage-label">Example Usage</span>
                            <div className="usage-code">{cmd.usage}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Commands;
