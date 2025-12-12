'use client';
import React from "react";
import "../../styles/Contact.css";
import CommunityIcon from "@/components/icons/CommunityIcon";

// Simple Mail Icon SVG
const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// Simple Discord Icon SVG
const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);


const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-subtitle">
                    Have questions, suggestions, or found a bug? 
                    We'd love to hear from you.
                </p>

                <div className="contact-methods">
                    {/* Email Section */}
                    <div className="contact-item">
                        <div className="icon-wrapper">
                            <MailIcon />
                        </div>
                        <div className="info-content">
                            <h3>Email Support</h3>
                            <p>cubecraftersdiscordcontact@gmail.com</p>
                        </div>
                    </div>

                    {/* Discord Section */}
                    <div className="contact-item">
                        <a href="https://discord.gg/sq4Qa9vavc" className="discord-link" target="_blank" rel="noopener noreferrer">
                            <div className="icon-wrapper" style={{color: '#5865F2'}}>
                                <CommunityIcon width={28} height={28} color="#5865F2" />
                            </div>
                            <div className="info-content">
                                <h3>Community Server</h3>
                                <p>Join our Discord</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;