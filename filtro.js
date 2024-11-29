// Tenemos un lio de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos"); // cambio name por id y quito una s
const $i = document.getElementById("input-filtrar"); // agrego id, cambio querySelector
// falta la funcion para llamar a los productos, creo un forEach
function displayProductos(productos) {
  li.innerHTML = ""; 
  
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  });
}


// for (let i = 0; i < productos.length; i++) {
//   var d = document.createElement("div")
//   d.classList.add("producto")

//   var ti = document.createElement("p")
//   ti.classList.add("titulo")
//   ti.textContent = productos[i].nombre
  
//   var imagen = document.createElement("img");
//   imagen.setAttribute('src', productos[i].img);

//   d.appendChild(ti)
//   d.appendChild(imagen)

//   li.appendChild(d) // no esta definido
// }

displayProductos(productos)  // invocando los productos en la pagina

const botonDeFiltro = document.querySelector("button");
botonDeFiltro.onclick = function() {
  // Limpiar los productos actuales
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value; 
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);  

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div"); 
    d.classList.add("producto");

    var ti = document.createElement("p");  
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}
