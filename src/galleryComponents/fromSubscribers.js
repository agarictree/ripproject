import React, { useEffect, useState } from "react";
import BackButton from "../backButton";
import openrequest from "../base";
import "../css/gallery.css";
import resizImage from "./resizeImage";

// function clearDatabase() {
//     openrequest.onsuccess = function () {
//         let transaction = openrequest.result.transaction("images", "readwrite");
//         let store = transaction.objectStore("images");
//         let request = store.clear();
//           request.onsuccess = function () {
//               window.location.reload();
//               console.log("Успешно!");
//           }
//     }
// }
export default function FromSubscribers(props) {
    let [images, setImages] = useState(null);
    useEffect(() => {
        openrequest.onsuccess = function () {
            let transaction = openrequest.result.transaction("images", "readonly");
            let store = transaction.objectStore("images");
            let request = store.getAll();
              request.onsuccess = function () {
                  let result = request.result;
                  setImages(result);
              }
        }
    })
    return (
        <main>
            <button className="clearDatabase" >Очистить</button>
            <div className="gallery interactive">
            <h1>Галерея: фотографии от подписчиков</h1>
            <BackButton  goBack={props.history.goBack} />
                {
                    images ? 
                    images.map((el, i) => {
                        return (
                        <div className="gallery-component"  key={i}>
                            <img src={el.img} alt={"image" + i} onClick={resizImage}/>
                            <div className="title">
                                from: {el.info}
                            </div>
                        </div>
                        )
                    }) : null
                }
            </div>
            </main>
    )
}