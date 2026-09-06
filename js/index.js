function mostrarDestacados() { 
    const contenedor = document.querySelector("#destacados");

      if (!contenedor || typeof catalogo === "undefined") {
    return;
  }

  const destacados = catalogo.filter((producto) => producto.destacado);

  contenedor.innerHTML = "";

  for (const producto of destacados) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "producto";
    tarjeta.innerHTML = `
      <div class="tarjeta-producto__visual">
        <img class="tarjeta-producto__imagen" src="${producto.imagen}" alt="${producto.nombre}" />
      </div>
      <div class="tarjeta-producto__cuerpo">
        <h3>${producto.nombre}</h3>
        <p class="tarjeta-producto__descripcion">${producto.descripcion}</p>
        <div class="tarjeta-producto__pie">
          <a class="enlace-ver-mas" href="producto.html?id=${producto.id}">Ver más →</a>
        </div>
      </div>
    `;
    contenedor.appendChild(tarjeta);
  }
}

mostrarDestacados();
