/**
 * Функция dropdownBlock открывает/закрывает выпадающий блок
 * Находит на странице все элементы с выпадающим блоком
 * По клику Открывает/закрывает его путем добаления/обнуления высоты выпадающего блока
 * Добавляет/убирает css-класс 'is-open'
 */

export let dropdownBlock = function() {
  let dropdownToggle = document.querySelectorAll('.dropdown-block');

  dropdownToggle.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      item.classList.toggle('is-open');

      let dropdownBody = item.querySelector('.dropdown-block__body');
      let dropdownContent = item.querySelector('.dropdown-block__content');

      if (item.matches('.is-open')) {
        dropdownBody.style.maxHeight = dropdownContent.clientHeight + 'px';
      } else {
        dropdownBody.style.maxHeight = 0;
      }
    });
  });
}();
