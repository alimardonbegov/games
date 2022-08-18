import React from "react";
import Background from "../components/UI/background/Background";
import ContactLine from "../components/UI/contactLine/ContactLine";
import Footer from "../components/UI/footer/Footer";
import Navbar from "../components/UI/navbar/Navbar";
import { personalContacts } from "../utils/personalContacts";

function Contact() {
    return (
        <div className="App">
            <Navbar />
            <div className="textBlock">
                {personalContacts.map((contact) => (
                    <ContactLine
                        key={contact.name}
                        name={contact.name}
                        logo={contact.logo}
                        href={contact.link}
                    />
                ))}
            </div>
            <Background />
            <Footer />
        </div>
    );
}

export default Contact;
