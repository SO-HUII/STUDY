const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// img라는 element 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// body에 html 추가해줌
document.body.appendChild(bgImage);
