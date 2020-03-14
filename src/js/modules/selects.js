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
const customSelects = (function() {
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
    // в сообщении об ошибке (не выбран ни один пункт) записываем текст из заголовка select`a
    let currentText = item.querySelector('.select-current').innerText;
    item.querySelector('.error-no-selected__message-text').innerText = currentText;

    item.addEventListener("blur", _outFocus);
  });

  _selectOption.forEach(item => {
    item.addEventListener("click", _setSelected);
  });

  function _selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function _setSelected() {
    let text = this.innerText,
        attributeNameValue = this.getAttribute("name"),
        select = this.closest(".select"),
        currentSelect = select.querySelector(".select-current");

    currentSelect.setAttribute('name', attributeNameValue);
    currentSelect.innerText = text;

    select.classList.remove("is-active");
  }

  function _outFocus() {
    let thisSelect = this.closest(".select");
    thisSelect.classList.remove("is-active");
  }

  function showErrorsSelect(select) {
    if (select.matches('.select')) {
      let selectHeader = select.querySelector('.select__header');

      select.onfocus = function() {
        selectHeader.classList.remove('error-no-selected');
        selectHeader.querySelector('.error-no-selected__message').style.display = 'none';
      };

      selectHeader.classList.add('error-no-selected');
      selectHeader.querySelector('.error-no-selected__message').style.display = 'flex';
    } else {
      console.log('Переданный элемент не .select')
    }

  }

  return {
    showErrorsSelect
  };
}());
