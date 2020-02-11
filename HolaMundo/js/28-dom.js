"use strict"

// DOM - Document Object Model

function cambiaColor (color){
    caja.style.background = color;
}
// Conseguir elementos 
var caja = document.querySelector("#micaja");
caja.innerHTML = "¡Texto en la caja en js!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);

// Conseguir todos los divs

var todosLosDivs = document.getElementsByTagName('div');
var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
for (valor in todosLosDivs){
    console.log(valor);
    if(typeof todosLosDivs[valor].textContent =='string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);    
        seccion.append(parrafo);
    }
}
seccion.append(hr);

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
console.log(divsAmarillos);
divsAmarillos[0].style.background = "yellow";
for (var div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }    
}
console.log(divsRojos);

// Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);