let imagesArr = [
  "./assets/image-slide-1.jpg",
  "./assets/image-slide-2.jpg",
  "./assets/image-slide-3.jpg",
  "./assets/image-slide-4.jpg",
  "./assets/image-slide-5.jpg",
];

let currentIndex = 1;

const prev = document.getElementById("prev-nav-btn");
const next = document.getElementById("next-nav-btn");
const images = document.getElementsByClassName("item");

prev.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imagesArr.length - 1;
  }
  images[0].children[0].src = imagesArr[currentIndex];
  images[1].children[0].src = imagesArr[(currentIndex + 1) % imagesArr.length];
  images[2].children[0].src = imagesArr[(currentIndex + 2) % imagesArr.length];
});

next.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= imagesArr.length) {
    currentIndex = 0;
  }
  images[0].children[0].src = imagesArr[currentIndex];
  images[1].children[0].src = imagesArr[(currentIndex + 1) % imagesArr.length];
  images[2].children[0].src = imagesArr[(currentIndex + 2) % imagesArr.length];
});
