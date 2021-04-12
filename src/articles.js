import React from "react";
import {Link} from "react-router-dom";
import "./css/style-articles.css";
import ornament from "./images/ornament.png";
import MainArticlesPage from "./articles/mainArticlesPage";

export default function Articles() {
    return (
        <main className="articles-main">
            <aside className="articles-aside">
            <img src={ornament}/><br/>
                <Link to="/articles/ecofuneral">Эко-похороны</Link><br/>
                <img src={ornament}/><br/>
                <Link to="/articles/victorian">Викторианский культ смерти</Link><br/>
                <img src={ornament}/><br/>
                <Link to="/articles/egyptian">Древний Египет</Link><br/>
                <img src={ornament}/><br/>
                <Link to="/articles/greece">Захоронения в древней Греции</Link><br/>
                <img src={ornament}/><br/>
                <Link to="/articles/macabre">Пляска смерти</Link><br/>
                <img src={ornament}/><br/>
                <Link to="/articles/dayofthedead">Мексиканский День Мёртвых</Link><br/>
                <img src={ornament}/><br/>
                <Link to="/articles/pmmyth">Постомортем: мифы и заблуждения</Link><br/>
                <img src={ornament}/><br/>
            </aside>
            <MainArticlesPage />
        </main>
    )
}