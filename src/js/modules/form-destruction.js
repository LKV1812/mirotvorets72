import {handlerInputs} from '../modules/inputs';
import {sendFormOrder} from '../modules/ajax';

export const formDestruction = function(form){
  'use strict';

  form.addEventListener('submit', sendForm);

  /**
   * Отправляет форму через ajax
   * @param {*} event данные о событии submit
   * Если форма прошла валидацию отправляем ее
   * Если не прошла return
   */
  function sendForm(event) {
    event.preventDefault();
    let resultValidate = formValidate(event.target);

    if (resultValidate) {
      // для отпарвки запускаем модуль modules/ajax.js
      sendFormOrder.sendRequest(event, event.target);
    } else {return;}
  }

  /**
   * formValidate() валидирует форму на заполненость
   * @param {*} form - форма, которую будем валидировать
   * @var {} selects - все поля select в форме
   * @var {} inputs - все поля input в форме
   * @var {bool} resultValidate - результат валидации
   * Проверяем все поля на заполненость
   * Если поле не заполнено, показываем на нем ошибку
   * Если выбранный тип услуги не "прием сырья", скрываем select`ы "тип сырья" и "как сложено" под маской, не валидируем их
   */
  function formValidate(form) {
    const inputs = form.querySelectorAll('.input');
    let resultValidate = true;

    inputs.forEach(item => {
      if (item.matches('.tel-field') && item.value.length !== 18) {
        // используем модуль modules/inputs.js
        handlerInputs.showErrorsInput(item);
        resultValidate = false;
      } else if (item.value == '') {
        // используем модуль modules/inputs.js
        handlerInputs.showErrorsInput(item);
        resultValidate = false;
      }
    });

    return resultValidate;
  }
};
