import React from "react";
import "./css/gallery.css";
import MainGalleryPage from "./mainGalleryPage";
import Aside from "./aside";


export default function Gallery() {
    
    return (
        <div id="all">
            <Aside links={[
                {link: "/gallery/northstargallery", title: "Northstar gallery"},
                {link: "/gallery/european", title: "Европейские кладбища"},
                {link: "/gallery/statues", title: "Статуи и постаменты"},
                {link: "/gallery/russian", title: "Российские кладбища"},
                {link: "/gallery/fromSubscribers", title: "Галерея изображений от подписчиков"},
            ]}/>
            <MainGalleryPage />
        </div>
    )
}