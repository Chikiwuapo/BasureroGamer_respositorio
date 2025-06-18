// Inicializar particles.js con configuración personalizada
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const inputNombre = document.getElementById("nombre");
  
    // Guardar el nombre en localStorage y redirigir
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = inputNombre.value.trim();
      if (nombre !== "") {
        localStorage.setItem("nombre", nombre);
        window.location.href = "PaginaGeneral.html";
      } else {
        alert("Por favor ingresa tu nombre.");
      }
    });
  
    // Inicializar particles.js si el contenedor existe
    if (document.getElementById('particles-js')) {
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": { "value": "#ff1e1e" },
          "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
          },
          "opacity": {
            "value": 0.5,
            "random": true
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff1e1e",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
          },
          "modes": {
            "repulse": { "distance": 100 },
            "push": { "particles_nb": 4 }
          }
        },
        "retina_detect": true
      });
    }
  });
  
