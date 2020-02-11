"use strict"

// Arrays multidimencionales

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad dueles","la vida es bella","Gran torino"];

var cine = [categorias, peliculas];
var elemento = "";
/*
do{
    elemento = prompt("introduce tu pelicula");
    peliculas.push(elemento)
}
while(elemento != "ACABAR");

peliculas.pop();
*/

var indice = peliculas.indexOf("la vida es bella");
if(indice > -1){
    peliculas.splice(indice,1);
}
console.log(indice);

var peliculaString = peliculas.join();
var cadena = "texto1, texto2, texto3";
var cadenaArray = cadena.split(", ");

console.log(peliculas);
peliculas.reverse();
console.log(peliculas);