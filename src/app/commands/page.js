import React from "react";
import "../../styles/Commands.css";

export const metadata = {
    title: "Commands",
    description: "Complete Cube Crafter command reference: /scramble, /stopwatch, /time, /daily, /oll, /pll, and more Discord bot commands.",
};

const commands = [
    {
        name: "/scramble",
        description: "Generates a random official WCA scramble and visual representation for the specified puzzle.",
        usage: "/scramble puzzle: 3x3"
    },
    {
        name: "/sessions",
        description: "Generates multiple scrambles of the same puzzle type",
        usage: "/sessions puzzle: 3x3 count: 10"
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
        name: "/adjust_time",
        description: "Adjust a speicific solve from your history by adding +2 or mark DNF",
        usage: "/adjust_time id: 123 operation: +2/DNF"
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
        name: "/daily",
        description: "Start your daily challenge! Generates today's official scramble for you to solve and submit.",
        usage: "/daily"
    },
    {
        name: "/reminder",
        description: "Daily reminder on your DM at any timezone you like",
        usage: "/reminder set/show/disable"
    },
    {
        name: "/leaderboard",
        description: "View the current server leaderboard for today's daily challenge.",
        usage: "/leaderboard"
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
