"use strict"

/*
Programa que :
1. solicite 6 números en pantalla y los meta en un array
2. Mostroar todos los elementos de un array en el cuerpo
de la pagina y la consola
3. Ordenar el array y mostrarlo
4. Invertir el array y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, y diga
si esta en el array y la posicion
*/

// Mostrar array en el cuerpo de la pagina
function mostrarArryaPantalla(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index) =>{
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}
var numeros = [];

for (var i = 0; i <5; i++){
    numeros.push(parseInt(prompt("Introduce un numero ",0)));
}
// Mostrar en el cuerpo de la pagina
console.log(numeros);
mostrarArryaPantalla(numeros);

// Invertir array
numeros.reverse();
console.log(numeros);
mostrarArryaPantalla(numeros,"Invertido");
// Ordenar y Mostrar
numeros.sort(function(a,b){return a-b});
console.log(numeros);
mostrarArryaPantalla(numeros, "Ordenado");

// Contar elementos
console.log(numeros.length);
document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

// Busqueda

var busqueda = parseInt(prompt("Buscar un numero",0));

var posicion = numeros.findIndex(numero=> numero == busqueda);
if(posicion && posicion != -1){
    document.write("<h1> ENCONTRADO </h1>");
    document.write("<h1> Posicion de la busqueda "+posicion+"</h1>");
}else{
    document.write("<h1> NO ENCONTRADO </h1>");
}
