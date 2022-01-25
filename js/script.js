let currentHeight = document.body.offsetHeight;
let currentWidth = document.body.offsetWidth;

function altitudeChanged() {
  if ((document.body.offsetHeight != currentHeight) || (document.body.offsetWidth != currentWidth)) {
    currentHeight = document.body.offsetHeight;
    currentWidth = document.body.offsetWidth;
    console.log(currentWidth + " - " + currentHeight);
    // location.reload(true);
  }
  setTimeout("altitudeChanged()",1000);
};