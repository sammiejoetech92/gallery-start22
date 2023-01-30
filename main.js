const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
for (i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');

    newImage.setAttribute('src', "images/" + images[i]);
    newImage.onclick = function () {
        displayedImage.src = newImage.src;
    };
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    if (overlay.style.visibility == "hidden") {
        overlay.style.visibility = "visible"
    }
    else {
        overlay.style.visibility = "hidden"
    }
}