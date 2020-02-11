$(document).ready(function(){
    
    // Selector con ID 
    $("#rojo").css("background","red")
              .css("color","white");

    $("#amarillo").css("background","yellow")
                  .css("color","green");
    
    $("#verde").css("background","green")
               .css("color","white");

    // Selectres de clase

    var miClase = $('.zebra').css("padding","5 px");

    $('.sinBorde').click(function(){
        console.log("Click daoo");
        $(this).addClass('zebra');
    });

    // Selectores de etiqueta

    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function(){
        var elem = $(this);
        if (!elem.hasClass("grande")){
            elem.addClass("grande");
        }else{
            elem.removeClass("grande");

        }
    });


    // Selectores de atributo

    $('[title="Google"]').css('background','#ccc');    
    $('[title="Fecebook"]').css('background','blue');

    // Otros

    //$('p,a').addClass('margen-superior');

    var busquedad = $("#caja .resaltado").eq(0).parent().parent().find('.resaltado');

    console.log(busquedad);
});

