 // Cargar comentarios al iniciar
document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const nameInput = document.getElementById("nameInput");
    const commentInput = document.getElementById("commentInput");
    const commentsList = document.getElementById("commentsList");

    // Cargar comentarios del localStorage al iniciar
    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentariosGuardados.forEach(({ nombre, texto }) => {
      mostrarComentario(nombre, texto);
    });

    commentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = nameInput.value.trim();
      const texto = commentInput.value.trim();

      if (nombre && texto) {
        mostrarComentario(nombre, texto);

        comentariosGuardados.unshift({ nombre, texto }); // lo agrega arriba
        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

        // Limpiar campos
        nameInput.value = "";
        commentInput.value = "";
      }
    });

    function mostrarComentario(nombre, texto) {
      const div = document.createElement("div");
      div.className = "mb-3 border-bottom pb-2";
      div.innerHTML = `<strong>${nombre}</strong><p>${texto}</p>`;
      commentsList.prepend(div);
    }
  });