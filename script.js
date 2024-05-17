document.addEventListener("mousemove", (e) => {
  const image = document.getElementById("moving-image");
  const moveX = (e.clientX / window.innerWidth) * 20 - 10;
  const moveY = (e.clientY / window.innerHeight) * 20 - 10;

  image.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.getElementById("used-button").addEventListener("click", () => {
  window.location.href = "pages/used_cars.html";
});

document.getElementById("new-button").addEventListener("click", () => {
  window.location.href = "pages/new_cars.html";
});
