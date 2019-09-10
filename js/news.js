$(document).ready(function(){

    let windowH = $(window).height();
    $('.menu').css('height', windowH);

    $('.menu-toggle').click(function(){
        $('.menu').slideDown();
    });

    $('.menu__btn-close').click(function(){
        $('.menu').slideUp();
    });

    $('.go-top').find('.go-top__btn--go-top').click(function(e){
        e.preventDefault();
        let target = $(e.currentTarget).attr('href');
        let offset = $(target).offset();
        $('html, body').animate({scrollTop: offset.top});
    });

});