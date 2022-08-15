import React from "react";
import PSLoader from "./UI/psLoader/PSLoader";
import SwLoader from "./UI/swLoader/SwLoader";
import XbLoader from "./UI/xbLoader/XbLoader";

function Loading(props) {
    if (props.loadingPage.ps === true) {
        return <PSLoader />;
    }
    if (props.loadingPage.xb === true) {
        return <XbLoader />;
    }
    if (props.loadingPage.sw === true) {
        return <SwLoader />;
    }
}

export default Loading;
