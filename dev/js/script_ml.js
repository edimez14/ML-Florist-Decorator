const btnLanzarModal = document.querySelector('#lanzar_modal');
const btnOcultarModal = document.querySelector('#ocultar_modal');

const contModal = document.querySelector('.container_modal');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const comentarioInput = document.querySelector('#comentario');

btnLanzarModal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.add('mostrar');
});

btnOcultarModal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.remove('mostrar');

    const contacto = document.querySelector('.container');

    const pName = document.createElement('p');
    pName.textContent = nameInput.value;

    const pEmail = document.createElement('p');
    pEmail.textContent = emailInput.value;

    const pComentario = document.createElement('p');
    pComentario.textContent = comentarioInput.value;

    contacto.appendChild(pEmail);
    contacto.appendChild(pComentario);
});

document.addEventListener("DOMContentLoaded", function () {
    // Script para el formulario de contacto
    const formularioContacto = document.getElementById("formulario-contacto");

    if (formularioContacto) {
        formularioContacto.addEventListener("submit", function (event) {
            // Prevenir que el formulario se envíe de la manera tradicional
            event.preventDefault();

            // Envía el formulario
            this.submit();
        });
    }
});
