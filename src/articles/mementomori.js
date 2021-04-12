import React from "react";
import {Link} from "react-router-dom";
import BackButton from "../backButton";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage.js";
import mori from "./images/hqdefault.jpg";
import relief from "./images/St.-Martinskirche_Dorfmark_Memento_Mori.jpg";
import putto from "./images/Sleeping_putto_with_skull,_probably_Netherlands,_1600s,_ivory_-_Museum_Schnütgen_-_Cologne,_Germany_-_DSC09951.jpg";
import ring from "./images/800px-Memento_mori_ring_Norwich.jpg";
import figure from "./images/Ivory_model_of_half_a_human_head,_half_a_skull,_Europe_Wellcome_L0057081.jpg";
import pendant from "./images/A_gold_memento_mori_pendant_Wellcome_L0035566.jpg";
import cat from "./images/Dia-de-Los-Muertos_2.jpg";
import ScrollBtn from "../scrollTo";

export default function Memento(props) {
    return (
        <main>
            <ScrollBtn />
            <BackButton  goBack={props.history.goBack}/>
            <h1>Memento mori: Помни о смерти</h1>
            <figure className="block">
                <img src={mori} alt="image" onClick={resizImage}/>
                <figcaption>
                Memento mori («меме́нто мо́ри», с лат. — «помни о смерти») — латинское выражение, ставшее крылатой фразой.
                </figcaption>
            </figure>
            <p>
            Memento — императив единственного числа недостаточного глагола memini. Mori — инфинитив отложительного глагола morior.
            </p>
            <h2>История</h2>
            <p>
            В Древнем Риме эта фраза произносилась во время триумфального шествия римских полководцев, возвращающихся с победой. За спиной военачальника ставили раба, который был обязан периодически напоминать триумфатору, что несмотря на свою славу, тот остаётся смертным. Возможно, настоящая фраза звучала как: Respice post te! Hominem te memento! («Обернись! Помни, что ты — человек!») (глава 33 «Апологетики» Тертуллиана).

            «Memento mori» являлось формой приветствия, которым обменивались при встрече французские паулины, именовавшиеся также Братьями Смерти — монахи ордена отшельников Св. Павла во Франции (1620—1633).
            </p>
            <h2>В декоративно-прикладном искусстве</h2>
            <p>
            В XIV—XVII веках, с эпидемии Черной смерти до Галантного века, популярностью пользовались декоративно-прикладные изделия и украшения, связанные с символикой смерти. Безделушки и аксессуары, выполненные в форме черепов, скелетов, гробов и прочих мрачных атрибутов, служили напоминанием о бренности человеческой жизни и неизбежности смерти. Позднее, в XVIII—XIX веках, из этой категории изделий появились траурные украшения, носимые в знак траура по покойному родственнику или близкому человеку.
            <div className="figures-set">
            <figure className="figures-item">
                <img src={relief} alt="image" onClick={resizImage}/>
                <figcaption>
                Рельеф церкви Святого Мартина в Дорфмарке, нач. XVIII в.
                </figcaption>
            </figure>

            <figure className="figures-item">
                <img src={putto} alt="image" onClick={resizImage}/>
                <figcaption>
                Спящий путто с черепом под головой, резьба по кости, XVII в.
                </figcaption>
            </figure>

            <figure className="figures-item">
                <img src={ring} alt="image" onClick={resizImage}/>
                <figcaption>
                Золотое кольцо с черепом
                </figcaption>
            </figure>

            <figure className="figures-item">
                <img src={figure} alt="image" onClick={resizImage}/>
                <figcaption>
                Резная фигурка из слоновой кости, демонстрирующая лицо человека с одной стороны, и череп с другой
                </figcaption>
            </figure>

            <figure className="figures-item">
                <img src={pendant} alt="image" onClick={resizImage}/>
                <figcaption>
                Золотая подвеска в форме гроба со скелетом внутри
                </figcaption>
            </figure>
            </div>
            <h3>В Америке</h3>
            <p>
            Изобразительное искусство США содержит большое количество символических изображений Memento mori из-за пуританского влияния. Пуританская община в Северной Америке 17-го века смотрела на искусство свысока, потому что считала, что оно отвлекает верующих от Бога и может привести только к дьяволу. Тем не менее, портреты считались историческими записями и, как таковые, они были разрешены. Томас Смит, пуританин 17-го века, участвовал во многих морских сражениях, а также занимался живописью. В его автопортрете мы видим, что эти занятия представлены рядом с типичным символом Memento mori — черепом, наводящем на мысль о неминуемой смерти.
            </p>
            <h3>День мертвых в Мексике</h3>
            <p>
            Символика Memento mori зачастую ассоциируется с мексиканским фестивалем «День мертвых», в том числе конфеты в форме черепа и хлебцы в виде костей.

            Эта тема также была широко отражена в работах мексиканского гравера Хосе Гуадалупе Посада, в которых люди из разных слоев общества изображены в виде скелетов.

            Другое проявление Memento mori можно найти в мексиканской «Calavera», литературной композиции в стихотворной форме, обычно написанной в честь человека, который еще жив, но написано так, как если бы этот человек был мертв. Эти композиции имеют насмешливый тон и часто предлагаются от одного друга другому во время Дня Мертвых.
            <figure className="block">
                <img src={cat} alt="image" onClick={resizImage}/>
                <figcaption>
                Гуадалупе Посада, Хосе 1910 Катрина (гравюра)
                </figcaption>
            </figure>
            <div className="link">
            см. статью <Link to="/articles/dayofthedead">Мексиканский день мёртвых</Link>
            </div>
            </p>
            </p>
        </main>
    )
}