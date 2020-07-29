import {getSubstring} from './filter-by-title';

let parentVacancy = document.querySelector('.vacancy');
let responseButton = document.querySelector('.button-inpute-type-a[name="response-vacancy"]');
let inputProfession = document.querySelector('.input[name="profession"]');

responseButton.onclick = function() {
  setSelection(parentVacancy, '.vacancy-body.vacancy-body--is-active .vacancy-body__title', inputProfession);
};


export function setSelection(parent, desiredElem, toElem) {
  let text = getSubstring( parent.querySelector(desiredElem) );
  let responseSection = document.getElementById('responseSection');

  toElem.value = text;
  responseSection.scrollIntoView({behavior: "smooth"});
}
