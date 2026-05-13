'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Dark Mode">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
