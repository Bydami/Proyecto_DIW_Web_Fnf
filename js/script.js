const footer = document.querySelector("footer");
const aside = document.querySelector("aside");

// Configura el Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // El footer está visible
        aside.style.top = "8%";
      } else {
        // El footer no está visible
        aside.style.top = "15%";
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