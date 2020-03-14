const formOrder = (function(){
  'use strict';

  const form = document.getElementById('indexGeneralOrder');
  const selects = form.querySelectorAll('.select');
  const inputs = form.querySelectorAll('.input');

  form.addEventListener('submit', formValidate);


  function formValidate(event) {
    selects.forEach(item => {
      let selectCurrent = item.querySelector('.select-current');

      if (!selectCurrent.hasAttribute('name')) {
        event.preventDefault();
        customSelects.showErrorsSelect(item);
      }
    });

    inputs.forEach(item => {
      if (item.matches('.tel-field') && item.value.length !== 18) {
        event.preventDefault();
        handlerInputs.showErrorsInput(item);
      }
      if (item.value == '') {
        event.preventDefault();
        handlerInputs.showErrorsInput(item);
      }
    });
  }

})();
