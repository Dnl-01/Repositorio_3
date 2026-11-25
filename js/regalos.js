function agregarRegalo() {
  const input = document.getElementById("input-regalo");
  const texto = input.value.trim();
  const lista = document.getElementById("lista-regalos");

  if (texto === "") {
    alert("Escribe el nombre de un regalo primero.");
    return;
  }

  const li = document.createElement("li");
  li.className = "item-regalo";

  const span = document.createElement("span");
  span.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn-eliminar";
  btnEliminar.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = "";
  input.focus();
}

function limpiarRegalos() {
  const lista = document.getElementById("lista-regalos");
  lista.innerHTML = "";
}