$(document).ready(function () {
    $(window).resize(function () {
        if ($(this).width() <= 768) {
/*            $("nav").removeClass("navbar-big-device").addClass("navbar-small-device");
            $("h1").removeClass("h1-big-device").addClass("h1-small-device");*/
            $("h2").removeClass("h2-big-device").addClass("h2-small-device");  
            /*$("#showcase-image-2").prepend("<div class='row'>");
            $("#showcase-text-2").append("</div>");*/                     
        }
        else if ($(this).width() > 768) {
/*            $( "nav" ).removeClass( "navbar-small-device" ).addClass( "navbar-big-device" );
            $("h1").removeClass("h1-small-device").addClass("h1-big-device");*/
            $("h2").removeClass("h2-small-device").addClass("h2-big-device");           
        }
    })
});