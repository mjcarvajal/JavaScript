"use strict"

// Parametros REST y SPREAD

// Parametros Rest ... cuando no se cuantos parametros son
// toma todos los parametros restantes en un array

function listadoFrutas (fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta1: "+fruta1);
    console.log("Fruta2: "+fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");
var frutas = ["Naranja","Manzana"];

listadoFrutas(...frutas,"Sandia","Pera","Melon","Coco");