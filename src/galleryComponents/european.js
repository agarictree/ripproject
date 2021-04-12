import React from "react";
import BackButton from "../backButton";
import resizImage from "./resizeImage.js";
import "../css/gallery.css";

function importAll(r) {
    return r.keys().map(r);
  }
  
  const modules = importAll(require.context('../images/gallery/europe', false, /\.(png|jpe?g|svg)$/));
  let images = modules.map((el) => el.default);

export default function European(props) {
    return (
        <div className="gallery">
            <h1>Галерея: Европейские кладбища</h1>
            <BackButton goBack={props.history.goBack} />
            {
            images.map((img, i) => {
                return <img key={i} src={img} alt={"image" + i} onClick={resizImage}/>
            })
        }
        </div>
    )
}