let poemaDesordenado = "roses red are bacon crispy i bacon love and is blue violets are";

const arregloDesordenado = [poemaDesordenado.split('')];
const arregloOrdenado = [];

while (arregloDesordenado.length > 0) {
    let eliminado1 = arregloDesordenado.pop();
    let eliminado2 = arregloDesordenado.shift();
    arregloOrdenado.push(eliminado1 + eliminado2);

    let poemaOrdenado = new String(arregloOrdenado.join('')); 

    console.log(poemaOrdenado);

}

