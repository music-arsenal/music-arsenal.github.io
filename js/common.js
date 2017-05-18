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



$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

/*tabs*/
    var tabs = $('.content_tabs');
    tabs.find('ul li').click( function() {
        tabs.find('ul li').removeClass('tab_active');
        $(this).addClass('tab_active');
        console.log(this);
    } );



});



