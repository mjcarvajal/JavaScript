"use strict"
window.addEventListener('load', function(){

    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set interval ejecutando");
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else {
                encabezado.style.fontSize = "50px";
            }
        }, 500);
        return tiempo;
    }

    // Timers
    
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });
    var start = document.querySelector("#start");
    start.addEventListener('click', function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo(tiempo);
    });
});