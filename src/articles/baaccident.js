import React from "react";
import {Link} from "react-router-dom";
import BackButton from "../backButton";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage.js";
import ScrollBtn from "../scrollTo.js";
import wiertz from "./images/Wiertz_burial.jpg";
import hays from "./images/angel-hays-image.jpg";
import hayscoffin from "./images/images.jpg";
import saypho from "./images/1.png";
import gazeta from "./images/gazeta.jpg";
import museum from "./images/Manchester_Natural_History_Museum.jpg";
import white from "./images/175px-White_Charles_physician.jpg";
import hindu from "./images/1024px-Codice_Casanatense_Hindu_Burial.jpg";

export default function BAasaccident(props) {
    return (
        <main>
            <BackButton goBack={props.history.goBack}/>
            <ScrollBtn />
            <h1>Погребение заживо как инцедент</h1>
            <figure className="block">
                <img src={wiertz} alt="image" onClick={resizImage}/>
                <figcaption>
                Антуан Вирц (1806—1865). Преждевременное погребение (1854)
                </figcaption>
            </figure>
            <h2>Случайное погребение заживо и тафофобия</h2>
            <h3>История</h3>
            <p>
            Случайное погребение человека, находящегося без сознания или в летаргическом сне, встречалось довольно редко, и не всегда дело доходило до самого погребения. К примеру, в 1344 году итальянский поэт Франческо Петрарка впал в летаргию, был сочтён мёртвым и пролежал в таком качестве 20 часов. В соответствии с итальянскими законами того времени, умершего полагалось похоронить в течение суток после его смерти, но Франческо пришёл в себя, шокировав этим присутствовавших. После этого случая Петрарка прожил ещё почти 30 лет.
            </p>
            <p>
            Ещё в 1772 году герцог Мекленбургский ввёл обязательную отсрочку похорон до третьего дня после смерти для предотвращения возможного погребения заживо. Вскоре эта мера была принята в ряде стран Европы, и её одобрил философ Мозес Мендельсон. В XIX веке страх быть погребённым заживо стал достаточно распространённой фобией, получив даже имя тафофобия — от др.-греч. τάφος — гроб, могила и φόβος — страх. Начиная со второй половины XIX века и вплоть до 1934 года в странах Европы и Северной Америки патентовались и производились специальные «безопасные гробы», оборудованные средствами спасения для погребённых заживо. Эти средства позволили бы похороненному по ошибке подать сигнал другим людям или же самостоятельно выбраться из могилы. Кроме того, подобными приспособлениями оборудовались некоторые склепы. Свидетельства о том, что данные средства спасения действительно кому-либо помогли, отсутствуют.
            </p>
            <figure className="float left">
                <img src={hindu} alt="image" onClick={resizImage}/>
                <figcaption>
               <span className="italic">Индуистский ритуал, в котором жену хоронят заживо с мужем, португальская иллюстрация XVI века из Códice Casanatense</span>
                </figcaption>
            </figure>
            <p>
            Страх быть погребёнными заживо испытывал ряд известных личностей. К примеру, Гоголь и Цветаева боялись быть похороненными живьём и специально это подчеркнули — Гоголь в «Выбранных местах из переписки с друзьями», Цветаева в предсмертной записке перед самоубийством (распространённая легенда о том, что Гоголь действительно был похоронен живым — при эксгумации его тело было обнаружено лежащим ниц в гробу, — несостоятельна). Известной жертвой страха погребения заживо был Альфред Нобель, у которого этот страх являлся «наследственным» — его отец, изобретатель Эммануил Нобель, также боялся быть похороненным заживо и даже изобрёл один из первых «безопасных гробов». Британский писатель Уилки Коллинз также страдал данной фобией, причём в настолько сильной форме, что каждую ночь оставлял «предсмертную записку», в которой просил читающего тщательно удостовериться в его смерти, если он не проснётся. По этой же причине философ Артур Шопенгауэр завещал ждать со своими похоронами пять дней после смерти, в результате чего похоронам философа мешал запах разложения тела.
            </p>
            <p>
            Своего рода легендой стала жительница Манчестера Ханна Безуик, богатая англичанка, испытывавшая патологический страх ошибочного погребения заживо (причём у неё были для этого основания: её брата по ошибке чуть не похоронили заживо). В соответствии с завещанием тело Ханны Безуик после её смерти в 1758 году было забальзамировано и более ста лет сохранялось без погребения «для периодической проверки на наличие признаков жизни». За время своего существования мумия Ханны Безуик приобрела широкую известность под названием Манчестерская мумия, несколько десятилетий являлась экспонатом музея Манчестерского общества естествознания. Лишь в 1868 году, после признания Ханны Безуик «безвозвратно и несомненно мёртвой», её тело было наконец предано земле.
            </p>
            <h3>Анджело Хейс</h3>
            <figure className="float">
                <img src={hays} alt="image" onClick={resizImage}/>
                <figcaption>
                Предположительная фотография Анджело Хейс
                </figcaption>
            </figure>
            
            <figure className="float left">
                <img src={hayscoffin} alt="image" onClick={resizImage}/>
                <figcaption>
                Гроб на случай преждевременного захоронения, изобретенный Анжело
                </figcaption>
            </figure>
            <p>
            19-летний Анджело Хейс (Angelo Hays) трагически погиб в аварии на мотоцикле в 1937 году. Вернее, так все подумали. Он врезался в кирпичную стену головой. У страхового агента были определенные сомнения относительно смерти юного мотоциклиста. Спустя два дня после похорон тело молодого человека было эксгумировано.
            </p>
            <p>
            Анджело был живой. Он впал в кому — именно это и помогло ему пережить чудовищное испытание. Тело расходовало меньше кислорода. После реабилитации Хейс поведал историю своего заточения в гробу. Он стал французской знаменитостью и даже изобрел специальный гроб, оснащенный радио-передатчиком, запасом еды, библиотекой и химическим туалетом на тот случай, если кто-то повторит его судьбу.
            </p>
            <h2>Сайфо Уильям Мдлетше</h2>
            <figure className="float">
                <img src={saypho} alt="image" onClick={resizImage}/>
                <figcaption>
                Сайфо Уильям Мдлетше
                </figcaption>
            </figure>
            <p>
            В 1993 году Сайфо Уильям Мдлетше (Sipho William Mdletshe) вместе со своей невестой попал в чудовищную автомобильную аварию. Его повреждения были такими тяжелыми, что его приняли за мертвого, доставили в морг Йоханнесбурга и положили в металлический контейнер — ожидать похорон.
            </p>
            <p>
            Мужчина очнулся спустя двое суток и обнаружил себя запертым в темноте. Его крики привлекли внимание персонала, и мужчину освободили.
            Отношения с невестой так и не удалось восстановить — она была убеждена, что ее бывший жених теперь зомби и преследует ее.
            </p>
            <h2>Милдред Кларк</h2>
            <figure className="float left">
                <img src={gazeta} alt="image" onClick={resizImage}/>
                <figcaption>
                Статья в газете о случае с Кларк
                </figcaption>
            </figure>
            <p>
            В 1994 году 86-летнюю Милдред Кларк (Mildred Clarke) нашли в собственной гостиной. Она не дышала, и ее сердце не билось. Старушку поместили в мешок для трупов, планируя доставить тело в морг.
            </p>
            <p>
            Спустя 90 минут она очнулась, шокировав и напугав персонал морга до икоты. Женщина прожила еще неделю, прежде чем по-настоящему скончаться. Мы верим, что в этот раз врачи уделили больше времени проверке.
            </p>
            <h2>8 дней под землей</h2>
            <p>
            В 2015 году у пары в Китае родился младенец с расщелиной неба. Парень и девушка были не готовы к ребенку «с проблемами», запаниковали и решили избавиться от нежелательного ребенка любым способом. Так, они положили его в картонную коробку и похоронили в неглубокой могиле на кладбище.
            </p>
            <p>
            Лу Фенглиан (Lu Fenglian) собирала травы в окрестностях кладбища и услышала плач, доносящийся из-под земли. К тому моменту прошло уже восемь дней. Она раскопала могилу и обнаружила там младенца, который выжил только благодаря тому, что картон пропускал воздух и воду. К сожалению, за недостатком улик, арестовать пару так и не удалось — родители малыша доказывали, что убить их сына хотели их собственные родители. Никто не поверил, но доказать причастность родителей так и не удалось.
            </p>
            <h3>Ханна Безуик</h3>
            <figure className="block">
                <img src={museum} alt="image" onClick={resizImage}/>
                <figcaption>
               <span className="italic">Музей Манчестерского общества естествознания — местонахождение мумии Ханны Безуик с 1828 по 1867 год. Рисунок Чарлза Уоррена Кленнела (англ. Charles Warren Clennell; 1815—1873). Около 1850. Собрание муниципалитета Манчестера</span>
                </figcaption>
            </figure>
            <p>
           <span className="bold">Ха́нна Бе́зуик</span> из Бёрчин-Ба́уэра (англ. Hannah Beswick of Birchin Bower; 1688, Холлинвуд, Олдем, Большой Манчестер — февраль 1758, Манчестер) — богатая англичанка, испытывавшая патологический страх погребения заживо. После смерти Ханны Безуик её тело было забальзамировано и более ста лет сохранялось без погребения «для периодической проверки на наличие признаков жизни».
            </p>
            <p>
            Метод бальзамирования, использовавшийся при обработке тела Ханны Безуик, неизвестен, но можно предположить, что главной его составляющей была замена крови смесью скипидара и киновари. Через некоторое время тело было помещено в старинный застеклённый часовой шкаф в доме семейного врача Ханны Безуик доктора Чарлза Уайта. Необычное завещание Безуик принесло ей своеобразную посмертную славу, и Уайт счёл возможным выставить мумию на обозрение своим гостям.
            </p>
            <p>
            Позднее, по завещанию самого Уайта, мумифицированное тело Безуик перешло в собственность его коллеги доктора Олльера (англ. Ollier). Олльер завещал мумию музею Манчестерского общества естествознания, где она была выставлена в качестве экспоната и приобрела прозвище Манчестерская мумия, или Мумия из Бёрчин-Бауэрa. По прошествии тридцати девяти лет музейное собрание было передано Манчестерскому университету, после чего, решением руководства университета и с согласия манчестерского епископа, мумия была, наконец, предана земле. Церемония погребения состоялась на манчестерском кладбище Харперхей 22 июля 1868 года — через сто десять с лишним лет после смерти Ханны Безуик. Могила Безуик осталась безымянной.
            </p>
            <h4>Завещание</h4>
            <p>
            Ханна Безуик, родившаяся в 1688 году, унаследовала от своего отца, Джона Безуика из Фэйлзуорта, крупное состояние. За несколько лет до смерти Ханны один из её братьев, также по имени Джон, выказал признаки жизни на собственных похоронах: кто-то заметил, что в тот момент, когда над Джоном собирались опустить крышку гроба, веки покойника вздрогнули. Осмотрев тело, доктор Чарлз Уайт подтвердил, что Джон всё ещё жив. Через несколько дней мнимоумерший окончательно пришёл в себя и впоследствии прожил ещё много лет. Происшествие произвело на Безуик огромное впечатление, вселив в неё паническую боязнь стать жертвой преждевременных похорон.
            </p>
            <p>
            По утверждению регистратора музея Королевской коллегии хирургов Англии Джесси Добсон (англ. Jessie Dobson, 1906—1984), рассказы очевидцев о событиях, последовавших за смертью Ханны Безуик в 1758 году, полны «неточностей и противоречий». Согласно большинству свидетельств, Безуик завещала Уайту — одному из пионеров акушерства в Великобритании, основателю Манчестерской королевской лечебницы — 25 000 фунтов стерлингов при условии, что тот будет хранить её тело без погребения, периодически проверяя его на наличие признаков жизни. Однако в завещании Безуик, подписанном 25 июля 1757 года, указано лишь, что Уайту причитается всего 100 фунтов стерлингов и ещё 400 фунтов ассигнуется на похоронные расходы. По другим свидетельствам, Уайт был душеприказчиком Безуик и сам получал по завещанию упомянутые 400 фунтов стерлингов, остатком от которых — после оплаты всех похоронных расходов — мог распоряжаться по своему усмотрению. Таким образом, бальзамирование Безуик позволяло Уайту получить все 400 фунтов, отпущенные ею на собственные похороны. Предполагалось также, что Уайт задолжал Безуик значительную сумму, которую обязан был возместить, оплачивая её похороны, и забальзамировал свою пациентку, чтобы избежать выплаты долга. Тем не менее, в завещании Безуик её душеприказчицами названы Мэри Грэм (англ. Mary Graeme) и Эстер Робинсон (англ. Esther Robinson), а не Уайт. По некоторым сведениям, в завещании было также оговорено, что тело Ханны Безуик должно привозиться в Бёрчин-Бауэр каждые 21 год (условие выполнялось до 1837 года). Известно, что подробности завещания Безуик обсуждались в 1866 году — через сто с лишним лет после её смерти.
            </p>
            <h4>Бальзамирование</h4>
            <figure className="float left">
                <img src={white} alt="image" onClick={resizImage}/>
                <figcaption>
               <span className="italic">Чарлз Уайт (1728—1813) — бальзамировщик тела Ханны Безуик. Гравюра У. Уорда (англ. W. Ward; 1809) по портрету работы Дж. Аллена (англ. J. Allen)</span>
                </figcaption>
            </figure>
            <p>
            В завещании 1757 года желание Ханны Безуик быть забальзамированной не упоминается. Выдвигалась версия о том, что Безуик просила Уайта не предавать её тело земле лишь до тех пор, пока не станет несомненно ясно, что она мертва, — однако Уайт оказался не в силах побороть соблазн и добавил к своему собранию «влажных и сухих» экспонатов настоящую мумию. Пристрастившийся к анатомии в период учёбы в Лондоне, Уайт регулярно пополнял домашнюю коллекцию анатомических «курьёзов» — на момент его смерти включавшую, наряду с мумией Ханны Безуик, скелет Томаса Хиггинса (англ. Thomas Higgins), натсфордского разбойника и овцекрада, повешенного за квартирную кражу со взломом.
            </p>
            <p>
            Описание метода бальзамирования, использовавшегося Уайтом, не сохранилось. Известно, однако, что в 1748 году Уайт был слушателем частного анатомического курса Уильяма Хантера — создателя одной из первых систем артериального бальзамирования, ставшей прототипом бальзамировочных технологий нового времени (в частности, эффективного метода сохранения органической материи, разработанного выдающимся итальянским бальзамировщиком первой половины XX века Альфредо Салафией). Можно предположить, что Уайт воспользовался процедурой, позаимствованной им у своего наставника. В соответствии с методом Хантера, в артерии и вены тела вводилась смесь скипидара и киновари, после чего — для очищения и уменьшения объёма препарата — внутренние органы извлекались из грудной и брюшной полостей и помещались в воду. Далее из трупа выкачивалась, посредством механического давления, по возможности, вся кровь; тело тщательно промывалось спиртом; органы, изъятые из груди и брюшины, возвращались на место; следовала ещё одна инъекция скипидара и киновари. Наконец, все полости и отверстия тела заполнялись смесью камфоры, селитры и камеди, тело зашивалось и после заключительного обмывания — а также, вероятно, обмазывания дёгтем, препятствующим чрезмерному обезвоживанию — помещалось в ящик, заполненный гипсом для поглощения избыточной влаги.
            </p>
            <h4>Экспонат</h4>
            <p>
            Мумифицированное тело Ханны Безуик первоначально находилось в Энкоутс-Холле (англ. Ancoats Hall) — доме одного из членов семейства Безуиков, но вскоре было перевезено в дом доктора Уайта в Сейле, где хранилось в старинном застеклённом часовом шкафу. В числе посетителей Уайта, пожелавших увидеть мумию Безуик в его доме, был знаменитый поэт Томас де Квинси. После смерти Уайта в 1813 году мумия перешла в собственность его коллеги доктора Олльера; после смерти Олльера в 1828 году была завещана музею Манчестерского общества естествознания. Тело Безуик экспонировалось в вестибюле музея рядом с древнеперуанской и древнеегипетской мумиями. Потомкам Безуик позволялось бесплатно навещать мумию в любое время. Посетитель, увидевший мумию Безуик в 1844 году, отозвался о ней как об «одном из замечательнейших предметов в музее». По выражению писательницы Эдит Ситуэлл, «холодная тёмная тень её мумии нависла над Манчестером в середине восемнадцатого столетия».
            </p>
            <p>
            До настоящего времени не дошло ни одного прижизненного или посмертного портрета Ханны Безуик. Одно из немногих известных словесных описаний мумии принадлежит манчестерскому историку Филипу Вентуорту (англ. Philip Wentworth):
            <blockquote>
            Тело сохранилось хорошо, но лицо было ссохшееся и чёрное. Ноги и туловище были туго спелёнаты лоскутами прочной ткани, наподобие тика, идущего на обивку матрацев, а всё тело — тело крошечной старушонки — покоилось в стеклянном ящике, похожем на гроб.
            </blockquote>
            </p>
            <p>
            Вскоре после передачи музейного собрания в дар Манчестерскому университету в 1867 году было решено, что, поскольку Безуик была «безвозвратно и несомненно мертва», настало время предать её тело земле. С 1837 года, однако, британским законодательством воспрещались чьи бы то ни было похороны без предварительного официального заверения факта смерти судебно-медицинским экспертом. Поскольку Безуик умерла за полвека до принятия соответствующего закона, руководству университета пришлось исходатайствовать специальный указ о её погребении у министра правительства. С согласия манчестерского епископа, Ханна Безуик была похоронена в безымянной могиле на кладбище Харперхей на северо-восточной окраине Манчестера 22 июля 1868 года.
            </p>
            <div className="link">см. также: <Link to="/articles/burialaliveasexec">Погребение заживо как способ казни</Link></div>
        </main>
    )
}