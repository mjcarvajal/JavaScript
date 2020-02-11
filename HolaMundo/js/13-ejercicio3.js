"use strict"

/*
Programa que muestre todos los numero que hay dentro
dos numeros
*/

var numero1 = parseInt(prompt("Ingrese el numero inicial: ",0));
var numero2 = parseInt(prompt("Ingrese el numero final: ",0));

document.write("<h1>De"+numero1+" a "+numero2+"están los numeros: </h1>");
for (var i = numero1; i <= numero2; i++){
    document.write(i+"</br>");
    console.log(i);
}
