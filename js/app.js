function altitudeCheanged() {
    if (document.body.offsetWidth != currentWidth) {
      currentWidth = document.body.offsetWidth;
      location.reload(true);
      console.log(currentWidth);
    }
    setTimeout("odliczanie()",1000);
  }