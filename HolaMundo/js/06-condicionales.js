"use strict"
// Concidicional IF
var edad = 90;
var nombre = "Pepito Perez";

/**
 * Operadores relacionales 
 * Mayor: >
 * Menor: <
 * Mayor o igual: >=
 * Menor o igual: <=
 * Igual: ==
 * Distinto: !=
 */
if (edad >= 18){
    //Es mayor de edad
    console.log(nombre+" Tiene "+edad+" años es mayor de edad");
    if (edad <= 33){
        console.log("Todavia eres milenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }else {
        console.log("Ya no eres milenial");
    }
}else {
    //Es menor de edad
    console.log(nombre+" Tiene "+edad+" años es menor de edad");

}

/*
Operadores Logicos.
AND(Y) &&
OR(O) ||
Negación !
*/

// Negación
var year= 2020;
if(year!= 2017){
    console.log("El año no es 2019");
}
// AND
if(year >= 2000 && year <= 2020 && year != 2019){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else {
    console.log("Año no registrado");
}
