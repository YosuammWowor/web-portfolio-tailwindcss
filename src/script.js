// Navbar Transparent
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const topScreen = window.pageYOffset;

  if (topScreen > header.offsetTop) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
});

// Navigation bar
const navMenu = document.querySelector("#nav-menu");

// Hamburger bar
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
