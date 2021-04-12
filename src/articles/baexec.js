import React from "react";
import {Link} from "react-router-dom";
import BackButton from "../backButton";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage";
import ScrollBtn from "../scrollTo"
import galls from "./images/394860_12_i_049.jpg";
import ch from "./images/800px-Chinese_civilians_to_be_buried_alive.jpg";
import sea from "./images/394860_12_i_051.jpg";

export default function BAasexec(props) {
    return (
        <main>
            <BackButton goBack={props.history.goBack}/>
            <ScrollBtn/>
            <h1>Погребение заживо как казнь</h1>
            <figure className="float">
                <img src={galls} alt="image" onClick={resizImage}/>
                <figcaption>
                <span className="italic">Два галла, погребенные заживо в 232 году до P. X. Гравюра Адольфа Паннемакера с картины Филиппото. XIX в. Частн. кол.</span>
                </figcaption>
            </figure>
            <p>
            Как способ смертной казни известно в Древнем Риме: к примеру, весталка, нарушившая обет девственности, погребалась заживо с запасом пищи и воды на один день. При этом, закапывали осуждённых, как правило, под Коллинскими воротами на Квиринале на т. наз. Злодейском поле (лат. Campus Sceleratus; в истории известны Оппия, казнённая в 483 до н. э., и старшая весталка Корнелия, умерщвлённая по указу Домициана в 87 году). Путём погребения заживо были казнены некоторые христианские мученики. В 945 году княгиня Ольга приказала закопать живьём древлянских послов вместе с их ладьёй. В средневековой Италии заживо хоронили нераскаявшихся убийц. В Запорожской Сечи убийцу хоронили заживо в одном гробу с его жертвой.
            </p>
            <p>
            Согласно статье СХХХI уголовно-судебного уложения «Священной Римской империи германской нации» («Каролина»), «ради вящего устрашения подобных жестоких женщин»: «Женщина, которая злоумышленно, тайно и по своей воле убьет своего ребенка, уже получившего жизнь и сформировавшиеся члены, да будет, согласно обычаю, заживо погребена и пробита колом».
            </p>
            <p>
            Вариант казни — закапывание человека в землю по шею, обрекающее на медленную смерть от голода, жажды и холода. В России в XVII — начале XVIII века заживо закапывали в землю по шею женщин, убивших своих мужей. B законодательство такая мера была введена Соборным уложением 1649 года (глава XXII ст. 14):
            <blockquote>
            А будет жена учинит мужу своему смертное убийство, или окормит его отравою, а сыщется про то допряма, и ея за то казнити, живу окопати в землю, и казнити ея такою казнею безо всякия пощады, хотя будет убитого дети, или иныя кто ближния роду его, того не похотят, что ея казнити, и ей отнюд не дати милости, и держати ея в земле до тех мест, покамест она умрёт.
            </blockquote>
            </p>
            <figure className="float">
                <img src={ch} alt="image" onClick={resizImage}/>
                <figcaption>
                <span className="italic">Японские солдаты закапывают живьём китайцев в Нанкине (1937 или 1938)</span>
                </figcaption>
            </figure>
            <p>
            Закапывание было подтверждено в 1663 году и в последующих Новоуказных статьях о татебных, разбойных и убийственных делах 1669 года. Хотя указ 1689 года отменил такую меру, заменив отсечением головы, практика погребения заживо продолжала применяться и в XVIII веке (нормы Соборного уложения в соответствии с указом 1714 года, имели в уголовном праве преимущество перед позднейшими указами). Немецкий дипломат Иоганн Корб в своём Дневнике путешествия в Московию (1698 и 1699), который он вёл во время пребывания посольства императора Леопольда I приводит примеры такой казни. В отношении матери, которая задумала убить своего мужа, и их дочери, которые наняли для этой цели убийц: «Обе женщины понесли казнь, соразмерную их преступлению: они были закопаны живые по шею в землю. Мать переносила жестокий холод до третьего дня, дочь же более шести дней». Также он писал, что «если только слух о сём справедлив» такой казни, по приказу царя Петра, были подвергнуты две постельницы цариц Марфы Алексеевны и Софьи Алексеевны, за участие в их политических интригах.
            </p>
            <p>
            Ещё в 1752 году в одном из приговоров указывали, что, хотя по Уложению 1649 года мужеубийцу нужно закопать в землю, но по силе указов Елизаветы Петровны 1744 и 1745 годов, требующих пересмотра смертных приговоров, «смертной казни чинить ей не подлежит».
            </p>
            <p>
            Начиная с этнографа И. М. Снегирёва («Русские в своих пословицах. Рассуждения и исследования об отечественных пословицах и поговорках, кн. 3, 1832»), поддержанного другими исследователями, с этим видом казни связывается происхождение русского фразеологизма (устойчивого сравнения) «стоит как вкопанный», хотя есть и мнения, оспаривающие данную точку зрения.
            </p>
            
            <p>
            Подобный вид казни использовали нацисты по отношению к населению СССР во время Великой Отечественной войны 1941—1945 годов и японцы во время Нанкинской резни в 1937-1938.
            </p>
            <h3>Погребение заживо</h3>
            <p>
            Казнь, состоявшая в том, что осужденного заживо хоронили в земле, существовала во все времена на всех континентах. В 220 году до P. X. китайский император Хуань-Ти повелел закопать живьем пятьсот ученых, чьи писания шли вразрез с принципами его правления. Инки казнили таким образом Деву Солнца за нарушение обета целомудрия. Так же поступали в Риме с весталками, обвиненными в небрежении долгом. В храм богини Весты отдавали дочерей знатнейшие и древнейшие семьи Рима. Девочек помещали в храм в возрасте шести — десяти лет, чтобы, оставаясь целомудренными, они по меньшей мере лет тридцать могли служить богине Весте. Нарушивших обет и тех, по чьей вине гас вверенный их заботам священный огонь, заживо закапывали на «Поле преступников». Орден весталок просуществовал одиннадцать веков и был упразднен Феодором в 389 году. Известно, что так казнили многих весталок. Светоний утверждает, что эта печальная участь постигла даже главную жрицу Корнелию.
            </p>
            <p>
            Сама история основания Рима начинается с закапывания. Рея Сильвия, дочь царя Альбы Нумитора, по принуждению брата стала весталкой, но родила Ромула и Рема. Она утверждала, что они сыновья Марса, но ее казнили, закопав живой в землю.
            </p>
            <p>
            Так же казнили Папу Каликста I. Его избрали в 218 году, в правление Александра Севера, и убили, сбросив на дно колодца, который засыпали мусором.
            </p>
            <figure className="block">
                <img src={sea} alt="image" onClick={resizImage}/>
                <figcaption>
                <span className="italic">Сбрасывание пленников в море, на камни и в башню, наполненную золой. Библейский словарь Дома Кальме. Частн. кол.</span>
                </figcaption>
            </figure>
            <p>
            Кодекс Хаммурапи, действовавший в Вавилонской империи, разрешал применять закон возмездия. Один из текстов гласил, что если постройка плохого архитектора рушилась, погребая под руинами сына одного из жителей, сын архитектора должен был понести наказание и подвергнуться погребению заживо.
            </p>
            <p>
            Персы усовершенствовали эту жуткую казнь: приговоренного бросали в огромную кучу пепла, тот заполнял легкие, вызывая удушье куда более мучительное, чем простой недостаток кислорода при традиционном закапывании.
            </p>
            <h3>Удушье от золотой фольги</h3>
            <p>
            В Китае виновный в уголовном преступлении мог избежать наказания, найдя себе замену и договорившись с семьей жертвы о сумме возмещения ущерба. Так, после массового истребления французов в Цинь-Цинь в июне 1870 года, мандарины, виновные в подстрекательстве, могли избежать наказания, предложив кули пятьсот — шестьсот франков, красивый гроб и похороны по высшему разряду, если те согласятся подставить вместо них свои головы. Но, если смертный приговор выносил император, спасения не было. Обычно суверен предоставлял знати выбор межу публичным отсечением головы и тихой смертью в домашних условиях. Во втором случае им отправляли пакетик с ядом, шелковую веревку — желтую или белую, в зависимости от сана, либо золотую фольгу, от которой человек задыхался. Особый китайский метод самоубийства при помощи золотой фольги заключался в том, что приговоренный помещал тончайшую золотую пластинку на ладонь или на рот и вдыхал ее. Фольга закупоривала горло, и человек задыхался. Добро — вольный уход из жизни, аналог японского харакири, происходил на глазах нескольких мандаринов, которые отправляли потом доклад императору.
            </p>
            <p>
            Галлы и германцы поступали так с предателями и трусами. Готы закапывали за педерастию. Подобная практика не обошла стороной и франков. Хлодомир избавился от короля бургундов Сигизмунда и двух его сыновей, опустив их на дно колодца, который тут же засыпали землей. При Пепине Коротком так часто казнили иудеев.
            </p>
            <p>
            Кодекс Каролины, изданный около 1530 года, стал первой попыткой кодификации уголовного права у германских народов и народов Центральной Европы. Он предусматривал семь способов казни, в том числе погребение заживо, в основном за детоубийство.
            </p>
            <h3>Только для женщин</h3>
            <p>
            В средневековой Франции женщин не вешали из соображений «пристойности». Считалось неприличным смотреть, как ноги женщины судорожно дергаются на уровне глаз зрителей. Женщин закапывали заживо. Юридические и уголовные архивы хранят документы многочисленных процессов, которые закончились вынесением такого приговора, в частности, по делу некоей Колетты де Сен-Жермен, обокравшей офицера, за что ее и погребли заживо в Абвиле в 1420 году. Только с 1449 года женщин стали отправлять на виселицу: юбки привязывали к ногам у коленей. Религиозные войны дали повод для массовых казней такого рода и католикам и протестантам.
            </p>
            <p>
            В Швеции и Дании погребение заживо было законной формой наказания вплоть до конца XVI века. Так обычно казнили женщин, погребением заживо заменяя колесование, к которому обычно приговаривали мужчин. В основном закапывали женщин, обвиненных в детоубийстве и скотоложстве. В Габоне, Индонезии и на Соломоновых островах погребение заживо просуществовало до XIX века, а в Индии — до начала XX века: по религиозному обычаю некоторых народов жен надлежало заживо хоронить вместе с их умершими мужьями. В других случаях религиозный закон заставлял жен всходить на костер, чтобы погибнуть в огне рядом с мертвым мужем.
            </p>
            <h3>Ради экономии патронов</h3>
            <p>
            Погребением заживо некоторые нацистские подразделения карали непокорных жителей и партизан, чья смерть должна была послужить для всех жестоким уроком. Такие казни были отмечены в Польше и России. Особое пристрастие к этому варварскому пережитку прошлого, похоже, питают азиаты. В 1968 году, когда американцы отбили у вьетконговцев императорский дворец, они обнаружили в ямах груды трупов — более трех тысяч человек, заживо похороненных коммунистами Во Нгуен Зиала.
            </p>
            <p>
            С апреля 1975 года до конца 1978-го красные кхмеры, правившие Камбоджей, устраивали массовые казни населения, в том числе применяя погребение заживо. Полагая, что их жертвы (более двух миллионов человек) недостойны расстрела и не заслуживают, чтобы на них тратили драгоценные патроны, они практиковали примитивные способы убийства: удар дубиной или мотыгой по затылку и погребение заживо. Мужчин, женщин и детей целыми семьями хоронили в тех ямах, которые они сами для себя рыли.
            </p>
            <p>
            Красным кхмерам мы обязаны еще одним «изобретением»: удушение полиэтиленовым пакетом, который надевали на голову приговоренному, от чего тот умирал в жутких конвульсиях. Полиэтиленовый пакет предназначался в основном для взрослых, детей душили, помещая в джутовые мешки.
            </p>
            <div className="link">см. также: <Link to="/articles/burialaliveasassident">Погребение заживо как инцедент</Link></div>
        </main>
    )
}