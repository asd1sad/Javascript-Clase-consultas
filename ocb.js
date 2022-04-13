/* const productos = [];
class Producto {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}
productos.push(new Producto(1, "Remera Espacio Obligado", 100));
productos.push(new Producto(2, "Pantalon 1", 100));
productos.push(new Producto(3, "Pantalon 2", 100));
productos.push(new Producto(4, "Top 1", 100));
productos.push(new Producto(5, "Top 2", 100));
productos.push(new Producto(6, "Accesorios", 100));
productos.push(new Producto(7, "Guantes 1", 100));
productos.push(new Producto(8, "Guantes 2", 100));
productos.push(new Producto(9, "Extra", 100));
// ! Estetica
console.log(""); console.log(""); console.log(""); console.log("Escoge un numero de ID"); console.log("");
// ! Listado
for (let prendas of productos) {
    console.log("ID = " + prendas.id + " | " + prendas.producto);
} console.log("");
console.log("Escriba ESC para salir"); console.log("");
console.log("Carrito:");

alert("Aprete F12 para poder ver el listado.\nSi no aparece el listado recargue la pagina.");
// ! Carrito
let precioTotal = 0;
let carrito = "";
while (carrito.toLowerCase() !== "esc") {
    carrito = prompt("Que prenda quiere comprar?");
    for (let item of productos) {
        if (carrito == item.id) {
            precioTotal += item.precio;
            console.log(precioTotal + "$ " + item.producto);
        }
    }
}
// ! Pago
let cuotas = "";
const calcularPrecioUnico = (precioTotal, cuotas) => "Total a pagar " + Math.round((precioTotal / cuotas)) + "$. ";
const calcularPrecio = (precioTotal, cuotas) => "Serian " + Math.round((precioTotal / cuotas)) + "$ mensuales durante " + cuotas + " meses.";
const interes = (precioTotal, cuotas) => "Serian " + Math.round((precioTotal / cuotas) * 0.05 + (precioTotal / cuotas)) + "$ mensuales durante " + cuotas + " meses.";
do {
    cuotas = parseInt(prompt("Total = " + precioTotal + "$" + "\nTenemos hasta 3 cuotas sin interes, maximo 6 cuotas con 5% de recargo.\nCuantas queres?"));
} while (isNaN(precioTotal) || isNaN(cuotas));
switch (cuotas) {
    case 1:
        alert(calcularPrecioUnico(precioTotal, 1));
        break;
    case 2:
        alert(calcularPrecio(precioTotal, 2));
        break;
    case 3:
        alert(calcularPrecio(precioTotal, 3));
        break;
    case 4:
        alert(interes(precioTotal, 4));
        break;
    case 5:
        alert(interes(precioTotal, 5));
        break;
    case 6:
        alert(interes(precioTotal, 6));
        break;
} */
/* 
// ! Estetica
console.log(""); console.log(""); console.log("");
console.log("Registro de Visitas:"); */
// !Cada visitante puede hacer un comentario en el mural
class Registro {
    constructor(numero, nombre, mensaje) {
        this.numero = numero;
        this.nombre = nombre;
        this.mensaje = mensaje;
    }
}
const registro = [];
let nombre = "*";
let mensaje = "*";
while (nombre == "*" && mensaje == "*") {
    nombre = prompt("Ingrese Nombre");
    mensaje = prompt("Ingrese Mensaje");
    for (numero = 0; numero < registro.length; numero++) {
    }
    registro.push({ numero, nombre, mensaje });
}
// !Estos 2 no los llamo, simplemente para tenerlos en caso de querer
/* const registroNombres = registro.map(({ nombre }) => nombre)
const registroMensajes = registro.map(({ mensaje }) => mensaje)
let fecha = () => { fecha = new Date(); console.log(fecha.toLocaleString()) };
function listaMensajes(registro) {
    for (const el of registro) {
        console.log((el.nombre) + " dijo " + (el.mensaje));
        fecha();
    }
}
const mensajeLargo = el => el.mensaje.length > 20;
const mensajesLargos = registro.filter(mensajeLargo);

console.log("Mensajes Largos: ", mensajesLargos);  */

// listaMensajes(registro);

// ! Clase 8 use este modo porque con los otros no pude :/
  for(const people of registro){
    let contenedor = document.createElement("li");
    contenedor.innerHTML = `<li> ${people.nombre} ${people.mensaje} </li>`;
    document.body.appendChild(contenedor);
}  

// console.log(document.getElementById("visitante").innerHTML);

// document.getElementById("visitante").innerHTML  = listaMensajes(registro);

/* 
 let li = document.createElement("li");

li.innerHTML = "no se puede";

document.getElementById("visitante").append(li);  */
// !Este seria el otro
/* let registroArray = [registro];

for (const el of registroArray) {
    let li = document.createElement("li");
    li.innerHTML = el;
    document.getElementById("registroArray").append(li);
} */

// ! Clase 9 
