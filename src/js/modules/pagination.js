
/**
 * Переключает пагинацию
 *
 * @param {DOM} elem Родитель для пагинации
 * @param {DOM} notes коллекция записей, которые необходимо выводить на странице
 * @param {Number} numberNotesOnPage колличество записей на странице
 */
export function switchesPages (elem, notes, numberNotesOnPage) {
  let numberItemsPagination = Math.ceil(notes.length / numberNotesOnPage);
  let itemsPagination = createsElementsInPagination(elem, numberItemsPagination);
  let start = 0;
  let end = start + numberNotesOnPage;
  let activeNumberPage = itemsPagination[0];

  activeNumberPage.classList.add('pagination__item-active');
  showNotesOnPage(notes, start, end);

  itemsPagination.forEach(element => {
    element.addEventListener('click', function(e) {
      activeNumberPage.classList.remove('pagination__item-active');
      activeNumberPage = this;
      activeNumberPage.classList.add('pagination__item-active');
      let pageNumber = +this.innerText;
      start = (pageNumber - 1) * numberNotesOnPage;
      end = start + numberNotesOnPage;
      showNotesOnPage(notes, start, end);
    });
  });
}

/**
 * Создает элементы пагинации
 * Возвращает коллекцию созданных элементов
 *
 * @param {DOM} elem родительский элемент - пагинация
 * @param {*} numberItemsPagination количество элементов, которые неоходимо создать
 */
export function createsElementsInPagination(elem, numberItemsPagination) {
  let buttonPagination = document.createElement('button');
  buttonPagination.setAttribute('class', 'pagination__item');

  for (let i = 1; i <= numberItemsPagination; i++) {
    let buttonPagination = document.createElement('button');
    buttonPagination.setAttribute('class', 'pagination__item');
    buttonPagination.innerText = i;
    elem.appendChild(buttonPagination);
  }

  return elem.querySelectorAll('.pagination__item');
}

/**
 * Выводит записи на странице
 *
 * @param {DOM} notes - коллекция записей, которые необходимо выводить на странице
 * @param {Number} indexStart - с какой записи начинать вывод записей
 * @param {Number} indexEnd - на какой заканчивать, не включая последнюю
 */
export function showNotesOnPage(notes, indexStart, indexEnd) {
  let activeItem;
  notes.forEach( (item, index) => {
    if (index >= indexStart && index < indexEnd ) {
      item.style.display = 'flex';
      activeItem = item;
    } else {
      item.style.display = 'none';
    }
  });

  return activeItem;
}
