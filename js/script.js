let currentHeight = document.body.offsetHeight;
let currentWidth = document.body.offsetWidth;
const root = document.querySelector(":root");
let heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
const thumbnailsBefore = document.getElementsByClassName("thumbnailsBefore");
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


if (currentHeight <= currentWidth ) 
{
paddingTopSection = 40;
paddingBottomSection = 40;
myFoto.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
myFoto.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);

widthMySlider = currentWidth;
heightMySlider = Math.floor(currentWidth * 10/16);
widthImgThumbnails = Math.floor(heightMySlider/5);
heightImgThumbnails = Math.floor(heightMySlider/5);
heightMySlider = heightImgThumbnails * 5;
widthImgSlides = currentWidth - widthImgThumbnails * 2;
heightImgSlides = heightMySlider;
paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
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
} else {
// paddingTopSection = 0;
// paddingBottomSection = 0;
// root.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
// root.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);

// widthMySlider = currentWidth;
// heightMySlider = Math.floor(currentWidth * 10/16);
// widthImgThumbnails = Math.floor(heightMySlider/5);
// heightImgThumbnails = Math.floor(heightMySlider/5);
// heightMySlider = heightImgThumbnails * 5;
// widthImgSlides = currentWidth - widthImgThumbnails * 2;
// heightImgSlides = heightMySlider;
// paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
// marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
// heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
// root.style.setProperty(`--heightMySlider`, `${heightMySlider}px`);
// root.style.setProperty(`--widthMySlider`, `${widthMySlider}px`);
// root.style.setProperty(`--widthImgThumbnails`, `${widthImgThumbnails}px`);
// root.style.setProperty(`--heightImgThumbnails`, `${heightImgThumbnails}px`);
// root.style.setProperty(`--widthImgSlides`, `${widthImgSlides}px`);
// root.style.setProperty(`--heightImgSlides`, `${heightImgSlides}px`);
// myFoto.style.setProperty(`--heightMyFoto`, `${heightMyFoto}px`);
// myFoto.style.setProperty(`--paddingTopLiSlides`, `${paddingTopLiSlides}px`);
// myFoto.style.setProperty(`--marginTopLiSlides`, `${marginTopLiSlides}px`);

}



function altitudeChanged() {
  // console.log("drugie miejsce");
  if ((document.body.offsetHeight != currentHeight) || (document.body.offsetWidth != currentWidth)) {
    // console.log("trzecie miejsce");
    currentHeight = document.body.offsetHeight;
    currentWidth = document.body.offsetWidth;
    // console.log(currentWidth + " - " + currentHeight);
    // console.log(getComputedStyle(root).getPropertyValue("--heightMySlider"));
    // location.reload(true);


    // if ((currentWidth >= 100)&&(currentWidth <= 1000))
    if (currentHeight <= currentWidth )
    {
      console.log(currentWidth + " - " + currentHeight);
      paddingTopSection = 40;
      paddingBottomSection = 40;
      myFoto.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`);
      myFoto.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`);
      widthMySlider = currentWidth;
      heightMySlider = Math.floor(currentWidth * 10/16);
      widthImgThumbnails = Math.floor(heightMySlider/5);
      heightImgThumbnails = Math.floor(heightMySlider/5);
      heightMySlider = heightImgThumbnails * 5;
      widthImgSlides = currentWidth - widthImgThumbnails * 2;
      heightImgSlides = heightMySlider;
      paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
      heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
      marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
      heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
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
    } else {
      paddingTopSection = 0; //
      paddingBottomSection = 0; //
      myFoto.style.setProperty(`--paddingTopSection`, `${paddingTopSection}px`); //
      myFoto.style.setProperty(`--paddingBottomSection`, `${paddingBottomSection}px`); //
      widthMySlider = currentWidth; //
      heightMySlider = Math.floor(currentWidth * 10/16); //
      widthImgThumbnails = Math.floor(widthMySlider/5); //
      heightImgThumbnails = Math.floor(widthMySlider/5); //
      widthMySlider = widthImgThumbnails * 5; //
      widthImgSlides = currentWidth; //
      heightImgSlides = heightMySlider; //
      paddingTopLiSlides = Math.floor((currentHeight-heightImgSlides)/2);
      heightContainerMyFoto = document.querySelector("#myFoto .container").offsetHeight;
      marginTopLiSlides = heightContainerMyFoto - paddingTopLiSlides;
      heightMyFoto = heightMySlider + heightContainerMyFoto + paddingTopSection + paddingBottomSection +paddingTopLiSlides;
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
    }
  }
  setTimeout("altitudeChanged()",1000);
};
// console.log("czwarte miejsce");