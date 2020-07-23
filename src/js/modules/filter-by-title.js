/**
 * filterByTitle() - фильтрует контент по заголовкам
 * @param {DOM} titles - заголвки
 * @param {DOM} asideFilter - родительский сайдбар с кнопками фильтра
 * @param {DOM} select - фильтр в виде select'a
 *
 * По клику на кнопку фильтра внутри сайдбара, находит контент с идентичным заголовком.
 */

export function filterByTitle(titles, asideFilter, select) {
  titles.forEach(item => {
    createsButtonsInFilter(getSubstring(item), asideFilter, select);
  });

  let buttonsFilter = asideFilter.querySelectorAll('.button-filter');
  let activeButtonsFilter = buttonsFilter[0];
  activeButtonsFilter.classList.add('button-filter-active');

  let activeFilterContent = titles[0].closest('.vacancy-body');
  activeFilterContent.classList.add('vacancy-body--is-active');

  buttonsFilter.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      for (let title of titles) {
        if (e.target.outerText == getSubstring(title) && title.closest('.vacancy-body') != activeFilterContent) {
          activeButtonsFilter = setActiveButton(activeButtonsFilter, e.target);
          activeFilterContent = showsContent(activeFilterContent, title.closest('.vacancy-body'));
        }
      }
    });
  });

  if (select) {
    let optionsFilter = select.querySelectorAll('.select__option');
    optionsFilter.forEach(option => {
      option.addEventListener('click', function(e) {
        for (let title of titles) {
          if (option.outerText == getSubstring(title)) {
            activeFilterContent = showsContent(activeFilterContent, title.closest('.vacancy-body'));
            // Меняем активную кнопку, если вакансия была выбрана в мобильном режиме на select'e
            for (let button of buttonsFilter) {
              if (option.outerText == button.outerText) {
                activeButtonsFilter = setActiveButton(activeButtonsFilter, button);
              }
            }
          }
        }
      });
    });
  }
}

/**
 * getSubstring() - получает подстроку в заголовке
 * @param {DOM} elem - элемент в котором получает подстроку
 * Возвращает подстроку
 */
export function getSubstring(elem) {
  let str = elem.outerText;
  let strStartPos = str.indexOf('«') + 1;
  let strEndPos = str.indexOf('»');

  return str.slice(strStartPos, strEndPos);
}

/**
 * createsButtonsInFilter() - создает кнопку внутри фильтра
 * @param {DOM} textButton - текст для кнопки
 * @param {DOM} asideFilter - родитель для создаваемой кнопки
 * @param {DOM} select - родитель option(мобильный фильтр)
 */
export function createsButtonsInFilter(textButton, asideFilter, select) {
  let buttonFilter = document.createElement('a');
  buttonFilter.setAttribute('href', '#');
  buttonFilter.setAttribute('class', 'button-filter');
  buttonFilter.innerText = textButton;
  asideFilter.appendChild(buttonFilter);

  if (select) {
    let optionInSelectFilter = document.createElement('div');
    optionInSelectFilter.setAttribute('class', 'select__option');
    optionInSelectFilter.innerText = textButton;
    select.querySelector('.select__wrap-only-option').appendChild(optionInSelectFilter);
  }
}

/**
 * setActiveButton() - применяет стили к активной кнопке, возвращает ее.
 * @param {DOM} oldButton - старая активная кнопка
 * @param {DOM} newButton - новая активная кнопка
 */
export function setActiveButton(oldButton, newButton) {
  oldButton.classList.remove('button-filter-active');
  newButton.classList.add('button-filter-active');
  return newButton;
}

/**
 * showsContent() - показывет выбранный контент, возвращает его
 * @param {DOM} oldContent - старыый блок с контентом, прячем
 * @param {DOM} newContent - новый блок с контентом, показываем
 */
export function showsContent(oldContent, newContent) {
  oldContent.classList.remove('vacancy-body--is-active');
  newContent.classList.add('vacancy-body--is-active');

  return newContent;
}
