import React, { useEffect, useState } from "react";
import "../css/galleryMain.css";
import { Link } from "react-router-dom";
import openrequest from "../base";
import cross from "../images/011.jpg";

function importAll(r) {
    return r.keys().map(r);
}

const modules = importAll(require.context('../images/gallery/nsgallery', false, /\.(png|jpe?g|svg)$/));
let images = modules.map((el) => el.default);
const modules2 = importAll(require.context('../images/gallery/statues', false, /\.(png|jpe?g|svg)$/));
let images2 = modules2.map((el) => el.default);

const modules3 = importAll(require.context('../images/gallery/europe', false, /\.(png|jpe?g|svg)$/));
let images3 = modules3.map((el) => el.default);

const modules4 = importAll(require.context('../images/gallery/russian', false, /\.(png|jpe?g|svg)$/));
let images4 = modules4.map((el) => el.default);


export default function GalleryMain() {
    let [img, setImg] = useState(null);
    useEffect(() => {
        openrequest.onsuccess = function () {
            let transaction = openrequest.result.transaction("images", "readonly");
            let store = transaction.objectStore("images");
            let request = store.getAll();
              request.onsuccess = function () {
                  let result = request.result;
                  setImg(result);
              }
        }
    })
    return (
        <section className="albums">
            <Link to="/gallery/northstargallery">
            <div className="album">
                <h1>Northstar Gallery</h1>
                    <img src={images[0]} alt="album"/>
            </div>
            </Link>
            <Link to="/gallery/statues">
            <div className="album">
                <h1>Статуи и надгробные плиты</h1>
                    <img src={images2[0]} alt="album"/>
            </div>
            </Link>
            <Link to="/gallery/european">
            <div className="album">
                <h1>Европейские кладбища</h1>
                    <img src={images3[0]} alt="album"/>
            </div>
            </Link>
            <Link to="/gallery/russian">
            <div className="album">
                <h1>Русские кладбища</h1>
                    <img src={images4[0]} alt="album"/>
            </div>
            </Link>
            
            <Link to="/gallery/fromSubscribers">
                <div className="album">
                    <h1>Фото от подписчиков</h1>
                    <img src={cross} alt="image"/>
                </div>
            </Link>

        </section>
        
    )
}