var slider = document.getElementById("slider")
var slides = slider.getElementsByClassName("slide");

var visible = 0;

function hideSlides() {
    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}

function switchSlide() {
    slides[visible].style.display = "none";
    visible += 1;
    if(visible >= slides.length) visible = 0;
    slides[visible].style.display = "block";
}


hideSlides();
slides[visible].style.display = "block";

setInterval(switchSlide, 1000);




const demo = document.querySelector(".demo");
const el = demo.querySelector(".element");
const input = demo.querySelector("input");

//domyślną wartość pobieram z pliku css
input.value = getComputedStyle(demo).getPropertyValue("--hue");

input.addEventListener("input", e => {
    demo.style.setProperty(`--hue`, input.value);
})