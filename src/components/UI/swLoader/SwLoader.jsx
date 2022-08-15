import React from "react";
import cl from "./SwLoader.module.scss";

function SwLoader() {
    return (
        <div className={cl.containerSwLoader}>
            <div className={cl.joyconsSwLoader}>
                <div className={cl.left_joyconSwLoader}></div>
                <div className={cl.right_joyconSwLoader}></div>
            </div>
            <div className={cl.logoSwLoader}>
                <div className={cl.nintendoSwLoader}>Nintendo</div>
                <div className={cl.lettersSwLoader}>
                    <span>S</span>
                    <span>w</span>
                    <span>i</span>
                    <span>t</span>
                    <span>c</span>
                    <span>h</span>
                </div>
            </div>
        </div>
    );
}

// https://codepen.io/recklessrainb0w/pen/zMeaNE

export default SwLoader;
