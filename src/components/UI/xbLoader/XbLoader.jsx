import React from "react";
import cl from "./XbLoader.module.scss";

function XbLoader() {
    return (
        <div className={cl.containerXbLoader}>
            <div className={cl.blockXbLoader}>
                <div className={cl.vaXbLoader}>
                    {/* <i class="fa-brands fa-xbox"></i> */}
                    <img className={cl.xboxImg} src="http://uix.me/dl/codepen/xbox.svg" />
                    <div>
                        <span className={cl.loaderXbLoader}></span>
                        <span className={cl.loaderXbLoader}></span>
                        <span className={cl.loaderXbLoader}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// https://codepen.io/kadirinan/pen/dPXVNR
export default XbLoader;
