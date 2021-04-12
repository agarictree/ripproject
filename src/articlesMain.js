import React from "react";
import {Link} from "react-router-dom";
import onclickHandler from "./dropdownlist.js";

export default function ArticlesMain() {
    return (
        <main className="articles-mainpage">
                <h1>Статьи и информация</h1>
                <ul className="articles-list">
                    <li onClick={onclickHandler} className="before">
                        Смерть в искусстве
                        <ul className="dropdown-list" hidden>
                            <li><Link to="/articles/vanitas">Vanitas</Link></li>
                            <li><Link to="/articles/mementomori">Memento mori</Link></li>
                            <li><Link to="/articles/arsmoriendi">Ars Moriendi</Link></li>
                            <li><Link to="/articles/macabre">Пляска смерти</Link></li>
                            <li><Link to="/articles/deathnchest">Смерть, играющая в шахматы</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/articles/victorian">Викторианский культ смерти</Link></li>
                    <li onClick={onclickHandler} className="before">
                    Погребение заживо
                        <ul className="dropdown-list" hidden>
                        <li><Link to="/articles/burialaliveasassident">Погребение заживо как несчастный случай</Link></li>
                        <li><Link to="/articles/burialaliveasexec">Погребение заживо как способ казни</Link></li>
                        </ul>
                        
                        </li>
                    <li onClick={onclickHandler} className="before">
                        Древний Египет
                        <ul className="dropdown-list" hidden>
                            <li><Link to="/articles/egyptian">Захоронения в Древнем Египте</Link></li>
                            <li><Link to="/articles/">Мумификация</Link></li>
                            <li><Link to="/articles/">Обряды</Link></li>
                            <li><Link to="/articles/">Бальзамирование</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/articles/greece">Захоронения в Древней Греции</Link></li>
                    <li onClick={onclickHandler} className="before">
                        Пост-мортем
                        <ul className="dropdown-list" hidden>
                            <li><Link to="/articles/postmortem">Посмертная фотография</Link></li>
                            <li><Link to="/articles/pmmyth">Мифы и заблуждения о пост-мортемной фотографии</Link></li>
                            <li><Link to="/articles/victorianphotography">Особенности фотографии в Викторианскую эпоху</Link></li>
                            <li><Link to="/articles/truepm">Настоящий пост-мортем</Link></li>
                        </ul>
                    </li>
                    <li onClick={onclickHandler} className="before">
                        Мексиканский день Мёртвых
                        <ul className="dropdown-list" hidden>
                        <li><Link to="/articles/dayofthedead">Мексиканский день Мёртвых</Link></li>
                        <li><Link to="/articles/catarina">Катарина</Link></li>
                        </ul>
                    </li>
                    <li onClick={onclickHandler} className="before">
                        Культура современных захоронений
                        <ul className="dropdown-list" hidden>
                            <li><Link to="/articles/ecofuneral">Экологически чистые современные захоронения</Link></li>
                            <li><Link to="/articles/cremated">Кремация</Link></li>
                        </ul>
                    </li>
                </ul>
        </main>


    )
}