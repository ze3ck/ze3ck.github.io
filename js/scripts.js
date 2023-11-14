// Obtener todos los botones "Comprar"
const botonesComprar = document.querySelectorAll(".btn-primary");

// Agregar un evento de clic a cada botón
for (const botonComprar of botonesComprar) {
  botonComprar.addEventListener("click", function() {
    // Obtener el producto seleccionado
    const productoSeleccionado = this.closest(".card");

    // Obtener el nombre del producto
    const nombreProducto = productoSeleccionado.querySelector(".card-title").textContent;

    // Obtener el precio del producto
    const precioProducto = productoSeleccionado.querySelector(".card-text").textContent;

    // Agregar el producto al carrito
    carrito.push({
      nombre: nombreProducto,
      precio: precioProducto,
    });

    // Almacenar los productos en el almacenamiento local
    window.localStorage.setItem("carrito", JSON.stringify(carrito));

    // Redireccionar a la página del carrito
    window.location.href = "carrito.html";
  });
}

// Crear un array para almacenar los productos del carrito
const carrito = [];

// Obtener los productos del carrito
const productos = window.localStorage.getItem("carrito");

// Si no hay productos, crear un array vacío
if (!productos) {
  productos = [];
}

// Convertir los productos a un array
const productosArray = JSON.parse(productos);

// Mostrar los productos en la tabla
for (const producto of productosArray) {
  const tr = document.createElement("tr");

  // Agregar el nombre del producto a la fila
  const tdNombre = document.createElement("td");
  tdNombre.textContent = producto.nombre;
  tr.appendChild(tdNombre);

  // Agregar el precio del producto a la fila
  const tdPrecio = document.createElement("td");
  tdPrecio.textContent = producto.precio;
  tr.appendChild(tdPrecio);

  // Agregar la fila a la tabla
  document.querySelector("tbody").appendChild(tr);
}
