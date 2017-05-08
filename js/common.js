/*
* основной js файл
**/
$(document).ready(function () {
    var menu = $('.menu');
    menu.find('li').click(function () {
        menu.find('li').removeClass('active');
       $(this).addClass('active');
    });

    $('.one-time').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

});
