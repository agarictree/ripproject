import React from "react";
import greeceMain from "./images/greece-main.jpg";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage.js";
import nekropolis from "./images/nekropolis.jpg";
import mykeni from "./images/mikeni.jpg";
import cupol from "./images/cupol.jpg";
import desl from "./images/desl.jpg";
import hektor from "./images/hektor.jpg";
import ScrollBtn from "../scrollTo.js";
import BackButton from "../backButton.js";

export default function Greece(props) {
    return (
        <main>
            <ScrollBtn />
            <BackButton  goBack={props.history.goBack} />
            <h1>Е.В.Никитюк "Быт античного общества"</h1>
            <figure className="block">
                <img src={greeceMain} alt="Anubis" onClick={resizImage}/>
                <figcaption>
                    Иллюстрация на погребальной колонне
                </figcaption>
            </figure>
            <h2>Погребальные обычаи и обряды в Греции и Риме</h2>
            <p>
                <p>
                <figure className="float">
                <img src={nekropolis} alt="nekropolis" onClick={resizImage}/>
                <figcaption>
                    Некрополис древнегреческого города Мира
                </figcaption>
                </figure>
                У древних греков и римлян забота о надлежащем погребении умерших считалась священным долгом. Обычай обязывал забирать тела погибших с поля боя и даже в случае необходимости вступать за них в новое сражение с врагом. Существовало два основных способа погребения - трупоположение и трупосожжение, которые чередовались в различные периоды древней истории. Некрополи (в переводе с греческого "города мертвых) являются важнейшим источником сведений для изучения истории, религиозных культов, этнического и социального состава населения. Раскопки некрополей дают большое количество памятников прикладного искусства прекрасной сохранности (ваз, ювелирных украшений, оружия и т.д.). По обычаю греков и римлян некрополи располагались за стенами города или вдоль дорог. Но в некоторых дорических полисах некрополь был в черте города (Спатра, Мегары, Тарент). Иногда кладбищами служили частные сады или поля. В Афинах был государственный некрополь в районе Керамика у Дипилонских ворот, где хоронили афинских граждан, погибших на войне. Римляне обычно располагали некрополи вдоль дорог для напоминания живущим о подвигах предков (например, вдоль Аппиевой дороги).
                </p>
                <p>
                Греция. В Микенах раскопками Г.Шлимана были открыты два типа погребений: шахтовые гробницы (глубиной до 5 м, с богатым инвентарем, в том числе оружием и золотыми масками) и купольные гробницы (огромные ссоружения; так называемая Сокровищница Атрея была высотой в 14 м с диаметром основания 14 м). Но среди древних погребений были и простые -небольшая яма в земле и невысокий земляной холм, вокруг которого, согласно Гомеру, могли посадить деревья. Обряд погребения знатного воина Гомер описывает в 24 песне "Илиады".
                </p>
                    <h3>Микенские шахтовые гробницы</h3>
                    <p>
                    <figure className="float left">
                    <img src={mykeni} alt="mykeni" onClick={resizImage}/>
                        <figcaption>
                            Шахтовая гробница в Микенах
                        </figcaption>
                    </figure>
                    Микенские шахтовые гробницы начали появляться в Греции в конце среднеэлладского периода, около XVII в. до н. э. Содержимое шахтовых гробниц характеризуется исключительным богатством погребальных даров, что особенно контрастирует с прежними весьма скромными погребениями.

                    Предполагается, что шахтовые гробницы связаны с волной ахейских пришельцев на Балканы и Пелопоннес. Альтернативную точку зрения высказал Л. С. Клейн: по его мнению, шахтовые гробницы связаны с миграцией с севера другого индоевропейского народа, оказавшегося меньшинством среди греков и вскоре растворившегося среди них.

                    На смену шахтовым гробницам в 15 в. до н. э. пришли толосы.
                    </p>
                <p>
                <figure className="float">
                    <img src={cupol} alt="cupol" onClick={resizImage}/>
                    <figcaption>
                        Схема купольной гробницы в Микенах
                    </figcaption>
                </figure>
                В исторические времена появляются погребения в вырубленных в скалах склепах, вход в которые имитирует фасад дома или храма (в Ликии, на островах Эгейского моря). При погребении в городском некрополе погребальные памятники (стелы) были обычно прямоугольной формы, высокие и узкие. Верхняя их часть была украшена рельефными пальметками или фронтоном; на средней части помещалось рельефное изображение погребенного, сцена заупокойной трапезы или сцена прощания с семьей; внизу высекалось имя, иногда небольшой текст - имя отца погребенного, откуда он родом, данные о его жизни, наставления живым, проклятия потенциальным грабителям и т.д. В Афинах существовало государственное постановление, ограничивающее роскошь погребального памятника - он должен был быть не дороже того, который за 3 дня могли построить 10 мастеров. Но в IV в. до н.э. появляются надгробные стелы, украшенные резьбой и росписью, некоторые из них представляют высокохудожественные памятники. На них вместо одинокостоящей фигуры (в раннее время - обычно юноши с венком, позднее - пожилого мужчины с бородой, но, в любом случае, только мужского персонажа) появляются целые сюжетные композиции. Например, на памятнике Дексилею изображен воин на коне, поражающий копьем поверженного врага, упавшего под копыта его коня; часто встречаются и женские изображения - например, на стеле Фрасиклеи помещена сцена прощания матери с дочерью - сама Фрасиклея сидит на высоком стуле, дочь припала к ее коленям, рядом стоит служанка с открытой шкатулкой. В эллинистическое время иногда использовали саркофаги (в переводе "пожирающие плоть"), сделанные в виде храма, боковая сторона которого украшалась рельефом с сюжетной композицией (Сидонский, так называемый Саркофаг Александра).
                <figure className="float">
                    <img src={desl} alt="desl" onClick={resizImage}/>
                    <figcaption>
                        Надгробие Десликсея
                    </figcaption>
                </figure>
                </p>
                <p>
                Богатые гробницы строились в виде храма (например, гробница около Ксанфа в Ликии в виде храма ионического стиля на высоком фундаменте и с колоннадой, основание сооружения, все фронтоны и фризы покрыты рельефами). Самый знаменитый памятник в виде храма - Мавсолей, который причисляли к семи чудесам света. Построен он был в Галикарнасе карийскому царю Мавсолу его женой Артемисией (более 30 м в высоту и 30 м по каждой стороне основания). Украшен Мавсолей был скульптурами Скопаса, Бриаксия, Тимофея, Леохара, от которых сохранились значительные фрагменты.
                </p>
                <p>
                В некоторых областях погребение совершалось в керамических гробах, составленных из отдельных дугообразных плит (на Эвбее, в Аттике), детей хоронили в амфорах (некрополь в афинском Пирее). Могли совершать захоронение в земляной могиле или неглубоком, выложенном камнем, склепе. Если тело не было найдено (т.е. кто-то умер на чужбине, утонул в море, погиб в бою), то устраивали символическое погребение - кенотаф(ий).
                </p>
                <p>
                Обычно в Аттике в день рождения, день смерти и в день общего поминовения мертвых 5 боедромиона у стел совершались обряды возлияния (смесью вина и воды, оливкового масла и меда, меда и молока), бескровных и кровавых жертвоприношений. Как во время похорон, так и во время поминовения, все присутствующие были одеты в траурную темную одежду.
                </p>
                <p>
                На периферии греческого мира обряд погребения воспринял некоторые местные черты. Так, на Боспоре усопших хоронили в каменных склепах, стены которых были покрыты росписью по штукатурке. Над погребениями представителей местной эллинизированной знати сооружали огромные земляные курганы, в погребальную камеру которых помещали дорогие золотые, серебрянные, электроновые сосуды и украшения (курганы Царский, Змеиный, Золотой, Куль-Оба и т.д.). Интересный памятник представляет так называемая Виргинская гробница в Македонии, которая, возможно, является погребением Филиппа II.
                </p>
                <figure className="block">
                <img src={hektor} alt="hektor" onClick={resizImage}/>
                <figcaption>
                   Иллюстация процесса погребения Гектора из поэмы "Илиада"
                </figcaption>
            </figure>
            </p>
        </main>
    )
}