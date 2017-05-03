$(document).ready(function() {
    $('head').append('<style>.nav li:hover ul { display: none; }</style>');
    
    $('.submenu-toggle').click(function() {
        $(this).next().toggle(500);
        $(this).trigger('blur');
    });
});