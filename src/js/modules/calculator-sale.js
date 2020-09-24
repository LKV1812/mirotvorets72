import {priceSale} from '../global/prices-sale';

export function calculatorSale() {
  let productInteraction = document.querySelector('.pallets-cards__interaction');
  let productName = productInteraction.getAttribute('data-product');
  let productDataAttr = productInteraction.getAttribute('data-grade');
  let price = priceSale.getPriceSelectedGradePallet(productName, productDataAttr);
  let inputAmount = productInteraction.querySelector('.pallets-cards-calc__amount');
  let outputSum = productInteraction.querySelector('.pallets-cards-calc__output-sum [data-sum]');

  outputSum.innerText = inputAmount.value * price;

  inputAmount.addEventListener('input', () => outputSum.innerText = inputAmount.value * price);
}

calculatorSale()
