let currentHeight = document.body.offsetHeight;

function altitudeChanged() {
  if (document.body.offsetHeight != currentHeight) {
    currentHeight = document.body.offsetHeight;
    console.log(currentHeight);
    // location.reload(true);
  }
  setTimeout("altitudeChanged()",1000);
};