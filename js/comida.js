let total = 0;

function agregarAlCarrito(nombre, precio) {
  const lista = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total-precio");

  const li = document.createElement("li");
  li.className = "item-carrito";

  const span = document.createElement("span");
  span.textContent = `${nombre} - Bs ${precio}`;

  const btnQuitar = document.createElement("button");
  btnQuitar.textContent = "Quitar";
  btnQuitar.className = "btn-eliminar";
  btnQuitar.onclick = function () {
    li.remove();
    total -= precio;
    totalElemento.textContent = `Bs ${total}`;
  };

  li.appendChild(span);
  li.appendChild(btnQuitar);
  lista.appendChild(li);

  total += precio;
  totalElemento.textContent = `Bs ${total}`;
}

function vaciarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total-precio");

  lista.innerHTML = "";
  total = 0;
  totalElemento.textContent = "Bs 0";
}