import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Image
                    src="/images/logo.jpg"
                    alt="Cube Crafter Logo"
                    width={75}
                    height={75} />
                <p>Cube Crafter</p>
            </div>
            <div className="nav-right">
                <Link href="/" aria-label="Home">Home</Link>
                <Link href="/features" aria-label="Features">Features</Link>
                <Link href="/contact" aria-label="Contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
