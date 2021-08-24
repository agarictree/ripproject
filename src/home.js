import React from "react";
import ArticleHome from "./articleHome";
import GalleryComponent from "./gallery-component";
import NewsComponent from "./news-component";
import "./css/containerHome.css";

export default function Home() {
    return (
        <section className="container">
            <div className="container-home">
            <ArticleHome />
            
            <GalleryComponent />

            <NewsComponent />
            </div>

        </section>
    )
}