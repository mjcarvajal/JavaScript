"use strict"

/*
Tabla de multiplicar de un numero introducido por pantalla
*/


document.write("<h1> La tabla de multiplicar</h1>");

for(var j = 1; j<= 10; j++){
    document.write("<h1> La tabla del "+j+" </h1>");
    for ( var i = 1; i<= 10; i++){
        document.write(j+" x "+i+" = "+(i*j)+"</br>");
    }
}