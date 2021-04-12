import React from "react";
import "./css/backButtonStyles.css";
import arrow from "./images/arrow.png";

export default function BackButton(props) {
    return (
        <div id="backBtn" onClick={() => props.goBack()}>
            <img src={arrow} alt="back"/>
                <div id="backBtnText">Back</div>
        </div>
    )
}