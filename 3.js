//! Adivina el Numero 

let numeroSecreto = 1998;
let adivinanza = prompt("Adivina el numero secreto");
adivinanza = parseInt(adivinanza)


if(numeroSecreto == adivinanza){
    alert("WAT sos crack, le embocaste");
}else if(adivinanza < numeroSecreto){
    alert("El numero es mas grande bro");
}else if(adivinanza > numeroSecreto){
    alert("El numero es mas bajo0o");
}else(adivinanza == null);{
    alert("Si no queres jugar sali de aca");
}

 
