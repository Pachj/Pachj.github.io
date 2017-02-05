$(document).ready(function () {
    $(window).resize(function () {
        if ($(this).width() <= 768) {

            /*$("nav").removeClass("navbar-big-device").addClass("navbar-small-device");
            $("h1").removeClass("h1-big-device").addClass("h1-small-device");*/            
        }
        else if ($(this).width() > 768) {
            /*$( "nav" ).removeClass( "navbar-small-device" ).addClass( "navbar-big-device" );
            $("h1").removeClass("h1-small-device").addClass("h1-big-device");*/
        }
    })
});