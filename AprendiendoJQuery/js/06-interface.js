$(document).ready(function(){

    // Mover por la Pagina
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Selecionar Elementos

    //$(".lista-selecionable").selectable();

    // Ordenar
    $(".lista-selecionable").sortable({
        update: function(event,ul){
            console.log("Ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    // Efectos

    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake",4000);
    });

    // tooltip
    $(document).tooltip();

    // Cuadros de dialogo
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    // Calendario
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
    


});