"use strict"

// Plantillas de texto

var nombre = prompt("Ingrese el nombre ");
var apellidos = prompt("Ingrese los apellidos ");

var texto =  ` 
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);