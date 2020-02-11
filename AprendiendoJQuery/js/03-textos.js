$(document).ready(function(){

    reloadList();

    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
            console.log($('#add_link').val());
            $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
            $('#add_link').val('');
            reloadList();
        });

});

function reloadList(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");
        that.attr('target','_blank');
        that.removeAttr();
        that.text(enlace);
    });
}