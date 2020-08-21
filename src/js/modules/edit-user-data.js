import {phoneMask} from './phone-mask';

export function editUserData(currentElement, inputClass) {
  let input = document.createElement('input');
  let currentText = currentElement.innerText;
  input.value = currentText;
  input.style.width = currentElement.clientWidth + 'px';
  currentElement.innerText = '';
  currentElement.appendChild(input);

  if ( currentElement.hasAttribute('data-phone') ) {
    input.className = 'tel-field ' + inputClass;
    phoneMask();
  } else {
    input.className = inputClass;
  }

  input.focus();
  input.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  input.addEventListener('blur', function() {
    checkEnteredData(this) ? outputData(currentElement, this) : currentElement.innerText = currentText;
  });
}

export function checkEnteredData(input) {
  let checkResult = true;

  if (input.value.length < 1) {
    checkResult = false;
  }

  if (input.matches('.tel-field') && input.value.length != 18) {
    checkResult = false;
  }

  return checkResult;
}

export function outputData(itemToOutput, itemRemove) {
  let outputText = itemRemove.value;
  itemToOutput.innerText = outputText;
}
