import React from "react";
import BackButton from "../backButton";
import resizImage from "./resizeImage.js";
import "../css/gallery.css";

function importAll(r) {
    return r.keys().map(r);
  }
  
  const modules = importAll(require.context('../images/gallery/nsgallery', false, /\.(png|jpe?g|svg)$/));
  let images = modules.map((el) => el.default);

export default function NorthstarGallery(props) {
    
    console.log(props.history);
    return (
        <section className="gallery">
            <h1>Галерея: Northstar gallery</h1>
            <BackButton goBack={props.history.goBack}/>
        {
            images.map((img, i) => {
                return <img key={i} src={img} alt={"image" + i} onClick={resizImage}/>
            })
        }
        </section>
    )
}