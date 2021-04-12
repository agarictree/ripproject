import React from "react";
import "../css/resizImage.css";

export default function resizImage(e) {
    let target = e.target;
    let clone = target.cloneNode();
    console.log(clone);
    let container = document.createElement("div");
    container.append(clone);
    document.body.append(container);
    container.classList.add("resizeImage");
    let close = document.createElement("div");
    close.textContent =  "❌";
    close.classList.add("closeButn");
    container.append(close);
      function closeClone() {
          container.remove();
      }
  close.addEventListener("click", closeClone);
}
