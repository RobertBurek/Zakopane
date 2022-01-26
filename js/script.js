let currentHeight = document.body.offsetHeight;
let currentWidth = document.body.offsetWidth;
const root = document.querySelector(":root");
let heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
const thumbnailsBefore = document.getElementsByClassName("thumbnailsBefore");
const myFoto = document.getElementById("myFoto");


let paddingTopSection = 40;
let paddingBottomSection = 40;
root.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
root.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);

let widthMySlider = currentWidth;
let heightMySlider = Math.floor(currentWidth * 10/16);
let widthImgThumbnails = Math.floor(heightMySlider/5);
let heightImgThumbnails = Math.floor(heightMySlider/5);
heightMySlider = heightImgThumbnails * 5;
let widthImgSlides = currentWidth - widthImgThumbnails * 2;
let heightImgSlides = heightMySlider;
let paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
let marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
let heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
// let paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
root.style.setProperty(`--heightMySlider`, `${heightMySlider}px`);
root.style.setProperty(`--widthMySlider`, `${widthMySlider}px`);
// console.log(thumbnailsBefore);
root.style.setProperty(`--widthImgThumbnails`, `${widthImgThumbnails}px`);
root.style.setProperty(`--heightImgThumbnails`, `${heightImgThumbnails}px`);
root.style.setProperty(`--widthImgSlides`, `${widthImgSlides}px`);
root.style.setProperty(`--heightImgSlides`, `${heightImgSlides}px`);
myFoto.style.setProperty(`--heightMyFoto`, `${heightMyFoto}px`);
myFoto.style.setProperty(`--paddingTopLiSlides`, `${paddingTopLiSlides}px`);
myFoto.style.setProperty(`--marginTopLiSlides`, `${marginTopLiSlides}px`);
// console.log("pierwsze miejsce");
function altitudeChanged() {
  // console.log("drugie miejsce");
  if ((document.body.offsetHeight != currentHeight) || (document.body.offsetWidth != currentWidth)) {
    // console.log("trzecie miejsce");
    currentHeight = document.body.offsetHeight;
    currentWidth = document.body.offsetWidth;
    // console.log(currentWidth + " - " + currentHeight);
    // console.log(getComputedStyle(root).getPropertyValue("--heightMySlider"));
    // location.reload(true);
    if ((currentWidth >= 100)&&(currentWidth <= 1000)){
      var widthMySlider = currentWidth;
      var heightMySlider = Math.floor(currentWidth * 10/16);
      var widthImgThumbnails = Math.floor(heightMySlider/5);
      var heightImgThumbnails = Math.floor(heightMySlider/5);
      heightMySlider = heightImgThumbnails * 5;
      var widthImgSlides = currentWidth - widthImgThumbnails * 2;
      var heightImgSlides = heightMySlider;
      let paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
      heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
      let marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
      var heightMyFoto = heightMySlider + heightContainerMyFoto + 150;
      root.style.setProperty(`--heightMySlider`, heightMySlider + "px");
      root.style.setProperty(`--widthMySlider`, widthMySlider + "px");
      // console.log(thumbnailsBefore);
      root.style.setProperty(`--widthImgThumbnails`, widthImgThumbnails + "px");
      root.style.setProperty(`--heightImgThumbnails`, heightImgThumbnails + "px");
      root.style.setProperty(`--widthImgSlides`, widthImgSlides + "px");
      root.style.setProperty(`--heightImgSlides`, heightImgSlides + "px");
      myFoto.style.setProperty(`--heightMyFoto`, heightMyFoto + "px");
      myFoto.style.setProperty(`--paddingTopLiSlides`, paddingTopLiSlides + "px");
      myFoto.style.setProperty(`--marginTopLiSlides`, marginTopLiSlides + "px");
    }
  }
  setTimeout("altitudeChanged()",1000);
};
// console.log("czwarte miejsce");