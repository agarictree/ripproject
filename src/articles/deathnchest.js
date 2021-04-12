import React from "react";
import BackButton from "../backButton";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage";
import dchest from "./images/800px-Taby_kyrka_Death_playing_chess.jpg";
import dom from "./images/Taby_view2.jpg";
import svod from "./images/1024px-Taby_kyrka_ceiling_painting3.jpg";
import altar from "./images/1024px-Taby_kyrka_altar.jpg";
import ScrollBtn from "../scrollTo.js";

export default function Deathnchest(props) {
    return (
        <main>
            <ScrollBtn />
            <BackButton  goBack={props.history.goBack} />
            <h1>Смерть, играющая в шахматы</h1>
            <figure className="block">
                <img src={dchest} alt="image" onClick={resizImage}/>
                <figcaption>
                Альбертус Пиктор "Смерть, играющая в шахматы", 1480
                </figcaption>
            </figure>
            <p>
           <span className="bold">«Смерть, играющая в шахматы»</span> (швед. Döden spelar schack) — самая известная фреска церкви Тёбю (швед. Täby kyrka), выполнена мастерской Альбертуса Пиктора около 1480 года на неканонический сюжет.
            </p>
            <h2>История создания</h2>
            <p>
            Церковь была завершена в конце 1200-х годов. Церковная ризница была достроена ​​в 1300-х годах, своды были обновлены в 1450-е годы. Церковь в Тёбю имеет четыре сводчатые арки, которые были в 1480-е годы расписаны мастерской Альбертуса Пиктора. Фрески были реставрированы в 1787 году и в 1992—1993 годах. Во время второй реставрации были детально изучены составляющие элементы красочного слоя.
            </p>
            <p>
            Фреска «Смерть, играющая в шахматы» находится в западной части свода в верхней части лестницы на чердак, где расположен орган. Она выполнена шведским художником немецкого происхождения Альбертусом (швед. Albertus Pictor, букв. «Альбертус Художник»; родился между 1440 и 1450 годами — умер между 1507 и 1509 годами, настоящее имя «Альберт Имменхаузен», швед. Albertus Immenhusen, происходил из города Имменхаузена вблизи Касселя в земле Гессен) и его мастерской, численностью около пяти человек, которые расписали в своё время около 40 шведских церквей, 37 из них сохранились до нашего времени. Копия росписи хранится в коллекции шведского Исторического музея в Стокгольме.
            </p>
            <h2>Особенности изображения</h2>
            <p>
            В течение 1600-х годов, с переходом Швеции в лютеранство, стены в большинстве средневековых шведских храмов были побелены. Своды церкви в Тёбю по неизвестной причине были оставлены под фресками, поэтому они сохранились во всём своем великолепии.
            </p>
            <p>
            Фреска «Смерть, играющая в шахматы» не похожа на большинство других изображений в церкви, которые выполнены строго на основе библейских мотивов. На фреске изображён скромно, но изящно одетый мужчина, который играет в шахматы со Смертью. Шахматная доска на фреске нестандартных размеров (7 на 5 клеток). Ход делает Смерть, а мужчина растерянно прижимает левую руку к груди, а другой пытается ухватиться за доску. Фреска «Смерть, играющая в шахматы» изображает мужчину и Смерть по одну сторону доски; современному зрителю, без поправки на средневековую традицию изображения, это изображение может ошибочно представляться как «Смерть подсказывает Рыцарю ход против зрителя». Фреска дополняется лентой над фигурами персонажей с выцветшим и уже нечитаемым текстом на шведском языке.
            </p>
            <p>
            Изображения человека, играющего в шахматы с представителем тёмных сил, существовали в Средние века как зрительное воплощение сложных моральных положений. Исследователи разделяют их на два основные типа:
            </p>
            <ul className="vanitas-list">
                <li>
                Изображение игры человека против Смерти за свою жизнь. Оно заставляет задуматься о скоротечности жизни и о том, что человек вскоре может быть наказан или вознаграждён после внезапной смерти за свои дела. Содержание картины в этом случае следует средневековым философским моралите о шахматах, представлявшим жизнь как шахматную игру. Таков смысл аллегории Johannes Raulin в «Doctrinale Mortis» (1518). Johannes Guallensis (умер в 1285 году) пишет:
                    <q>
                    Мир — как доска с белыми и черными полями, принимающая в себя людей, словно шахматные фигуры.
                    </q>
                </li>
                <li>
                Шахматы также иллюстрировали различные роли в обществе, показывали в аллегорической форме, как важно было «играть свою роль», а не пытаться что-либо изменить в своём социальном положении. К этому типу относится изображение в церкви Тёбю. Среди других изображений на сходную тему — «Смерть ставит мат королю» (аллегорическая гравюра неизвестного эльзасского художника XV века).
                </li>
                <li>
                Другой распространенный вариант сюжета — человек, играющий в шахматы с Дьяволом на свою душу. Этот сюжет был достаточно широко распространён в Северной Европе. Легенда в «Хронике Фландрии» за 1131 год рассказывает, что жена кастеляна по наущению дьявола убила своего отца. Муж, узнав о её преступлении, отдает преступницу дьяволу. Спустя время в замок прибывает монах и ночует в том зале, где когда-то было совершено преступление. В полночь появляется дьявол с женой кастеляна и вызывает монаха на поединок на его душу за шахматной доской. Монах выиграл партию. Побеждённый дьявол исчез. Утром монах нашёл на полу скелет женщины со стилетом в руке. Шахматный поединок с дьяволом в образе прекрасной девушки приписывался шахматисту XVI века Паоло Бои (однако возникновение легенды относится к значительно более позднему времени, чем эпоха самого шахматиста).
                </li>
            </ul>
            <p>
            В Историческом музее в Стокгольме была организована выставка о смерти и о том, как она воспринималась в разное время. Изображение «Смерти, играющей в шахматы» было центральным в осмыслении проблемы.
            </p>
            <h2>Фреска в кинематографе</h2>
            <ul className="vanitas-list">
                <li>
                Фреска вдохновила Ингмара Бергмана на сцену в фильме <a href="https://www.kinopoisk.ru/film/425/">«Седьмая печать»</a> 1957 года. Действие фильма происходит в середине XIV века во время Чёрной смерти. Рыцарь Антониус Блок и его оруженосец Йонс вернулись в Швецию после участия в крестовом походе в Святую Землю. Когда Смерть появляется, чтобы забрать его, он просит сыграть партию в шахматы, чтобы отложить
                </li>
                <li>
                Отголоски фрески и фильма Бергмана присутствуют в ленте Алена Рене <a href="https://www.kinopoisk.ru/film/57986/">«В прошлом году в Мариенбаде»</a> (1961 году, автор сценария — Ален Роб-Грийе).
                </li>
                <li>
                Песня «Генрих и Смерть» группы «Король и Шут» является интерпретацией картины: король играет в шахматы со смертью.
                </li>
            </ul>
            <h2>Галерея</h2>
            <div className="figures-set">
            <figure className="figures-item">
                <img src={dom} alt="image" onClick={resizImage}/>
                <figcaption>
                Церковь Тёбю. Внешний вид
                </figcaption>
            </figure>

            <figure className="figures-item">
                <img src={svod} alt="image" onClick={resizImage}/>
                <figcaption>
                Церковь Тёбю. Роспись сводов
                </figcaption>
            </figure>

            <figure className="figures-item">
                <img src={altar} alt="image" onClick={resizImage}/>
                <figcaption>
                Церковь Тёбю. Интерьер
                </figcaption>
            </figure>
            </div>

        </main>
    )
}