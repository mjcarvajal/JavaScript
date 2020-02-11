"use strict"

/**
 * Mostrar todos los numeros divisores de un numero introducido en un promt
*/

var numero = parseInt(prompt("Ingrese un numero",0));

for(var i = 1; i <= numero; i++){
    if(numero%i == 0){
        console.log("Divisor: "+i);
    }
}