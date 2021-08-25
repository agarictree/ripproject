import React, { useEffect } from "react";
import "./css/aside.css";
import ornament from "./images/ornament.png";
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Aside(props) {
    let [state, setState] = useState(false);
    function resizeWindow() {
        let width = window.innerWidth;
        if(width <= 768) {
            setState(true);
        } else {
            setState(false);
        }
    }
    function openAside() {
        state ? setState(false) : setState(true);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
    })
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
                        </>
                    )
                })
            }
            
            </div>
        </aside>
    )
}