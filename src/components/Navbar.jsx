import React from "react";
import Image from 'next/image';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Image src="/images/logo.jpg"
                    alt="Cube Crafter Logo"
                    width={75}
                    height={75} />
                <p>Cube Crafter</p>
            </div>
            <div className="nav-right">
                <a href="/">Home</a>
                <a href="/">Features</a>
                <a href="/">Commands</a>
                <a href="/">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
