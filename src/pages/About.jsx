import React from "react";
import Background from "../components/UI/background/Background";
import Footer from "../components/UI/footer/Footer";
import Navbar from "../components/UI/navbar/Navbar";

function About() {
    return (
        <div className="App">
            <Navbar />
            <div className="textBlock" style={{ width: "95%" }}>
                This project was created with{" "}
                <a className="link_project_git" target="_blank" href="https://sampleapis.com/">
                    SAMPLEAPIS
                </a>
                <br /> Check this project on{" "}
                <a
                    className="link_project_git"
                    target="_blank"
                    href="https://github.com/alimardonbegov/games"
                >
                    {" "}
                    GitHub
                </a>
            </div>
            <Background />
            <Footer />
        </div>
    );
}

export default About;
