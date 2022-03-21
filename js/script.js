
window.addEventListener('DOMContentLoaded', () => {
    //menu
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //     });
    // });

    //show submenu
$('.menu__item').each(function(i) {
  $(this).mouseenter(function(e) {
      $('.submenu').eq(i).addClass('submenu_active');
      });
  $(this).mouseleave(function(e) {
    $('.submenu').eq(i).removeClass('submenu_active');
    });
  });

  $('.submenu').each(function(i) {
    $(this).mouseenter(function(e) {
        $('.submenu').eq(i).addClass('submenu_active');
        });
    $(this).mouseleave(function(e) {
      $('.submenu').eq(i).removeClass('submenu_active');
      });
    });

     //modal 
    
    $('#consult').on('click', function(){
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks').fadeOut();
    });

    

});