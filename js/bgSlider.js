var sliderBackground = document.getElementById("backgroundShow")
var slidersBackground = sliderBackground.getElementsByTagName("li");

var next = 0;

function hideBackgroundSlides() {
    for(var i = 0; i < slidersBackground.length; i++) {
        slidersBackground[i].style.opacity = "0";
    }
}

function switchBackgroundSlide() {
    slidersBackground[next].style.opacity = "0";
    next += 1;
    if(next >= slidersBackground.length) next = 0;
    slidersBackground[next].style.opacity = "1";
}

hideBackgroundSlides();
slidersBackground[next].style.opacity = "1";

setInterval(switchBackgroundSlide, 3000);