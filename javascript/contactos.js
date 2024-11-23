function validar() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre === "") {
      alert("Complete el campo de nombre");
      return false;
  } else if (email === "") {
      alert("Complete el campo de correo electrónico");
      return false;
  } else if (mensaje === "") {
      alert("Complete el campo de mensaje");
      return false;
  }
  alert("su envio fue exitoso");
  return true;

}



