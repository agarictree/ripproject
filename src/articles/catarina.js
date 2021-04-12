import React from "react";
import BackButton from "../backButton";
import {Link} from "react-router-dom";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage";
import cat from "./images/Dia-de-Los-Muertos_2.jpg";
import catrinas from "./images/1280px-Catrinas_2011.jpg";
import twocatrinas from "./images/800px-Catrinas_2 (1).jpg";
import son from "./images/The_Kid_-_Diego_Rivera.jpg";

export default function Catarina(props) {
    return (
        <main>
            <BackButton  goBack={props.history.goBack} />
            <h1>Катрина (гравюра)</h1>
            <figure className="block">
                <img src={cat} alt="image" onClick={resizImage}/>
                <figcaption>
                Гуадалупе Посада, Хосе 1910 Катрина (гравюра)
                </figcaption>
            </figure>
            <p>
                <span className="bold">«Калавера Катрина», «Череп Катрины»</span> или просто <span className="bold">«Катрина»</span> (исп. <span className="italic"> La Calavera de la Catrina</span>) - цинковая гравюра мексиканского художника Хосе Гуадалупе Посады, созданная в 1913 году. Изображение стало символом мексиканского изобразительного искусства и часто используется в художественных композициях, посвящённых Дню мёртвых (1-2 ноября), таких как алтарь и «костюм-калавера». Изображение входит в серию «калавер» (от исп. calavera — «череп») художника — юмористических изображений фигурок современников, сделанных в виде скелетов и часто сопровождаемых стихами.
            </p>
            <p>
            Слово «катрина» (исп. catrina) является формой женского рода слова catrín, что означает «франт». Фигурка, изображённая в украшенной цветами шляпе, модной в начале XX века, призвана показать, что богатые и модные, несмотря на их претензию на важность, так же смертны, как и все остальные.
            </p>
            <p>
            Во времена Посады «Катрина» была очень популярна, однако вскоре после его смерти была забыта. Как и остальные работы Посады, она была найдена и снова популяризована французским художником и историком Жаном Шарло вскоре после Мексиканской революции. Катрина быстро стала символом уникального мексиканского искусства, её начали воспроизводить в большом количестве экземпляров и вариантов. В частности, это изображение включено в монументальную картину Диего Риверы «Сон о воскресном вечере в парке Аламеда» (исп. Sueño de una Tarde Dominical en la Alameda Central), на которой также изображены Посада, Ривера и его жена Фрида Кало.
            </p>
            <div className="figures-set">
            <figure className="figures-item">
                <img src={son} alt="image" onClick={resizImage}/>
                <figcaption>
                Фрагмент картины Диего Риверы «Сон о воскресном вечере в парке Аламеда». По правую руку Катрины стоят жена художника, Фрида Кало, и сам Ривера — в виде ребёнка; по левую руку — Хосе Гуадалупе Посада. Настенная живопись, Мехико
                </figcaption>
            </figure>
            <figure className="figures-item">
                <img src={catrinas} alt="image" onClick={resizImage}/>
                <figcaption>
                Фигурки Катрины — один из атрибутов Дня мёртвых
                </figcaption>
            </figure>

            <figure className="figures-item">
                <img src={twocatrinas} alt="image" onClick={resizImage}/>
            <figcaption>
            Две Катрины, фигурки около 40 см высотой
            </figcaption>
            </figure>
            </div>
            
            <div className="link">
            см. также: <Link to="/articles/dayofthedead">День мёртвых в Мексике</Link>
            </div>
        </main>
    )
}