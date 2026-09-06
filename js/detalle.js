async function mostrarProducto() {
  const contenedor = document.querySelector("#detalle");

  if (!contenedor) {
    return;
  }

  const parametros = new URLSearchParams(window.location.search);
  const id = Number(parametros.get("id"));
  const producto = obtenerProductoPorId(id);

  if (!producto) {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
    return;
  }

  contenedor.innerHTML = `
    <div class="detalle-producto__visual">
      <img class="detalle-producto__imagen" src="${producto.imagen}" alt="${producto.nombre}" />
    </div>
       <div class="detalle-producto__descripcion">
      <h1>${producto.nombre}</h1>
      <p class="detalle-producto__info">${producto.info}</p>
      <p><strong>Material:</strong> ${producto.materiales}</p>
      <p><strong>Medidas:</strong> ${producto.medidas}</p>
      <p><strong>Acabado: </strong>${producto.acabado}</p>
      <p><strong>Precio: </strong>${producto.precio}</p>
      <button id="boton-agregar" class="boton boton--primario">Añadir al carrito</button>
      <p id="mensaje-agregado" class="confirmacion-carrito">¡Lo sumamos al carrito!</p>
    </div>
  `;

  const boton = document.querySelector("#boton-agregar");
  const mensaje = document.querySelector("#mensaje-agregado");

  boton.addEventListener("click", () => {
    if (typeof agregarAlCarrito === "function") {
      agregarAlCarrito(producto.id);
    }
    mensaje.classList.add("confirmacion-carrito--visible");
  });
}

mostrarProducto();
