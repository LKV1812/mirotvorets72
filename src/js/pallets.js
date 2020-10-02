import './entry';
import './modules/basket';
import {callsModalWindow} from './modules/modal-window';
import {addProductInBasket, calculatesTotalAmountProductCurrency} from './modules/basket';
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

// По клику на кнопку "Добавить в корзину" добавляем товар в корзину и запускаем на нем калькулятор в корзине
let allButtonsAddProductInBasket = document.querySelectorAll('.pallets-cards__interaction-button');
let basketPallets = document.getElementById('basketPallets');

allButtonsAddProductInBasket.forEach(buttonAddProduct => {
  // фиксируем текущую ширину кнопки, чтобы она не меняла размер при изменении текста в ней
  buttonAddProduct.style.width = buttonAddProduct.offsetWidth + 1 + 'px';

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

    let palletData = {
      cardProduct: addedLineToBasket,
      sumCurrency: addedLineToBasket.querySelector('.row-in-basket-calc__output-sum [data-sum]'),
      amountSumProduct: addedLineToBasket.querySelector('.row-in-basket-calc__amount'),
      outputTotalSumProduct: document.querySelector('[data-basket="product"]'),
      outputTotalSumCurrency: document.querySelector('[data-basket="currency"]'),
      observeElement: addedLineToBasket.querySelector('.row-in-basket-calc__output-sum [data-sum]'),
      iconBasket: document.querySelector('.basket__number'),
      deleteButton: addedLineToBasket.querySelector('a.row-in-basket__delete-order-item')
    };

    calculatorSale(rowInBasketInteraction);
    calculatesTotalAmountProductCurrency(palletData);

    buttonAddProduct.innerHTML = `&#x2714`;
    setTimeout(() => buttonAddProduct.innerText = 'добавлено', 1000);

    let plus = productCard.querySelector('.pallets-cards-calc__plus');
    let minus = productCard.querySelector('.pallets-cards-calc__minus');
    let siblingAmount = productCard.querySelector('input.pallets-cards-calc__amount');

    if (buttonAddProduct.innerText != 'добавить в корзину') {
      plus.addEventListener('click', () => buttonAddProduct.innerText = 'добавить в корзину');
      minus.addEventListener('click', () => buttonAddProduct.innerText = 'добавить в корзину');
      siblingAmount.addEventListener('input', () => buttonAddProduct.innerText = 'добавить в корзину');
    }
  });
});

// Вызов формы заказа
let basketForm = document.getElementById('basketForm');
formFull(basketForm);
