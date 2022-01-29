let slidesFoto = document.getElementById("slidesFoto");
slidesFoto.classList.add("slides-foto-rotate");

let thumbnailsElements = document.querySelectorAll("#slidesFoto>li>img");
thumbnailsElements = [...thumbnailsElements];
let haltElements = thumbnailsElements.length;
if (mySlider[1] == 2) haltElements = Math.floor(thumbnailsElements.length / 2);

function prepareHTML(img, index, alt){
    return '<li>' +
           '<a href="#foto' + index + '"><img src="'+ img + '" alt="Miniatura zdjęcia. '+ alt +'" /></a>' +
            '</li>';
}

var htmlThumbnail1 = "";
var htmlThumbnail2 = "";
var i = 1;
thumbnailsElements.forEach(thumbnail => {
    if (i <= haltElements) htmlThumbnail1 += prepareHTML(thumbnail.getAttribute('src'), i, thumbnail.getAttribute('alt'));
    if (i > haltElements) htmlThumbnail2 += prepareHTML(thumbnail.getAttribute('src'), i, thumbnail.getAttribute('alt'));
    i++;
});

if (mySlider[1] == 2) {
    document.querySelector("#thumbnailsBefore>ul").innerHTML = htmlThumbnail1;
    document.querySelector("#thumbnailsAfter>ul").innerHTML = htmlThumbnail2;}
else {
    if ((mySliderSiteThumbnail === "left") || (mySliderSiteThumbnail === "top"))
        document.querySelector("#thumbnailsBefore>ul").innerHTML = htmlThumbnail1;
    if ((mySliderSiteThumbnail === "right") || (mySliderSiteThumbnail === "bottom"))
        document.querySelector("#thumbnailsAfter>ul").innerHTML = htmlThumbnail2;}
