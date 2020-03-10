(function() {
  'use strict';

  /**
  * Выводит минимальную и максимальную цену в карточку товара
  *
  * @param cardsProduct - массив карточек товара
  * @param productName - атрибут name карточки товара
  * @param startPrice - span в карточке в который выводится минимальная цена
  * @param finalPrice - span в карточке в который выводится максимальная цена
  *
  *
  * Метод pricePallets.getMinPricePallet(); находится во внешнем скрипте в файле prices.js
  * Метод pricePallets.getMaxPricePallet(); находится во внешнем скрипте в файле prices.js
  *
  * Принимает productName
  * Если макулатура, стекло, пленка ПВД выбираем min и max по подвидам этого сырья
  */

  let cardsProduct = document.querySelectorAll('.card-product');

  cardsProduct.forEach(item => {
    let productName = item.getAttribute('name');
    let startPrice = item.querySelector('[data-starting-price]');
    let finalPrice = item.querySelector('[data-final-price]');

    if (productName == "pallet") {
      startPrice.innerText = pricePallets.getMinPricePallet();
      finalPrice.innerText = pricePallets.getMaxPricePallet();
      return;
    }

    if (productName == "glass") {
      startPrice.innerText = Math.min(
        priceMaterials.getMinPriceMaterial("glass"),
        priceMaterials.getMinPriceMaterial("glass-white-brown"),
        priceMaterials.getMinPriceMaterial("glass-green")
      );

      finalPrice.innerText = Math.max(
        priceMaterials.getMaxPriceMaterial("glass"),
        priceMaterials.getMaxPriceMaterial("glass-white-brown"),
        priceMaterials.getMaxPriceMaterial("glass-green")
      );

      return;
    }

    if (productName == "paper") {
      startPrice.innerText = Math.min(
        priceMaterials.getMinPriceMaterial("paper"),
        priceMaterials.getMinPriceMaterial("books"),
        priceMaterials.getMinPriceMaterial("magazines"),
        priceMaterials.getMinPriceMaterial("newspapers")
      );

      finalPrice.innerText = Math.max(
        priceMaterials.getMaxPriceMaterial("paper"),
        priceMaterials.getMaxPriceMaterial("books"),
        priceMaterials.getMaxPriceMaterial("magazines"),
        priceMaterials.getMaxPriceMaterial("newspapers")
      );

      return;
    }

    if (productName == "film-pvd") {
      startPrice.innerText = Math.min(
        priceMaterials.getMinPriceMaterial("film-pvd"),
        priceMaterials.getMinPriceMaterial("film-color-pvd")
      );

      finalPrice.innerText = Math.max(
        priceMaterials.getMaxPriceMaterial("film-pvd"),
        priceMaterials.getMaxPriceMaterial("film-color-pvd")
      );

      return;
    }

    startPrice.innerText = priceMaterials.getMinPriceMaterial(productName);
    finalPrice.innerText = priceMaterials.getMaxPriceMaterial(productName);
  });
})();
