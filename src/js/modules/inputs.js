// /**
//  * Все обработчики в данной файле реализуют только общее поведение элементов:
//  * input
//  * Стилизуют
//  * Обрабатывют поведение
//  * Формируют сообщение об ошибке
//  *
//  * Не выполняет:
//  * передачу значений в другие скрипты,
//  * не обрабатывает данные для подсчета чего-либо,
//  * не хранит данные,
//  */

const handlerInputs = (function() {

  /**
   * @param _inputs - коллекция инпутов
   */
  const _inputs = document.querySelectorAll('.input');

  _inputs.forEach(item => {
    // в сообщении об ошибке (не выбран ни один пункт) записываем текст из input
    let currentText = item.getAttribute('placeholder');
    let error = item.nextElementSibling;
    error.querySelector('.error-no-selected__message-text').innerText = currentText;
  });
  /**
   * showErrorsInput() - показывает ошибку на инпуте
   * Принимает input на котором необходимо показать ошибку
   * Если input в фокусе снимает ошибку
   */
  function showErrorsInput(input) {
    if (input.matches('.input')) {
      let error = input.nextElementSibling;

      input.onfocus = function() {
        input.classList.remove('error-no-selected');
        error.style.display = 'none';
      };

      input.classList.add('error-no-selected');
      error.style.display = 'flex';
    } else {
      console.log('Переданный элемент не .input');
    }
  }

  // showErrorsInput передаем функию для использования внешними скриптами
  return {
    showErrorsInput
  };
})();
