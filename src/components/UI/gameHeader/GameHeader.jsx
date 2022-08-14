import React from "react";
import cl from "./GameHeader.module.css";
function GameHeader(props) {
    return (
        <div>
            <h1 className={cl.gameHeader}>{props.platform} games</h1>
        </div>
    );
}

export default GameHeader;
