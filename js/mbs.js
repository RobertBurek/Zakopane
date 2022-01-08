var sliderBackground = document.getElementById("cbp-bislideshow")
var slidesBackgroun = sliderBackground.getElementsByTagName("li");


console.log(sliderBackground);
console.log(slidesBackgroun);

var v = 0;

function hideBackgroundSlides() {
    for(var i = 0; i < slidesBackgroun.length; i++) {
        slidesBackgroun[i].style.opacity = "0";
    }
}

function switchBackgroundSlide() {
    slidesBackgroun[v].style.opacity = "0";
    v += 1;
    if(v >= slidesBackgroun.length) v = 0;
    slidesBackgroun[v].style.opacity = "1";
}

// hideBackgroundSlides();
// console.log(slides[v].style.opacity);
slidesBackgroun[v].style.opacity = "1";

setInterval(switchBackgroundSlide, 3000);