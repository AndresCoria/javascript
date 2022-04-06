let comidaSeleccionada = {
  comida: null,
  bebida: null,
  postre: null,
};

/* INGRESO AL CARRITO DE COMPRAS */
function init() {
  alert("Usuario: user" + " Pass: user");

  let usuario = prompt("Introduzca su usuario");
  let contrasena = prompt("Introduzca su contraseña");

  if (usuario == "user" && contrasena == "user") {
    alert("Los datos son correctos");
    comidas();
    return;
  }

  if (usuario !== "user" && contrasena !== "user")
    return alert("Error. Los datos son incorrectos");

  if (usuario !== "user") return alert("usuario incorrecto");

  if (contrasena !== "user") return alert("contraseña incorrecta");
}

init();

function comidas() {
  alert("Elije tu Comida");

  const precioComida = [300, 400, 550];
  const eleccion = parseInt(
    prompt(
      "Ingresa tu eleccion" + " 1- Solo queso 2- Jamon y queso 3- Completa"
    )
  );

  if (eleccion < 1 || eleccion > 3) {
    alert("Opcion no valida");
    comidas();

    return;
  }

  alert(
    "se ha agregado tu producto y se han sumado " +
      precioComida[eleccion - 1] +
      " a tu cuenta"
  );
  comidaSeleccionada.comida = precioComida[eleccion - 1];

  bebidas();
}

/* ELECCION DE BEBIDAS */

function bebidas() {
  alert("Elije tu Bebida");

  const precioBebidas = [30, 100, 150];
  const eleccion = parseInt(
    prompt("Ingresa tu eleccion" + " 1- Agua 2- Gaseosa 3- Cerveza")
  );

  if (eleccion < 1 || eleccion > 3) {
    alert("Opcion no valida");
    bebidas();

    return;
  }

  alert(
    "se ha agregado tu producto y se han sumado " +
      precioBebidas[eleccion - 1] +
      " a tu cuenta"
  );
  comidaSeleccionada.bebida = precioBebidas[eleccion - 1];

  postres();
}

/* ELECCION DE POSTRES */

function postres() {
  alert("Elije tu Postre");

  const precioPostres = [20, 75, 100, 0];
  const eleccion = parseInt(
    prompt("Ingresa tu eleccion" + " 1- Gelatina 2- Flan 3- Helado 4- Sin postre")
  );

  if (eleccion < 1 || eleccion > 4) {
    alert("Opcion no valida");
    postres();

    return;
  }

  alert(
    "se ha agregado tu producto y se han sumado " +
      precioPostres[eleccion - 1] +
      " a tu cuenta"
  );
  comidaSeleccionada.postre = precioPostres[eleccion - 1];

  precioFinal();
}

function precioFinal() {
  const precioFinal =
    comidaSeleccionada.comida +
    comidaSeleccionada.bebida +
    comidaSeleccionada.postre;

  alert("precio final de los productos: " + precioFinal);
}
