import React from "react";
import BottomButtons from "../components/BottomButtons";
import Background from "../components/UI/background/Background";
import Navbar from "../components/UI/navbar/Navbar";

function Contact() {
    return (
        <div className="App">
            <Navbar />
            <div className="textBlock"></div>
            <BottomButtons />
            <footer> Designed and build by Alimardon </footer>
            <Background />
        </div>
    );
}

export default Contact;
