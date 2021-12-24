const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

function getRandom(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

const chosenImage = images[getRandom(images.length)];
const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.classList.add("bgImage");