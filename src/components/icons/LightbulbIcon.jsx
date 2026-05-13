import React from "react";

const LightbulbIcon = ({ width = 24, height = 24, color = "currentColor" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M12 2a7 7 0 0 0-4 12.7c.9.7 1.5 1.7 1.7 2.8.1.5.5.9 1 .9h2.6c.5 0 .9-.4 1-.9.2-1.1.8-2.1 1.7-2.8A7 7 0 0 0 12 2z"></path>
  </svg>
);

export default LightbulbIcon;
