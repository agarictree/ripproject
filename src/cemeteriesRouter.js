import { Route, Switch } from "react-router-dom";
import React from "react";
import CemeteriesMain from "./cemeteriesMain.js";
import NigNov from "./nn.js";

export default function CemeteriesRouter(props) {
    return (
        <Switch>
            <Route path="/cemeteries" exact component={CemeteriesMain}/>
            <Route path="/cemeteries/nn" component={NigNov}/>
        </Switch>
    )
}