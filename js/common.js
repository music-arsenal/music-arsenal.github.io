/*
* основной js файл
**/
$(document).ready(function () {
    var Menu = $('.menu');
    var SubMenu = $('.submenu');
    Menu.find('li').click(function () {
        Menu.find('li').removeClass('active');
       $(this).addClass('active');
        SubMenu.find('li').click(function () {
           SubMenu.find('li').removeClass('activ');
            $(this).addClass('activ');
        });
    });

    $('.one-time').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

});
