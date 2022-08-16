import React from "react";
import Background from "../components/UI/background/Background";
import Footer from "../components/UI/footer/Footer";
import Navbar from "../components/UI/navbar/Navbar";

function About() {
    return (
        <div className="App">
            <Navbar />
            <div className="textBlock">
                This project was created with
                <span style={{ color: "#6442ffd0" }}> SAMPLEAPI.com</span>
            </div>
            <Background />
            <Footer />
        </div>
    );
}

export default About;
