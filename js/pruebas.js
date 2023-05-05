function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
  console.assert(
    validarNombre("ASJDSJSIIW2") === "Este campo debe tener solo letras",
    "Validar nombre no validó que el nombre tenga solo letras"
  );
  console.assert(
    validarNombre("Abraham") === "",
    "Validar nombre falló con un nombre válido"
  );
}
function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Este campo debe tener al menos 1 caracter",
    "Validar ciudad no validó que el nombre no sea vacío"
  );
  console.assert(
    validarCiudad("Buenos Aires") === "",
    "Validar ciudad falló con un nombre válido"
  );
}
function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "Este campo debe tener al menos 1 caracter",
    "Validar descripcion regalo no validó que el nombre no sea vacío"
  );

  console.assert(
    validarDescripcionRegalo(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 100 caracteres",
    "Validar descripcion regalo no validó que el nombre sea menor a 50 caracteres"
  );
  console.assert(
    validarDescripcionRegalo("ASJDSJSIIW2$") ===
      "Este campo debe tener solo letras",
    "Este campo debe tener solo letras y/o numeros"
  );
  console.assert(
    validarDescripcionRegalo("Abraham") === "",
    "Validar descripcion regalo falló con un nombre válido"
  );
}

probarValidarNombre();
