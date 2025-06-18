
  // Cargar comentarios al iniciar
  window.addEventListener("DOMContentLoaded", () => {
    const storedComments = JSON.parse(localStorage.getItem("comentarios")) || [];
    storedComments.forEach(c => agregarComentario(c.nombre, c.texto));
  });

  document.getElementById("commentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nameInput").value.trim();
    const texto = document.getElementById("commentInput").value.trim();

    if (nombre && texto) {
      agregarComentario(nombre, texto);

      // Guardar en localStorage
      const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
      comentarios.unshift({ nombre, texto }); // Agregar al inicio
      localStorage.setItem("comentarios", JSON.stringify(comentarios));

      // Limpiar inputs
      document.getElementById("nameInput").value = "";
      document.getElementById("commentInput").value = "";
    }
  });

  function agregarComentario(nombre, texto) {
    const comentario = document.createElement("div");
    comentario.classList.add("mb-3", "border-bottom", "pb-2");
    comentario.innerHTML = `
      <strong>${nombre}</strong><br>
      <p>${texto}</p>
    `;
    document.getElementById("commentsList").prepend(comentario);
  }

