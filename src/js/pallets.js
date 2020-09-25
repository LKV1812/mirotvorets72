import './entry';
import './modules/basket';
import {callsModalWindow} from './modules/modal-window';
import {formFull} from './modules/form-full';
import {calculatorSale} from './modules/calculator-sale';

// Вызов модуля модального окна
let buttonOpenModalWindow = document.querySelector('.basket');
let modalWindowQuestion = document.getElementById('palletsBasket');
callsModalWindow(buttonOpenModalWindow, modalWindowQuestion);

// Вызов калькулятора в карточках поддонов
let pallets = document.querySelectorAll('.pallets-cards__interaction');

pallets.forEach(item => {
  let palletInteraction = {
    productName: item.getAttribute('data-product'),
    productType: item.getAttribute('data-grade'),
    inputAmount: item.querySelector('.pallets-cards-calc__amount'),
    outputSum: item.querySelector('.pallets-cards-calc__output-sum [data-sum]'),
    plus: item.querySelector('.pallets-cards-calc__plus'),
    minus: item.querySelector('.pallets-cards-calc__minus')
  };

  calculatorSale(palletInteraction);
});

let rowsInBasket = document.querySelectorAll('.row-in-basket__interaction');

rowsInBasket.forEach(row => {
  let rowInBasketInteraction = {
    productName: row.getAttribute('data-product'),
    productType: row.getAttribute('data-grade'),
    inputAmount: row.querySelector('.row-in-basket-calc__amount'),
    outputSum: row.querySelector('.row-in-basket-calc__output-sum [data-sum]'),
    plus: row.querySelector('.row-in-basket-calc__plus'),
    minus: row.querySelector('.row-in-basket-calc__minus')
  };

  calculatorSale(rowInBasketInteraction);
});

// Вызов формы заказа
let basketForm = document.getElementById('basketForm');
formFull(basketForm);
