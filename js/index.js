$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: true,
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $(window).scroll(function(){
        if($(window).scrollTop()>600){
            $('nav').removeClass('transparent');
            $('nav').addClass('indigo');
            $('nav').addClass('darken-4');
        }
        else{
            $('nav').removeClass('indigo');
            $('nav').addClass('transparent');
            $('nav').addClass('darken-4');
        }
    });
    $('.emailIcon').click(function($e) {
        $e.preventDefault();
        M.toast({html: 'Email client opened!',classes: 'indigo darken-4 rounded'});
    });
    $('button').click(function($e) {
        $e.preventDefault();
        M.toast({html: 'Message sent',classes: 'indigo darken-4 rounded'});
    });
    $('.halfway-fab').click(function($e) {
        $e.preventDefault();
        var toastHTML = '<span>Meal successfully added to favourites</span><button class="btn-flat toast-action">Undo</button>';
        M.toast({html: toastHTML,classes: 'indigo darken-4 rounded'});
    });
});