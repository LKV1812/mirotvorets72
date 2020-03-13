const formOrder = (function(){
  'use strict';

  const form = document.getElementById('indexGeneralOrder');
  const selects = form.querySelectorAll('.select');

  form.addEventListener('submit', formValidate);

  function formValidate(event) {
    event.preventDefault();

    selects.forEach(item => {
      let selectCurrent = item.querySelector('.select-current');

      if (!selectCurrent.hasAttribute('name')) {
        customSelects.showErrorsSelect(item);
      }
    });
  }

})();
