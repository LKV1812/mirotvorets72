/**
 * Все обработчики в данной файле реализуют только общее поведение элементов:
 * Select`ы
 * Checkbox`ы
 * Range`ы
 * Стилизуют
 * Обрабатывют поведение
 * Формируют сообщение об ошибке, но не выводят их
 *
 * Не выполняет:
 * передачу значений в другие скрипты,
 * не обрабатывает данные для подсчета чего-либо,
 * не хранит данные,
 */
(function() {
  'use strict';

  /**
   * Обработчик пользовательских селектов
   *
   * @param {DOM[]} select - коллекция всех селектов на сайте
   * @param {DOM[]} selectHeader - шапки селектов
   * @param {DOM[]} selectOption - коллекция тел внутри селектов, с вариантами выбора (option)
   *
   * handlers:
   * selectToggle - по клику на селекте активирует его
   * outFocus - при потере фокуса на селекте закрваем его
   * setSelected - по клику на option устанавливает его как выбранный и устанавливает его атрибут [this.name="this.value"]
   */
  let handlerSelect = function() {
    let select = document.querySelectorAll(".select");
    let selectHeader = document.querySelectorAll(".select__header");
    let selectOption = document.querySelectorAll(".select__option");

    selectHeader.forEach(item => {
      item.addEventListener("click", selectToggle);
    });

    select.forEach(item => {
      // в сообщении об ошибке (не выбран ни один пункт) записываем текст из заголовка select`a
      let currentText = item.querySelector('.select-current').innerText;
      item.querySelector('.error-no-selected__message-text').innerText = currentText;

      item.addEventListener("blur", outFocus);
    });

    selectOption.forEach(item => {
      item.addEventListener("click", setSelected);
    });

    function selectToggle() {
      this.parentElement.classList.toggle("is-active");
    }

    function setSelected() {
      let text = this.innerText,
          attributeNameValue = this.getAttribute("name"),
          select = this.closest(".select"),
          currentSelect = select.querySelector(".select-current");

      currentSelect.setAttribute('name', attributeNameValue);
      currentSelect.innerText = text;

      select.classList.remove("is-active");
    }

    function outFocus() {
      let thisSelect = this.closest(".select");
      thisSelect.classList.remove("is-active");
    }

  };

  handlerSelect();

  /**
   * Обработчик checkbox - выбора типа доставки
   *
   * Методом forEach() на каждый item коллекции checkbox устанавливаем прослушку addEventListener()
   *
   * variables:
   * prevTextCheckbox - у каждого item`а = (checkbox) выбирает соседа перед checkbox
   * nextTextCheckbox - у каждого item`а = (checkbox) выбирает соседа после checkbox
   *
   * handlers:
   * Если checkbox.checked стилизуем соседа после
   * Если !checkbox.checked стилизуем соседа перед
   */
  let checkboxCalc = document.querySelectorAll('.checkbox-type-b');

  checkboxCalc.forEach(item => {
    let prevTextCheckbox = item.parentNode.previousElementSibling;
    let nextTextCheckbox = item.parentNode.nextElementSibling;

    item.addEventListener('change', function(){
      if (item.checked) {
        nextTextCheckbox.style.color = '#67af01';
        prevTextCheckbox.style.color = '#612228';
      }
      if (!item.checked) {
        nextTextCheckbox.style.color = '#612228';
        prevTextCheckbox.style.color = '#67af01';
      }
    });
  });

  /**
   * Обработчик range
   *
   * Методом forEach() на каждый item коллекции range устанавливаем прослушку addEventListener()
   *
   * variables:
   * range - коллекция всех range`ей на сайте
   * formatter - через конструктор задает красивый числовой формат с пробелами в разрядах
   * parent - родитель range`а
   * outputCurrentValue - блок в который выводится значение range`a
   * measureUnit - хранит aббревиатуру единицы измериния, которая прописана в HTML разметке
   *
   * handlers:
   * Значение range на котором произошло событие 'input', форматируем и выводим в outputCurrentValue
   */
  let range = document.querySelectorAll('.range');
  const formatter = new Intl.NumberFormat('ru');

  range.forEach(item => {
    let parent = item.closest('.range-wrap');
    let outputCurrentValue = parent.querySelector('.range__output-current-value');
    let measureUnit = outputCurrentValue.querySelector('span').innerText;

    item.addEventListener('input', function() {
      outputCurrentValue.innerHTML = formatter.format(this.value) + " " + measureUnit;
    });
  });

}());
