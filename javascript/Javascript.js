const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});





/// este code es para el menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function validarFormulario() {
    // For registration form:
    const usuario = document.getElementById("Usuario").value;
    const telefono = document.getElementById("Telefono").value;
    const correoElectronico = document.getElementById("Correo Electronico").value;
    const cedula = document.getElementById("Cedula").value;
    const contrasena = document.getElementById("Contraseña").value;





    // Validation logic, including specific requirements for each field:
    if (usuario === "") {
      alert ( "Por favor, ingresa tu usuario.");
    }
    if (telefono === "") {
      alert ("Por favor, ingresa tu teléfono.");
    }
    if (correoElectronico || !correoElectronico.includes("@")) {
      alert ("Por favor, ingresa un correo electrónico válido.");
    }
    if (cedula === "") {
      alert ("Por favor, ingresa tu cédula.");
    }
    if (contrasena.length < 8) {
      alert ( "La contraseña debe tener al menos 8 caracteres.");
    }




     else {
      return true; // Allow form submission
    }
  }

//// campana modal


