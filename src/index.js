import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./css/styles.css";
import Main from "./main";

function Index() {
    return (
        <>
            <Main />
        </>
    )
}

ReactDOM.render( <HashRouter><Index /></HashRouter>, document.getElementById("root"));