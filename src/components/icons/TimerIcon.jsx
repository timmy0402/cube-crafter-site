import React from "react";

const TimerIcon = ({ width = 64, height = 64, color = "currentColor" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="13" r="8" stroke={color} strokeWidth="2" />
    <path
      d="M12 9V13L15 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2V5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18.5 5.5L20 4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5.5 5.5L4 4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default TimerIcon;
