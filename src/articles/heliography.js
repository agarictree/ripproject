import React from "react";
import {Link} from "react-router-dom";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage.js";
import pic5 from "./images/Nicéphore_Niépce_Oldest_Photograph_1825.jpg";

export default function Helio(props) {
    return (
        <>
        <h3>Гелиография</h3>
        <figure className="block">
                <img src={pic5} alt="image" onClick={resizImage}/>
                <figcaption>
                Самая ранняя из сохранившихся гелиогравюр, полученных Ньепсом
                </figcaption>
            </figure>
            <p>
           <span className="bold">Гелиография</span> — ранний фотографический процесс, изобретённый Нисефором Ньепсом в 1822 году и послуживший теоретической основой для разработки дагеротипии. Изображения могут быть получены как контактным способом, так и с помощью камеры-обскуры.
            </p>
            <h3>История изобретения</h3>
            <p>
            Этот способ получения изображений с помощью света изначально был попыткой усовершенствования литографии. Бывший офицер и изобретатель Жозеф Нисефор Ньепс, до этого уже имевший опыт в области фотохимии, в 1813 году начал эксперименты по закреплению световых изображений химическими способами. Через три года он получил первые снимки на хлоросеребряной бумаге, которые быстро выцветали на свету. Кроме того, эти изображения были негативными, что никак не устраивало изобретателя. Разочаровавшись в возможностях серебряных солей, в 1822 году он добился первого успеха с помощью сирийского асфальта (битума), который наносил на оловянные пластинки или литографский камень. Часть снимков выполнялась на стеклянной подложке. Наиболее раннее из сохранившихся изображений, полученных таким способом с помощью камеры-обскуры, снято в 1826 году и известно под названием «Вид из окна в Ле Гра». Название «гелиография» (буквально: «солнечное письмо») подчёркивало неразрывную связь технологии с солнечным светом.
            </p>
            <p>
            В результате воздействия света на слой битума, его экспонированные участки подвергались частичной полимеризации и теряли растворимость в определённых веществах. После обработки смесью нефти и лавандового масла, неэкспонированный битум смывался с оловянной пластины, тогда как на засвеченных участках он оставался. Полученное таким образом изображение вновь оказалось негативным, так как обнажённые от битума неэкспонированные участки металла блестели. Ньепс пытался устранить этот блеск, обрабатывая пластину парами йода, но положительного результата не добился. Следующим шагом исследований было добавление стадии травления пластины кислотой, воздействовавшей только на неэкспонированные участки, с которых был смыт битум. В обработанных таким образом местах поверхность меняла свою структуру, приобретая способность удерживать краску. Обработка заканчивалась удалением остатков битума спиртом и последующей промывкой в воде. Во всех вариантах технология оказалась малопригодной для фотографирования с натуры из-за очень низкой светочувствительности битума, дававшего контрастное изображение без деталей и полутонов. Поэтому, дальнейшие поиски возможности фиксации светового рисунка Ньепс вёл совершенно в другом направлении совместно с Луи Дагером, что привело к разработке дагеротипии.
            </p>
            <p>
            Однако, для изготовления типографских клише при помощи контактной печати гелиография оказалось вполне пригодной. В дальнейшем процесс с незначительными изменениями использовался в типографском деле для размножения как штриховых, так и полутоновых изображений. Так, в 1853 году французы Лемерсье и Давани разработали так называемую полутоновую фотолитографию на основе асфальтового принципа. Позднее гравёр Жан Батист Камиль Коро разработал метод «клише-верр», позволяющий тиражировать гравюры, созданные в слое краски на стекле, способом гелиографии Ньепса. Разработанная во второй половине XIX века Джозефом Суоном и Карелом Кличем гелиогравюра была основана на других принципах, и в дальнейшем трансформировалась в современную глубокую печать.
            </p>
        </>
    )
}