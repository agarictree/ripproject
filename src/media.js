import React from "react";
import "./css/media.css";
import ornament from "./images/ornament.png";
import Aside from "./aside";

export default function Media() {
    return (
        <div className="container">
                <Aside links={[
                    {link: "/media/documentary", title: "Документальные фильмы"},
                    {link: "/media/movies", title: "Фильмы"},
                    {link: "/media/music", title: "Музыка"},
                    {link: "/media/archives", title: "Архивы, частные коллекции, информация"}
                ]}/>
                <section className="textiframe">
                    <h1>Танец скелетов / The Skeleton Dance (1929)</h1>
                    
                    <p>Чёрно-белый короткометражный музыкальный мультфильм Уолта Диснея. Является первым музыкальным мультфильмом и первым в серии «Silly Symphonies».
                        Зловещая темнота окутывает старинное кладбище, на котором после полуночи рядом с могилами вытанцовывают забавные скелеты. Но первый утренний крик петуха прервёт танцоров.</p>
                    <iframe src="http://vk.com/video_ext.php?oid=-115516565&id=456239090&hash=d5840c04ff07015f&hd=1" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                    
                </section>
        </div>
    )
}