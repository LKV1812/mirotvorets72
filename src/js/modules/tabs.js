(function() {
  'use strict';
  /**@param {DOM[]} tabs коллекция всех табов на сайте*/
  let tabs = document.querySelectorAll('.tabs');

  /**
  * на все табы вешаем обработчики
  *
  * @param {number} currentIndexActiveItem индекс таба и индекс страницы tab__content (начальное значение 0, что соответсвует перевому, по умолчанию активному табу)
  * @param {DOM[]} tabsHeaderItems коллекция табов текущего tabs[item]
  * @param {DOM[]} tabsContentItems коллекция страниц текущего tabs[item]
  * По клику определяем индекс элемента, на котором произошло событие
  * Записываем его индекс в переменную currentIndexActiveItem
  * Делаем активным элемент на котором произошел клик (item[currentIndexActiveItem])
  **/
  tabs.forEach(item => {
    let currentIndexActiveItem = 0;
    let tabsHeaderItems = item.querySelectorAll('.tabs__header-item');
    let tabsContentItems = item.querySelectorAll('.tabs__content');

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
