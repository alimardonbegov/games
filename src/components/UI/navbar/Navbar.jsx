import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.scss";

function Navbar(props) {
    return (
        <div className={cl.navBlock}>
            <div className={cl.navLink} onClick={props.onClickHomePage}>
                <Link to="/home"> HOME</Link>
            </div>
            <div className={cl.navLink}>
                <Link to="/about"> ABOUT</Link>
            </div>
            <div className={cl.navLink}>
                <Link to="/contact"> CONTACT</Link>
            </div>
        </div>
    );
}

export default Navbar;
