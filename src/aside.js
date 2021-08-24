import React from "react";
import "./css/aside.css";
import ornament from "./images/ornament.png";
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Aside(props) {
    let [state, setState] = useState(true);
    function openAside() {
        state ? setState(false) : setState(true);
    }
    return (
        <aside className={state ? null : "animateAside"}>
            <div className="menu" onClick={openAside}>
                <i class="bi bi-justify"></i>
            </div>
            <div className={state ? "none" : "asideContainer"} >
            {
                props.links.map((el, i) => {
                    return (
                        <>
                        <img src={ornament} key={i}/>
                        <br/>
                        <Link to={el.link} key={i}>{el.title}</Link>
                        <br/>
                        <img src={ornament} key={i}/>
                        <br/>
                        </>
                    )
                })
            }
            
            </div>
        </aside>
    )
}