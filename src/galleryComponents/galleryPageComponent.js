import React from "react";
import resizImage from "./resizeImage";
import BackButton from "../backButton";

export default function GalleryPageComponent(props) {
    return (
        <section className="gallery">
        <h1>{props.header}</h1>
        <BackButton goBack={props.history.goBack}/>
    {
        props.images.map((img, i) => {
            return <img key={i} src={img} alt={"image" + i} onClick={resizImage}/>
        })
    }
    </section>
    )
}