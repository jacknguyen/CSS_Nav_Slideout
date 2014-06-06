(function() {
    $('.menu-toggle').bind('click', function() {
        $('body').toggleClass('menu-open');
        $('.menu-toggle').toggleClass('menu-toggled');
    });
})();