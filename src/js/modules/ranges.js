const ranges = (function() {
  'use strict';

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
  // const formatter = new Intl.NumberFormat('ru');

  range.forEach(item => {
    let parent = item.closest('.range-wrap');
    let outputCurrentValue = parent.querySelector('.range__output-current-value-input');

    item.addEventListener('input', function() {
      outputCurrentValue.value = this.value
    });

    outputCurrentValue.addEventListener('input', function() {
      item.value = this.value;
    });

    outputCurrentValue.addEventListener('focus', function() {
      this.value = '';
    });

    outputCurrentValue.addEventListener('blur', function() {
      this.value = item.value;
    });
  });
})();
