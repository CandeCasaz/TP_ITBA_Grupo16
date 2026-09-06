const formulario = document.querySelector("#form-contacto");
const mensajeExito = document.querySelector("#mensaje-exito");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nombre = formulario.querySelector("#nombre").value.trim();
    const email = formulario.querySelector("#email").value.trim();
    const mensaje = formulario.querySelector("#mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {

        mensajeExito.textContent = "Completá todos los campos.";
        mensajeExito.classList.add("error");

        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {

        mensajeExito.textContent = "Ingresá un email válido.";
        mensajeExito.classList.add("error");

        return;
    }

    mensajeExito.textContent = `¡Gracias, ${nombre}! Respondemos a ${email}.`;
    mensajeExito.classList.remove("error");
    formulario.reset();
});
