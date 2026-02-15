'use client';
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Navbar.css';
import ThemeToggle from "./ThemeToggle";
import MenuIcon from "./icons/MenuIcon";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-header">
                <div className="nav-left">
                    <Image
                        src="/images/logo-transparent.webp"
                        alt="Cube Crafter Logo"
                        width={75}
                        height={75} />
                    <p>Cube Crafter</p>
                </div>
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    <MenuIcon />
                </button>
            </div>
            
            <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
                <Link href="/" aria-label="Home" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/features" aria-label="Features" onClick={() => setIsMenuOpen(false)}>Features</Link>
                <Link href="/commands" aria-label="Commands" onClick={() => setIsMenuOpen(false)}>Commands</Link>
                <Link href="/contact" aria-label="Contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <div className="mobile-only-theme-toggle">
                     <ThemeToggle />
                </div>
                <div className="desktop-only-theme-toggle">
                     <ThemeToggle />
                </div>

                <Link href="https://discord.com/oauth2/authorize?client_id=1197268536918278236" aria-label="Invite Bot" className="invite-btn">
                    Invite Bot
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
