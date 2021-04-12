import { Route, Switch } from "react-router-dom";
import React from "react";
import NorthstarGallery from "./galleryComponents/northstargallery.js";
import European from "./galleryComponents/european.js";
import Statues from "./galleryComponents/statues.js";
import Russian from "./galleryComponents/russian.js";
import FromSubscribers from "./galleryComponents/fromSubscribers.js";
import GalleryMain from "./galleryComponents/galleryMain.js";

export default function GalleryRouter() {
    return (
        <Switch>
            <Route path="/gallery" exact component={GalleryMain}/>
            <Route path="/gallery/northstargallery" component={NorthstarGallery}/>
            <Route path="/gallery/european" component={European}/>
            <Route path="/gallery/statues" component={Statues}/>
            <Route path="/gallery/russian" component={Russian}/>
            <Route path="/gallery/fromSubscribers" component={FromSubscribers}/>
        </Switch>
    )
}