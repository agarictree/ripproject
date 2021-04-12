import React from "react";
import {Link} from "react-router-dom";
import BackButton from "../backButton";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage.js";
import ScrollBtn from "../scrollTo.js";
import than from "./images/Image16w1_480x480@2x.jpg";
import post1 from "./images/Victorian_era_post-mortem_family_portrait_of_parents_with_their_deceased_daughter.jpg";
import boy from "./images/cryingboy850_480x480@2x.jpg";
import family from "./images/primary_499.jpg";
import brosis from "./images/brosis.jpg";
import cooneyblog from "./images/cooneyblog.jpg";

export default function Postmortem(props) {
    return (
        <main>
            <BackButton goBack={props.history.goBack}/>
            <ScrollBtn />
            <figure className="block">
                <img src={than} alt="image" onClick={resizImage}/>
                <figcaption>
                Источник <a href="https://thanatos.net">Thanatos Archive</a>
                </figcaption>
            </figure>
            <h1>Посмертная фотография</h1>
            <p>
                <span className="bold">
                Посмертная фотография
                </span>
                (реже пост-мортем или постмортем; англ. Post-mortem photography, от лат. post mortem — после смерти) — обычай фотографирования недавно умерших людей, появившийся в XIX веке с изобретением дагеротипа. Такие снимки были широко распространены в конце XIX столетия и в настоящее время являются объектом изучения и коллекционирования.
            </p>
            <h2>История</h2>
            <figure className="float left">
                <img src={post1} alt="image" onClick={resizImage}/>
                <figcaption>
               <span className="italic">Родители позируют со своей усопшей дочерью</span>
                </figcaption>
            </figure>
            <p>
            Изобретение дагеротипа в 1839 году сделало портретную съёмку доступной для тех, кто ранее не мог позволить себе живописные портреты. Этот более дешёвый и быстрый метод создания портрета обеспечил среднему классу возможность увековечивать память о своих умерших близких.
            </p>
            <p>
            Фотографии умерших служили не столько напоминанием о быстротечности жизни, сколько своеобразным сентиментальным сувениром в память об усопшем. Распространенным явлением было фотографирование умерших детей и новорождённых. Уровень детской смертности в Викторианскую эпоху был высок, и такие снимки часто были единственными портретами детей, оставшимися семье на память.
            </p>
            <p>
            Первым в истории снимком этого жанра считается «Автопортрет в виде утопленника», созданный в 1840 году Ипполитом Байаром. С изобретением мокрого коллодионного процесса, пришедшего на смену дагеротипии, появилась возможность отпечатывать несколько фотографий с одного негатива.
            </p>
            <p>
            Наиболее активно посмертная фотография использовалась в конце XIX века. Посмертная фотография была полностью вытеснена[чем?] на протяжении XX века, хотя некоторое продолжение этой традиции прослеживается до сих пор.
            </p>
           <h3>Эволюция стиля</h3>
            <p>
            Ранние посмертные фотографии изображали лицо умершего крупным планом или тело целиком, реже в гробу. Умершего фотографировали таким образом, чтобы создать иллюзию глубокого сна, а иногда ему придавали непринуждённые позы, имитирующие живого человека.
            </p>
            <p>
            Детей обычно размещали в колясках, на детских стульчиках или диванах, в окружении любимых игрушек, кукол. Общепринятым также было фотографирование всей семьи или ближайших родственников, чаще матери, братьев или сестёр, вместе с умершим. Такие постановочные снимки выполняли как в доме умершего, так и в ателье фотографа.
            </p>
            <p>
            Взрослым на посмертных фотографиях традиционно придавали сидячую позу. Нередко окружающее пространство пышно украшалось цветами. Для придания жизненности фотограф поверх закрытых глаз на снимке изображал открытые, а порой наносили немного розовой краски в область щёк.
            </p>
            <p>
            На более поздних посмертных снимках всё чаще умерших изображают в гробах, на снимке при этом запечатлевают всех родственников, знакомых и близких, присутствовавших на похоронах. Традиция делать и хранить такие снимки до сих пор сохраняется в некоторых странах Восточной Европы.
            </p>
            <h3>Посмертная фотография в художественной системе</h3>
            <p>
            В индустрии посмертной фотографии принимали участие многие знаменитые фотографы. Например, созданием портретов умерших занимался Надар — в частности, им была сделана посмертная фотография Виктора Гюго. В своем исследовании о фотографиях Надара Розалинда Краусс обращает внимание на то, что сам факт посмертной фотографии обозначил проблему различия живого и мертвого. При относительном многообразии сюжетов, центральной темой ранней фотографии была именно смерть.
            </p>
            <p>
            С идеей посмертной фотографии связана и встречная традиция — изображение живых как умерших. Отчасти она была продиктована ограниченными возможностями ранней фотографии и продолжительной выдержкой, которая делала невозможной моментальную съемку и требовала длительного позирования. Смерть была одним из возможных сюжетов, способных объяснить неподвижность модели и неестественный характер её позы. Соотношение живого и мертвого в фотографии является одной из центральных тем и в работе Ролана Барта Camera Lucida.
            </p>
            <div className="figures-set">
            <figure className="figures-item">
                <img src={boy} alt="image" onClick={resizImage}/>
            </figure>

            <figure className="figures-item">
                <img src={family} alt="image" onClick={resizImage}/>
            </figure>

            <figure className="figures-item">
                <img src={brosis} alt="image" onClick={resizImage}/>
            </figure>

            <figure className="figures-item">
                <img src={cooneyblog} alt="image" onClick={resizImage}/>
            </figure>
            </div>
            
            <div className="link">см. также: 
            <Link to="/articles/psmyth">Мифы о посмертной фотографии</Link>
            <Link to="/articles/victorianphotography">Особенности полноформатной сьемки в Викторианскую эпоху</Link>
            <Link to="/articles/truepm">Настоящий пост-мортем</Link>
            </div>
        </main>
    )
}