$(function(){

    let $hamburgerWrapper = $('.hamburger-wrapper');
    let $tabpanelMenus = $('.tab-tab');
    let $tabpaneToggler = $('.tabpane-toggler');

    $hamburgerWrapper.on('click', function(e){
        e.preventDefault();
        $(this).children('.hamburger-menu').toggleClass('animate');

        $tabpanelMenus.slideToggle(1000);
    });

    $tabpaneToggler.on('click', function(){
        $tabpanelMenus.slideToggle(1000);
        $hamburgerWrapper.children('.hamburger-menu').toggleClass('animate');
    });

});