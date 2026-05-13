import React from "react";
import FeatureRequestForm from "@/components/FeatureRequestForm";
import "../../styles/FeatureRequest.css";

export const metadata = {
    title: "Feature Request",
    description: "Suggest a new feature or improvement for the Cube Crafter Discord bot.",
};

const FeatureRequestPage = () => {
    return (
        <div className="fr-container">
            <FeatureRequestForm />
        </div>
    );
};

export default FeatureRequestPage;
