const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];
console.log(choosenImage);
const bgImg = document.createElement("img");

bgImg.src = `img/${choosenImage}`;

document.body.appendChild(bgImg);
