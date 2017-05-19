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




      $('.tabs .tabs-caption a').click(function(e) {
      var currentAttrValue = $(this).attr('href');
      $('.tabs ' + currentAttrValue).fadeIn(500).siblings().hide();
      $(this).parent('li').addClass('active').siblings().removeClass('active');
      e.preventDefault();
          console.log(this);
        $('.tab-content').find('.tab').removeClass('active');
        $('.tab-content').find('.tab').addClass('active');
      });


/*второй слайдер*/
$('.closeout-tools').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});


});



