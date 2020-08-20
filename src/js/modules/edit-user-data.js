import {phoneMask} from './phone-mask';
let currentElemntsData = document.querySelectorAll('.user-data__output');

currentElemntsData.forEach(item => {
  item.addEventListener('click', function() {
    editUserData(this, 'user-data__enter');
  });
});

export function editUserData(currentElement, inputClass) {
  let input = document.createElement('input');
  input.setAttribute('class', inputClass);
  input.value = currentElement.innerText;
  currentElement.innerText = '';
  currentElement.appendChild(input);

  if (currentElement.hasAttribute('data-phone')) {
    input.className = 'tel-field ' + inputClass;
    phoneMask();
  }

  input.focus();

  input.addEventListener('blur', function() {
    outputData(currentElement, this);
  });
}

export function outputData(itemToOutput, itemRemove) {
  let outputText = itemRemove.value;
  itemRemove.remove();
  itemToOutput.innerText = outputText;
}
