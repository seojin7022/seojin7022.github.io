const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

function getRandom(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

const chosenImage = images[getRandom(images.length)];
const bgImage = document.createElement("img");

bgImage.src = `https://cdn.jsdelivr.net/gh/seojin7022/seojin7022.github.io/img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.classList.add("bgImage");
