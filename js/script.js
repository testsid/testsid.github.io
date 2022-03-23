
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

    //calc 
    let btn = document.getElementById('calcTrigger');

    btn.addEventListener('click', function(){
      let mes = document.getElementById('mes').value,
          spec = document.getElementById('spec').value,
          expenses = document.getElementById('expenses').value,
          volume = document.getElementById('volume').value,
          ostatki = document.getElementById('ostatki').value,
          result = document.querySelector('.calc__result');

      //создаем таблицу
      let table = document.createElement('div'),
          tableText1 = document.createElement('div'),
          tableCost = document.createElement('div'),
          tableText2 = document.createElement('div'),
          tableCost2 = document.createElement('div'),
          tableText3 = document.createElement('div'),
          tableVirabotka = document.createElement('div'),
          tableCostResult = spec*mes*expenses,
          tableCost2Result = (tableCostResult/volume).toFixed(2),
          tableVirabotkaResult = (volume/spec/mes).toFixed(0);


      //добавляем классы созданным элементам
      table.classList.add('table'); 
      tableText1.classList.add('table__text');
      tableCost.classList.add('table__numbers');
      tableText2.classList.add('table__text');
      tableCost2.classList.add('table__numbers');
      tableText3.classList.add('table__text');
      tableVirabotka.classList.add('table__numbers');

      //заполняем таблицу
      tableText1.textContent = 'За указанный период стоимость затрат на комплекс оформления исполнительной документации соствляет';
      tableText2.textContent = 'Стоимость 1 м3 составляет';
      tableText3.textContent = 'Средняя выработка одного специалиста в месяц составляет';
      tableCost.innerHTML = tableCostResult;
      tableCost2.innerHTML = tableCost2Result;
      tableVirabotka.innerHTML = tableVirabotkaResult;
      

      //выводим таблицу
      result.appendChild(table); 
      table.appendChild(tableText1);
      table.appendChild(tableCost);
      table.appendChild(tableText2);
      table.appendChild(tableCost2);
      table.appendChild(tableText3);
      table.appendChild(tableVirabotka);

      //условие для прогноза

      if (ostatki > 0) {
        console.log('ok');
        //создаем прогнозную таблицу
        let prognoz = document.createElement('div'), 
            table2 = document.createElement('div'),
            table2Text1 = document.createElement('div'),
            table2Cost = document.createElement('div'),
            table2Text2 = document.createElement('div'),
            table2Cost2 = document.createElement('div');

        //добавляем классы созданным элементам
            prognoz.classList.add('win__title');
            table2.classList.add('table'); 
            table2Text1.classList.add('table__text');
            table2Cost.classList.add('table__numbers');
            table2Text2.classList.add('table__text');
            table2Cost2.classList.add('table__numbers');

        //заполняем таблицу
            prognoz.textContent = 'Прогноз';
            table2Text1.textContent = 'стоимости оставшегося объема работ составляет';
            table2Text2.textContent = 'временных затрат (ед.изм 1 месяц)';
            table2Cost.innerHTML = tableCost2Result*ostatki;
            table2Cost2.innerHTML = (ostatki/tableVirabotkaResult/spec).toFixed(2);

        //выводим таблицу
            result.appendChild(prognoz); 
            result.appendChild(table2); 
            table2.appendChild(table2Text1);
            table2.appendChild(table2Cost);
            table2.appendChild(table2Text2);
            table2.appendChild(table2Cost2);
      } 
      
    });

    //serv modal
    $('.serv__item').each(function(i) {
      $(this).on('click', function() {
        $('.overlay').fadeIn();
        $('.serv__modal').eq(i).fadeIn();
        $('.serv__modal__close, .overlay, .serv__btn').on('click', function() {
          $('.serv__modal, .overlay').fadeOut();
        });
      });
    });

    $('.serv__item_menu').each(function(i) {
      $(this).on('click', function() {
        $('.submenu').removeClass('submenu_active');
        $('.overlay').fadeIn();
        $('.serv__modal').eq(i).fadeIn();
        $('.serv__modal__close, .overlay, .serv__btn').on('click', function() {
          $('.serv__modal, .overlay').fadeOut();
        });
      });
    });


    

});