const images = [
  "China\media\the-great-wall-of-china_optimized.jpg",
  "China\media\great wall.jpg",
  "China\media\The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
];

let index = 0;
const img = document.querySelector("#sliderImg");

document.querySelector("#next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  img.src = images[index];
});

document.querySelector("#prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
});