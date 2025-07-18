// Navigation bar
const navMenu = document.querySelector("#nav-menu");

// Hamburger bar
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
