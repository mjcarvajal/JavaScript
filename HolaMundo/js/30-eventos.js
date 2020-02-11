"use strict"

// Enventos del ratón

window.addEventListener('load', function(){
    function cambiarColor(){
        console.log("Me has dado Click");
        var bg = boton.style.background;
        if(bg == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background ="green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc"
        
    
    }
    var boton = document.querySelector("#boton");
    // Click
    boton.addEventListener('click',function (){
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });
    // Mouseover
    boton.addEventListener('mouseover',function(){
        boton.style.background = "yellow";
    });
    // Mouseout
    boton.addEventListener('mouseout', function (){
        boton.style.background = "#ccc";
    });
    
    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("(focus) Estas Dentro del Input");
    });
    
    // Blur
    input.addEventListener('blur', function(){
        console.log("(blur)Estas fuera del Input");
    });
    
    // Keydown
    input.addEventListener('keydown', function(){
        console.log("Pulsando la tecla", String.fromCharCode(event.keyCode));
    });
    
    
    // Keypress
    
    input.addEventListener('keypress', function(){
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    
    // Keyup
    
    input.addEventListener('keyup', function(){
        console.log("keyUp Tecla soltada", String.fromCharCode(event.keyCode));
    });
});
