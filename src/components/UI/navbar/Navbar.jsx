import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";

function Navbar(props) {
    return (
        <div className={cl.navBlock}>
            <div onClick={props.onClickHomePage}>
                <Link to="/home"> Home</Link>
            </div>
            <div>
                <Link to="/about"> About</Link>
            </div>
            <div>
                <Link to="/contact"> Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
