const toggle = document.querySelector("#toggle");
const bodyColor = document.querySelector("#wrap");

toggle.onclick = ()=> {
    toggle.classList.toggle("active");
    bodyColor.classList.toggle("active");
}
