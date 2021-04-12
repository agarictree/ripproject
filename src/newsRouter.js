import React from "react";
import { Route, Switch } from "react-router-dom";
import Archive from "./archive";
import NewsMain from "./newsMain";

export default function NewsRouter(params) {
    return (
        <Switch>
            <Route path="/news" exact component={NewsMain}/>
            <Route path="/news/archive" exact component={Archive}/>
        </Switch>
    )
}