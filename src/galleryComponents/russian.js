import React from "react";
import "../css/gallery.css";
import GalleryPageComponent from "./galleryPageComponent";
import "../css/gallery.css";

function importAll(r) {
    return r.keys().map(r);
  }
  
  const modules = importAll(require.context('../images/gallery/russian', false, /\.(png|jpe?g|svg)$/));
  let images = modules.map((el) => el.default);

export default function Russian(props) {
    return (
        // <section className="gallery">
        //     <h1>Галерея: Русские кладбища</h1>
        //     <BackButton goBack={props.history.goBack}/>
        // {
        //     images.map((img, i) => {
        //         return <img key={i} src={img} alt={"image" + i} onClick={resizImage}/>
        //     })
        // }
        // </section>
        <GalleryPageComponent header = "Галерея: Русские кладбища" history = {props.history} images = {images} />
    )
}