import React from "react";
import "./css/cemeteries.css";
import BackButton from "./backButton";
import "./css/resizImage.css";
import resizImage from "./galleryComponents/resizeImage.js";
import ScrollBtn from "./scrollTo.js";
import sak from "./images/sak.jpg";
import nak from "./images/nak.jpg";
import mrk from "./images/mrk.jpg";
import ck from "./images/ck.jpg";
import bpk from "./images/bpk.jpg";
import kak from "./images/kak.jpg";
import rk from "./images/rk.jpg";
import sk from "./images/sk.jpg";
import npk from "./images/npk.jpg";
import kvk from "./images/kvk.jpg";
import ak from "./images/ak.jpg";
import vk from "./images/vk.jpg";
import nk from "./images/nk.jpg";
import nsk from "./images/nsk.jpg";
import nagk from "./images/nagk.jpg";
import novosormk from "./images/novosormk.jpg";
import kp from "./images/kp.jpg";

function Item(header, img, addr, hours, num, link) {
    return (
        <>
        <h3>{header}</h3>
            <div className="flex-item">
                        <img src={img} alt={header} onClick={resizImage}/>
                        <p>
                            <span className="bold">Адрес: </span>{addr}<br />
                            <span className="bold">Часы работы: </span>{hours}<br />
                            <span className="bold">Номер телефона: </span>{num}<br />
                            {link ? <><span className="bold">Больше информации:</span><a href={link}>Здесь</a></>: null}
                        </p>
                        </div>
        </>
    )
}

export default function NigNov(props) {
    return (
        <section className="cemeteries-container">
            <BackButton goBack={props.history.goBack}/>
            <ScrollBtn />
            <h1>Нижний Новгород</h1>
            <ul className="cemeteries-list">
                        <li>
                        {
                            Item("Старо-автозаводское кладбище", sak, "Парышевская ул., 1 А, г. Нижний Новгород, Нижегородская обл., 603018", "9:00 - 19:00", "8 (831) 294-13-35", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/staro-avtozavodskoe/")
                        }
                        </li>
                        <li>
                        {
                            Item("Ново-автозаводское кладбище", nak, "Южный обход, Ягодно-Лесное, Нижегородская обл., 603069", "9:00 - 19:00", "8 (831) 252-19-13")
                        }
                        </li>
                        <li>
                            {
                                Item("Марьина Роща", mrk, "Кладбищенский пр-д, Нижний Новгород, Нижегородская обл., 603057", "6:00 - 20-00", "8 (831) 465-77-06", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/marina-roshcha/")
                            }
                        </li>
                        <li>
                            {
                                Item("Кооперативное (Старосормовское) кладбище", ck, "г. Нижний Новгород, Сормовский р-н, ул. Торфяная, д. 9Б", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/kooperativnoe-kladbishche/")
                            }
                        </li>
                        <li>
                            {
                                Item("Берёзовая Пойма", bpk, "г. Нижний Новгород, Московский р-н, пос. Берёзовая Пойма, ул. Лучистая, 1а", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/beryezovaya-poyma/")
                            }
                        </li>
                        <li>
                            {
                                Item("Красная Этна", kak, "г. Нижний Новгород, Ленинский р-н, ул. Удмуртская, 2в", "9.00 - 17.00", "+7 (831) 252-19-13", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/krasnaya-ehtna/")
                            }
                        </li>
                        <li>
                            {
                                Item("Румянцево", rk, "г. Нижний Новгород, Приокский р-н, д. Румянцево", "9.00 - 17.00", "+7 (831) 466-45-57", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/rumyantsevo/")
                            }
                        </li>
                        <li>
                            {
                                Item("Сортировочное", sk, "г. Нижний Новгород, Канавинский р-н, ул. Запрудная, 1г.", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/sortirovochnoe/")
                            }
                        </li>
                        <li>
                            {
                                Item("Новопокровское", npk, "г. Нижний Новгород, Советский р-н, у д. Новопокровское", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/novopokrovskoe-kladbishche/")
                            }
                        </li>
                        <li>
                            {
                                Item("Колосово-Высоково", kvk, "г. Нижний Новгород, Сормовский р-н, ул. Ясная, д. 8а", "9.00 - 17.00", "8 (381) 466-45-57", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/kolosovo-vysokovo/")
                            }
                        </li>
                        <li>
                            {
                                Item("Афонинское", ak, " г. Нижний Новгород, Нижегородский р-н, Казанское ш., 12а", "9.00 - 17.00", "+ 7 (831) 417-50-50", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/afoninskoe-kladbishche/")
                            }
                        </li>
                        <li>
                            {
                                Item("Высоковское", vk, "г. Нижний Новгород, Нижегородский р-н, ул. Овражная, 58", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/vysokovskoe-kladbishche/")
                            }
                        </li>
                        <li>
                            {
                                Item("Нижегородское", nk, "г. Нижний Новгород, Кстовский р-н, д. Федяково", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/nizhegorodskoe-kladbishche/")
                            }
                        </li>
                        <li>
                            {
                                Item("Новое Стригинское", nsk, "г. Нижний Новгород, Стригино-2", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/novoe-striginskoe/")
                            }
                        </li>
                        <li>
                            {
                                Item("Нагорное", nagk, "г. Нижний Новгород, Кстовский р-н, ул. Заречная, 3а", "9.00 - 17.00", "+7 (831) 430‒08‒07", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/nagornoe-kladbishche/")
                            }
                        </li>
                        <li>
                            {
                                Item("Ново-Сормовское", novosormk, "г. Нижний Новгород, Сормовский р-н, ул. Коновалова", "9.00 - 17.00", "+7 (831) 226-08-09", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/novo-sormovskoe/")
                            }
                        </li>
                        <li>
                            {
                                Item("Кладбище по ул. Пушкина", kp, "г. Нижний Новгород, Советский р-н, ул. Пушкина, д. 34", "9.00 - 17.00", "+7 (831) 433-93-09", "https://nn.ritual.ru/poleznaya-informatsiya/kladbishcha/kladbishche-ul-pushkina/")
                            }
                        </li>
            </ul>
        </section>
    )
}