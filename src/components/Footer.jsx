import React from "react";
import Image from 'next/image';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Image
                    src="/images/logo.jpg"
                    alt="Cube Crafter Logo"
                    width={100}
                    height={100}
                />
            </div>
            <div className="footer-right">
                <p>Cube Crafter</p>
                <ul>
                    <li><a>Terms of Service</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;