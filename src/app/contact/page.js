import React from "react";
import Link from "next/link";
import "../../styles/Contact.css";
import CommunityIcon from "@/components/icons/CommunityIcon";
import LightbulbIcon from "@/components/icons/LightbulbIcon";
import MailIcon from "@/components/icons/MailIcon";

export const metadata = {
    title: "Contact",
    description: "Get in touch with the Cube Crafter team. Join our Discord community, request features, or report bugs.",
};

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

                    {/* Feature Request Section */}
                    <div className="contact-item">
                        <Link href="/feature-request" className="discord-link">
                            <div className="icon-wrapper">
                                <LightbulbIcon />
                            </div>
                            <div className="info-content">
                                <h3>Feature Request</h3>
                                <p>Suggest an idea for the bot</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;