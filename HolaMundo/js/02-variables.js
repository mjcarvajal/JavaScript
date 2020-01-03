// VARIABLES
// Una variable es un contenedor de informacón
// let(local):
//   permite declarar variables limitando su alcance al bloque de declaración
// var(Global):
//   permit declara variables sin importar el bloque de declaración
"use strict"
var pais = "Colombia";
var continente = "America";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;

pais = "Mexico"
continente = "Cento america"

console.log(pais, continente, antiguedad);
alert(pais_y_continente);