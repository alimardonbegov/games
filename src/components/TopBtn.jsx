import React from "react";
import MyButton from "./UI/myButton/MyButton";

function TopBtn(props) {
    return (
        <div className="block_top_btn">
            <MyButton onClick={props.onClick} style={{ margin: "1em 0 ", backgroundColor: "#111" }}>
                back to games
            </MyButton>
            <MyButton style={{ margin: "1em 0 ", backgroundColor: "#111" }}>
                Add to wish list
            </MyButton>
            <MyButton style={{ margin: "1em 0 " }}>Add to cart</MyButton>
        </div>
    );
}

export default TopBtn;
