/*
* основной js файл
**/
$(document).ready(function () {
    var Menu = $('.menu');
    var SubMenu = $('.submenu');
    var LastMenu = $('.last-menu');
    Menu.find('li').click(function () {
        Menu.find('li').removeClass('active');
       $(this).addClass('active');
    });
      SubMenu.find('li').click(function () {
           SubMenu.find('li').removeClass('activ');
            $(this).addClass('activ');
        });
      LastMenu.find('li').click(function() {
         LastMenu.find('li').removeClass('activi');
          $(this).addClass('activi');
      });

    $('.one-time').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

});
