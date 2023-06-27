function generarMensajeTabla(tablaFiltrada) {
    let mensaje = "";
    tablaFiltrada.forEach((producto) => {
    mensaje += "ID: " + producto.id + "\n";
    mensaje += "Nombre: " + producto.name + "\n";
    mensaje += "Tipo: " + producto.type + "\n";
    mensaje += "Tamaño: " + producto.size + "\n";
    mensaje += "Precio: $" + producto.price + "\n";
    mensaje += "Stock: " + producto.stock + "\n\n";
    });
    return mensaje;
}

let entrada = prompt("Bienvenido a Slingshot. Si desea comprar ingrese 'SI', de lo contrario ingrese 'NO");

while((entrada.toLowerCase() != "no") && (entrada.toLowerCase() != "si")){
    entrada = prompt("Vuelva a intentarlo. Si desea comprar ingrese 'SI', de lo contrario ingrese 'NO");
}

while(entrada){
    if(entrada.toLowerCase() == "si"){
        let tipo = prompt("¿Qué tipo de tabla te gustaría comprar? Existen: 'hibrida', 'park', 'wind' y 'lancha'");
        while((tipo.toLowerCase() != "hibrida") && (tipo.toLowerCase() != "park") && (tipo.toLowerCase() != "wind") && (tipo.toLowerCase() != "lancha")){
            tipo = prompt("Vuelva a intentarlo. ¿Qué tipo de tabla te gustaría comprar? Existen: 'hibrida', 'park', 'wind' y 'lancha'");
        }
        if(tipo.toLowerCase() == "hibrida"){
            alert("A continuación, se le mostrará las tablas tipo " + tipo + " que dispone la empresa");
            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));
            let mensaje = generarMensajeTabla(filtrado);
            alert(mensaje);
            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[0].size + ", 2: tamaño " + productos[1].size + ", 3: tamaño " + productos[2].size);
            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[0].size + ", 2: tamaño " + productos[1].size + ", 3: tamaño " + productos[2].size);
            }
            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[0].name);
            }
        }
        else if(tipo.toLowerCase() == "park"){
            alert("A continuación, se le mostrará las tabla tipo " + tipo + " que dispone la empresa");
            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));
            let mensaje = generarMensajeTabla(filtrado);
            alert(mensaje);
            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[3].size + ", 2: tamaño " + productos[4].size + ", 3: tamaño " + productos[5].size);
            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[3].size + ", 2: tamaño " + productos[4].size + ", 3: tamaño " + productos[5].size);
            }
            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[3].name);
            }
        }
        else if(tipo.toLowerCase() == "wind"){
            alert("A continuación, se le mostrará las tabla tipo " + tipo + " que dispone la empresa");
            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));
            let mensaje = generarMensajeTabla(filtrado);
            alert(mensaje);
            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[6].size + ", 2: tamaño " + productos[7].size + ", 3: tamaño " + productos[8].size);
            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[6].size + ", 2: tamaño " + productos[7].size + ", 3: tamaño " + productos[8].size);
            }
            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[6].name);
            }
        }
        else if(tipo.toLowerCase() == "lancha"){
            alert("A continuación, se le mostrará las tablas tipo " + tipo + " que dispone la empresa");
            let filtrado = productos.filter((producto) => producto.type.includes(tipo.toLowerCase()));
            let mensaje = generarMensajeTabla(filtrado);
            alert(mensaje);
            let comprado = prompt("¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[9].size + ", 2: tamaño " + productos[10].size + ", 3: tamaño " + productos[11].size);
            while((comprado != "1") && (comprado != "2") && (comprado != "3")){
                comprado = prompt("Vuelva a intentarlo ¿Que producto de los " + filtrado.length + " mostrados desea seleccionar? 1: tamaño " + productos[9].size + ", 2: tamaño " + productos[10].size + ", 3: tamaño " + productos[11].size);
            }
            if((comprado == "1") || (comprado == "2") || (comprado == "3")){
                alert("Felicitaciones! Usted ha comprado el siguiente producto " + productos[9].name);
            }
        }
        else{
            tipo = prompt("Vuelva a intentarlo. ¿Qué tipo de tabla te gustaría comprar? Existen: 'hibrida', 'park', 'wind' y 'lancha'");
        }
        entrada = prompt("Si desea seguir comprando ingrese 'SI', de lo contrario ingrese 'NO'");
        while((entrada.toLowerCase() != "no") && (entrada.toLowerCase() != "si")){
            entrada = prompt("Vuelva a intentarlo. Si desea seguir comprar ingrese 'SI', de lo contrario ingrese 'NO");
        }
    }
    else if(entrada.toLowerCase() == "no"){
        alert("Vuelva pronto!");
        break;
    }
    else{
        entrada = prompt("Vuelva a intentarlo. Si desea comprar ingrese 'SI', de lo contrario ingrese 'NO");
    }
}

// Carrito de compras
let carrito = [];
const shopcontent = document.getElementById("maingGrid");

productos.forEach((producr)=>{
    let content = document.createElement("div");
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${preoduct.name}</h3>
        <h4>${preoduct.type}</h4>
        <p>${product.price} $</p>
        `;
    mainGrid.append(content);
});

// // Función para agregar un producto al carrito
// function agregarAlCarrito(id) {
//     let producto = productos.find((p) => p.id === id);
    
//     if (producto) {
//         carrito.push(producto);
//         console.log(`Se agregó "${producto.nombre}" al carrito.`);
//     } else {
//         console.log('Producto no encontrado.');
//     }
// }

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