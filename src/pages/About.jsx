import React from "react";
import BottomButtons from "../components/BottomButtons";
import Background from "../components/UI/background/Background";
import Navbar from "../components/UI/navbar/Navbar";

function About() {
    const nameAPI = ["PS API", "Xbox API", "Switch API"];

    return (
        <div className="App">
            <Navbar />
            <div className="textBlock">
                This is the fun project created with{" "}
                <span style={{ color: "rgba(50, 50, 50, 1)" }}>SAMPLEAPI.com</span>
            </div>
            <BottomButtons key={nameAPI} textButton={nameAPI} />
            <footer> Designed and build by Alimardon </footer>
            <Background />
        </div>
    );
}

export default About;
