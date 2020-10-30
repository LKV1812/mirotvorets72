import {getSubstring} from './filter-by-title';

let parentVacancy = document.querySelector('.vacancy');
let responseButton = document.querySelector('.button-inpute-type-a[name="response-vacancy"]');
let inputProfession = document.querySelector('.input[name="profession"]');

responseButton.onclick = function() {
  setSelection(parentVacancy, '.vacancy-body.vacancy-body--is-active .vacancy-body__title', inputProfession);
};

/**
 * setSelection() - вычитывет строку с заголовоком вакансии и записывет подстроку в форму отклика, плавно прокручивает страницу до формы
 * @param {DOM} parent - родитель внутри которого ищем элемент со строкой
 * @param {DOM} desiredElem - элемент из которого вырезаем подстроку
 * @param {DOM} toElem - элемент в, который вставляем подстроку
 */
export function setSelection(parent, desiredElem, toElem) {
  let text = getSubstring( parent.querySelector(desiredElem) );
  let responseSection = document.getElementById('responseSection');

  toElem.value = text;
  responseSection.scrollIntoView({behavior: "smooth"});
}
