import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/Footer.css";

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
                    <li>
                        <Link href="/terms" aria-label="Terms">
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link href="/policy">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
