const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentIndex = 0;
let slideInterval;

function showCarouselItem(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function startSlideshow() {
  slideInterval = setInterval(() => {
    currentIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    showCarouselItem(currentIndex);
  }, 5000); // Change the interval (in milliseconds) as desired
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

prevButton.addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
  showCarouselItem(currentIndex);
  stopSlideshow(); // Stop the slideshow when the user interacts
});

nextButton.addEventListener("click", () => {
  currentIndex =
    currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
  showCarouselItem(currentIndex);
  stopSlideshow(); // Stop the slideshow when the user interacts
});

// Start the slideshow when the page loads
window.addEventListener("load", startSlideshow);

// Stop the slideshow when the user interacts with the carousel
carouselInner.addEventListener("mouseenter", stopSlideshow);
carouselInner.addEventListener("mouseleave", startSlideshow);
