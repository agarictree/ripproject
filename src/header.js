import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./css/header.css";

export default function Header() {
    let [state, setState] = useState(false);
    function resizeWindow() {
        let width = window.innerWidth;
        if(width <= 768) {
            setState(true);
        } else {
            setState(false);
        }
    }

    function openHeadMenu() {
        state ? setState(false) : setState(true);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
    })
    return (
    <header>
        <Link to="/" className="header-link">
            <div>Memento Mori</div>
        </Link>
        <div className="header-menu" onClick={openHeadMenu}>
            { state ? <i className="bi bi-caret-down-fill"></i> : <i className="bi bi-caret-up-fill"></i>}
            Open menu
        </div>
    <nav hidden={state}>
        <ul>
        <li><Link to="/">На главную</Link></li>
         <li><Link to="/about">О нас</Link></li>
         <li><Link to="/gallery">Галерея</Link></li>
         <li><Link to="/articles">Статьи</Link></li>
         <li><Link to="/cemeteries">Адреса кладбищ</Link></li>
         <li><Link to="/news">Новости</Link></li>
         <li><Link to="/media">Медиа</Link></li>
        </ul>
    </nav>
    </header>
    )
}