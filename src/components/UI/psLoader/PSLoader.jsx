import React from "react";
import cl from "./PSLoader.module.scss";

function PSLoader() {
    return (
        <div className={cl.loader}>
            <div className={cl.symbol}>
                <div className={cl.symbol__triangle}></div>
            </div>
            <div className={cl.symbol}>
                <div className={cl.symbol__circle}></div>
            </div>
            <div className={cl.symbol}>
                <div className={cl.symbol__cross}></div>
            </div>
            <div className={cl.symbol}>
                <div className={cl.symbol__square}></div>
            </div>
        </div>
    );
}
// https://codepen.io/stphnnnn/pen/BPboyN

export default PSLoader;
