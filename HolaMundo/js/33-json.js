"use strict"

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Bataman vs Superman',
    year: 2017,
    pais: 'Estado Unidos'
};
var peliculas = [
    {titulo: "La verdad duele", year: 2016,pais: "Francia"},
    pelicula
];

pelicula.titulo = "Superman Begins";
console.log(peliculas);

var cajaPeliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year);
    cajaPeliculas.append(p);
}