import React from "react";
import MyButton from "./UI/myButton/MyButton";

function BottomButtons(props) {
    return (
        <div className="bottom_btns">
            <div className="btn_div">
                <MyButton onClick={props.action1btn}>{props.textValue1}</MyButton>
            </div>

            <div className="btn_div">
                <MyButton onClick={props.action2btn}>{props.textValue2}</MyButton>
            </div>
            <div className="btn_div">
                <MyButton onClick={props.action3btn}>{props.textValue3}</MyButton>
            </div>
        </div>
    );
}

export default BottomButtons;
