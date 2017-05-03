$(document).ready(function() {
    $('.nav-container').load('_navbar.html', function() {
        var activeLink = '.menu-' + $('.nav-container').attr('data-active');
        $(activeLink).addClass('active');    
        
        $('.submenu').click(function() {
            $(this).next().toggle(500);
            $(this).toggleClass('nav-mobile-highlight');
        });
    });
    $('.footer').load('_footer.html', function() {});
});