let currentSlide = 0;

function moveCarousel(direction) {
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");

  if (!carouselInner || items.length === 0) return;

  const totalSlides = items.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const offset = -currentSlide * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const elementsToReveal = document.querySelectorAll(".reveal-on-scroll");

  function revealElements() {
    elementsToReveal.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        element.classList.add("reveal");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); 
});