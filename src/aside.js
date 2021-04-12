import React from "react";
import "./css/aside.css";
import ornament from "./images/ornament.png";
import {Link} from "react-router-dom";

export default function Aside(props) {
    return (
        <aside>
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
        </aside>
    )
}