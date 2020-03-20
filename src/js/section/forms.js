const formOrder = (function(){
  'use strict';

  const form = document.getElementById('indexGeneralOrder');

  // select`ы поля выбора, в зависимости от типа услуг будем скрывать или показвыать поля
  const selectedService = form.querySelector('#selectedService');
  const buyingMaterials = form.querySelector('#buyingMaterials');
  const packed = form.querySelector('#packed');

  selectedService.addEventListener('click', toggleMaskField);
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
    const selects = form.querySelectorAll('.select');
    const inputs = form.querySelectorAll('.input');
    let resultValidate = true;

    selects.forEach(item => {
      let selectCurrent = item.querySelector('.select-current');

      if (!selectCurrent.hasAttribute('name') && item.getAttribute('data-toggle-mask') == 'hide') {
        // используем модуль modules/selects.js
        customSelects.showErrorsSelect(item);
        resultValidate = false;
      }
    });

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

  /**
   * toggleMaskField() включает маску(прячет поля)
   * Если "тип услуги" не "прием сырья"
   * Иначе снимает маску
   */
  function toggleMaskField() {
    let selectCurrent = selectedService.querySelector('.select-current');

    if (!selectCurrent.hasAttribute('name') || selectCurrent.matches('[name="buying-materials"]')) {
      buyingMaterials.querySelector('.mask-hide-field').style.display = 'none';
      packed.querySelector('.mask-hide-field').style.display = 'none';
      buyingMaterials.dataset.toggleMask = 'hide';
      packed.dataset.toggleMask = 'hide';
    } else {
      buyingMaterials.querySelector('.mask-hide-field').style.display = 'block';
      packed.querySelector('.mask-hide-field').style.display = 'block';
      // снимаем ошибку, используем модуль modules/selects.js
      customSelects.hideErrorsSelect(buyingMaterials);
      customSelects.hideErrorsSelect(packed);
      buyingMaterials.dataset.toggleMask = 'show';
      packed.dataset.toggleMask = 'show';
    }
  }

})();
