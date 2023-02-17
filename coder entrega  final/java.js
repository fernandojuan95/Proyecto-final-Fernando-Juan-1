const main = document.getElementById("main");

const listado = "./genero.json";

fetch(listado)
  .then(res => res.json())
  .then(data => mostrarProductos(data));

function mostrarProductos(libros) {
  libros.forEach(producto => {
    main.innerHTML += `<h2> Nombre: libro ${producto.nombre}</h2>
        <p> Genero : ${producto.genero}</p>
        <p> id: ${producto.id}<p/>`;
  });
}

function PreciodeProducto(libro) {
  let librofrankenstein = 4000;
  let librosouleater = 1500;
  let libroelcuervo = 2000;

  switch (libro) {
    case "frankenstein":
      return librofrankenstein;
    case "souleater":
      return librosouleater;
    case "elcuervo":
      return libroelcuervo;
    default:
      return false;
  }
}

function CantidadDelibros(Cantidad) {
  return Cantidad >= 1 && Cantidad <= 3;
}

let precio = PreciodeProducto("frankenstein");
let cantidad = 2;

if (CantidadDelibros(cantidad)) {
  precio *= cantidad;
} else {
  precio = false;
}

