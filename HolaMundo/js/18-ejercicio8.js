"use strict"

/**
 * Calculadora que pida dos numeros
 * - si se ingresa mal un numero los solicite de nuevo
 * - En el cuerpo de la pagina, es una alerta y por consola 
 * el siguiete: sumar, restar, multiplicar y dividir esas dos cifras
 */

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

while(numero1<= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero",0));
    numero2 = parseInt(prompt("Introduce el segundo numero",0));
}
var resultado = "La sumas es: "+(numero1+numero2)+"</br>"+
                "La resta es: "+(numero1-numero2)+"</br>"+
                "la multiplicación es: "+(numero1*numero2)+"</br>"+
                "la division es: "+(numero1/numero2)+"</br>";

var resultado2 = "La sumas es: "+(numero1+numero2)+" \n"+
                "La resta es: "+(numero1-numero2)+" \n"+
                "la multiplicación es: "+(numero1*numero2)+" \n"+
                "la division es: "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultado2);
console.log(resultado2);