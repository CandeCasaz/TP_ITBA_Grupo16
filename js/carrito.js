function leerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function actualizarContador() {
  const contador = document.querySelector("#contador-carrito");

  if (contador) {
    const total = leerCarrito().reduce(
      (acumulado, producto) => acumulado + producto.cantidad,
      0
    );

    contador.textContent = total;
  }
}

function agregarAlCarrito(id) {
  const carrito = leerCarrito();
  const producto = carrito.find((item) => item.id === id);

  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({ id, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();
});
