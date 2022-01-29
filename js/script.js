let currentHeight = document.body.offsetHeight;
let currentWidth = document.body.offsetWidth;
let heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
const myFoto = document.getElementById("myFoto");

let paddingTopSection;
let paddingBottomSection;
let widthMySlider;
let heightMySlider;
let widthImgThumbnails;
let heightImgThumbnails;
let widthImgSlides;
let heightImgSlides;
let paddingTopLiSlides;
let marginTopLiSlides;
let heightMyFoto


if (currentHeight <= currentWidth ) {
paddingTopSection = 40;
paddingBottomSection = 40;
myFoto.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
myFoto.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);
widthMySlider = currentWidth;
heightMySlider = Math.floor(currentWidth * 10 / 16);
widthImgThumbnails = Math.floor(heightMySlider / 5);
heightImgThumbnails = Math.floor(heightMySlider / 5);
heightMySlider = heightImgThumbnails * 5;
widthImgSlides = currentWidth - widthImgThumbnails * 2;
heightImgSlides = heightMySlider;
paddingTopLiSlides = Math.floor((currentHeight - heightImgSlides) / 2);
marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
myFoto.style.setProperty(`--heightMySlider`, `${heightMySlider}px`);
myFoto.style.setProperty(`--widthMySlider`, `${widthMySlider}px`);
myFoto.style.setProperty(`--widthImgThumbnails`, `${widthImgThumbnails}px`);
myFoto.style.setProperty(`--heightImgThumbnails`, `${heightImgThumbnails}px`);
myFoto.style.setProperty(`--widthImgSlides`, `${widthImgSlides}px`);
myFoto.style.setProperty(`--heightImgSlides`, `${heightImgSlides}px`);
myFoto.style.setProperty(`--heightMyFoto`, `${heightMyFoto}px`);
myFoto.style.setProperty(`--paddingTopLiSlides`, `${paddingTopLiSlides}px`);
myFoto.style.setProperty(`--marginTopLiSlides`, `${marginTopLiSlides}px`);
} else {
  paddingTopSection = 0;
  paddingBottomSection = 0;
  myFoto.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
  myFoto.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);
  widthMySlider = currentWidth;
  heightMySlider = Math.floor(currentWidth * 10 / 16);
  widthImgThumbnails = Math.floor(widthMySlider / 5);
  heightImgThumbnails = Math.floor(widthMySlider / 5);
  widthMySlider = widthImgThumbnails * 5;
  widthImgSlides = widthMySlider;
  heightImgSlides = heightMySlider;
  paddingTopLiSlides = Math.floor((currentHeight - heightImgSlides - heightImgThumbnails * 2) / 2);
  heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
  paddingTopLiSlides = heightContainerMyFoto + paddingTopSection + 10;
  marginTopLiSlides = 0;
  heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
  myFoto.style.setProperty(`--heightMySlider`, `${heightMySlider}px`);
  myFoto.style.setProperty(`--widthMySlider`, `${widthMySlider}px`);
  myFoto.style.setProperty(`--widthImgThumbnails`, `${widthImgThumbnails}px`);
  myFoto.style.setProperty(`--heightImgThumbnails`, `${heightImgThumbnails}px`);
  myFoto.style.setProperty(`--widthImgSlides`, `${widthImgSlides}px`);
  myFoto.style.setProperty(`--heightImgSlides`, `${heightImgSlides}px`);
  myFoto.style.setProperty(`--heightMyFoto`, `${heightMyFoto}px`);
  myFoto.style.setProperty(`--paddingTopLiSlides`, `${paddingTopLiSlides}px`);
  myFoto.style.setProperty(`--marginTopLiSlides`, `${marginTopLiSlides}px`);
};



function altitudeChanged() {
  if ((document.body.offsetHeight != currentHeight) || (document.body.offsetWidth != currentWidth)) {
    currentHeight = document.body.offsetHeight;
    currentWidth = document.body.offsetWidth;
    // location.reload(true);
    if (currentHeight <= currentWidth) {
      if ((currentWidth >= 100)&&(currentWidth <= 1000)) {
        console.log(currentWidth + " - " + currentHeight);
        paddingTopSection = 40;
        paddingBottomSection = 40;
        myFoto.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
        myFoto.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);
        widthMySlider = currentWidth;
        heightMySlider = Math.floor(currentWidth * 10 / 16);
        widthImgThumbnails = Math.floor(heightMySlider / 5);
        heightImgThumbnails = Math.floor(heightMySlider / 5);
        heightMySlider = heightImgThumbnails * 5;
        widthImgSlides = currentWidth - widthImgThumbnails * 2;
        heightImgSlides = heightMySlider;
        paddingTopLiSlides = Math.floor((currentHeight - heightImgSlides) / 2);
        marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
        heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
        myFoto.style.setProperty(`--heightMySlider`, `${heightMySlider}px`);
        myFoto.style.setProperty(`--widthMySlider`, `${widthMySlider}px`);
        myFoto.style.setProperty(`--widthImgThumbnails`, `${widthImgThumbnails}px`);
        myFoto.style.setProperty(`--heightImgThumbnails`, `${heightImgThumbnails}px`);
        myFoto.style.setProperty(`--widthImgSlides`, `${widthImgSlides}px`);
        myFoto.style.setProperty(`--heightImgSlides`, `${heightImgSlides}px`);
        myFoto.style.setProperty(`--heightMyFoto`, `${heightMyFoto}px`);
        myFoto.style.setProperty(`--paddingTopLiSlides`, `${paddingTopLiSlides}px`);
        myFoto.style.setProperty(`--marginTopLiSlides`, `${marginTopLiSlides}px`);}
      } else {
        paddingTopSection = 20;
        paddingBottomSection = 20;
        myFoto.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
        myFoto.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);
        widthMySlider = currentWidth;
        heightImgSlides = Math.floor(currentWidth * 10 / 16);
        widthImgThumbnails = Math.floor(widthMySlider / 5);
        heightImgThumbnails = Math.floor(widthMySlider / 5);
        widthMySlider = widthImgThumbnails * 5;
        widthImgSlides = widthMySlider;
        heightMySlider = heightImgSlides + heightImgThumbnails * 2;
        heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection;
        console.log(heightMyFoto);
        heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
        paddingTopLiSlides = heightContainerMyFoto + paddingTopSection + 10;
        marginTopLiSlides = 0;
        myFoto.style.setProperty(`--heightMySlider`, `${heightMySlider}px`);
        myFoto.style.setProperty(`--widthMySlider`, `${widthMySlider}px`);
        myFoto.style.setProperty(`--widthImgThumbnails`, `${widthImgThumbnails}px`);
        myFoto.style.setProperty(`--heightImgThumbnails`, `${heightImgThumbnails}px`);
        myFoto.style.setProperty(`--widthImgSlides`, `${widthImgSlides}px`);
        myFoto.style.setProperty(`--heightImgSlides`, `${heightImgSlides}px`);
        myFoto.style.setProperty(`--heightMyFoto`, `${heightMyFoto}px`);
        myFoto.style.setProperty(`--paddingTopLiSlides`, `${paddingTopLiSlides}px`);
        myFoto.style.setProperty(`--marginTopLiSlides`, `${marginTopLiSlides}px`);
    }
  }
  setTimeout("altitudeChanged()",1000);
};