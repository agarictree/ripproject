import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./home.js";
import About from "./about.js";
import Gallery from "./gallery.js";
import Articles from "./articles.js";
import News from "./news.js";
import Media from "./media.js";
import CemeteriesRouter from "./cemeteriesRouter.js";

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/articles" render={Articles}/>
            <Route path="/cemeteries" render={CemeteriesRouter}/>
            <Route path="/news" component={News}/>
            <Route path="/media" component={Media}/>
        </Switch>
    )
}