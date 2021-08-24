import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import img011 from "./images/011.jpg";
import openrequest from "./base.js";
import "./css/resizImage.css";
import "./css/galleryHome.css";
import resizImage from "./galleryComponents/resizeImage.js";

export default function GalleryComponent() {
    let [img, setImg] = useState(null);
    let [textarea, setTextarea] = useState(false);
    let [sended, setSended] = useState(false);

    function onclickHandler(e) {
        let target = e.target;
        if(target.tagName == "DIV") {
            setTextarea(true);
        } else {
            setTextarea(false);
        }
    }

    function emailOnchangeHandler(e) {
        let regexp = /^[^\W\_][a-z0-9\-\.\_]+@[a-z]+\.[a-z]{2,}$/;
        let target = e.target;
        let result = regexp.test(target.value);
        console.log(result);
        let warnContainer = document.querySelector(".warning");
        let submit = document.querySelector("button[type=submit]");
        if(!result) {
            warnContainer.textContent = "Email-адрес введен неверно";
            submit.disabled = true;
        } else {
            warnContainer.textContent = "";
            submit.disabled = false;
        }
    }

    function textareaOnchangeHandler(e) {
        let target = e.target;
        let warnContainer = document.querySelector(".warning");
        let submit = document.querySelector("button[type=submit]");
        if(target.value.length < 3) {
            warnContainer.textContent = "Поле заполнено не полностью.";
            submit.disabled = true;
        } else {
            warnContainer.textContent = "";
            submit.disabled = false;
        }
    }

    function onchangeHandler(e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            setImg(reader.result);
            }
    }

        function removeImageHandler(e) {
            let parent = e.target.closest(".image-container");
            let picFromForm = parent.querySelector(".picFromForm");
            picFromForm.remove();
            setImg(null);
        }

        function onSubmitHandler(event) {
            event.preventDefault();
            let form = document.forms[0];
            let email = form.email.value;
            let info = form.contacts.value;
                let transaction = openrequest.result.transaction("images", "readwrite");
                let store = transaction.objectStore("images");
                let res = store.add({img, email, info, id: performance.now()});
                    res.onsuccess = function () {
                        console.log("success!", res.result);
                }

            let container = document.querySelector(".images");
            container.remove();
            setTextarea(false);
            document.getElementById("email").value = "";
            document.getElementById("files").value = "";
            setSended(true);
        }

        useEffect(() => {
            let sendedContainer = document.querySelector(".warning");
            setTimeout(() => {
                console.log(sendedContainer);
                if(sendedContainer) {
                sendedContainer.textContent = "";
                }
            }, 1000)
        }, [sended])

    return (
        <section className="galleryForm">

            <h2>Галерея</h2>

            <Link to="/gallery"><img src={img011} /></Link>

            <p>Нижегородская область, г. Дзержинск, Желнинское кладбище</p>

            <h3>Хотите увидеть свои фото в нашей галерее?</h3>

            <p>Вы можете отправить свои фотографии для публикации в галерее нашего сайта. Для этого вам нужно прислать фото, указать свое авторство (при желании ссылки на ваши социальные сети) и адреса кладбищ для каждого фото.</p>

            <p>Так же вы можете прислать подходящие тематике этого сайта фотографии других авторов. В таком случае вам нужно будет указать ссылку на источник и имя автора.</p>

            <p>Фотографии без каких-либо подписей не публикуются.</p>

            {/* {
                    sended ? <div className="sended">Отправлено!</div> : <div></div>
            } */}

            <form onSubmit={onSubmitHandler}>               
                <div className="column">

                <p className="bold">Отправка фотографий</p>

                <input type="file" accept="image/*image/jpeg" name="file" onChange={onchangeHandler} id="files"/>

            <label htmlFor="email">Введите ваш email:</label>

                <input type="email" placeholder="email" name="email" required id="email" onChange={emailOnchangeHandler}/>

            <label htmlFor="contacts">Введите ваши контактные данные: </label>

                {
                textarea ? <textarea name="contacts" placeholder="Ссылки, контакты, имя" required id="contacts" autoFocus={true} onChange={textareaOnchangeHandler}/> :
                <div className="getTextarea" onClick={onclickHandler}>Кликните, чтобы заполнить поле</div>
                }

                <div className="warning bold">{sended ? "Отправлено!" : ""}</div>

                <button type="submit">Отправить</button>

                {
                img ? <div className="images">
                        <div className = "image-container">
                        <div className="imgCloseBtn" onClick={removeImageHandler}>❌</div>
                        <img src = {img} className = "picFromForm" onClick={resizImage}/>
                        </div>
                </div> : null
                }
                </div>
                </form>
        </section>
    )
}