import React from "react";
import cl from "./MyInput.module.css";

function MyInput(props) {
    return (
        <form className={cl.searchForm}>
            <input className={cl.myInput} {...props} />
            <button onClick={props.clearSearch} className={cl.inputBtn} type="reset">
                x
            </button>
        </form>
    );
}

export default MyInput;
