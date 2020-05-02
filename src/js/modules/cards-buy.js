import {priceMaterials, pricePallets} from '../global/prices';
import {customSelects} from './selects';
import {tabs} from './tabs';

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

  let cardsProduct = document.querySelectorAll('.card-buy');

  cardsProduct.forEach(item => {
    let productName = item.getAttribute('data-product-name');
    let startPrice = item.querySelector('.card-buy__output-price-min');
    let finalPrice = item.querySelector('.card-buy__output-price-max');

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

    startPrice.innerText = priceMaterials.getMinPriceMaterial(productName);
    finalPrice.innerText = priceMaterials.getMaxPriceMaterial(productName);
  });

  /**
   * По клику на кнопку рассчитать стоимость
   *
   * Выбирает на карточке какого товара произошел клик
   * Переходим по ссылке на калькулятор и подставляем в нем выбранный товар
   * При необходимости переключаем табы в калькуляторе, если например выбранный товар - это поддоны
   *
   * При клике по ссылке оформить заказ
   * Переходим в форму заявки
   * подставляем выбранный товар и тип услуги покупка вторсырья
   */
  cardsProduct.forEach(card  => {
    let links = card.querySelectorAll('a.card-buy__button');
    let productName = card.getAttribute('data-product-name');

    links.forEach(link => {

      link.addEventListener('click', function(e) {
        let linkHref = this.getAttribute('href');

        if (linkHref === '#calculator' && card.matches('[data-product-name="pallets"]')) {
          let forSelectPallets = document.querySelector(`${linkHref} #palletGrade`);
          let tabCalculator = document.querySelector(`${linkHref} .tabs`);
          tabs.setActiveTab(tabCalculator, 1);
          customSelects.setSelectedProduct('first-grade', forSelectPallets);
          return;
        }

        if (linkHref === '#calculator' && !card.matches('[data-product-name="pallets"]')) {
          let forSelect = document.querySelector(`${linkHref} #typeMaterials`);
          let tabCalculator = document.querySelector(`${linkHref} .tabs`);
          tabs.setActiveTab(tabCalculator, 0);
          customSelects.setSelectedProduct(productName, forSelect);
        }

        if (linkHref === '#formOrder') {
          let selectedService = document.getElementById('selectedService');
          let buyingMaterials = document.getElementById('buyingMaterials');
          customSelects.setSelectedProduct('buying-materials', selectedService);
          customSelects.setSelectedProduct(productName, buyingMaterials);
        }
      });
    });
  });
})();
