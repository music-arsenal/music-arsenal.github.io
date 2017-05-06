/*
* основной js файл
**/
$(document).ready(function () {
    var Navigation = $('.navigation');
    Navigation.find('ul li').click(function () {
        Navigation.find('ul li').removeClass('active');
       $(this).addClass('active');
    });

});
