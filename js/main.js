function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length > 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  const contieneSoloLetras = /^[A-z]+$/.test(nombre);
  if (!contieneSoloLetras) {
    return "Este campo debe tener solo letras";
  }
  return "";
}
function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  return "";
}
function validarDescripcionRegalo(descripcion) {
  if (descripcion.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (descripcion.length > 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }
  const contieneSoloLetrasyNumeros = /^[A-Za-z0-9\s]+$/.test(descripcion);
  if (!contieneSoloLetrasyNumeros) {
    return "Este campo debe tener solo letras y/o numeros";
  }
  return "";
}
function validarForm(event) {
  event.preventDefault();
  const nombre = document.formulario.nombre.value;
  const ciudad = document.formulario.ciudad.value;
  const descripcionRegalo = document.formulario["descripcion-regalo"].value;
  const $listaErrores = document.querySelector("#errores");
  $listaErrores.innerHTML = "";

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  const cantidadErrores = manejarErrores(errores);
  if (cantidadErrores === 0) {
    document.formulario.className = "hiddenWindow";
    document.querySelector("#exito").classList.remove("oculto");
    setTimeout(function () {
      window.location.href = "wishlist.html";
    }, 5000);
  }
}

function manejarErrores(errores) {
  let cuentaErrores = 0;
  const $listaErrores = document.querySelector("#errores");
  Object.keys(errores).forEach(function (key) {
    if (errores[key]) {
      cuentaErrores = cuentaErrores += 1;
      document.querySelector(`[name="${key}"]`).className = "error";
      const $error = document.createElement("li");
      $listaErrores.appendChild($error).innerHTML = `${key}: ${errores[key]}`;
    } else {
      document.querySelector(`[name="${key}"]`).className = "";
    }
  });
  return cuentaErrores;
}
