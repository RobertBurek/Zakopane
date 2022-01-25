let currentHeight = document.body.offsetHeight;
let currentWidth = document.body.offsetWidth;
const root = document.querySelector(":root");
const containerMyFoto = document.querySelector("#myFoto .container");
console.log(containerMyFoto.offsetHeight);
const thumbnailsBefore = document.getElementsByClassName("thumbnailsBefore");
const myFoto = document.getElementById("myFoto");


function altitudeChanged() {
  if ((document.body.offsetHeight != currentHeight) || (document.body.offsetWidth != currentWidth)) {
    currentHeight = document.body.offsetHeight;
    currentWidth = document.body.offsetWidth;
    console.log(currentWidth + " - " + currentHeight);
    console.log(getComputedStyle(root).getPropertyValue("--heightMySlider"));
    // location.reload(true);
    if ((currentWidth >= 600)&&(currentWidth <= 1100)){
      var widthMySlider = currentWidth;
      var heightMySlider = Math.floor(currentWidth * 10/16);
      var widthImgThumbnails = Math.floor(heightMySlider/5);
      var heightImgThumbnails = Math.floor(heightMySlider/5);
      heightMySlider = heightImgThumbnails * 5;
      var widthImgSlides = currentWidth - widthImgThumbnails * 2;
      var heightImgSlides = heightMySlider;
      let paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
      var heightMyFoto = heightMySlider + containerMyFoto.offsetHeight + 150;
      root.style.setProperty(`--heightMySlider`, heightMySlider + "px");
      root.style.setProperty(`--widthMySlider`, widthMySlider + "px");
      console.log(thumbnailsBefore);
      root.style.setProperty(`--widthImgThumbnails`, widthImgThumbnails + "px");
      root.style.setProperty(`--heightImgThumbnails`, heightImgThumbnails + "px");
      root.style.setProperty(`--widthImgSlides`, widthImgSlides + "px");
      root.style.setProperty(`--heightImgSlides`, heightImgSlides + "px");
      myFoto.style.setProperty(`--heightMyFoto`, heightMyFoto + "px");
      myFoto.style.setProperty(`--paddingTopLiSlides`, paddingTopLiSlides + "px");
    }
  }
  setTimeout("altitudeChanged()",1000);
};