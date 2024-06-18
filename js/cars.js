// Select the carousel inner container element
const carouselInner = document.querySelector(".carousel-inner");

// Select all carousel item elements
const carouselItems = document.querySelectorAll(".carousel-item");

// Select the previous button element
const prevButton = document.querySelector(".carousel-prev");

// Select the next button element
const nextButton = document.querySelector(".carousel-next");

// Initialize the current index to 0
let currentIndex = 0;

// Declare a variable to store the slide interval
let slideInterval;

// Function to show the carousel item at the specified index
function showCarouselItem(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

// Function to start the slideshow
function startSlideshow() {
  // Set the slide interval to run every 5 seconds
  slideInterval = setInterval(() => {
    // Increment the current index or reset to 0 if it reaches the end
    currentIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    // Show the carousel item at the updated index
    showCarouselItem(currentIndex);
  }, 5000); // Change the interval (in milliseconds) as desired
}

// Function to stop the slideshow
function stopSlideshow() {
  // Clear the slide interval
  clearInterval(slideInterval);
}

// Event listener for the previous button click
prevButton.addEventListener("click", () => {
  // Decrement the current index or set it to the last index if it's already 0
  currentIndex =
    currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
  // Show the carousel item at the updated index
  showCarouselItem(currentIndex);
  // Stop the slideshow when the user interacts
  stopSlideshow();
});

// Event listener for the next button click
nextButton.addEventListener("click", () => {
  // Increment the current index or set it to 0 if it reaches the end
  currentIndex =
    currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
  // Show the carousel item at the updated index
  showCarouselItem(currentIndex);
  // Stop the slideshow when the user interacts
  stopSlideshow();
});

// Start the slideshow when the page loads
window.addEventListener("load", startSlideshow);

// Stop the slideshow when the user interacts with the carousel
carouselInner.addEventListener("mouseenter", stopSlideshow);
carouselInner.addEventListener("mouseleave", startSlideshow);
