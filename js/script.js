document.addEventListener("DOMContentLoaded", function(event) {
    
   

  //slider rew
    var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        // spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        //   autoHeight: true,
          breakpoints: {
            300: {
                slidesPerView: 1,
            },
            525: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            }
          }
      });

     

      //tabs
      
        $(function() {
          
          $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
          });
          
        });
      



  });