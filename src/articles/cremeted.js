import React from "react";
import {Link} from "react-router-dom";
import BackButton from "../backButton";
import "../css/resizImage.css";
import resizImage from "../galleryComponents/resizeImage.js";
import ScrollBtn from "../scrollTo.js";
import pic1 from "./images/1024px-Feuerhalle_Simmering_Ofen.jpg";
import pic2 from "./images/800px-Kremationsofen.jpg";
import pic3 from "./images/Cremation_in_Japan-J._M._W._Silver.jpg";
import pic4 from "./images/Die_Gartenlaube_(1874)_b_311.jpg";
import pic5 from "./images/1024px-Cremation_in_Nepal_,2002.jpg";
import pic6 from "./images/800px-Hauptfriedhof-ffm-krematoriums-ofen-kammer-001.jpg";

export default function Cremated(props) {
    return (
        <main>
            <ScrollBtn />
            <BackButton  goBack={props.history.goBack}/>
            <h2>Кремация</h2>
            <figure className="block">
                <img src={pic3} alt="image" onClick={resizImage}/>
                <figcaption>
                Кремация на костре в Японии, 1867 год
                </figcaption>
            </figure>
            <p>
                <span className="bold">Кремация</span> — процесс сожжения тел. Обычно проводится в качестве обряда перед погребением. Осуществляется на источнике открытого огня (в древних сообществах и у традиционалистов в качестве такового используется погребальный костёр; в современном обществе данный процесс осуществляется в печи крематория). По современным европейским правилам, после кремации прах умершего помещается в погребальную урну, и затем может быть захоронен различными путями.
            </p>
            <h3>История</h3>
            <figure className="float left">
                <img src={pic5} alt="image" onClick={resizImage}/>
                <figcaption>
                Подготовка к кремации в Непале
                </figcaption>
            </figure>
            <p>
            Первые свидетельства зарождения традиции использования огня в погребальной практике зафиксированы археологами в эпоху среднего палеолита. В мезолите, энеолите, неолите и бронзовом веке в отдельных культурах, наряду с трупоположением, стали практиковать кремацию. В раннем железном веке кремация распространяется повсеместно, порой как доминирующий над трупоположением обряд.

            Согласно легенде, после смерти Будды Гаутамы его тело было кремировано, а останки праха были помещены в особые мемориальные строения - ступы в различных частях Индии.
            </p>

            <p>
            В Европе кремация широко использовалась в Древней Греции. Греки считали, что сжигание поможет усопшему в загробном мире. Затем эта традиция была перенесена в Древний Рим. Там кремированные останки стали хранить в особых местах — колумбариях.

            В Ветхом Завете описана кремация первого Израильского царя Саула и его сыновей, погибших в битве с филистимлянами. Когда подданные царя забрали тела убитых, их с почестями кремировали, а затем захоронили:
            </p>
            <blockquote>
            и поднялись все люди сильные, и шли всю ночь, и взяли тело Саула и тела сыновей его со стены Беф-Сана, и пришли в Иавис, и сожгли их там; и взяли кости их, и погребли под дубом в Иависе, и постились семь дней. (1 Цар. 31:12-13)
            </blockquote>
            <p>
            В христианстве кремация считалась признаком язычества. Поэтому с распространением христианства она уступила место погребению в землю. К 400 г н. э. большинство народов Западной Европы приняло крещение и отказалось от кремации. В 785 году, под угрозой смертной казни, Карл Великий запретил кремацию, и она была забыта примерно на тысячу лет.
            </p>
            <p>
            Возрождение кремации произошло в Европе во второй половине XVIII века. В это время быстро росли города. Кладбища не справлялись с постоянным потоком умерших. Появились братские могилы и захоронения рядом с домами. Близость кладбищ иногда вызывала эпидемии среди местных жителей — в те годы редко кто умирал естественной смертью. Открытие микроорганизмов показало, что захоронения являются источником опасности для людей. Поэтому вспомнили про сжигание трупов. При этом кремацию необходимо было организовать без оскорбления усопшего и его родственников. Обычные костры не годились для этих целей. Поэтому начали строить крематории.
            </p>
            <p>
            В 1869 году Международная медицинская конференция, проходившая во Флоренции, приняла резолюцию, в которой призывала к широкому распространению кремации как способствующей «сохранению здоровья и земли для живых людей». Этот призыв услышали во многих странах мира.

            В 1873 профессор Бруно Брунетти разработал первую в мире кремационную печь, которая была продемонстрирована на Международной выставке в Вене. В следующем году была основана Английская ассоциация крематоров. Активным её участником был сэр Генри Томпсон, личный врач королевы Виктории. В 1878 году в английском городе Уокинге и немецком городе Готе были построены первые в Европе крематории.
            </p>
            <p>
            Кремация стала быстро распространяться и в Америке. В 1792 году состоялась первая документально подтверждённая кремация. В 1876 году доктором Дж. Ле Мойном был построен первый крематорий около Вашингтона. В период с 1881 по 1885 годы в США было создано несколько ассоциаций крематоров. Постепенно, с ростом спроса на этот вид услуг, росло и количество крематориев в стране.
            </p>
            <p>
            В 1913 году в Северной Америке работали пятьдесят два крематория, проведшие более десяти тысяч кремаций. В этом же году доктор Х. Эриксен основал Американскую ассоциацию крематоров, известную сейчас как Ассоциация крематоров Северной Америки (Cremation Association of North America (CANA).

            В России первый крематорий появился до революции во Владивостоке для сжигания тел японцев. В Советской России первый крематорий был открыт в декабре 1920 года в здании бань Васильевского острова Петрограда. Он работал недолго, всего три месяца, и был остановлен в феврале 1921 года «из-за отсутствия дров».

            В 1927 году около Донского монастыря в Москве открылся Первый московский крематорий.
            </p>
            <div className="figures-set">
            <figure className="figures-item">
                <img src={pic1} alt="image" onClick={resizImage}/>
            </figure>

            <figure className="figures-item">
                <img src={pic2} alt="image" onClick={resizImage}/>
            </figure>

            <figure className="figures-item">
                <img src={pic4} alt="image" onClick={resizImage}/>
            </figure>
            
            <figure className="figures-item">
                <img src={pic6} alt="image" onClick={resizImage}/>
            </figure>
            </div>
        </main>
    )
}