import React from "react";
import {Link} from "react-router-dom";
import onclickHandler from "./dropdownlist.js";

export default function CemeteriesMain(props) {
    return (
        <main>
            <h1>Кладбища крупных городов</h1>
            <ul className="articles-list cemeteries">
                <li>
                    <Link to="cemeteries/nn">Нижний Новгород</Link>
                </li>
                <li>
                    <Link to="cemeteries/moscow">Москва</Link>
                </li>
                <li>
                    <Link to="cemeteries/piter">Санкт-Петербург</Link>
                </li>
                <li>
                    <Link to="cemeteries/vladimir">Владимир</Link>
                </li>
            </ul>
        </main>
    )
}