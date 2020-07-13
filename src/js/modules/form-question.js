import {handlerInputs} from './inputs';
import {handlerTextarea} from './textarea';
import {sendFormOrder} from './ajax';
import {hideModalWindow} from './modal-window';
import './phone-mask';

export const handlerFormQuestion = function(form, modalWindow) {
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
      let resultSendRequest = sendFormOrder.sendRequest(event, event.target);
      if (resultSendRequest) setTimeout(() => hideModalWindow(modalWindow), 2000);
    } else {return;}
  }

  /**
   * formValidate() валидирует форму на заполненость
   * @param {*} form - форма, которую будем валидировать
   * @var {} inputs - все поля input в форме
   * @var {bool} resultValidate - результат валидации
   * Проверяем все поля на заполненость
   * Если поле не заполнено, показываем на нем ошибку
   * Если выбранный тип услуги не "прием сырья", скрываем select`ы "тип сырья" и "как сложено" под маской, не валидируем их
   */
  function formValidate(form) {
    const inputs = form.querySelectorAll('.input');
    const textarea = form.querySelector('.textarea');
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

    if (textarea) {
      if (textarea.value == '') {
        // используем модуль modules/textarea.js
        handlerTextarea.showErrorsTextarea(textarea);
        resultValidate = false;
      }
    }

    return resultValidate;
  }
};
