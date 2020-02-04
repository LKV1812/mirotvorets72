(function() {
  'use strict';
  // коллекция всех табов на сайте
  let tabs = document.querySelectorAll('.tabs');

  /**
  * на все табы вешаем обработчики
  *
  * в переменной currentIndexActiveItem храним текущий индекс таба и показываемой страницы под ним
  * tabsHeaderItems коллекция табов
  * tabsContentItems коллекция страниц для табов
  * widthTabsHeaderItems ширина табов, расчитывается исходя из количества табов, через forEach присваиваем ширину каждому табу
  **/
  tabs.forEach(item => {
    let currentIndexActiveItem = 0;
    let tabsHeaderItems = item.querySelectorAll('.tabs__header-item');
    let tabsContentItems = item.querySelectorAll('.tabs__content');
    // let widthTabsHeaderItems = (100 / tabsHeaderItems.length) + '%';

    // tabsHeaderItems.forEach(item =>{
    //   item.style.width = widthTabsHeaderItems;
    // });

    /**
    * обработчик слушает событие клик на табе
    *
    * если событие происходит не на текущем элементе коллекции, индекс которого хранится в переменной currentIndexActiveItem, текущий таб и его страница делаем не активными
    * через forEach определм элемент на котором произошло событие, записываем его индекс в переменную currentIndexActiveItem.
    * таб-item на котором произошло событие, делаем активным и его страницу тоже
    **/
    item.addEventListener('click', function(event) {
      if (event.target != tabsHeaderItems[currentIndexActiveItem] && event.target.matches('.tabs__header-item')) {
        tabsHeaderItems[currentIndexActiveItem].classList.remove('tabs__header-item--active');
        tabsContentItems[currentIndexActiveItem].classList.remove('tabs__content--active');

        tabsHeaderItems.forEach((elem, index) => {
          if (elem == event.target) {
            currentIndexActiveItem = index;
            elem.classList.add('tabs__header-item--active');
            tabsContentItems[currentIndexActiveItem].classList.add('tabs__content--active');
          }
        });
      }
    });
  });
}());
