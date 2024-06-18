// Add event listener for mousemove event
document.addEventListener("mousemove", (e) => {
  const image = document.getElementById("moving-image");

  // Calculate the amount to move the image horizontally based on mouse position
  const moveX = (e.clientX / window.innerWidth) * 20 - 10;

  // Calculate the amount to move the image vertically based on mouse position
  const moveY = (e.clientY / window.innerHeight) * 20 - 10;

  // Apply the calculated translation to the image
  image.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Add event listener for click event on the "used-button" element
document.getElementById("used-button").addEventListener("click", () => {
  // Redirect to the "used_cars.html" page
  window.location.href = "pages/used_cars.html";
});

// Add event listener for click event on the "new-button" element
document.getElementById("new-button").addEventListener("click", () => {
  // Redirect to the "shop.html" page
  window.location.href = "pages/shop.html";
});
