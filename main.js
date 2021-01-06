// https://html-online.com/articles/animated-scroll-anchorid-function-jquery/
$(document).ready(function(){
    $( "a.scroll" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});

$('.submenu').click(function() {
    $(this).next().toggle(250);
});

$('#nav-mobile ul ul a').click(function() {
    $('.submenu').next().toggle(250); 
}); 