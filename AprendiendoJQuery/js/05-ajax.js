$(document).ready(function(){

    // Load Realizar una petticion Ajax
    //$("#datos").load("https://reqres.in/");

    // Get y Post

    $.get("https://reqres.in/api/users",{page: 2},function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");            
        });
    });
    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario ={
            name : $('input[name="name"]').val(),
            job: $('input[name="job"]').val()
        }
        /*$.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });*/

        $.ajax({
            type : 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando Usuario");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            timeout: 100
        });
        return false;
    });

});