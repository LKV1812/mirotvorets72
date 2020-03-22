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

const handlerTextarea = (function() {

  /**
   * @param _textarea - коллекция инпутов
   */
  const _textarea = document.querySelectorAll('.textarea');

  /**
   * showErrorsTextarea() - показывает ошибку на инпуте
   * Принимает textarea на котором необходимо показать ошибку
   * Если textarea в фокусе снимает ошибку
   */
  function showErrorsTextarea(textarea) {
    if (textarea.matches('.textarea')) {
      let error = textarea.nextElementSibling;
      let currentText = textarea.getAttribute('placeholder');
      error.querySelector('.error-no-selected__message-text').innerText = currentText;

      textarea.onfocus = function() {
        textarea.classList.remove('error-no-selected');
        error.style.display = 'none';
      };

      textarea.classList.add('error-no-selected');
      error.style.display = 'flex';
    } else {
      console.log('Переданный элемент не .Textarea');
    }
  }

  // showErrorstextarea передаем функию для использования внешними скриптами
  return {
    showErrorsTextarea
  };
})();
