/* Slider */
let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
    nextImage();
}, 5000);

function nextImage(){
    count++;
    if(count > 2){
        count = 1;
    };
    document.getElementById('radio'+count).checked = true;
};

/* Menu */
var show = true;

var menuHeader = document.querySelector(".menu-header");
var toggle = menuHeader.querySelector(".toggle");

toggle.addEventListener("click", ()=>{

    document.body.style.overflow = show ? "hidden" : "initial";
    
    menuHeader.classList.toggle("on", show);
    show = !show;
});