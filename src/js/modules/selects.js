/**
 * Все обработчики в данной файле реализуют только общее поведение элементов:
 * Select
 * Стилизуют
 * Обрабатывют поведение
 * Формируют сообщение об ошибке
 *
 * Не выполняет:
 * передачу значений в другие скрипты,
 * не обрабатывает данные для подсчета чего-либо,
 * не хранит данные,
 */
export const customSelects = (function() {
  'use strict';

  /**
   * Обработчик пользовательских селектов
   *
   * @param {DOM[]} _select - коллекция всех селектов на сайте
   * @param {DOM[]} _selectHeader - шапки селектов
   * @param {DOM[]} _selectOption - коллекция тел внутри селектов, с вариантами выбора (option)
   *
   * handlers:
   * _selectToggle - по клику на селекте активирует его
   * _outFocus - при потере фокуса на селекте закрваем его
   * _setSelected - по клику на option устанавливает его как выбранный и устанавливает его атрибут [this.name="this.value"]
   */
  let _select = document.querySelectorAll(".select");
  let _selectHeader = document.querySelectorAll(".select__header");
  let _selectOption = document.querySelectorAll(".select__option");

  _selectHeader.forEach(item => {
    item.addEventListener("click", _selectToggle);
  });

  _select.forEach(item => {
    item.addEventListener("blur", _outFocus);
  });

  _selectOption.forEach(item => {
    item.addEventListener("click", _setSelected);
  });

  function _selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  /**
   * _setSelected() Устанавливает в select выбранный элемент из option
   * из option получаем текст и атрибут name
   * присваиваем полученные значения select`у в .select-current
   * закрываем выпадющий список
   */
  function _setSelected() {
    let text = this.innerText,
        attributeNameValue = this.getAttribute("name"),
        select = this.closest(".select"),
        currentSelect = select.querySelector(".select-current");

    currentSelect.setAttribute('name', attributeNameValue);
    currentSelect.innerText = text;

    select.classList.remove("is-active");
  }

  // При потере фокуса закрываем выпадающий список
  function _outFocus() {
    let thisSelect = this.closest(".select");
    thisSelect.classList.remove("is-active");
  }

  /**
   * showErrorsSelect() Показывает ошибку на селекте
   * @param {*} select элемент на котором надо показать ошибку
   */
  function showErrorsSelect(select) {
    if (select.matches('.select')) {
      let selectHeader = select.querySelector('.select__header');
      // в сообщении об ошибке (не выбран ни один пункт) записываем текст из заголовка select`a
      let currentText = select.querySelector('.select-current').innerText;
      select.querySelector('.error-no-selected__message-text').innerText = currentText;

      select.onfocus = function() {
        selectHeader.classList.remove('error-no-selected');
        selectHeader.querySelector('.error-no-selected__message').style.display = 'none';
      };

      selectHeader.classList.add('error-no-selected');
      selectHeader.querySelector('.error-no-selected__message').style.display = 'flex';
    } else {
      console.log('Переданный элемент не .select');
    }
  }

  /**
   * hideErrorsSelect() скрывает ошибку на селекте
   * @param {*} select
   */
  function hideErrorsSelect(select) {
    if (select.matches('.select')) {
      let selectHeader = select.querySelector('.select__header');

      selectHeader.classList.remove('error-no-selected');
      selectHeader.querySelector('.error-no-selected__message').style.display = 'none';
    } else {
      console.log('Переданный элемент не .select');
    }
  }

  let setSelectedProduct = function (productName, forSelect) {

    let selectedOption = forSelect.querySelector(`.select__option[name=${productName}]`);
    let text = selectedOption.innerText;
    let attributeNameValue = selectedOption.getAttribute("name");
    let select = selectedOption.closest(".select");
    let currentSelect = select.querySelector(".select-current");

    currentSelect.setAttribute('name', attributeNameValue);
    currentSelect.innerText = text;

    select.classList.remove("is-active");
  };

  return {
    showErrorsSelect,
    hideErrorsSelect,
    setSelectedProduct
  };
}());
