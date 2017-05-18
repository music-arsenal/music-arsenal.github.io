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

$('.brend').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

/*tabs тестируем новый метод табов*/


$(function() {

  $('ul.tabs-caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      console.log(this);
//      .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });

});


$('.closeout-tools').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


});



