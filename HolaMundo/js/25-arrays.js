"use strict"

// Arrays

var nombre = "Maryury Carvajal";
var nombres = ["Pepito Perez","Juan Rodriguez","Pedro Franco",52,true];

var lenguajes = new Array("PHP","JS","Go","Java");

console.log(nombres.length);
/*var elemento = parseInt(prompt("que elemento del array quieres",0));
if (elemento >= nombres.length){
    alert("Introduce el numero correcto "+ nombres.length);
}else {
    alert(nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programación de 2018</h1>");
document.write("<ul>");
/*
for (var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/
/*
lenguajes.forEach((element, index, arr) => {
    console.log(arr);
    document.write("<li>"+index+"-"+element+"</li>");
    
});*/
for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");

}
document.write("</ul>");

// Busquedas 

var precios = [10,20,50,80,12];


//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
var busqueda = precios.some(precio => precio >= 90);
console.log(busqueda);