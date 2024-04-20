$(document).ready(function(){

    $('#menu-collapse-plataforma-experiencia h3').click(function(){
        if ($(this).next().is(':hidden')) { 
            $('#menu-collapse-plataforma-experiencia .collapsed-box').slideUp();
            $('#menu-collapse-plataforma-experiencia h3 i').removeClass('icon-rotate');
            
            $(this).next().slideDown(); 
            $(this).children().addClass('icon-rotate');   
        } else {
           $(this).next().slideUp();
           $(this).children().removeClass('icon-rotate');
        }
    });
    
});