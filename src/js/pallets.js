import './entry';
import './modules/basket';
import {callsModalWindow} from './modules/modal-window';
import {addProductInBasket, calculatesTotalAmountProductCurrency} from './modules/basket';
import {formFull} from './modules/form-full';
import {calculatorSale} from './modules/calculator-sale';
calculatesTotalAmountProductCurrency();

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

// По клику на кнопку "Добавить в корзину" добавляем товар в корзину и запускаем на нем калькулятор в корзине
let allButtonsAddProductInBasket = document.querySelectorAll('.pallets-cards__interaction-button');
let basketPallets = document.getElementById('basketPallets');

allButtonsAddProductInBasket.forEach(buttonAddProduct => {
  buttonAddProduct.addEventListener('click', (e) => {
    e.preventDefault();
    let productCard = e.target.closest('.pallets-cards');
    let descriptionProductElements = productCard.querySelectorAll('.pallets-cards__text>p.text');
    let descriptionProduct = [];

    for (let text of descriptionProductElements) {
      descriptionProduct.push(text.innerText);
    }

    let productData = {
      img: {
        src: productCard.querySelector('.pallets-cards__img-wrap>img').getAttribute('src'),
        alt: productCard.querySelector('.pallets-cards__img-wrap>img').getAttribute('alt')
      },
      description: {
        title: productCard.querySelector('.pallets-cards__text>h4.text-bold').innerText,
        text: descriptionProduct
      },
      data: {
        name: productCard.querySelector('.pallets-cards__interaction').getAttribute('data-product'),
        type: productCard.querySelector('.pallets-cards__interaction').getAttribute('data-grade'),
        inputAttrName: "grade",
        inputValue: productCard.querySelector('.pallets-cards__text>h4.text-bold').innerText,
        amountValue: Number(productCard.querySelector('input.pallets-cards-calc__amount').value),
      }
    };

    let addedLineToBasket = addProductInBasket(basketPallets, productData);

    let rowInBasketInteraction = {
      productName: addedLineToBasket.querySelector('.row-in-basket__interaction').getAttribute('data-product'),
      productType: addedLineToBasket.querySelector('.row-in-basket__interaction').getAttribute('data-grade'),
      inputAmount: addedLineToBasket.querySelector('.row-in-basket-calc__amount'),
      outputSum: addedLineToBasket.querySelector('.row-in-basket-calc__output-sum [data-sum]'),
      plus: addedLineToBasket.querySelector('.row-in-basket-calc__plus'),
      minus: addedLineToBasket.querySelector('.row-in-basket-calc__minus')
    };
    calculatorSale(rowInBasketInteraction);
    calculatesTotalAmountProductCurrency();
  });
});

// // Вызов формы заказа
// let basketForm = document.getElementById('basketForm');
// formFull(basketForm);
