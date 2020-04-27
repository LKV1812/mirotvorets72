import {priceMaterials, pricePallets} from '../global/prices';

(function() {
  'use strict';

  /**
  * Выводит цену товара в карточки товаров
  *
  * @param cardsProduct - массив карточек товара
  *
  * Метод pricePallets.getMinPricePallet(); находится во внешнем скрипте в файле prices.js
  * Метод pricePallets.getMaxPricePallet(); находится во внешнем скрипте в файле prices.js
  *
  */

  let cardsProduct = document.querySelectorAll('.price-product-card');

  cardsProduct.forEach(item => {
    let itemsDelivery = item.querySelectorAll('.price-product-card__item-delivery[data-delivery]');

    itemsDelivery.forEach(elemDelivery => {
      let typeDelivery = elemDelivery.getAttribute('data-delivery');
      let typeProducts = elemDelivery.querySelectorAll('[data-product]');

      typeProducts.forEach(product => {
        let keyProduct = product.getAttribute('data-product');
        let keyWeight = product.getAttribute('data-weight');
        let priceOutput = product.querySelector('.price-product-card__output-price');

        if (keyProduct == 'first-grade' || keyProduct == 'second-grade' || keyProduct == 'third-grade') {
          priceOutput.innerText = pricePallets.getPriceSelectedGradePallet(keyProduct, typeDelivery, keyWeight);
        } else {
          priceOutput.innerText = priceMaterials.getPriceSelectedTypeMaterials(keyProduct, typeDelivery, keyWeight);
        }
      });
    });
  });
})();
