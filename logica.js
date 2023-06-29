// Carrito de compras
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const shopcontent = document.getElementById("mainGrid");
const tablaBody = document.getElementById("tablabody");
const totalCarrito = document.getElementById("total");

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

let botones = document.getElementsByClassName("btn btn-primary");
for(const boton of botones){
    boton.onmouseover = () => {
        boton.classList.replace('btn-primary','btn-warning');
    }
    boton.onmouseout = () => {
        boton.classList.replace('btn-warning','btn-primary');
    }
}


function agregarAlCarrito(producto) {
    const productoExistente = carrito.find((item) => item.id === producto.id); // busco un producto especifico en el array

    if (productoExistente) {
        productoExistente.cantidad++; // incrementa la cantidad si el producto ya está en el carrito
        const filaExistente = tablaBody.querySelector(`tr[data-producto-id="${producto.id}"]`); 
        const celdaCantidad = filaExistente.querySelector("td:nth-child(4)"); // td:nth-child(4) se utiliza para selecciona la cuarta celda
        celdaCantidad.textContent = productoExistente.cantidad;
    } else {
        producto.cantidad = 1; // establece la cantidad en 1 si es la primera vez que se agrega al carrito
        carrito.push(producto);
        console.log("Producto agregado al carrito:", producto);
    }
    mostrarCarrito();
    calcularTotal();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito(){
    tablaBody.innerHTML = "";
    carrito.forEach((producto) => {
        let filaTabla = document.createElement("tr");
        filaTabla.setAttribute("data-producto-id", producto.id);
        filaTabla.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.name}</td>
            <td>${producto.type}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.price}</td>
            <td><button class="btn btn-danger btn-sm">Eliminar</button></td>
        `;
        
        tablaBody.appendChild(filaTabla);

        let botonEliminar = filaTabla.querySelector(".btn-danger");
        botonEliminar.addEventListener("click", () => {
            eliminarDelCarrito(producto);
        });
    });
}

mostrarCarrito();

function eliminarDelCarrito(producto) {
    const index = carrito.findIndex((item) => item.id === producto.id); //busco el elemento que quiero eliminar, si findIndex no encuentra nada devuelve -1. Por eso en el if me fijo si es distinto de -1
    if (index !== -1) {  
        const productoExistente = carrito[index];
        if (productoExistente.cantidad > 1) {
        productoExistente.cantidad--; // elimina un producto si hay mas de uno
        const filaExistente = tablaBody.querySelector(`tr[data-producto-id="${producto.id}"]`);
        const celdaCantidad = filaExistente.querySelector("td:nth-child(4)"); // td:nth-child(4) se utiliza para selecciona la cuarta celda
        celdaCantidad.textContent = productoExistente.cantidad;
        } else {
        carrito.splice(index, 1); // elimina el elemento especifico del array
        const filaExistente = tablaBody.querySelector(`tr[data-producto-id="${producto.id}"]`);
        filaExistente.remove(); // si el producto tiene cantidad = 1 entonces elimino la fila del carrito
        }
        console.log("Producto eliminado del carrito:", producto);
        calcularTotal();
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.price * producto.cantidad;
    });

    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total a pagar $: ${total}`;
}
