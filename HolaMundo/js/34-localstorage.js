"use strict"

// Localstorage

// Comprobar disponibilidad del Local storage
if(typeof(Storage) != "undefined"){
    console.log("Localstorage Disponible");
}else {
    console.log("LocalStorage no diponible");
}

// Guardar datos
localStorage.setItem("titulo","Curos Javascript");

// Recuperar elemento y meterlo en mi pagina web

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos

var usuario = {
    nombre: 'Pepito perez',
    email: 'pepito@perz',
    web: 'pepito.com'
};

localStorage.setItem("usuario",JSON.stringify(usuario));

// recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" "+userjs.web+" - "+userjs.nombre);

localStorage.clear();



