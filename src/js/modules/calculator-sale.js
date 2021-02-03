import {priceSale} from '../global/prices-sale';

/**
 * calculatorSale - считает общую стоимось товара
 * @param {object} elem - элемент на котором должен производиться подсчет
 */

export function calculatorSale(elem) {
  let price = priceSale.getPriceSelectedGradePallet(elem.productName, elem.productType);
  let currentValueInput = elem.inputAmount.value;

  elem.outputSum.innerText = elem.inputAmount.value * price;

  elem.inputAmount.addEventListener('focus', () => {
    elem.inputAmount.value = "";
  });

  elem.inputAmount.addEventListener('blur', () => {
    if (elem.inputAmount.value == "") {
      elem.inputAmount.value = currentValueInput;
    }
  });

  elem.inputAmount.addEventListener('input', () => {
    elem.inputAmount.value = +(elem.inputAmount.value) < 0 ? 0 : elem.inputAmount.value;
    elem.outputSum.innerText = elem.inputAmount.value * price;
    currentValueInput = elem.inputAmount.value == "" ? 0 : elem.inputAmount.value;
  });

  elem.plus.addEventListener('click', () => {
    elem.inputAmount.value = +(elem.inputAmount.value) + 1;
    elem.outputSum.innerText = elem.inputAmount.value * price;
    currentValueInput = elem.inputAmount.value;
  });

  elem.minus.addEventListener('click', () => {
    elem.inputAmount.value = ( +(elem.inputAmount.value) - 1 ) < 0 ? 0 : elem.inputAmount.value - 1;
    elem.outputSum.innerText = elem.inputAmount.value * price;
    currentValueInput = elem.inputAmount.value;
  });
}
