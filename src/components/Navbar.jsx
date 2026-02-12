import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Navbar.css';
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Image
                    src="/images/logo-transparent.webp"
                    alt="Cube Crafter Logo"
                    width={75}
                    height={75} />
                <p>Cube Crafter</p>
            </div>
            <div className="nav-right">
                <Link href="/" aria-label="Home">Home</Link>
                <Link href="/features" aria-label="Features">Features</Link>
                <Link href="/commands" aria-label="Commands">Commands</Link>
                <Link href="/contact" aria-label="Contact">Contact</Link>
                <ThemeToggle />
                <Link href="https://discord.com/oauth2/authorize?client_id=1197268536918278236" aria-label="Invite Bot" className="invite-btn">
                    Invite Bot
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
