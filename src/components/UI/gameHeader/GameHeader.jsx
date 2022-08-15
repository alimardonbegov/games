import React from "react";
import cl from "./GameHeader.module.css";

function GameHeader(props) {
    return (
        <div>
            <h1 className={cl.gameHeader}>{props.namePlatform} games</h1>
        </div>
    );
}

export default GameHeader;
