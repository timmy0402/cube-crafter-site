import React from "react";
import FeatureCube from "@/components/FeatureCube";
import "../../styles/Features.css"; // Keep general layout styles

export const metadata = {
    title: "Features",
    description: "Explore all Cube Crafter features: WCA scrambles, image generation, advanced timer, daily competitions, and solve tracking.",
};

const Features = () => {
    return (
        <div className="features-container">
            <div className="features-header">
                <h1 className="title">Features</h1>
                <p className="subtitle">Explore the capabilities of Cube Crafter</p>
            </div>

            <FeatureCube />
            
        </div>
    );
};

export default Features;
