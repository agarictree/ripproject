import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
    <header>
        <Link to="/" className="header-link">
            <div>Memento Mori</div>
        </Link>
    <nav>
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