import React from "react";
import cl from "./MyInput.module.css";

function MyInput(props) {
    return (
        <form className={cl.searchForm}>
            <input className={cl.myInput} {...props} />
            <button onClick={props.clearSearch} className={cl.inputBtn} type="reset">
                <i class="fa-solid fa-delete-left"></i>
            </button>
        </form>
    );
}

export default MyInput;
