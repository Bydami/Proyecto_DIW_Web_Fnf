const footer = document.querySelector("footer");
const aside = document.querySelector("aside");
const menu_btn = document.querySelector(".menu-btn")
// Configura el Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // El footer está visible
        aside.style.top = "8%";
        menu_btn.style.top = "33%";
      } else {
        // El footer no está visible
        aside.style.top = "15%";
        menu_btn.style.top = "40%";
      }
    });
  },
  {
    root: null, // Observa con respecto al viewport
    threshold: 0.4 // Detecta cuando al menos el 10% del footer está visible
  }
);

// Observa el footer
observer.observe(footer);

function toggleMenu() {
  aside.classList.toggle("active-menu");
  menu_btn.classList.toggle("menu-btn-active");
}