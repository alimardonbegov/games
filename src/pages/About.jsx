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
                <a target="_blank" href="https://sampleapis.com/" style={{ color: "#6442ffd0" }}>
                    {" "}
                    SAMPLEAPI
                </a>
            </div>
            <Background />
            <Footer />
        </div>
    );
}

export default About;
