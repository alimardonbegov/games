import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav_block">
                <div className="nav_link">
                    <Link to="/home"> Home</Link>
                </div>
                <div className="nav_link">
                    <Link to="/about"> About</Link>
                </div>
                <div className="nav_link">
                    <Link to="/contact"> Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
