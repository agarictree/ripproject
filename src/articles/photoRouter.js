import { Route, Switch } from "react-router-dom";
import React from "react";
import Helio from "./heliography";
import Dagger from "./daggerotype";
import Tintype from "./tintype";
import Ambro from "./ambrotype";
import Callotype from "./callotype";
import Colprocess from "./colprocess";

export default function PhotoRouter(props) {
    return (
        <Switch>
            <Route path="/articles/victorianphotography/helio" component={Helio}/>
            <Route path="/articles/victorianphotography/dagger" component={Dagger}/>
            <Route path="/articles/victorianphotography/tintype" component={Tintype}/>
            <Route path="/articles/victorianphotography/ambro" component={Ambro}/>
            <Route path="/articles/victorianphotography/callotype" component={Callotype}/>
            <Route path="/articles/victorianphotography/colprocess" component={Colprocess}/>
        </Switch>
    )
}