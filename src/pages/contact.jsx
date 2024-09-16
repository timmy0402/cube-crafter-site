import React from "react";
import "../styles/Features.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contents">
                <h1>Contact Us</h1>
                <p>
                    Get in touch with us to get your suggestions, questions
                    through:
                </p>
                <h2 className="header">Email</h2>
                <p>cubecraftersdiscordcontact@gmail.com</p>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
