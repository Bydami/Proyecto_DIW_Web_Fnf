const footer = document.querySelector("footer");
const aside = document.querySelector("aside");
const menu_btn = document.querySelector(".menu-btn")

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aside.style.top = "8%";
        menu_btn.style.top = "33%";
      } else {
        aside.style.top = "15%";
        menu_btn.style.top = "40%";
      }
    });
  },
  {
    root: null,
    threshold: 0.4
  }
);

observer.observe(footer);

function toggleMenu() {
  aside.classList.toggle("active-menu");
  menu_btn.classList.toggle("menu-btn-active");
}

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("musica");
  audio.volume = 0.4;
});