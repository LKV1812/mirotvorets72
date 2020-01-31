(function() {
  'use strict';
  let checkboxCalc = document.getElementById("checkboxCalcTypeB");
  let prevTextCheckbox = checkboxCalc.parentNode.previousElementSibling;
  let nextTextCheckbox = checkboxCalc.parentNode.nextElementSibling;

  checkboxCalc.addEventListener('change', function(){
    if (checkboxCalc.checked) {
      nextTextCheckbox.style.color = '#67af01';
      prevTextCheckbox.style.color = '#612228';
    }
    if (!checkboxCalc.checked) {
      nextTextCheckbox.style.color = '#612228';
      prevTextCheckbox.style.color = '#67af01';
    }
  });

}());
