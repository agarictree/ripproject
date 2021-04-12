import { Route, Switch } from "react-router-dom";
import React from "react";
import ArticlesMain from "./articlesMain.js";
import Victorian from "./articles/victorian.js";
import Egyptian from "./articles/egyptian.js";
import Greece from "./articles/greece.js";
import Vanitas from "./articles/vanitas.js";
import Memento from "./articles/mementomori.js";
import Macabre from "./articles/macabre.js";
import Moriendi from "./articles/arsmoriendi.js";
import Deathnchest from "./articles/deathnchest.js";
import Dayofthedead from "./articles/dayofthedead.js";
import Catarina from "./articles/catarina.js";
import BAasaccident from "./articles/baaccident.js";
import BAasexec from "./articles/baexec.js";
import Postmortem from "./articles/postmortem.js";
import Myths from "./articles/myth.js";
import Photo from "./articles/photo.js";
import Ecofuneral from "./articles/ecofuneral.js";
import Cremated from "./articles/cremeted.js";

export default function ArticlesRouter() {
    return (
        <Switch>
            <Route path="/articles" exact component={ArticlesMain}/>
            <Route path="/articles/victorian" component={Victorian}/>
            <Route path="/articles/egyptian" component={Egyptian}/>
            <Route path="/articles/greece" component={Greece}/>
            <Route path="/articles/vanitas" component={Vanitas}/>
            <Route path="/articles/mementomori" component={Memento}/>
            <Route path="/articles/macabre" component={Macabre}/>
            <Route path="/articles/arsmoriendi" component={Moriendi}/>
            <Route path="/articles/deathnchest" component={Deathnchest}/>
            <Route path="/articles/dayofthedead" component={Dayofthedead}/>
            <Route path="/articles/catarina" component={Catarina}/>
            <Route path="/articles/burialaliveasassident" component={BAasaccident}/>
            <Route path="/articles/burialaliveasexec" component={BAasexec}/>
            <Route path="/articles/postmortem" component={Postmortem}/>
            <Route path="/articles/pmmyth" component={Myths}/>
            <Route path="/articles/victorianphotography" component={Photo}/>
            <Route path="/articles/ecofuneral" component={Ecofuneral}/>
            <Route path="/articles/cremated" component={Cremated}/>
        </Switch>
    )
}