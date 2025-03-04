function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const carousel = document.querySelector(".carousel");
let isHovered = false;

// Detect hover state
carousel.addEventListener("mouseenter", () => (isHovered = true));
carousel.addEventListener("mouseleave", () => (isHovered = false));

function animateCarousel() {
  if (!isHovered) {
    carousel.style.transition = "transform 1s linear";
    carousel.style.transform = `translateX(-25%)`; // Moves left by one card

    setTimeout(() => {
      carousel.appendChild(carousel.firstElementChild);
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";
    }, 1000);
  }
  setTimeout(animateCarousel, 3000); // Change cards every 3s
}

animateCarousel();
