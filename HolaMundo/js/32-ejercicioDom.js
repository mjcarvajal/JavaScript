"use strict"

window.addEventListener('load', function (){
    console.log("Dom cargado!!");

    var formulario = document.querySelector("#formulario");
    var boxDashed = document.querySelector(".dashed");
    boxDashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        if (nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";

        }
        if (apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Los apellidos no es valido");
            document.querySelector("#error_apellidos").innerHTML = "Los apellido no son validos";
            return false;
        }else{
            document.querySelector("#error_apellidos").style.display = "none";

        }
        if (edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            document.querySelector("#error_edad").innerHTML = "La edad no es valida";
            return false;
        }else{
            document.querySelector("#error_edad").style.display = "none";

        }





        boxDashed.style.display = "block";
        var pNombre = document.querySelector("#pNombre span");
        var pApellidos = document.querySelector("#pApellido span");
        var pEdad = document.querySelector("#pEdad span");

        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;
        /*
        var indice;
        var datoUsuario = [nombre,apellidos, edad];
        for (indice in datoUsuario){
            var parrafo = document.createElement("p");    
            parrafo.append(datoUsuario[indice]);
            boxDashed.append(parrafo);

        }
        */
    });
});