import React from "react";
import "./css/style-articles.css";
import MainArticlesPage from "./articles/mainArticlesPage";
import Aside from "./aside";

export default function Articles() {
    return (
        <main className="articles-main">
            <Aside links={[
                                {link: "/articles/ecofuneral", title: "Эко-похороны"},
                                {link:"/articles/victorian", title: "Викторианский культ смерти"},
                                {link: "/articles/egyptian", title: "Древний Египет"},
                                {link: "/articles/greece", title: "Захоронения в древней Греции"},
                                {link: "/articles/macabre", title: "Пляска смерти"},
                                {link: "/articles/dayofthedead", title: "Мексиканский День Мёртвых"},
                                {link: "/articles/pmmyth", title: "Постомортем: мифы и заблуждения"}
            ]} />
            <MainArticlesPage />
        </main>
    )
}