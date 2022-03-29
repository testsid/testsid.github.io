
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

    //modal contacts
    $('#contacts').on('click', function(){
      $('.modal__contacts, .overlay').fadeIn();
    });
      $('.modal__contacts__close, .overlay').on('click', function(){
        $('.modal__contacts, .overlay').fadeOut();
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


    //calc 
    let btn = document.getElementById('calcTrigger');
    let btn2 = document.getElementById('calcTrigger2');

    btn.addEventListener('click', function(){
      let mes = document.getElementById('mes').value,
          spec = document.getElementById('spec').value,
          expenses = document.getElementById('expenses').value,
          volume = document.getElementById('volume').value,
          ostatki = document.getElementById('ostatki').value,
          slogan = document.querySelector('.calc__slogan'),
          result = document.querySelector('.calc__result'); //нужно для того, чтобы вставить таблицу в этот элемент

      //создаем таблицу
      let table = document.createElement('div'),
          tableText1 = document.createElement('div'),
          tableCost = document.createElement('div'),
          tableText2 = document.createElement('div'),
          tableCost2 = document.createElement('div'),
          tableText3 = document.createElement('div'),
          tableVirabotka = document.createElement('div'),
          tableEd1 = document.createElement('div'),
          tableEd2 = document.createElement('div'),
          tableEd3 = document.createElement('div'),
          tableCostResult = spec*mes*expenses,
          tableCost2Result = (tableCostResult/volume),
          tableVirabotkaResult = (volume/spec/mes).toFixed(2);
          



      //добавляем классы созданным элементам
      table.classList.add('table'); 
      tableText1.classList.add('table__text');
      tableCost.classList.add('table__numbers');
      tableText2.classList.add('table__text');
      tableCost2.classList.add('table__numbers');
      tableText3.classList.add('table__text');
      tableVirabotka.classList.add('table__numbers');
      tableEd1.classList.add('table__ed');
      tableEd2.classList.add('table__ed');
      tableEd3.classList.add('table__ed');

      //заполняем таблицу
      tableText1.textContent = 'За указанный период стоимость затрат соствляет';
      tableText2.textContent = 'Стоимость 1 единицы (м3, тн., шт.) составляет';
      tableText3.textContent = 'Средняя выработка одного специалиста в месяц составляет';
      tableCost.innerHTML = (tableCostResult).toLocaleString('ru'); //делим числа на разряды
      tableCost2.innerHTML = (tableCost2Result).toLocaleString('ru');
      tableVirabotka.innerHTML = tableVirabotkaResult;
      tableEd1.innerHTML = 'руб.';
      tableEd2.innerHTML = 'руб.';
      tableEd3.innerHTML = 'ед./чел.';
      

      //выводим таблицу
      result.appendChild(table); 
      table.appendChild(tableText1);
      table.appendChild(tableCost);
      table.appendChild(tableEd1);
      table.appendChild(tableText2);
      table.appendChild(tableCost2);
      table.appendChild(tableEd2);
      table.appendChild(tableText3);
      table.appendChild(tableVirabotka);
      table.appendChild(tableEd3);

      //условие для прогноза

      if (ostatki > 0) {
        
        //создаем прогнозную таблицу
        let prognoz = document.createElement('div'), 
            table2 = document.createElement('div'),
            table2Text1 = document.createElement('div'),
            table2Cost = document.createElement('div'),
            table2Text2 = document.createElement('div'),
            table2Cost2 = document.createElement('div'),
            tableEd4 = document.createElement('div'),
            tableEd5 = document.createElement('div');

        //добавляем классы созданным элементам
            prognoz.classList.add('prognoz__title');
            table2.classList.add('table2'); 
            table2Text1.classList.add('table__text');
            table2Cost.classList.add('table__numbers');
            table2Text2.classList.add('table__text');
            table2Cost2.classList.add('table__numbers');
            tableEd4.classList.add('table__ed');
            tableEd5.classList.add('table__ed');

        //заполняем таблицу
            prognoz.textContent = 'Прогноз будущих затрат';
            table2Text1.textContent = 'Стоимость оставшегося объема работ составляет';
            table2Text2.textContent = 'Оставшееся время на формирование и сдачу в архив составляет';
            table2Cost.innerHTML = (tableCost2Result*ostatki).toLocaleString('ru');
            table2Cost2.innerHTML = (ostatki/tableVirabotkaResult/spec).toFixed(2);
            tableEd4.innerHTML = 'руб.';
            tableEd5.innerHTML = 'месяцев';

        //выводим таблицу
            result.appendChild(prognoz); 
            result.appendChild(table2); 
            table2.appendChild(table2Text1);
            table2.appendChild(table2Cost);
            table2.appendChild(tableEd4);
            table2.appendChild(table2Text2);
            table2.appendChild(table2Cost2);
            table2.appendChild(tableEd5);
            
      } 
      btn.classList.add('remove');
      btn2.classList.remove('remove');
      slogan.classList.remove('remove');

    });
    btn2.addEventListener('click', function(){
      document.querySelector('.table').remove(); //удаляем таблицу с ранее введенными данными
      if (document.querySelectorAll('.table2').length > 0) { //проверяем, была ли прогнозная таблица в редыдущем расчете
        document.querySelector('.table2').remove();
        document.querySelector('.prognoz__title').remove();
      }
      
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
          tableEd1 = document.createElement('div'),
          tableEd2 = document.createElement('div'),
          tableEd3 = document.createElement('div'),
          tableCostResult = spec*mes*expenses,
          tableCost2Result = (tableCostResult/volume),
          tableVirabotkaResult = (volume/spec/mes).toFixed(2);
         


      //добавляем классы созданным элементам
      table.classList.add('table'); 
      tableText1.classList.add('table__text');
      tableCost.classList.add('table__numbers');
      tableText2.classList.add('table__text');
      tableCost2.classList.add('table__numbers');
      tableText3.classList.add('table__text');
      tableVirabotka.classList.add('table__numbers');
      tableEd1.classList.add('table__ed');
      tableEd2.classList.add('table__ed');
      tableEd3.classList.add('table__ed');

      //заполняем таблицу
      tableText1.textContent = 'За указанный период стоимость работ соствляет';
      tableText2.textContent = 'Стоимость 1 единицы (м3, тн., шт.) составляет';
      tableText3.textContent = 'Средняя выработка одного специалиста в месяц составляет';
      tableCost.innerHTML = (tableCostResult).toLocaleString('ru');
      tableCost2.innerHTML = (tableCost2Result).toLocaleString('ru');
      tableVirabotka.innerHTML = tableVirabotkaResult;
      tableEd1.innerHTML = 'руб.';
      tableEd2.innerHTML = 'руб.';
      tableEd3.innerHTML = 'ед./чел.';
      

      //выводим таблицу
      result.appendChild(table); 
      table.appendChild(tableText1);
      table.appendChild(tableCost);
      table.appendChild(tableEd1);
      table.appendChild(tableText2);
      table.appendChild(tableCost2);
      table.appendChild(tableEd2);
      table.appendChild(tableText3);
      table.appendChild(tableVirabotka);
      table.appendChild(tableEd3);

      //условие для прогноза

      if (ostatki > 0) {
        
        //создаем прогнозную таблицу
        let prognoz = document.createElement('div'), 
            table2 = document.createElement('div'),
            table2Text1 = document.createElement('div'),
            table2Cost = document.createElement('div'),
            table2Text2 = document.createElement('div'),
            table2Cost2 = document.createElement('div'),
            tableEd4 = document.createElement('div'),
            tableEd5 = document.createElement('div');

        //добавляем классы созданным элементам
            prognoz.classList.add('prognoz__title');
            table2.classList.add('table2'); 
            table2Text1.classList.add('table__text');
            table2Cost.classList.add('table__numbers');
            table2Text2.classList.add('table__text');
            table2Cost2.classList.add('table__numbers');
            tableEd4.classList.add('table__ed');
            tableEd5.classList.add('table__ed');

        //заполняем таблицу
            prognoz.textContent = 'Прогноз будущих затрат';
            table2Text1.textContent = 'Стоимость оставшегося объема работ составляет';
            table2Text2.textContent = 'Оставшееся время на формирование и сдачу в архив составляет';
            table2Cost.innerHTML = (tableCost2Result*ostatki).toLocaleString('ru');
            table2Cost2.innerHTML = (ostatki/tableVirabotkaResult/spec).toFixed(2);
            tableEd4.innerHTML = 'руб.';
            tableEd5.innerHTML = 'месяцев';

        //выводим таблицу
            result.appendChild(prognoz); 
            result.appendChild(table2); 
            table2.appendChild(table2Text1);
            table2.appendChild(table2Cost);
            table2.appendChild(tableEd4);
            table2.appendChild(table2Text2);
            table2.appendChild(table2Cost2);
            table2.appendChild(tableEd5);
      } 
      

    });

    

});
//единицы измерения в калькуляторе
$('#tonna, #lini, #edin').hide();
function price(obj) {
  if(obj.value == "tonna") {
    $('#metr').hide();
    $('#lini').hide();
    $('#edin').hide();
    $('#tonna').show();
  }
  
  if(obj.value == "lini") {
    $('#metr').hide();
    $('#tonna').hide();
    $('#edin').hide();
    $('#lini').show();
    
  }
  if(obj.value == "edin") {
    $('#metr').hide();
    $('#tonna').hide();
    $('#lini').hide();
    $('#edin').show();
  }
  if(obj.value == "metr") {
    $('#edin').hide();
    $('#tonna').hide();
    $('#lini').hide();
    $('#metr').show();
  }
  
  
}