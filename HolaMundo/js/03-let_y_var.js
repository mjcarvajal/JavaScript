"use strict"
// Let vs Var
// Diferencia el alcance de las variables
// let(local):
//   permite declarar variables limitando su alcance al bloque de declaración
// var(Global):
//   permit declara variables sin importar el bloque de declaración

// Prueba con var
var numero = 40;
console.log(numero);

if (true){
    numero = 50;
    console.log(numero);
}

console.log(numero);

// Prueba con let

var texto = "Curos Js";
console.log(texto);

if (true){
    let texto = "Curso Angular";
    console.log(texto);
}

console.log(texto);