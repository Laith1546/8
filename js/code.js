const menuBtn = document.querySelector(".menu");
const navBar = document.querySelector(".main");

const defaultColor = "#006D77";
const activeColor = "#E29578";
const defaultHeight = getComputedStyle(navBar).height;
const activetHeight = "320px";
let menuToggle = false;


menuBtn.addEventListener('click', () => {
    if(!menuToggle){
        navBar.style.height = activetHeight;
        // menuBtn.style.setProperty("--menu-color", activeColor);
        menuBtn.style.transform = "rotate(90deg)";
        menuToggle = true;
    } else {
        navBar.style.height = defaultHeight;
        // menuBtn.style.setProperty("--menu-color", defaultColor);
        menuBtn.style.transform = "rotate(0deg)";
        menuToggle = false;
    }
})

window.onresize = () => {
    if(window.innerWidth > 900)
    {
        navBar.style.height = defaultHeight;
        menuToggle = false;
    }
}