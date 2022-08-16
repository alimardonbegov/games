import React from "react";

function ContactLine(props) {
    return (
        <div className="block_link">
            <a className="link" target="_blank" href={props.href}>
                {props.logo}
                {props.name}
            </a>
        </div>
    );
}

export default ContactLine;
