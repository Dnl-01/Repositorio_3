function mostrarDescripcion(personaje) {
  const titulo = document.getElementById("titulo-personaje");
  const texto = document.getElementById("texto-personaje");

  if (personaje === "noel") {
    titulo.textContent = "Papá Noel";
    texto.textContent = "Personaje emblemático de la Navidad asociado con el espíritu festivo, la generosidad y la entrega de obsequios en Nochebuena.";
  } else if (personaje === "duendes") {
    titulo.textContent = "Duendes navideños";
    texto.textContent = "Pequeños ayudantes mágicos del taller navideño encargados de preparar adornos, juguetes y detalles para las fiestas.";
  } else if (personaje === "renos") {
    titulo.textContent = "Renos navideños";
    texto.textContent = "Animales vinculados al invierno y al trineo navideño que recorren paisajes nevados durante la temporada.";
  } else if (personaje === "muneco") {
    titulo.textContent = "Muñeco de Nieve";
    texto.textContent = "Figura clásica del invierno hecha con nieve, sombrero, bufanda y zanahoria que representa la diversión de la época fría.";
  }
}