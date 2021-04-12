export default function onclickHandler(e) {
        let target = e.target.querySelector(".dropdown-list");
        if(!target.hidden) {
            e.target.classList.remove("after");
            e.target.classList.add("before");
            target.hidden = true;
        } else {
            e.target.classList.remove("before");
            e.target.classList.add("after");
            target.hidden = false;
        }
}