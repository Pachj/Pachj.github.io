$(document).ready(function () {
    $(window).resize(function () {
        if ($(this).width() <= 768) {
/*            $("nav").removeClass("navbar-big-device").addClass("navbar-small-device");
            $("h1").removeClass("h1-big-device").addClass("h1-small-device");*/
            $("h2").removeClass("h2-big-device").addClass("h2-small-device");  
            $("p").removeClass("p-big-device").addClass("p-small-device");                   
        }
        else if ($(this).width() > 768) {
/*            $( "nav" ).removeClass( "navbar-small-device" ).addClass( "navbar-big-device" );
            $("h1").removeClass("h1-small-device").addClass("h1-big-device");*/
            $("h2").removeClass("h2-small-device").addClass("h2-big-device"); 
            $("p").removeClass("p-small-device").addClass("p-big-device");           
        }
    })
});