
// Carrito de compras
let carrito = [];
let shopcontent = document.getElementById("mainGrid");
let tablaBody = document.getElementById("tablabody");
let subtotalCarrito = document.getElementById("subtotal");
let totalCarrito = document.getElementById("total");

productos.forEach((producto)=>{

    let cardContent = document.createElement("div");
    shopcontent.append(cardContent);
    cardContent.className = "card-img"
    cardContent.innerHTML = `
        <section class="seccion-1">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${producto.img}" alt="${producto.name}">
                <div class="card-body">
                <h4 class="card-title">${producto.name}</h4>
                <p class="card-text">$${producto.price}<br> ${producto.type}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </section>
    `;

    let botonComprar = cardContent.querySelector(".btn-primary");
        botonComprar.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });
});

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log("Producto agregado al carrito:", producto);

    let filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.name}</td>
        <td>${producto.type}</td>
        <td>${producto.price}</td>
        <td><button class="btn btn-danger btn-sm">Eliminar</button></td>
    `;

    tablaBody.appendChild(filaTabla);

    let botonEliminar = filaTabla.querySelector(".btn-danger");
    botonEliminar.addEventListener("click", () => {
    eliminarDelCarrito(producto);
    });
    calcularTotal();
}

function eliminarDelCarrito(producto) {
    // Encuentra el índice del producto en el array carrito
    const index = carrito.findIndex((item) => item.id === producto.id);

    // Si se encontró el producto en el carrito, elimínalo
    if (index !== -1) {
        carrito.splice(index, 1);
        console.log("Producto eliminado del carrito:", producto);

      // Elimina la fila correspondiente de la tabla del carrito
        const filasTabla = tablaBody.getElementsByTagName("tr");
        filasTabla[index].remove();
    }
    calcularTotal();
}

function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.price;
    });

    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total a pagar $: ${total}`;
}
