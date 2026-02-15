import React from "react";

const CommunityIcon = ({ width = 64, height = 64, color = "currentColor" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="2" />
    <path
      d="M2 21V19C2 16.7909 3.79086 15 6 15H12C14.2091 15 16 16.7909 16 19V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3.13C16.8604 3.35031 17.623 3.81821 18.2155 4.51554C18.8081 5.21287 19.1928 6.10011 19.3083 7.02533C19.4238 7.95054 19.2628 8.85967 18.8436 9.60557C18.4245 10.3515 17.7663 10.8906 16.974 11.13"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 15C18.7614 15 21 17.2386 21 20V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CommunityIcon;
