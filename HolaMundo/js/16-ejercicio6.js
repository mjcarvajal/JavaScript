"use strict"
/**
 * Que nos diga si un numero es par o impar
 * 1. ventana prompt
 * 2. si no es valido que nos pida de nuevo el numero
 */

var number = parseInt(prompt("Introduce un numero: ",0));

while(isNaN(number)){
    number = parseInt(prompt("Introduce un numero: ",0));
}

if (number%2 == 0){
    alert("Es un numero par");
}else{
    alert("Es un numero impar");
}
