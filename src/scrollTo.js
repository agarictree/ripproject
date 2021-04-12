import React, { useEffect, useState } from "react";
import"./css/scroll.css";

export default function ScrollBtn() {
let [state, setState] = useState(false);
useEffect(() => {
    document.body.onscroll = function () {
        if(window.pageYOffset > 500) setState(true);
        else setState(false);
    }
    
}, [state]);
        return state ? <div className="scrollBtn" onClick={() => window.scrollTo(0,0)}>Наверх</div> : <div hidden className="scrollBtn" onClick={() => window.scrollTo(0,0)}>Наверх</div>;
}