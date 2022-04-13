let comidaSeleccionada = {
  comida: null,
  bebida: null,
  postre: null,
};

let productoSeleccionado = {
  comida: null,
  bebida: null,
  postre: null,
};

/* INGRESO AL CARRITO DE COMPRAS */
function init() {
  alert("Usuario: user" + " Pass: user");

  let usuario = prompt("Introduzca su usuario");
  let contrasena = prompt("Introduzca su contraseña");

  if (usuario === "user" && contrasena === "user") {
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

  const prodComidas = ["Hamburguesa sola", "Hamburguesa con jamon y queso", "Hamburguesa completa(Jamon, queso, tomate y lechuga)"];
  const precioComida = [300, 400, 550];
  const eleccion = parseInt(
    prompt(`
    Ingresa tu eleccion 
    1- Hamburguesa sola 
    2- Hamburguesa con jamon y queso
    3- Hamburguesa completa(Jamon, queso, tomate y lechuga)
    `)
  );

  if (eleccion < 1 || eleccion > 3) {
    alert("Opcion no valida");
    comidas();

    return;
  }

  alert(`
    Se ha agregado ${prodComidas[eleccion - 1]} a tu lista
    y se han sumado ${precioComida[eleccion - 1]}
    a tu cuenta.
  `)

  comidaSeleccionada.comida = precioComida[eleccion - 1];
  productoSeleccionado.comida = prodComidas[eleccion - 1];

  bebidas();
}

/* ELECCION DE BEBIDAS */

function bebidas() {
  alert("Elije tu Bebida");

  const prodBebidas = ["Agua mineral", "Gaseosa de 1.75L", "Cerveza"];
  const precioBebidas = [30, 100, 150];
  const eleccion = parseInt(
    prompt(`
    Ingresa tu eleccion 
    1- Agua mineral
    2- Gaseosa de 1.75L
    3- Cerveza
    `)
  );

  if (eleccion < 1 || eleccion > 3) {
    alert("Opcion no valida");
    bebidas();

    return;
  }

  alert(`
    Se ha agregado ${prodBebidas[eleccion - 1]} a tu lista
    y se han sumado ${precioBebidas[eleccion - 1]}
    a tu cuenta.
    `);
  comidaSeleccionada.bebida = precioBebidas[eleccion - 1];
  productoSeleccionado.bebida = prodBebidas[eleccion - 1];

  postres();
}

/* ELECCION DE POSTRES */

function postres() {
  alert("Elije tu Postre");

  const prodPostres = ["Sin postre", "Budin de pan", "Flan mixto", "Helado"];
  const precioPostres = [0, 20, 75, 100,];
  const eleccion = parseInt(
    prompt(`
    Ingresa tu eleccion 
    1- Sin Postre
    2- Budin de pan
    3- Flan mixto
    4- Helado
    `)
  );

  if (eleccion < 1 || eleccion > 4) {
    alert("Opcion no valida");
    postres();
    return
  }

  if (eleccion === 1) {
    alert(`
    No se han agregado productos a tu lista
    ni tampoco se han sumado ningun importe
    a tu cuenta.
    `);

  }
  else {
    alert(`
    Se ha agregado ${prodPostres[eleccion - 1]} a tu lista
    y se han sumado ${precioPostres[eleccion - 1]}
    a tu cuenta.
    `);

  }
    comidaSeleccionada.postre = precioPostres[eleccion - 1];
    productoSeleccionado.postre = prodPostres[eleccion - 1];
    listaFinal();
    precioFinal();
};

function listaFinal() {
    
    if (productoSeleccionado.postre === 'Sin postre') {
      alert(`
        Sus productos son: 
        ${productoSeleccionado.comida}
        ${productoSeleccionado.bebida}
      `)
    }
    else {
      alert(`
        Sus productos son: 
        ${productoSeleccionado.comida}
        ${productoSeleccionado.bebida}
        ${productoSeleccionado.postre}
      `)
    }
  };
  
  function precioFinal() {
  const precioFinal =
    comidaSeleccionada.comida +
    comidaSeleccionada.bebida +
    comidaSeleccionada.postre;

  alert("precio final de los productos: " + precioFinal);
};

// const domicilio = []

class domicilio {
  constructor(calle, altura, barrio) {
    this.calle = calle;
    this.altura = altura;
    this.barrio = barrio;
  }
}


