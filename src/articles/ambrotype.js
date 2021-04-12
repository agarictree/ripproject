import React from "react";
import {Link} from "react-router-dom";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage.js";
import pic1 from "./images/Ambrotype_Black_White_background.jpg";
import pic2 from "./images/Ruby_Ambrotype.tiff.jpg";

export default function Ambro(props) {
    return (
        <>
            <h2>Амбротипия</h2>
            <figure className="block">
                <img src={pic1} alt="image" onClick={resizImage}/>
                <figcaption>
                Различие вида негатива, рассматриваемого в проходящем (слева) и отражённом свете
                </figcaption>
            </figure>
            <p>
           <span className="bold">Амбротипия</span> (от др.-греч. ἄμβροτος — «бессмертный», и τύπος — «отпечаток») — ранний фотографический процесс, описанный в начале 1850-х годов изобретателем коллодионного процесса Фредериком Арчером, как один из его вариантов. Другие названия — амфитипия и витротипия. Патент № 11267 на технологию получен 11 июля 1854 года фотографом Джеймсом Каттингом. Отличие от оригинального коллодионного процесса заключается в получении позитивного изображения непосредственно из стеклянного негатива, который рассматривается на тёмном фоне.
            </p>
            <h3>Описание</h3>
            <p>
            Получение прямопозитивного изображения основано на отличиях вида негатива в проходящем и отражённом свете. Если в проходящем свете участки с большим содержанием металлического серебра обладают наибольшей оптической плотностью по сравнению с неэкспонированными, то в отражённом свете вид изображения зависит от других факторов. Светло-серое серебро экспонированных участков хорошо отражает свет, а сквозь прозрачные тени отлично виден фон. В случае очень тёмного или чёрного фона теневые участки пластинки, свободные от серебра, выглядят чёрными по сравнению с посеребрёнными света́ми. Таким образом, при рассматривании проявленной фотопластинки на тёмном фоне, изображение, видимое только в отражённом свете, выглядит как малоконтрастный позитив.
            </p>
            <p>
            Технология изготовления амбротипа в своей первой стадии совпадает с мокрым коллодионным процессом, отличаясь только конечным оформлением негатива. Одну из сторон пластины закрывают чёрной бумагой или закрашивают чёрным лаком. При этом покрытие поверхности, противоположной эмульсии придаёт снимку иллюзию дополнительной глубины за счёт толщины стекла, однако изображение получается зеркальным. Ещё один способ предусматривает использование вместо прозрачной основы окрашенного в массе стекла тёмно-коричневого цвета. Такие амбротипы получили название «рубиновых». Известны примеры использования кобальтового стекла синего оттенка. Независимо от использованной подложки сторона со слоем коллодия покрывалась лаком и вторым прозрачным стеклом. Таким образом полностью предотвращался доступ кислорода (окислителя) к коллодионному слою, придавая изображению практически неограниченную долговечность. Это обстоятельство и послужило причиной выбора названия, подчёркивающего «бессмертность» снимка. Сам Каттинг посчитал изобретение настолько значимым, что добавил к своему имени приставку «Амброуз», и стал называться Джеймс Амброуз Каттинг (англ. James Ambrose Cutting).
            </p>
            <figure className="float left">
                <img src={pic2} alt="image" onClick={resizImage}/>
                <figcaption>
                «Рубиновый» амбротип на окрашенном стекле
                </figcaption>
            </figure>
            <p>
            От обычной фотографии съёмка амбротипа отличается недопустимостью передержки, в результате которой тени изображения «затягиваются» серебром, делая невозможным рассматривание в отражённом свете. По сравнению с нормальным негативом, амбротип в проходящем свете выглядит недодержанным. Кроме того, для получения более светлого оттенка проявленного серебра проявитель специально видоизменялся разными способами, например добавлением азотной кислоты в небольших количествах. Негатив, покрытый чёрным лаком, становится непригодным для тиражирования отпечатков, и поэтому амбротипы существуют в единственном экземпляре. Однако, в отличие от традиционного изображения, получаемого при коллодионном процессе на альбуминовой фотобумаге и выцветающего за несколько лет, амбротип практически не подвержен старению.
            </p>
            <p>
            Амбротипия, как и весь коллодионный процесс в целом, оказалась более технологичной и дешёвой, чем дагеротипия, недостатком которой была низкая светочувствительность и неудобство рассматривания изображения из амальгамы. По сравнению с дагеротипами, которые могли выглядеть как позитив или как негатив в зависимости от угла освещения, амбротип давал чётко различимое позитивное изображение при любом свете. Тем не менее, публика часто путала амбротип с дагеротипом, что нередко поощрялось самими фотографами ради коммерческого успеха: предпочтения заказчиков всё ещё оставались на стороне проверенной временем технологии. В конце 1850-х годов, благодаря более низкой себестоимости, амбротипия обошла дагеротипию по популярности, но через несколько лет была вытеснена ферротипией, изготавливавшейся таким же способом на небьющихся металлических пластинках.
            </p>
        </>
    )
}