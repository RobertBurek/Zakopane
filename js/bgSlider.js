var sliderBackground = document.getElementById("cbp-bislideshow")
var slidesBackground = sliderBackground.getElementsByTagName("li");

var next = 0;

function hideBackgroundSlides() {
    for(var i = 0; i < slidesBackground.length; i++) {
        slidesBackground[i].style.opacity = "0";
    }
}

function switchBackgroundSlide() {
    slidesBackground[next].style.opacity = "0";
    next += 1;
    if(next >= slidesBackground.length) next = 0;
    slidesBackground[next].style.opacity = "1";
}

hideBackgroundSlides();
slidesBackground[next].style.opacity = "1";

setInterval(switchBackgroundSlide, 3000);