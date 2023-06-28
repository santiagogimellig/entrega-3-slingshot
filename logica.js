
// Carrito de compras
let carrito = [];
let shopcontent = document.getElementById("mainGrid");
let tablaBody = document.getElementById("tablabody");

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
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.name}</td>
            <td>${producto.type}</td>
            <td>${producto.price}</td>
        </tr>
    `;
}

// // Función para quitar un producto del carrito
// function quitarDelCarrito(id) {
//     const index = carrito.findIndex((p) => p.id === id);
//     if (index !== -1) {
//     const productoEliminado = carrito.splice(index, 1);
//     console.log(`Se eliminó "${productoEliminado[0].nombre}" del carrito.`);
//     } else {
//     console.log('Producto no encontrado en el carrito.');
//     }
// }