import React from "react";
import Aside from "./aside";
import "./css/style-news.css";
import NewsRouter from "./newsRouter";

export default function News() {
    return (
        <section className="news-section">
            <Aside links={[
                {link: "/news/june20", title: "На кладбище в Челябинске незаконно срубили 55 деревьев<br/>20 июня"},
                {link: "/news/june19", title: "Немка призвала найти родственников похороненных на кладбище русских солдат<br/>19 июня"},
                {link: "/news/june19", title: "Мусульмане провели субботник на кладбище<br/>19 июня"},
                {link: "/news/archive", title: "Архив новостей"},
            ]}/>
            <NewsRouter />
        </section>
    )
}