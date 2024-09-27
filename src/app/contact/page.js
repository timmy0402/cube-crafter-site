import React from "react";
import "../../styles/Features.css";

const Contact = () => {
    return (
        <>
            <div className="contact">
                <h1>Contact Us</h1>
                <p>
                    Get in touch with us to get your suggestions, questions
                    through:
                </p>
                <h2 className="header">Email</h2>
                <p>cubecraftersdiscordcontact@gmail.com</p>
                <h2 className="header">Discord Support Server</h2>
                <a href="https://discord.gg/sq4Qa9vavc" className="btn">
                    Join us
                </a>
            </div>
        </>
    );
};

export default Contact;
