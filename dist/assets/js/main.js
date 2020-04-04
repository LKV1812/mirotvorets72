
'use strict';

  /**
  * priceMaterials{} - прайс на сырье
  *
  * priceMaterials[тип-сырья];
  * priceMaterials[тип-сырья][тип-доставки];
  * priceMaterials[тип-сырья][тип-доставки][цена-кг-от-объема];
  */
 const priceMaterials = {
  "cardboard": {
    'our-delivery': {
      '0': 1.5,
      '200': 2,
      '500': 2.5,
      '1000': 3,
    },
    'self-delivery': {
      '0': 3,
      '200': 3,
      '500': 3,
      '1000': 3.5,
    }
  },

  "paper": {
    'our-delivery': {
      '0': 5.5,
      '200': 5.5,
      '500': 6,
      '1000': 6.5,
    },
    'self-delivery': {
      '0': 7,
      '200': 7,
      '500': 8,
      '1000': 8,
    }
  },

  "books": {
    'our-delivery': {
      '0': 4,
      '200': 4,
      '500': 5,
      '1000': 5.5,
    },
    'self-delivery': {
      '0': 5,
      '200': 5,
      '500': 5,
      '1000': 6,
    }
  },

  "magazines": {
    'our-delivery': {
      '0': 4,
      '200': 4,
      '500': 5,
      '1000': 5.5,
    },
    'self-delivery': {
      '0': 5,
      '200': 5,
      '500': 5,
      '1000': 6,
    }
  },

  "newspapers": {
    'our-delivery': {
      '0': 4.5,
      '200': 4.5,
      '500': 5,
      '1000': 5.5,
    },
    'self-delivery': {
      '0': 5,
      '200': 5,
      '500': 5,
      '1000': 6,
    }
  },

  "film-stretch": {
    'our-delivery': {
      '0': 8,
      '200': 10,
      '500': 12,
      '1000': 12,
    },
    'self-delivery': {
      '0': 13,
      '200': 13,
      '500': 13,
      '1000': 15,
    }
  },

  "film-pvd": {
    'our-delivery': {
      '0': 8,
      '200': 10,
      '500': 12,
      '1000': 12,
    },
    'self-delivery': {
      '0': 13,
      '200': 13,
      '500': 13,
      '1000': 15,
    }
  },

  "film-color-pvd": {
    'our-delivery': {
      '0': 6,
      '200': 6,
      '500': 7,
      '1000': 7,
    },
    'self-delivery': {
      '0': 8,
      '200': 8,
      '500': 8,
      '1000': 8,
    }
  },

  "kegs": {
    'our-delivery': {
      '0': 2.5,
      '200': 2.5,
      '500': 3,
      '1000': 4,
    },
    'self-delivery': {
      '0': 4,
      '200': 4,
      '500': 4,
      '1000': 4,
    }
  },

  "plastic-canisters": {
    'our-delivery': {
      '0': 5,
      '200': 5,
      '500': 6,
      '1000': 7,
    },
    'self-delivery': {
      '0': 10,
      '200': 10,
      '500': 10,
      '1000': 10,
    }
  },

  "aluminum-cans": {
    'our-delivery': {
      '0': 15,
      '200': 15,
      '500': 15,
      '1000': 15,
    },
    'self-delivery': {
      '0': 20,
      '200': 20,
      '500': 20,
      '1000': 20,
    }
  },

  "plastic-box": {
    'our-delivery': {
      '0': 1,
      '200': 1,
      '500': 1,
      '1000': 1,
    },
    'self-delivery': {
      '0': 1,
      '200': 1,
      '500': 1,
      '1000': 1,
    }
  },

  "polyethylene-pipe": {
    'our-delivery': {
      '0': 10,
      '200': 10,
      '500': 11,
      '1000': 12,
    },
    'self-delivery': {
      '0': 12,
      '200': 12,
      '500': 12,
      '1000': 12,
    }
  },

  "chemical-containers": {
    'our-delivery': {
      '0': 5,
      '200': 5,
      '500': 6,
      '1000': 7,
    },
    'self-delivery': {
      '0': 7,
      '200': 7,
      '500': 7,
      '1000': 10,
    }
  },

  "polyethylene": {
    'our-delivery': {
      '0': 5,
      '200': 5,
      '500': 6,
      '1000': 7,
    },
    'self-delivery': {
      '0': 7,
      '200': 7,
      '500': 7,
      '1000': 10,
    }
  },

  "glass": {
    'our-delivery': {
      '0': 0.7,
      '200': 0.7,
      '500': 0.9,
      '1000': 1.2,
    },
    'self-delivery': {
      '0': 1.5,
      '200': 1.5,
      '500': 1.5,
      '1000': 1.5,
    }
  },

  "glass-white-brown": {
    'our-delivery': {
      '0': 2,
      '200': 2,
      '500': 2,
      '1000': 2,
    },
    'self-delivery': {
      '0': 3,
      '200': 3,
      '500': 3,
      '1000': 3,
    }
  },

  "glass-green": {
    'our-delivery': {
      '0': 1,
      '200': 1,
      '500': 1,
      '1000': 1,
    },
    'self-delivery': {
      '0': 1.2,
      '200': 1.2,
      '500': 1.2,
      '1000': 1.5,
    }
  },

  "bags": {
    'our-delivery': {
      '0': 8,
      '200': 8,
      '500': 10,
      '1000': 12,
    },
    'self-delivery': {
      '0': 12,
      '200': 12,
      '500': 12,
      '1000': 12,
    }
  },

  "oil": {
    'our-delivery': {
      '0': 10,
      '200': 10,
      '500': 10,
      '1000': 10,
    },
    'self-delivery': {
      '0': 10,
      '200': 10,
      '500': 10,
      '1000': 10,
    },
  },

  "textile": {
    'our-delivery': {
      '0': 0,
      '200': 0,
      '500': 0,
      '1000': 0,
    },
    'self-delivery': {
      '0': 0,
      '200': 0,
      '500': 0,
      '1000': 0,
    },
  },

  getPriceSelectedTypeMaterials(selectedTypeMaterials, typeDelivery, weightKg) {
    let keyWeightKg = '';
    if (+weightKg < 200) keyWeightKg = '0';
    if (+weightKg >= 200 && +weightKg < 500) keyWeightKg = '200';
    if (+weightKg >= 500 && +weightKg < 1000) keyWeightKg = '500';
    if (+weightKg >= 1000) keyWeightKg = '1000';

    return this[selectedTypeMaterials][typeDelivery][keyWeightKg];
  },

  getMaxPriceMaterial(typeMaterials) {
    let max = 0;

    for (let key in this[typeMaterials]) {
      setMax(this[typeMaterials][key]);
    }

    /**
     * setMax(obj) возвращает максимальную цену
     * @param obj тип сырья
     *
     * если ключом является объект запускаем рекурсию
     * когда дошли до базы рекурсии сравниваем с max
     * если max меньше, записываем в max новое значение
     * так проходим по всем значениям цены
     * возвращаем максимальное
    */
    function setMax(obj) {
      let temp = obj;

      if (typeof temp === "object" ) {
        for (let key in temp) setMax(temp[key]);
      } else if (typeof temp === 'number') max = Math.max(max, temp);

      return;
    }

    return max;
  },

  getMinPriceMaterial(typeMaterials) {
    let min = null;

    for (let key in this[typeMaterials]) {
      setMin(this[typeMaterials][key]);
    }

    /**
     * setMin(obj) возвращает максимальную цену
     * @param obj тип сырья
     *
     * если ключом является объект запускаем рекурсию
     * когда дошли до базы рекурсии сравниваем с min
     * если min больше, записываем в min новое значение
     * так проходим по всем значениям цены
     * возвращаем минимальное
    */
    function setMin(obj) {
      let temp = obj;

      if (typeof temp === "object" ) {
        for (let key in temp) setMin(temp[key]);
      } else if (typeof temp === 'number' && min === null) {
        min = temp;
      } else if (typeof temp === 'number' && min !== null) min = Math.min(min, temp);

      return;
    }

    return min;
  },
};

/**
* pricePallets{} - прайс на поддоны
*
* priceMaterials[сорт-поддонов];
* priceMaterials[сорт-поддонов][тип-доставки];
* priceMaterials[сорт-поддонов][тип-доставки][наличие-клейма-Epal];
*/
const pricePallets = {
  "first-grade": {
    'our-delivery': {
      'epal': 80,
      'no-epal': 60,
    },
    'self-delivery': {
      'epal': 90,
      'no-epal': 70,
    }
  },

  "second-grade": {
    'our-delivery': {
      'epal': 60,
      'no-epal': 40,
    },
    'self-delivery': {
      'epal': 70,
      'no-epal': 50,
    }
  },

  "third-grade": {
    'our-delivery': {
      'epal': 20,
      'no-epal': 20,
    },
    'self-delivery': {
      'epal': 30,
      'no-epal': 30,
    }
  },

  getPriceSelectedGradePallet(selectedGrade, typeDelivery, epal) {
    return this[selectedGrade][typeDelivery][epal];
  },

  getMaxPricePallet() {
    let max = 0;

    for (let key in this) {
      setMax(this[key]);
    }

    function setMax(obj) {
      let temp = obj;

      if (typeof temp === "object" ) {
        for (let key in temp) setMax(temp[key]);
      } else if (typeof temp === 'number') max = Math.max(max, temp);

      return;
    }

    return max;
  },

  getMinPricePallet() {
    let min = null;

    for (let key in this) {
      setMin(this[key]);
    }

    function setMin(obj) {
      let temp = obj;

      if (typeof temp === "object" ) {
        for (let key in temp) setMin(temp[key]);
      } else if (typeof temp === 'number' && min === null) {
        min = temp;
      } else if (typeof temp === 'number' && min !== null) min = Math.min(min, temp);

      return;
    }

    return min;
  },
};

(function() {
  "use strict";

  /**
   * Переменные для калькулятора сырья
   *
   * @param {DOM} trash засор
   * @param {DOM} materialsDeliveryType тип доставки
   * @param {DOM} materialsKg килограммы сырья
   * @param {DOM} outputCountingResult здесь выводим ссумму в рублях по сырью
   * @param {DOM} typeMaterials весь родительский select для типа сырья
   * @param {DOM} currentTypeMaterials выбранный тип сырья
   * @method customSelects.showErrorsSelect(); показывает ошибку на select`e, логика работы метода в файле modules/selects.js
   */
  let trash = document.getElementById('checkboxCalc');
  let materialsDeliveryType = document.getElementById("materialsDeliveryType");
  let materialsKg = document.getElementById('materialsKg');
  let materialsKgInput = document.getElementById('materialsKgInput');
  let outputCountingResult = document.querySelector('#resultMaterialsCurrency span');
  let typeMaterials = document.getElementById('typeMaterials');
  let currentTypeMaterials = document.getElementById('currentTypeMaterials');

  /**
   * Переменные для калькулятора поддонов
   *
   * @param {DOM} checkboxEpal checkbox наличие клейма Epal.
   * @param {DOM} palletGrade весь родительский select выбора сорта поддонов
   * @param {DOM} currentPalletGrade выбранный сорт поддонов
   * @param {DOM} palletDeliveryType тип доставки поддонов
   * @param {DOM} palletsQuantity количество поддонов
   * @param {DOM} outputCountingResultCurrencyPallets здесь выводим ссумму в рублях по поддонам
   * @method customSelects.showErrorsSelect(); принимает  показывает ошибку на select`e
   */
  let checkboxEpal = document.getElementById('epal');
  let palletGrade = document.getElementById('palletGrade');
  let currentPalletGrade = document.getElementById('currentPalletGrade');
  let palletDeliveryType = document.getElementById('palletDeliveryType');
  let palletsQuantity = document.getElementById('palletsRange');
  let palletsRangeInput = document.getElementById('palletsRangeInput');
  let outputCountingResultCurrencyPallets = document.getElementById('resultPalletsCurrency');

  /**
   * Переменные для калькулятора уничтожения архива
   *
   * @param {DOM} destructionKg вес архива для уничтожения в кг
   * @param {DOM} outputCountingResultCurrencyDestruction здесь выводим ссумму в рублях по уничтожению
   */
  let destructionKg = document.getElementById('destructionRange');
  let outputCountingResultCurrencyDestruction = document.getElementById('resultDestructionCurrency');

  /**
   * Переменные для калькулятора уничтожения архива
   *
   * @param {DOM} destructionKg вес архива для хранения в кг
   * @param {DOM} outputCountingResultCurrencyDestruction здесь выводим ссумму в рублях для хранения
   */
  let storageKg = document.getElementById('storageRange');
  let outputCountingResultCurrencyStorage = document.getElementById('resultStorageCurrency');

  /**
   * форматирует число
   *
   * @constructor formatterСurrency форматируем итоговое значение в рублях в удобночитаемой формате с разделением на разряды и значек валюты
   */
  const formatterСurrency = new Intl.NumberFormat("ru", {
    style: 'currency',
    currency: 'RUB'
  });

  /**
  * прослушиваем события
  *
  * Калькулятор сырья:
  * materialsKg - изменения веса в кг
  * materialsDeliveryType - изменения типа доставки
  * trash - изменения наличия засора есть/нет
  * typeMaterials - изменение типа сырья
  **/
  materialsKg.addEventListener('input', function(){
    // если тип сыря не выбран, показываем erorr на select`e
    if (!currentTypeMaterials.getAttribute('name')) customSelects.showErrorsSelect(typeMaterials);
    handlerEnteredDataMaterials();
  });
  materialsKgInput.addEventListener('input', function() {
    // если тип сыря не выбран, показываем erorr на select`e
    if (!currentTypeMaterials.getAttribute('name')) customSelects.showErrorsSelect(typeMaterials);
    handlerEnteredDataMaterials();
  });
  materialsDeliveryType.addEventListener('change', handlerEnteredDataMaterials);
  trash.addEventListener('change', handlerEnteredDataMaterials);
  typeMaterials.addEventListener('click', handlerEnteredDataMaterials);

  /**
  * Прослушиваем события
  *
  * Калькулятор поддонов:
  * checkboxEpal - изменение наличия клейма Epal нет/есть
  * palletGrade - выбор сорта поддонов
  * palletDeliveryType - изменение типа доставки
  * palletsQuantity - изменение количества поддонов
  */
  checkboxEpal.addEventListener('change', handlerEnteredDataPallets);
  palletGrade.addEventListener('click', handlerEnteredDataPallets);
  palletDeliveryType.addEventListener('change', handlerEnteredDataPallets);
  palletsQuantity.addEventListener('input', function() {
    // если не выбран сорт поддонов, показываем erorr на select`e
    if (!currentPalletGrade.getAttribute('name')) customSelects.showErrorsSelect(palletGrade);
    handlerEnteredDataPallets();
  });
  palletsRangeInput.addEventListener('input', function() {
    // если не выбран сорт поддонов, показываем erorr на select`e
    if (!currentPalletGrade.getAttribute('name')) customSelects.showErrorsSelect(palletGrade);
    handlerEnteredDataPallets();
  });

  /**
  * Прослушиваем события
  *
  * Калькулятор уничтожения архива:
  * При изменении веса запускаем функцию подсчета.
  * Полученное значение форматируем в удобочитаемое число.
  */
  destructionKg.addEventListener('input', function() {
    let resultSumCurrency = makesCalculationCurrency(5, this.value);
    outputCountingResultCurrencyDestruction.innerHTML = formatterСurrency.format(resultSumCurrency);
  });

  /**
  * Прослушиваем события
  *
  * Калькулятор хранения архива:
  * При изменении веса запускаем функцию подсчета.
  * Полученное значение форматируем в удобочитаемое число.
  */
  storageKg.addEventListener('input', function() {
    let resultSumCurrency = makesCalculationCurrency(5, this.value);
    outputCountingResultCurrencyStorage.innerHTML = formatterСurrency.format(resultSumCurrency);
  });

  /**
  * обрабатываем введенные пользователем данные и передаем их в метод объекта прайса для выборки цены
  *
  * @param {string} selectedTypeMaterials - значени атрибута 'name', используем как ключ объекта priceMaterials[типа-сырья]
  * @param {string} typeDelivery - checkbox, используем как ключ объекта priceMaterials[типа-сырья][тип-доставки]
  * @param {number} price - цена выбранного товара, возвращенная методом priceMaterials.getPriceSelectedTypeMaterials(selectedTypeMaterials, typeDelivery, materialsKg.value)
  * @param {boolean} trash.checked - если выбран засор price умножаем на 0.9
  * @param {string} outputCountingResult - выводим результат подсчета на страницу
  **/
  function handlerEnteredDataMaterials() {
    let selectedTypeMaterials = currentTypeMaterials.getAttribute('name');
    let typeDelivery = materialsDeliveryType.checked ? 'our-delivery' : 'self-delivery';

    if (selectedTypeMaterials) {
      let price = priceMaterials.getPriceSelectedTypeMaterials(selectedTypeMaterials, typeDelivery, materialsKg.value);

      if (trash.checked) price = price * 0.9;

      outputCountingResult.innerHTML = formatterСurrency.format( makesCalculationCurrency(price, materialsKg.value) );
    }
  }

  /**
  * обрабатываем введенные пользователем данные и передаем их в метод объекта прайса для выборки цены
  *
  * @param {string} selectedGradePallet - значение атрибута 'name', используем как ключ объекта pricePallets[сорт-поддонов]
  * @param {string} typeDelivery - checkbox, используем как ключ объекта pricePallets[сорт-поддонов][тип-доставки]
  * @param {string} presenceStampEpal - checkbox, используем как ключ объекта pricePallets[сорт-поддонов][тип-доставки][наличие-клейма-epal]
  * @param {number} price - цена выбранного сорта поддонов, возвращенная методом priceMaterials.getPriceSelectedGradePallet(selectedGradePallet, typeDelivery, presenceStampEpal)
  * @param {string} outputCountingResultCurrencyPallets - выводим результат подсчета на страницу
  **/
  function handlerEnteredDataPallets() {
    let selectedGradePallet = currentPalletGrade.getAttribute('name');
    let typeDelivery = palletDeliveryType.checked ? 'our-delivery' : 'self-delivery';
    let presenceStampEpal = checkboxEpal.checked ? 'epal' : 'no-epal';

    if (selectedGradePallet) {
      let price = pricePallets.getPriceSelectedGradePallet(selectedGradePallet, typeDelivery, presenceStampEpal);
      outputCountingResultCurrencyPallets.innerHTML = formatterСurrency.format( makesCalculationCurrency(price, palletsQuantity.value) );
    }
  }

  /**
  * Умножает цену товара на количество
  *
  * @param {number} priceMaterials цена за единицу товара
  * @param {number} numberKilograms количество
  **/
  function makesCalculationCurrency(priceMaterials, numberKilograms) {
    return priceMaterials * numberKilograms;
  }

  /**
   * На родительском элементе показываем ошибку
   *
   * @param {DOM} currentSelect элемент чьего родителя будем находить
   * При фокусе, если на элементе был error снимаем его
   * Показываем error на родительский элемент
   */
  // function showErrorsSelect(currentSelect) {
  //   let parentSelect = currentSelect.closest('.select');
  //   parentSelect.onfocus = function() {
  //     currentSelect.parentElement.classList.remove('error-no-selected');
  //     parentSelect.querySelector('.error-no-selected__message').style.display = 'none';
  //   };
  //   currentSelect.parentElement.classList.add('error-no-selected');
  //   parentSelect.querySelector('.error-no-selected__message').style.display = 'flex';
  // }
}());

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

const formOrder = (function(){
  'use strict';

  const form = document.getElementById('indexGeneralOrder');
  const formReview = document.getElementById('formReview');

  // select`ы поля выбора, в зависимости от типа услуг будем скрывать или показвыать поля
  const selectedService = form.querySelector('#selectedService');
  const buyingMaterials = form.querySelector('#buyingMaterials');
  const packed = form.querySelector('#packed');

  selectedService.addEventListener('click', toggleMaskField);
  form.addEventListener('submit', sendForm);
  formReview.addEventListener('submit', sendForm);

  /**
   * Отправляет форму через ajax
   * @param {*} event данные о событии submit
   * Если форма прошла валидацию отправляем ее
   * Если не прошла return
   */
  function sendForm(event) {
    event.preventDefault();
    let resultValidate = formValidate(event.target);

    if (resultValidate) {
      // для отпарвки запускаем модуль modules/ajax.js
      sendFormOrder.sendRequest(event, event.target);
    } else {return;}
  }

  /**
   * formValidate() валидирует форму на заполненость
   * @param {*} form - форма, которую будем валидировать
   * @var {} selects - все поля select в форме
   * @var {} inputs - все поля input в форме
   * @var {bool} resultValidate - результат валидации
   * Проверяем все поля на заполненость
   * Если поле не заполнено, показываем на нем ошибку
   * Если выбранный тип услуги не "прием сырья", скрываем select`ы "тип сырья" и "как сложено" под маской, не валидируем их
   */
  function formValidate(form) {
    const selects = form.querySelectorAll('.select');
    const inputs = form.querySelectorAll('.input');
    const textarea = form.querySelector('.textarea');
    let resultValidate = true;

    selects.forEach(item => {
      let selectCurrent = item.querySelector('.select-current');

      if (!selectCurrent.hasAttribute('name') && item.getAttribute('data-toggle-mask') == 'hide') {
        // используем модуль modules/selects.js
        customSelects.showErrorsSelect(item);
        resultValidate = false;
      }
    });

    inputs.forEach(item => {
      if (item.matches('.tel-field') && item.value.length !== 18) {
        // используем модуль modules/inputs.js
        handlerInputs.showErrorsInput(item);
        resultValidate = false;
      } else if (item.value == '') {
        // используем модуль modules/inputs.js
        handlerInputs.showErrorsInput(item);
        resultValidate = false;
      }
    });

    if (textarea) {
      if (textarea.value == '') {
        // используем модуль modules/textarea.js
        handlerTextarea.showErrorsTextarea(textarea);
        resultValidate = false;
      }
    }

    return resultValidate;
  }

  /**
   * toggleMaskField() включает маску(прячет поля)
   * Если "тип услуги" не "прием сырья"
   * Иначе снимает маску
   */
  function toggleMaskField() {
    let selectCurrent = selectedService.querySelector('.select-current');

    if (!selectCurrent.hasAttribute('name') || selectCurrent.matches('[name="buying-materials"]')) {
      buyingMaterials.querySelector('.mask-hide-field').style.display = 'none';
      packed.querySelector('.mask-hide-field').style.display = 'none';
      buyingMaterials.dataset.toggleMask = 'hide';
      packed.dataset.toggleMask = 'hide';
    } else {
      buyingMaterials.querySelector('.mask-hide-field').style.display = 'block';
      packed.querySelector('.mask-hide-field').style.display = 'block';
      // снимаем ошибку, используем модуль modules/selects.js
      customSelects.hideErrorsSelect(buyingMaterials);
      customSelects.hideErrorsSelect(packed);
      buyingMaterials.dataset.toggleMask = 'show';
      packed.dataset.toggleMask = 'show';
    }
  }

})();

// /**
//  * Все обработчики в данной файле реализуют только общее поведение элементов:
//  * Select`ы
//  * Checkbox`ы
//  * Range`ы
//  * Стилизуют
//  * Обрабатывют поведение
//  * Формируют сообщение об ошибке, но не выводят их
//  *
//  * Не выполняет:
//  * передачу значений в другие скрипты,
//  * не обрабатывает данные для подсчета чего-либо,
//  * не хранит данные,
//  */
// (function() {
//   'use strict';

//   /**
//    * Обработчик пользовательских селектов
//    *
//    * @param {DOM[]} select - коллекция всех селектов на сайте
//    * @param {DOM[]} selectHeader - шапки селектов
//    * @param {DOM[]} selectOption - коллекция тел внутри селектов, с вариантами выбора (option)
//    *
//    * handlers:
//    * selectToggle - по клику на селекте активирует его
//    * outFocus - при потере фокуса на селекте закрваем его
//    * setSelected - по клику на option устанавливает его как выбранный и устанавливает его атрибут [this.name="this.value"]
//    */
//   let handlerSelect = function() {
//     let select = document.querySelectorAll(".select");
//     let selectHeader = document.querySelectorAll(".select__header");
//     let selectOption = document.querySelectorAll(".select__option");

//     selectHeader.forEach(item => {
//       item.addEventListener("click", selectToggle);
//     });

//     select.forEach(item => {
//       // в сообщении об ошибке (не выбран ни один пункт) записываем текст из заголовка select`a
//       let currentText = item.querySelector('.select-current').innerText;
//       item.querySelector('.error-no-selected__message-text').innerText = currentText;

//       item.addEventListener("blur", outFocus);
//     });

//     selectOption.forEach(item => {
//       item.addEventListener("click", setSelected);
//     });

//     function selectToggle() {
//       this.parentElement.classList.toggle("is-active");
//     }

//     function setSelected() {
//       let text = this.innerText,
//           attributeNameValue = this.getAttribute("name"),
//           select = this.closest(".select"),
//           currentSelect = select.querySelector(".select-current");

//       currentSelect.setAttribute('name', attributeNameValue);
//       currentSelect.innerText = text;

//       select.classList.remove("is-active");
//     }

//     function outFocus() {
//       let thisSelect = this.closest(".select");
//       thisSelect.classList.remove("is-active");
//     }

//   };

//   handlerSelect();

//   /**
//    * Обработчик checkbox - выбора типа доставки
//    *
//    * Методом forEach() на каждый item коллекции checkbox устанавливаем прослушку addEventListener()
//    *
//    * variables:
//    * prevTextCheckbox - у каждого item`а = (checkbox) выбирает соседа перед checkbox
//    * nextTextCheckbox - у каждого item`а = (checkbox) выбирает соседа после checkbox
//    *
//    * handlers:
//    * Если checkbox.checked стилизуем соседа после
//    * Если !checkbox.checked стилизуем соседа перед
//    */
//   let checkboxCalc = document.querySelectorAll('.checkbox-type-b');

//   checkboxCalc.forEach(item => {
//     let prevTextCheckbox = item.parentNode.previousElementSibling;
//     let nextTextCheckbox = item.parentNode.nextElementSibling;

//     item.addEventListener('change', function(){
//       if (item.checked) {
//         nextTextCheckbox.style.color = '#67af01';
//         prevTextCheckbox.style.color = '#612228';
//       }
//       if (!item.checked) {
//         nextTextCheckbox.style.color = '#612228';
//         prevTextCheckbox.style.color = '#67af01';
//       }
//     });
//   });

//   /**
//    * Обработчик range
//    *
//    * Методом forEach() на каждый item коллекции range устанавливаем прослушку addEventListener()
//    *
//    * variables:
//    * range - коллекция всех range`ей на сайте
//    * formatter - через конструктор задает красивый числовой формат с пробелами в разрядах
//    * parent - родитель range`а
//    * outputCurrentValue - блок в который выводится значение range`a
//    * measureUnit - хранит aббревиатуру единицы измериния, которая прописана в HTML разметке
//    *
//    * handlers:
//    * Значение range на котором произошло событие 'input', форматируем и выводим в outputCurrentValue
//    */
//   let range = document.querySelectorAll('.range');
//   const formatter = new Intl.NumberFormat('ru');

//   range.forEach(item => {
//     let parent = item.closest('.range-wrap');
//     let outputCurrentValue = parent.querySelector('.range__output-current-value');
//     let measureUnit = outputCurrentValue.querySelector('span').innerText;

//     item.addEventListener('input', function() {
//       outputCurrentValue.innerHTML = formatter.format(this.value) + " " + measureUnit;
//     });
//   });

// }());

function initMap() {

  let centerMap = {lat:57.150615, lng:65.546028};
  let office = {lat:57.129602, lng:65.536414};
  let stockTm = {lat:57.131456, lng:65.518459};
	let base = {lat:57.096293, lng:65.670803};
  let avtoremontnaya = {lat:57.153792, lng:65.467902};
  let sherbakova = {lat:57.194937, lng:65.590188};

  // Определяем клиент, чтобы после отключить перетаскивание карты на смартфонах.  Часть 1.
  // let isDraggable;
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// 	isDraggable = false;
	// } else {
	// 	isDraggable = true;
	// }

	let myMap = new google.maps.Map(document.getElementById("map"), {
		center: centerMap,
    zoom: 12,
    		// Дополнительные настройки

		// Удалить элементы управления картой
    disableDefaultUI: true,
    // mapTypeControl: false,

		// Запретить увеличение карты по скроллу
		scrollwheel: false,

		// Отключить перетаскивание для смартфонов. Часть 2.
    // draggable: isDraggable,

    styles: [
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": "2"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "saturation": "-28"
          },
          {
            "lightness": "-10"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "-1"
          },
          {
            "lightness": "-12"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "labels.text",
        "stylers": [
          {
            "lightness": "-31"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "lightness": "-74"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "lightness": "65"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": "-15"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": "0"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "0"
          },
          {
            "lightness": "-9"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "lightness": "-14"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "lightness": "-35"
          },
          {
            "gamma": "1"
          },
          {
            "weight": "1.39"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "lightness": "-19"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "lightness": "46"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
          {
            "lightness": "-13"
          },
          {
            "weight": "1.23"
          },
          {
            "invert_lightness": true
          },
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#adadad"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]
  });

  let markerOffice = new google.maps.Marker({
		position: office,
		map: myMap,
		title: "офис: г.Тюмень, ул.Революции, д.89",
		icon: "assets/img/map/mark-red.png"
  });

  let contentStringOffice =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Офис</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г. Тюмень, ул. Революции, д.89</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowOffice = new google.maps.InfoWindow({
		content: contentStringOffice,
    maxWidth: 400,
  });

  markerOffice.addListener('click', function() {
		infoWindowOffice.open(myMap, markerOffice);
  });

  // маркер тимирязева
	let markerStockTm = new google.maps.Marker({
		position: stockTm,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.Тимирязева, д.9, стр.10",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringStockTm =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.Тимирязева, д.9, стр.10</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowStockTm = new google.maps.InfoWindow({
		content: contentStringStockTm,
		maxWidth: 400
	});

	markerStockTm.addListener('click', function() {
		infoWindowStockTm.open(myMap, markerStockTm);
	});

	// маркер ялуторовский тракт
	let markerBase = new google.maps.Marker({
		position: base,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.11-км Ялуторовского тракта, стр.7",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringBase =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowBase = new google.maps.InfoWindow({
		content: contentStringBase,
		maxWidth: 400
	});

	markerBase.addListener('click', function() {
		infoWindowBase.open(myMap, markerBase);
	});

	// маркер авторемонтная
	let markerAvtoremontnaya = new google.maps.Marker({
		position: avtoremontnaya,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.Авторемонтная д.9, склад №11",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringAvtoremontnaya =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.Авторемонтная д.9, склад №11</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowAvtoremontnaya = new google.maps.InfoWindow({
		content: contentStringAvtoremontnaya,
		maxWidth: 400
	});

	markerAvtoremontnaya.addListener('click', function() {
		infoWindowAvtoremontnaya.open(myMap, markerAvtoremontnaya);
  });

	// маркер авторемонтная
	let markerSherbakova = new google.maps.Marker({
		position: sherbakova,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.Щербакова д.160, стр №3",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringSherbakova =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.Щербакова д.160, стр №3</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowSherbakova = new google.maps.InfoWindow({
		content: contentStringSherbakova,
		maxWidth: 400
	});

	markerSherbakova.addListener('click', function() {
		infoWindowSherbakova.open(myMap, markerSherbakova);
	});
}
/**
 * Скрипт для яндекс карты
 */
// ymaps.ready(function () {
//   var myMap = new ymaps.Map("map", {
//     center: [57.129626, 65.536304],
//     zoom: 12
//   });

//   myMap.behaviors.disable([
//     'scrollZoom'
//   ]);

//   myMap.controls
//     .remove('searchControl')
//     .remove('typeSelector')
//     .remove('rulerControl');

//   var officeMark = new ymaps.Placemark([57.129626, 65.536304], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Офис</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г. Тюмень, ул. Революции, д.89</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Офис</b></div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-red.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   var stockTimiryaz = new ymaps.Placemark([57.131390, 65.518358], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-green.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   var stockAvtorem = new ymaps.Placemark([57.153746, 65.468409], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-green.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   var stockYalutor = new ymaps.Placemark([57.096272, 65.670586], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-green.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   myMap.geoObjects.add(officeMark).add(stockTimiryaz).add(stockAvtorem).add(stockYalutor);
// });

(function() {
  'use strict';
   let menuMobileToggle = document.getElementById('menu-toggle');
   let dropdownMenuMobile = document.getElementById('dropdownMenuMobile');
   let dropdownMenuMobileLink = document.querySelectorAll('.dropdown-menu-mobile__link');

   menuMobileToggle.onclick = function(e) {
    e.preventDefault();

    if (dropdownMenuMobile.classList.contains('dropdown-menu-mobile--show-menu')) {
      dropdownMenuMobile.classList.remove('dropdown-menu-mobile--show-menu');
      return;
    }

    dropdownMenuMobile.classList.add('dropdown-menu-mobile--show-menu');
  };

  window.onscroll = function() {
    dropdownMenuMobile.classList.remove('dropdown-menu-mobile--show-menu');
  };

  dropdownMenuMobileLink.forEach(item => {
    item.addEventListener('click', function() {
      if (this.classList.contains('dropdown-menu-mobile__link-arrow')) return;
      dropdownMenuMobile.classList.remove('dropdown-menu-mobile--show-menu');
    });
  });

})();

$(document).ready(function(){
  var indexHeaderSlider = $('#carouselIndexPade');

  indexHeaderSlider.owlCarousel({
    autoplay: true,
    loop: true,
      smartSpeed: 1500,
      responsive: {
        0:{
            items:1,
            dots: true
        },
        992:{
            items:1,
            dots: false
        },
      }
  });

  $('.slider-head__buttom--next').click(function() {
    indexHeaderSlider.trigger('next.owl.carousel');
  });

  $('.slider-head__buttom--prev').click(function() {
    indexHeaderSlider.trigger('prev.owl.carousel');
  });
});

(function() {
  'use strict';
  /**@param {DOM[]} tabs коллекция всех табов на сайте*/
  let tabs = document.querySelectorAll('.tabs');

  /**
  * на все табы вешаем обработчики
  *
  * @param {number} currentIndexActiveItem индекс таба и индекс страницы tab__content (начальное значение 0, что соответсвует перевому, по умолчанию активному табу)
  * @param {DOM[]} tabsHeaderItems коллекция табов текущего tabs[item]
  * @param {DOM[]} tabsContentItems коллекция страниц текущего tabs[item]
  * По клику определяем индекс элемента, на котором произошло событие
  * Записываем его индекс в переменную currentIndexActiveItem
  * Делаем активным элемент на котором произошел клик (item[currentIndexActiveItem])
  **/
  tabs.forEach(item => {
    let currentIndexActiveItem = 0;
    let tabsHeaderItems = item.querySelectorAll('.tabs__header-item');
    let tabsContentItems = item.querySelectorAll('.tabs__content');

    item.addEventListener('click', function(event) {
      if (event.target != tabsHeaderItems[currentIndexActiveItem] && event.target.matches('.tabs__header-item')) {
        tabsHeaderItems[currentIndexActiveItem].classList.remove('tabs__header-item--active');
        tabsContentItems[currentIndexActiveItem].classList.remove('tabs__content--active');

        tabsHeaderItems.forEach((elem, index) => {
          if (elem == event.target) {
            currentIndexActiveItem = index;
            elem.classList.add('tabs__header-item--active');
            tabsContentItems[currentIndexActiveItem].classList.add('tabs__content--active');
          }
        });
      }
    });
  });
}());

const sendFormOrder = (function(){
  'use strict';

  // const _formOrder = document.getElementById('indexGeneralOrder');

  // _formOrder.onsubmit = sendRequest;
  /**
   * sendRequest() - отправляет форму
   * @param {*} e - event события submit
   * @param {*} form - форма, которую отправляем
   * Открываем запрос
   * Отправляем запрос
   * По событиям на запросе, выводим результат на страницу
   */

  function sendRequest(e, form) {
    // e.preventDefault();
    let _xhttpPost = new XMLHttpRequest();

    _xhttpPost.open('POST', 'php/form-order.php', true);
    _xhttpPost.send(collectsObjectToSend(e.target));

    _xhttpPost.onreadystatechange = function(data) {
      if (this.status == 404) {
        let resultQuery = false;
        outputResultToPage(e.target, resultQuery);
      }
      if (this.readyState == 4 && this.status == 200) {
        let resultQuery = this.responseText;
        outputResultToPage(e.target, resultQuery);
      }
    };

    _xhttpPost.onerror = function(data) {
      let resultQuery = false;
      outputResultToPage(e.target, resultQuery);
    };
  }

  /**
   * collectsObjectToSend() - собирает соллекцию для отправки на сервер
   * @param {*} form - форма из полей которой необходимо собрать коллекцию
   * @var inputs - поля формы
   * @var currentSelect - поля формы
   * @var textarea - поля формы
   * @var inputSelectAttrNameAll - коллекция для отправки
   * 1. записываем в коллекцию скрытые поля для заголовка в ф-цию mail()
   * 2. записываем то, что в select в атрибуте name
   * 3. записываем оставшиеся поля
   * 4. если checkbox без засора/засор
   * Возвращаем готовую коллекцию
   */
  function collectsObjectToSend(form) {
    const inputs = form.querySelectorAll('input');
    const currentSelect = form.querySelectorAll('.select-current');
    const textarea = form.querySelectorAll('textarea');

    let inputSelectAttrNameAll = new FormData();


    inputs.forEach(item => {
      if (!item.matches('[type="hidden"]')) return;

      let key = item.getAttribute('name');

      inputSelectAttrNameAll.append(key, item.value);
    });

    currentSelect.forEach(item => {
      if (!item.hasAttribute('name')) return;
      let key = item.getAttribute('name');
      inputSelectAttrNameAll.append(key, item.innerText);
    });

    inputs.forEach(item => {
      if (item.matches('[type="hidden"]')) return;

      let key = item.getAttribute('name');

      if (item.matches('[type="checkbox"]') && item.matches('[type="checkbox"]').checked) {
        inputSelectAttrNameAll.append(key, 'С засором');
      } else if(item.matches('[type="checkbox"]') && !item.matches('[type="checkbox"]').checked) {
        inputSelectAttrNameAll.append(key, 'Без засора');
      } else if (key == 'weight') {
        inputSelectAttrNameAll.append(key, `${item.value} кг/шт`);
      } else {
        inputSelectAttrNameAll.append(key, item.value);
      }
    });

    textarea.forEach(item => {
      let key = item.getAttribute('name');
      inputSelectAttrNameAll.append(key, item.value);
    });

    return inputSelectAttrNameAll;
  }

  /**
   * outputResultToPage() - выводит результат успех/неуспех на страницу
   * @param {*} form - форма
   * @param {bool} resultQuery - ответ серевера true/false
   */
  function outputResultToPage(form, resultQuery) {
    if (resultQuery) {
      form.querySelector('.result-query-error').classList.remove('show-result-query');
      form.querySelector('.result-query-success').classList.add('show-result-query');
    } else {
      form.querySelector('.result-query-success').classList.remove('show-result-query');
      form.querySelector('.result-query-error').classList.add('show-result-query');
    }
  }

  return {sendRequest};
})();

(function() {
  'use strict';
  let viber = document.getElementById('viber');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    viber.href = "viber://add?number=+79634521601";
  } else {
    viber.href = "viber://chat?number=+79634521601";
  }
})();

// /**
//  * Все обработчики в данной файле реализуют только общее поведение элементов:
//  * input
//  * Стилизуют
//  * Обрабатывют поведение
//  * Формируют сообщение об ошибке
//  *
//  * Не выполняет:
//  * передачу значений в другие скрипты,
//  * не обрабатывает данные для подсчета чего-либо,
//  * не хранит данные,
//  */

const handlerInputs = (function() {

  /**
   * @param _inputs - коллекция инпутов
   */
  const _inputs = document.querySelectorAll('.input');

  /**
   * showErrorsInput() - показывает ошибку на инпуте
   * Принимает input на котором необходимо показать ошибку
   * Если input в фокусе снимает ошибку
   */
  function showErrorsInput(input) {
    if (input.matches('.input')) {
      let error = input.nextElementSibling;
      let currentText = input.getAttribute('placeholder');
      error.querySelector('.error-no-selected__message-text').innerText = currentText;

      input.onfocus = function() {
        input.classList.remove('error-no-selected');
        error.style.display = 'none';
      };

      input.classList.add('error-no-selected');
      error.style.display = 'flex';
    } else {
      console.log('Переданный элемент не .input');
    }
  }

  // showErrorsInput передаем функию для использования внешними скриптами
  return {
    showErrorsInput
  };
})();

(function() {
  'use strict';

  //Задаем инпут
  let inputsTel = document.querySelectorAll('.tel-field');

  //Функция маски инпута
  function setMask(event) {
    //Задаем в переменную нажатую клавишу
    let pressedKey;
    //Условие, проверяющее нажатую клавишу
    event.keyCode && (pressedKey === event.keyCode);
    //Задаем в переменную позицию в инпуте, с которой будет доступен ввод цифр
    let numberPos = this.selectionStart;
    //Устанавливаем возможность ввода цифр с третьей позиции
    if (numberPos < 3) {
        event.preventDefault();
    }
    //Задаем внешний вид маски инпута
    let maskType = '+7 (___) ___-__-__',
        i = 0,
    //Проверка и замена value инпута по буквенно
        replaceValue = maskType.replace(/\D/g, ''),
        prevValue = this.value.replace(/\D/g, ''),
        currentValue = maskType.replace(/[_\d]/g, (a) => {
            return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
        });
    //Защита от стирания первых двух цифр (+7)
    i = currentValue.indexOf('_');
    if (i != -1) {
      i < 5 && (i = 3);
      currentValue = currentValue.slice(0, i);
    }
    //Регулярное выражение для проверки value инпута
    let reg = maskType.substr(0, this.value.length).replace(/_+/g,

    function(a) {
        return '\\d{1,' + a.length + '}';
    }).replace(/[+()]/g, '\\$&');

    reg = new RegExp('^' + reg + '$');
    //Проверка содержимого инпута на регулярное выражение, длинну и нажимаемые клавиши
    if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
        this.value = currentValue;
    } else if (event.type === 'blur' && this.value.length < 5) {
        this.value = '';
    }

  // Устанавливаем курсор в конец строки в инпуте, если при нажатии кнопки он стоит не в конце


    inputsTel.forEach(input => {
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }

  //Запуск функции setMask через обработчик событий
  inputsTel.forEach(input => {
    input.addEventListener('input', setMask, false);
    input.addEventListener('focus', setMask, false);
    input.addEventListener('blur', setMask, false);
    input.addEventListener('keydown', setMask, false);
  });


})();

const ranges = (function() {
  'use strict';

  /**
   * Обработчик range
   *
   * Методом forEach() на каждый item коллекции range устанавливаем прослушку addEventListener()
   *
   * variables:
   * range - коллекция всех range`ей на сайте
   * formatter - через конструктор задает красивый числовой формат с пробелами в разрядах
   * parent - родитель range`а
   * outputCurrentValue - блок в который выводится значение range`a
   * measureUnit - хранит aббревиатуру единицы измериния, которая прописана в HTML разметке
   *
   * handlers:
   * Значение range на котором произошло событие 'input', форматируем и выводим в outputCurrentValue
   */
  let range = document.querySelectorAll('.range');
  // const formatter = new Intl.NumberFormat('ru');

  range.forEach(item => {
    let parent = item.closest('.range-wrap');
    let outputCurrentValue = parent.querySelector('.range__output-current-value-input');

    item.addEventListener('input', function() {
      outputCurrentValue.value = this.value
    });

    outputCurrentValue.addEventListener('input', function() {
      item.value = this.value;
    });

    outputCurrentValue.addEventListener('focus', function() {
      this.value = '';
    });

    outputCurrentValue.addEventListener('blur', function() {
      this.value = item.value;
    });
  });
})();

/**
 * Все обработчики в данной файле реализуют только общее поведение элементов:
 * Select
 * Стилизуют
 * Обрабатывют поведение
 * Формируют сообщение об ошибке
 *
 * Не выполняет:
 * передачу значений в другие скрипты,
 * не обрабатывает данные для подсчета чего-либо,
 * не хранит данные,
 */
const customSelects = (function() {
  'use strict';

  /**
   * Обработчик пользовательских селектов
   *
   * @param {DOM[]} _select - коллекция всех селектов на сайте
   * @param {DOM[]} _selectHeader - шапки селектов
   * @param {DOM[]} _selectOption - коллекция тел внутри селектов, с вариантами выбора (option)
   *
   * handlers:
   * _selectToggle - по клику на селекте активирует его
   * _outFocus - при потере фокуса на селекте закрваем его
   * _setSelected - по клику на option устанавливает его как выбранный и устанавливает его атрибут [this.name="this.value"]
   */
  let _select = document.querySelectorAll(".select");
  let _selectHeader = document.querySelectorAll(".select__header");
  let _selectOption = document.querySelectorAll(".select__option");

  _selectHeader.forEach(item => {
    item.addEventListener("click", _selectToggle);
  });

  _select.forEach(item => {
    item.addEventListener("blur", _outFocus);
  });

  _selectOption.forEach(item => {
    item.addEventListener("click", _setSelected);
  });

  function _selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  /**
   * _setSelected() Устанавливает в select выбранный элемент из option
   * из option получаем текст и атрибут name
   * присваиваем полученные значения select`у в .select-current
   * закрываем выпадющий список
   */
  function _setSelected() {
    let text = this.innerText,
        attributeNameValue = this.getAttribute("name"),
        select = this.closest(".select"),
        currentSelect = select.querySelector(".select-current");

    currentSelect.setAttribute('name', attributeNameValue);
    currentSelect.innerText = text;

    select.classList.remove("is-active");
  }

  // При потере фокуса закрываем выпадающий список
  function _outFocus() {
    let thisSelect = this.closest(".select");
    thisSelect.classList.remove("is-active");
  }

  /**
   * showErrorsSelect() Показывает ошибку на селекте
   * @param {*} select элемент на котором надо показать ошибку
   */
  function showErrorsSelect(select) {
    if (select.matches('.select')) {
      let selectHeader = select.querySelector('.select__header');
      // в сообщении об ошибке (не выбран ни один пункт) записываем текст из заголовка select`a
      let currentText = select.querySelector('.select-current').innerText;
      select.querySelector('.error-no-selected__message-text').innerText = currentText;

      select.onfocus = function() {
        selectHeader.classList.remove('error-no-selected');
        selectHeader.querySelector('.error-no-selected__message').style.display = 'none';
      };

      selectHeader.classList.add('error-no-selected');
      selectHeader.querySelector('.error-no-selected__message').style.display = 'flex';
    } else {
      console.log('Переданный элемент не .select');
    }
  }

  /**
   * hideErrorsSelect() скрывает ошибку на селекте
   * @param {*} select
   */
  function hideErrorsSelect(select) {
    if (select.matches('.select')) {
      let selectHeader = select.querySelector('.select__header');

      selectHeader.classList.remove('error-no-selected');
      selectHeader.querySelector('.error-no-selected__message').style.display = 'none';
    } else {
      console.log('Переданный элемент не .select');
    }
  }

  return {
    showErrorsSelect,
    hideErrorsSelect
  };
}());

// /**
//  * Все обработчики в данной файле реализуют только общее поведение элементов:
//  * input
//  * Стилизуют
//  * Обрабатывют поведение
//  * Формируют сообщение об ошибке
//  *
//  * Не выполняет:
//  * передачу значений в другие скрипты,
//  * не обрабатывает данные для подсчета чего-либо,
//  * не хранит данные,
//  */

const handlerTextarea = (function() {

  /**
   * @param _textarea - коллекция инпутов
   */
  const _textarea = document.querySelectorAll('.textarea');

  /**
   * showErrorsTextarea() - показывает ошибку на инпуте
   * Принимает textarea на котором необходимо показать ошибку
   * Если textarea в фокусе снимает ошибку
   */
  function showErrorsTextarea(textarea) {
    if (textarea.matches('.textarea')) {
      let error = textarea.nextElementSibling;
      let currentText = textarea.getAttribute('placeholder');
      error.querySelector('.error-no-selected__message-text').innerText = currentText;

      textarea.onfocus = function() {
        textarea.classList.remove('error-no-selected');
        error.style.display = 'none';
      };

      textarea.classList.add('error-no-selected');
      error.style.display = 'flex';
    } else {
      console.log('Переданный элемент не .Textarea');
    }
  }

  // showErrorstextarea передаем функию для использования внешними скриптами
  return {
    showErrorsTextarea
  };
})();

const сheckbox = (function() {
  'use strict';

  /**
   * Обработчик checkbox - выбора типа доставки
   *
   * Методом forEach() на каждый item коллекции checkbox устанавливаем прослушку addEventListener()
   *
   * variables:
   * prevTextCheckbox - у каждого item`а = (checkbox) выбирает соседа перед checkbox
   * nextTextCheckbox - у каждого item`а = (checkbox) выбирает соседа после checkbox
   *
   * handlers:
   * Если checkbox.checked стилизуем соседа после
   * Если !checkbox.checked стилизуем соседа перед
   */
  let checkboxCalc = document.querySelectorAll('.checkbox-type-b');

  checkboxCalc.forEach(item => {
    let prevTextCheckbox = item.parentNode.previousElementSibling;
    let nextTextCheckbox = item.parentNode.nextElementSibling.querySelector('.checkbox-goup-type-b__text');

    item.addEventListener('change', function(){
      if (item.checked) {
        nextTextCheckbox.style.color = '#67af01';
        prevTextCheckbox.style.color = '#612228';
      }
      if (!item.checked) {
        nextTextCheckbox.style.color = '#612228';
        prevTextCheckbox.style.color = '#67af01';
      }
    });
  });
})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJnbG9iYWwvcHJpY2VzLmpzIiwic2VjdGlvbi9jYWxjdWxhdG9yLmpzIiwic2VjdGlvbi9jYXJkcy1wcm9kdWN0LmpzIiwic2VjdGlvbi9mb3Jtcy5qcyIsInNlY3Rpb24vaW5wdXRzLXRtcC5qcyIsInNlY3Rpb24vbWFwLmpzIiwic2VjdGlvbi9tb2JpbGUtbWVudS10b2dnbGUuanMiLCJzZWN0aW9uL293bC1jYXJvdXNlbC5qcyIsInNlY3Rpb24vdGFicy5qcyIsIm1vZHVsZXMvYWpheC5qcyIsIm1vZHVsZXMvaHJlZi12aWJlci5qcyIsIm1vZHVsZXMvaW5wdXRzLmpzIiwibW9kdWxlcy9waG9uZS1tYXNrLmpzIiwibW9kdWxlcy9yYW5nZXMuanMiLCJtb2R1bGVzL3NlbGVjdHMuanMiLCJtb2R1bGVzL3RleHRhcmVhLmpzIiwibW9kdWxlcy/RgWhlY2tib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIndXNlIHN0cmljdCc7XHJcblxyXG4gIC8qKlxyXG4gICogcHJpY2VNYXRlcmlhbHN7fSAtINC/0YDQsNC50YEg0L3QsCDRgdGL0YDRjNC1XHJcbiAgKlxyXG4gICogcHJpY2VNYXRlcmlhbHNb0YLQuNC/LdGB0YvRgNGM0Y9dO1xyXG4gICogcHJpY2VNYXRlcmlhbHNb0YLQuNC/LdGB0YvRgNGM0Y9dW9GC0LjQvy3QtNC+0YHRgtCw0LLQutC4XTtcclxuICAqIHByaWNlTWF0ZXJpYWxzW9GC0LjQvy3RgdGL0YDRjNGPXVvRgtC40L8t0LTQvtGB0YLQsNCy0LrQuF1b0YbQtdC90LAt0LrQsy3QvtGCLdC+0LHRitC10LzQsF07XHJcbiAgKi9cclxuIGNvbnN0IHByaWNlTWF0ZXJpYWxzID0ge1xyXG4gIFwiY2FyZGJvYXJkXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMS41LFxyXG4gICAgICAnMjAwJzogMixcclxuICAgICAgJzUwMCc6IDIuNSxcclxuICAgICAgJzEwMDAnOiAzLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDMsXHJcbiAgICAgICcyMDAnOiAzLFxyXG4gICAgICAnNTAwJzogMyxcclxuICAgICAgJzEwMDAnOiAzLjUsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJwYXBlclwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDUuNSxcclxuICAgICAgJzIwMCc6IDUuNSxcclxuICAgICAgJzUwMCc6IDYsXHJcbiAgICAgICcxMDAwJzogNi41LFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDcsXHJcbiAgICAgICcyMDAnOiA3LFxyXG4gICAgICAnNTAwJzogOCxcclxuICAgICAgJzEwMDAnOiA4LFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwiYm9va3NcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA0LFxyXG4gICAgICAnMjAwJzogNCxcclxuICAgICAgJzUwMCc6IDUsXHJcbiAgICAgICcxMDAwJzogNS41LFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDUsXHJcbiAgICAgICcyMDAnOiA1LFxyXG4gICAgICAnNTAwJzogNSxcclxuICAgICAgJzEwMDAnOiA2LFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwibWFnYXppbmVzXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogNCxcclxuICAgICAgJzIwMCc6IDQsXHJcbiAgICAgICc1MDAnOiA1LFxyXG4gICAgICAnMTAwMCc6IDUuNSxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDUsXHJcbiAgICAgICcxMDAwJzogNixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcIm5ld3NwYXBlcnNcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA0LjUsXHJcbiAgICAgICcyMDAnOiA0LjUsXHJcbiAgICAgICc1MDAnOiA1LFxyXG4gICAgICAnMTAwMCc6IDUuNSxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDUsXHJcbiAgICAgICcxMDAwJzogNixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImZpbG0tc3RyZXRjaFwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDgsXHJcbiAgICAgICcyMDAnOiAxMCxcclxuICAgICAgJzUwMCc6IDEyLFxyXG4gICAgICAnMTAwMCc6IDEyLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEzLFxyXG4gICAgICAnMjAwJzogMTMsXHJcbiAgICAgICc1MDAnOiAxMyxcclxuICAgICAgJzEwMDAnOiAxNSxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImZpbG0tcHZkXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogOCxcclxuICAgICAgJzIwMCc6IDEwLFxyXG4gICAgICAnNTAwJzogMTIsXHJcbiAgICAgICcxMDAwJzogMTIsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMTMsXHJcbiAgICAgICcyMDAnOiAxMyxcclxuICAgICAgJzUwMCc6IDEzLFxyXG4gICAgICAnMTAwMCc6IDE1LFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwiZmlsbS1jb2xvci1wdmRcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA2LFxyXG4gICAgICAnMjAwJzogNixcclxuICAgICAgJzUwMCc6IDcsXHJcbiAgICAgICcxMDAwJzogNyxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA4LFxyXG4gICAgICAnMjAwJzogOCxcclxuICAgICAgJzUwMCc6IDgsXHJcbiAgICAgICcxMDAwJzogOCxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImtlZ3NcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAyLjUsXHJcbiAgICAgICcyMDAnOiAyLjUsXHJcbiAgICAgICc1MDAnOiAzLFxyXG4gICAgICAnMTAwMCc6IDQsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogNCxcclxuICAgICAgJzIwMCc6IDQsXHJcbiAgICAgICc1MDAnOiA0LFxyXG4gICAgICAnMTAwMCc6IDQsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJwbGFzdGljLWNhbmlzdGVyc1wiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDUsXHJcbiAgICAgICcyMDAnOiA1LFxyXG4gICAgICAnNTAwJzogNixcclxuICAgICAgJzEwMDAnOiA3LFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEwLFxyXG4gICAgICAnMjAwJzogMTAsXHJcbiAgICAgICc1MDAnOiAxMCxcclxuICAgICAgJzEwMDAnOiAxMCxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImFsdW1pbnVtLWNhbnNcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxNSxcclxuICAgICAgJzIwMCc6IDE1LFxyXG4gICAgICAnNTAwJzogMTUsXHJcbiAgICAgICcxMDAwJzogMTUsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMjAsXHJcbiAgICAgICcyMDAnOiAyMCxcclxuICAgICAgJzUwMCc6IDIwLFxyXG4gICAgICAnMTAwMCc6IDIwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwicGxhc3RpYy1ib3hcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxLFxyXG4gICAgICAnMjAwJzogMSxcclxuICAgICAgJzUwMCc6IDEsXHJcbiAgICAgICcxMDAwJzogMSxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxLFxyXG4gICAgICAnMjAwJzogMSxcclxuICAgICAgJzUwMCc6IDEsXHJcbiAgICAgICcxMDAwJzogMSxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcInBvbHlldGh5bGVuZS1waXBlXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMTAsXHJcbiAgICAgICcyMDAnOiAxMCxcclxuICAgICAgJzUwMCc6IDExLFxyXG4gICAgICAnMTAwMCc6IDEyLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEyLFxyXG4gICAgICAnMjAwJzogMTIsXHJcbiAgICAgICc1MDAnOiAxMixcclxuICAgICAgJzEwMDAnOiAxMixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImNoZW1pY2FsLWNvbnRhaW5lcnNcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDYsXHJcbiAgICAgICcxMDAwJzogNyxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA3LFxyXG4gICAgICAnMjAwJzogNyxcclxuICAgICAgJzUwMCc6IDcsXHJcbiAgICAgICcxMDAwJzogMTAsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJwb2x5ZXRoeWxlbmVcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDYsXHJcbiAgICAgICcxMDAwJzogNyxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA3LFxyXG4gICAgICAnMjAwJzogNyxcclxuICAgICAgJzUwMCc6IDcsXHJcbiAgICAgICcxMDAwJzogMTAsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJnbGFzc1wiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDAuNyxcclxuICAgICAgJzIwMCc6IDAuNyxcclxuICAgICAgJzUwMCc6IDAuOSxcclxuICAgICAgJzEwMDAnOiAxLjIsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMS41LFxyXG4gICAgICAnMjAwJzogMS41LFxyXG4gICAgICAnNTAwJzogMS41LFxyXG4gICAgICAnMTAwMCc6IDEuNSxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImdsYXNzLXdoaXRlLWJyb3duXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMixcclxuICAgICAgJzIwMCc6IDIsXHJcbiAgICAgICc1MDAnOiAyLFxyXG4gICAgICAnMTAwMCc6IDIsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMyxcclxuICAgICAgJzIwMCc6IDMsXHJcbiAgICAgICc1MDAnOiAzLFxyXG4gICAgICAnMTAwMCc6IDMsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJnbGFzcy1ncmVlblwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEsXHJcbiAgICAgICcyMDAnOiAxLFxyXG4gICAgICAnNTAwJzogMSxcclxuICAgICAgJzEwMDAnOiAxLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEuMixcclxuICAgICAgJzIwMCc6IDEuMixcclxuICAgICAgJzUwMCc6IDEuMixcclxuICAgICAgJzEwMDAnOiAxLjUsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJiYWdzXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogOCxcclxuICAgICAgJzIwMCc6IDgsXHJcbiAgICAgICc1MDAnOiAxMCxcclxuICAgICAgJzEwMDAnOiAxMixcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxMixcclxuICAgICAgJzIwMCc6IDEyLFxyXG4gICAgICAnNTAwJzogMTIsXHJcbiAgICAgICcxMDAwJzogMTIsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJvaWxcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxMCxcclxuICAgICAgJzIwMCc6IDEwLFxyXG4gICAgICAnNTAwJzogMTAsXHJcbiAgICAgICcxMDAwJzogMTAsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMTAsXHJcbiAgICAgICcyMDAnOiAxMCxcclxuICAgICAgJzUwMCc6IDEwLFxyXG4gICAgICAnMTAwMCc6IDEwLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBcInRleHRpbGVcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAwLFxyXG4gICAgICAnMjAwJzogMCxcclxuICAgICAgJzUwMCc6IDAsXHJcbiAgICAgICcxMDAwJzogMCxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAwLFxyXG4gICAgICAnMjAwJzogMCxcclxuICAgICAgJzUwMCc6IDAsXHJcbiAgICAgICcxMDAwJzogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZ2V0UHJpY2VTZWxlY3RlZFR5cGVNYXRlcmlhbHMoc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzLCB0eXBlRGVsaXZlcnksIHdlaWdodEtnKSB7XHJcbiAgICBsZXQga2V5V2VpZ2h0S2cgPSAnJztcclxuICAgIGlmICgrd2VpZ2h0S2cgPCAyMDApIGtleVdlaWdodEtnID0gJzAnO1xyXG4gICAgaWYgKCt3ZWlnaHRLZyA+PSAyMDAgJiYgK3dlaWdodEtnIDwgNTAwKSBrZXlXZWlnaHRLZyA9ICcyMDAnO1xyXG4gICAgaWYgKCt3ZWlnaHRLZyA+PSA1MDAgJiYgK3dlaWdodEtnIDwgMTAwMCkga2V5V2VpZ2h0S2cgPSAnNTAwJztcclxuICAgIGlmICgrd2VpZ2h0S2cgPj0gMTAwMCkga2V5V2VpZ2h0S2cgPSAnMTAwMCc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNbc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzXVt0eXBlRGVsaXZlcnldW2tleVdlaWdodEtnXTtcclxuICB9LFxyXG5cclxuICBnZXRNYXhQcmljZU1hdGVyaWFsKHR5cGVNYXRlcmlhbHMpIHtcclxuICAgIGxldCBtYXggPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzW3R5cGVNYXRlcmlhbHNdKSB7XHJcbiAgICAgIHNldE1heCh0aGlzW3R5cGVNYXRlcmlhbHNdW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0TWF4KG9iaikg0LLQvtC30LLRgNCw0YnQsNC10YIg0LzQsNC60YHQuNC80LDQu9GM0L3Rg9GOINGG0LXQvdGDXHJcbiAgICAgKiBAcGFyYW0gb2JqINGC0LjQvyDRgdGL0YDRjNGPXHJcbiAgICAgKlxyXG4gICAgICog0LXRgdC70Lgg0LrQu9GO0YfQvtC8INGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGK0LXQutGCINC30LDQv9GD0YHQutCw0LXQvCDRgNC10LrRg9GA0YHQuNGOXHJcbiAgICAgKiDQutC+0LPQtNCwINC00L7RiNC70Lgg0LTQviDQsdCw0LfRiyDRgNC10LrRg9GA0YHQuNC4INGB0YDQsNCy0L3QuNCy0LDQtdC8INGBIG1heFxyXG4gICAgICog0LXRgdC70LggbWF4INC80LXQvdGM0YjQtSwg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LIgbWF4INC90L7QstC+0LUg0LfQvdCw0YfQtdC90LjQtVxyXG4gICAgICog0YLQsNC6INC/0YDQvtGF0L7QtNC40Lwg0L/QviDQstGB0LXQvCDQt9C90LDRh9C10L3QuNGP0Lwg0YbQtdC90YtcclxuICAgICAqINCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC80LDQutGB0LjQvNCw0LvRjNC90L7QtVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldE1heChvYmopIHtcclxuICAgICAgbGV0IHRlbXAgPSBvYmo7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRlbXAgPT09IFwib2JqZWN0XCIgKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRlbXApIHNldE1heCh0ZW1wW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJykgbWF4ID0gTWF0aC5tYXgobWF4LCB0ZW1wKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWF4O1xyXG4gIH0sXHJcblxyXG4gIGdldE1pblByaWNlTWF0ZXJpYWwodHlwZU1hdGVyaWFscykge1xyXG4gICAgbGV0IG1pbiA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXNbdHlwZU1hdGVyaWFsc10pIHtcclxuICAgICAgc2V0TWluKHRoaXNbdHlwZU1hdGVyaWFsc11ba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRNaW4ob2JqKSDQstC+0LfQstGA0LDRidCw0LXRgiDQvNCw0LrRgdC40LzQsNC70YzQvdGD0Y4g0YbQtdC90YNcclxuICAgICAqIEBwYXJhbSBvYmog0YLQuNC/INGB0YvRgNGM0Y9cclxuICAgICAqXHJcbiAgICAgKiDQtdGB0LvQuCDQutC70Y7Rh9C+0Lwg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0YrQtdC60YIg0LfQsNC/0YPRgdC60LDQtdC8INGA0LXQutGD0YDRgdC40Y5cclxuICAgICAqINC60L7Qs9C00LAg0LTQvtGI0LvQuCDQtNC+INCx0LDQt9GLINGA0LXQutGD0YDRgdC40Lgg0YHRgNCw0LLQvdC40LLQsNC10Lwg0YEgbWluXHJcbiAgICAgKiDQtdGB0LvQuCBtaW4g0LHQvtC70YzRiNC1LCDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQsiBtaW4g0L3QvtCy0L7QtSDQt9C90LDRh9C10L3QuNC1XHJcbiAgICAgKiDRgtCw0Log0L/RgNC+0YXQvtC00LjQvCDQv9C+INCy0YHQtdC8INC30L3QsNGH0LXQvdC40Y/QvCDRhtC10L3Ri1xyXG4gICAgICog0LLQvtC30LLRgNCw0YnQsNC10Lwg0LzQuNC90LjQvNCw0LvRjNC90L7QtVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldE1pbihvYmopIHtcclxuICAgICAgbGV0IHRlbXAgPSBvYmo7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRlbXAgPT09IFwib2JqZWN0XCIgKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRlbXApIHNldE1pbih0ZW1wW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gPT09IG51bGwpIHtcclxuICAgICAgICBtaW4gPSB0ZW1wO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gIT09IG51bGwpIG1pbiA9IE1hdGgubWluKG1pbiwgdGVtcCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1pbjtcclxuICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiogcHJpY2VQYWxsZXRze30gLSDQv9GA0LDQudGBINC90LAg0L/QvtC00LTQvtC90YtcclxuKlxyXG4qIHByaWNlTWF0ZXJpYWxzW9GB0L7RgNGCLdC/0L7QtNC00L7QvdC+0LJdO1xyXG4qIHByaWNlTWF0ZXJpYWxzW9GB0L7RgNGCLdC/0L7QtNC00L7QvdC+0LJdW9GC0LjQvy3QtNC+0YHRgtCw0LLQutC4XTtcclxuKiBwcmljZU1hdGVyaWFsc1vRgdC+0YDRgi3Qv9C+0LTQtNC+0L3QvtCyXVvRgtC40L8t0LTQvtGB0YLQsNCy0LrQuF1b0L3QsNC70LjRh9C40LUt0LrQu9C10LnQvNCwLUVwYWxdO1xyXG4qL1xyXG5jb25zdCBwcmljZVBhbGxldHMgPSB7XHJcbiAgXCJmaXJzdC1ncmFkZVwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDgwLFxyXG4gICAgICAnbm8tZXBhbCc6IDYwLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDkwLFxyXG4gICAgICAnbm8tZXBhbCc6IDcwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwic2Vjb25kLWdyYWRlXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICdlcGFsJzogNjAsXHJcbiAgICAgICduby1lcGFsJzogNDAsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICdlcGFsJzogNzAsXHJcbiAgICAgICduby1lcGFsJzogNTAsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJ0aGlyZC1ncmFkZVwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDIwLFxyXG4gICAgICAnbm8tZXBhbCc6IDIwLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDMwLFxyXG4gICAgICAnbm8tZXBhbCc6IDMwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFByaWNlU2VsZWN0ZWRHcmFkZVBhbGxldChzZWxlY3RlZEdyYWRlLCB0eXBlRGVsaXZlcnksIGVwYWwpIHtcclxuICAgIHJldHVybiB0aGlzW3NlbGVjdGVkR3JhZGVdW3R5cGVEZWxpdmVyeV1bZXBhbF07XHJcbiAgfSxcclxuXHJcbiAgZ2V0TWF4UHJpY2VQYWxsZXQoKSB7XHJcbiAgICBsZXQgbWF4ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBzZXRNYXgodGhpc1trZXldKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRNYXgob2JqKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gb2JqO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0ZW1wID09PSBcIm9iamVjdFwiICkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0ZW1wKSBzZXRNYXgodGVtcFtrZXldKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGVtcCA9PT0gJ251bWJlcicpIG1heCA9IE1hdGgubWF4KG1heCwgdGVtcCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1heDtcclxuICB9LFxyXG5cclxuICBnZXRNaW5QcmljZVBhbGxldCgpIHtcclxuICAgIGxldCBtaW4gPSBudWxsO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIHNldE1pbih0aGlzW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldE1pbihvYmopIHtcclxuICAgICAgbGV0IHRlbXAgPSBvYmo7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRlbXAgPT09IFwib2JqZWN0XCIgKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRlbXApIHNldE1pbih0ZW1wW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gPT09IG51bGwpIHtcclxuICAgICAgICBtaW4gPSB0ZW1wO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gIT09IG51bGwpIG1pbiA9IE1hdGgubWluKG1pbiwgdGVtcCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1pbjtcclxuICB9LFxyXG59O1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8qKlxyXG4gICAqINCf0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQutCw0LvRjNC60YPQu9GP0YLQvtGA0LAg0YHRi9GA0YzRj1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtET019IHRyYXNoINC30LDRgdC+0YBcclxuICAgKiBAcGFyYW0ge0RPTX0gbWF0ZXJpYWxzRGVsaXZlcnlUeXBlINGC0LjQvyDQtNC+0YHRgtCw0LLQutC4XHJcbiAgICogQHBhcmFtIHtET019IG1hdGVyaWFsc0tnINC60LjQu9C+0LPRgNCw0LzQvNGLINGB0YvRgNGM0Y9cclxuICAgKiBAcGFyYW0ge0RPTX0gb3V0cHV0Q291bnRpbmdSZXN1bHQg0LfQtNC10YHRjCDQstGL0LLQvtC00LjQvCDRgdGB0YPQvNC80YMg0LIg0YDRg9Cx0LvRj9GFINC/0L4g0YHRi9GA0YzRjlxyXG4gICAqIEBwYXJhbSB7RE9NfSB0eXBlTWF0ZXJpYWxzINCy0LXRgdGMINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSBzZWxlY3Qg0LTQu9GPINGC0LjQv9CwINGB0YvRgNGM0Y9cclxuICAgKiBAcGFyYW0ge0RPTX0gY3VycmVudFR5cGVNYXRlcmlhbHMg0LLRi9Cx0YDQsNC90L3Ri9C5INGC0LjQvyDRgdGL0YDRjNGPXHJcbiAgICogQG1ldGhvZCBjdXN0b21TZWxlY3RzLnNob3dFcnJvcnNTZWxlY3QoKTsg0L/QvtC60LDQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDINC90LAgc2VsZWN0YGUsINC70L7Qs9C40LrQsCDRgNCw0LHQvtGC0Ysg0LzQtdGC0L7QtNCwINCyINGE0LDQudC70LUgbW9kdWxlcy9zZWxlY3RzLmpzXHJcbiAgICovXHJcbiAgbGV0IHRyYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrYm94Q2FsYycpO1xyXG4gIGxldCBtYXRlcmlhbHNEZWxpdmVyeVR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGVyaWFsc0RlbGl2ZXJ5VHlwZVwiKTtcclxuICBsZXQgbWF0ZXJpYWxzS2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0ZXJpYWxzS2cnKTtcclxuICBsZXQgbWF0ZXJpYWxzS2dJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRlcmlhbHNLZ0lucHV0Jyk7XHJcbiAgbGV0IG91dHB1dENvdW50aW5nUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdE1hdGVyaWFsc0N1cnJlbmN5IHNwYW4nKTtcclxuICBsZXQgdHlwZU1hdGVyaWFscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlTWF0ZXJpYWxzJyk7XHJcbiAgbGV0IGN1cnJlbnRUeXBlTWF0ZXJpYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUeXBlTWF0ZXJpYWxzJyk7XHJcblxyXG4gIC8qKlxyXG4gICAqINCf0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQutCw0LvRjNC60YPQu9GP0YLQvtGA0LAg0L/QvtC00LTQvtC90L7QslxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtET019IGNoZWNrYm94RXBhbCBjaGVja2JveCDQvdCw0LvQuNGH0LjQtSDQutC70LXQudC80LAgRXBhbC5cclxuICAgKiBAcGFyYW0ge0RPTX0gcGFsbGV0R3JhZGUg0LLQtdGB0Ywg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5IHNlbGVjdCDQstGL0LHQvtGA0LAg0YHQvtGA0YLQsCDQv9C+0LTQtNC+0L3QvtCyXHJcbiAgICogQHBhcmFtIHtET019IGN1cnJlbnRQYWxsZXRHcmFkZSDQstGL0LHRgNCw0L3QvdGL0Lkg0YHQvtGA0YIg0L/QvtC00LTQvtC90L7QslxyXG4gICAqIEBwYXJhbSB7RE9NfSBwYWxsZXREZWxpdmVyeVR5cGUg0YLQuNC/INC00L7RgdGC0LDQstC60Lgg0L/QvtC00LTQvtC90L7QslxyXG4gICAqIEBwYXJhbSB7RE9NfSBwYWxsZXRzUXVhbnRpdHkg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtC00LTQvtC90L7QslxyXG4gICAqIEBwYXJhbSB7RE9NfSBvdXRwdXRDb3VudGluZ1Jlc3VsdEN1cnJlbmN5UGFsbGV0cyDQt9C00LXRgdGMINCy0YvQstC+0LTQuNC8INGB0YHRg9C80LzRgyDQsiDRgNGD0LHQu9GP0YUg0L/QviDQv9C+0LTQtNC+0L3QsNC8XHJcbiAgICogQG1ldGhvZCBjdXN0b21TZWxlY3RzLnNob3dFcnJvcnNTZWxlY3QoKTsg0L/RgNC40L3QuNC80LDQtdGCICDQv9C+0LrQsNC30YvQstCw0LXRgiDQvtGI0LjQsdC60YMg0L3QsCBzZWxlY3RgZVxyXG4gICAqL1xyXG4gIGxldCBjaGVja2JveEVwYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXBhbCcpO1xyXG4gIGxldCBwYWxsZXRHcmFkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxsZXRHcmFkZScpO1xyXG4gIGxldCBjdXJyZW50UGFsbGV0R3JhZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFBhbGxldEdyYWRlJyk7XHJcbiAgbGV0IHBhbGxldERlbGl2ZXJ5VHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxsZXREZWxpdmVyeVR5cGUnKTtcclxuICBsZXQgcGFsbGV0c1F1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbGxldHNSYW5nZScpO1xyXG4gIGxldCBwYWxsZXRzUmFuZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWxsZXRzUmFuZ2VJbnB1dCcpO1xyXG4gIGxldCBvdXRwdXRDb3VudGluZ1Jlc3VsdEN1cnJlbmN5UGFsbGV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRQYWxsZXRzQ3VycmVuY3knKTtcclxuXHJcbiAgLyoqXHJcbiAgICog0J/QtdGA0LXQvNC10L3QvdGL0LUg0LTQu9GPINC60LDQu9GM0LrRg9C70Y/RgtC+0YDQsCDRg9C90LjRh9GC0L7QttC10L3QuNGPINCw0YDRhdC40LLQsFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtET019IGRlc3RydWN0aW9uS2cg0LLQtdGBINCw0YDRhdC40LLQsCDQtNC70Y8g0YPQvdC40YfRgtC+0LbQtdC90LjRjyDQsiDQutCzXHJcbiAgICogQHBhcmFtIHtET019IG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lEZXN0cnVjdGlvbiDQt9C00LXRgdGMINCy0YvQstC+0LTQuNC8INGB0YHRg9C80LzRgyDQsiDRgNGD0LHQu9GP0YUg0L/QviDRg9C90LjRh9GC0L7QttC10L3QuNGOXHJcbiAgICovXHJcbiAgbGV0IGRlc3RydWN0aW9uS2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzdHJ1Y3Rpb25SYW5nZScpO1xyXG4gIGxldCBvdXRwdXRDb3VudGluZ1Jlc3VsdEN1cnJlbmN5RGVzdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0RGVzdHJ1Y3Rpb25DdXJyZW5jeScpO1xyXG5cclxuICAvKipcclxuICAgKiDQn9C10YDQtdC80LXQvdC90YvQtSDQtNC70Y8g0LrQsNC70YzQutGD0LvRj9GC0L7RgNCwINGD0L3QuNGH0YLQvtC20LXQvdC40Y8g0LDRgNGF0LjQstCwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RPTX0gZGVzdHJ1Y3Rpb25LZyDQstC10YEg0LDRgNGF0LjQstCwINC00LvRjyDRhdGA0LDQvdC10L3QuNGPINCyINC60LNcclxuICAgKiBAcGFyYW0ge0RPTX0gb3V0cHV0Q291bnRpbmdSZXN1bHRDdXJyZW5jeURlc3RydWN0aW9uINC30LTQtdGB0Ywg0LLRi9Cy0L7QtNC40Lwg0YHRgdGD0LzQvNGDINCyINGA0YPQsdC70Y/RhSDQtNC70Y8g0YXRgNCw0L3QtdC90LjRj1xyXG4gICAqL1xyXG4gIGxldCBzdG9yYWdlS2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcmFnZVJhbmdlJyk7XHJcbiAgbGV0IG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lTdG9yYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdFN0b3JhZ2VDdXJyZW5jeScpO1xyXG5cclxuICAvKipcclxuICAgKiDRhNC+0YDQvNCw0YLQuNGA0YPQtdGCINGH0LjRgdC70L5cclxuICAgKlxyXG4gICAqIEBjb25zdHJ1Y3RvciBmb3JtYXR0ZXLQoXVycmVuY3kg0YTQvtGA0LzQsNGC0LjRgNGD0LXQvCDQuNGC0L7Qs9C+0LLQvtC1INC30L3QsNGH0LXQvdC40LUg0LIg0YDRg9Cx0LvRj9GFINCyINGD0LTQvtCx0L3QvtGH0LjRgtCw0LXQvNC+0Lkg0YTQvtGA0LzQsNGC0LUg0YEg0YDQsNC30LTQtdC70LXQvdC40LXQvCDQvdCwINGA0LDQt9GA0Y/QtNGLINC4INC30L3QsNGH0LXQuiDQstCw0LvRjtGC0YtcclxuICAgKi9cclxuICBjb25zdCBmb3JtYXR0ZXLQoXVycmVuY3kgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJydVwiLCB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnUlVCJ1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAqINC/0YDQvtGB0LvRg9GI0LjQstCw0LXQvCDRgdC+0LHRi9GC0LjRj1xyXG4gICpcclxuICAqINCa0LDQu9GM0LrRg9C70Y/RgtC+0YAg0YHRi9GA0YzRjzpcclxuICAqIG1hdGVyaWFsc0tnIC0g0LjQt9C80LXQvdC10L3QuNGPINCy0LXRgdCwINCyINC60LNcclxuICAqIG1hdGVyaWFsc0RlbGl2ZXJ5VHlwZSAtINC40LfQvNC10L3QtdC90LjRjyDRgtC40L/QsCDQtNC+0YHRgtCw0LLQutC4XHJcbiAgKiB0cmFzaCAtINC40LfQvNC10L3QtdC90LjRjyDQvdCw0LvQuNGH0LjRjyDQt9Cw0YHQvtGA0LAg0LXRgdGC0Ywv0L3QtdGCXHJcbiAgKiB0eXBlTWF0ZXJpYWxzIC0g0LjQt9C80LXQvdC10L3QuNC1INGC0LjQv9CwINGB0YvRgNGM0Y9cclxuICAqKi9cclxuICBtYXRlcmlhbHNLZy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyDQtdGB0LvQuCDRgtC40L8g0YHRi9GA0Y8g0L3QtSDQstGL0LHRgNCw0L0sINC/0L7QutCw0LfRi9Cy0LDQtdC8IGVyb3JyINC90LAgc2VsZWN0YGVcclxuICAgIGlmICghY3VycmVudFR5cGVNYXRlcmlhbHMuZ2V0QXR0cmlidXRlKCduYW1lJykpIGN1c3RvbVNlbGVjdHMuc2hvd0Vycm9yc1NlbGVjdCh0eXBlTWF0ZXJpYWxzKTtcclxuICAgIGhhbmRsZXJFbnRlcmVkRGF0YU1hdGVyaWFscygpO1xyXG4gIH0pO1xyXG4gIG1hdGVyaWFsc0tnSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vINC10YHQu9C4INGC0LjQvyDRgdGL0YDRjyDQvdC1INCy0YvQsdGA0LDQvSwg0L/QvtC60LDQt9GL0LLQsNC10LwgZXJvcnIg0L3QsCBzZWxlY3RgZVxyXG4gICAgaWYgKCFjdXJyZW50VHlwZU1hdGVyaWFscy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkgY3VzdG9tU2VsZWN0cy5zaG93RXJyb3JzU2VsZWN0KHR5cGVNYXRlcmlhbHMpO1xyXG4gICAgaGFuZGxlckVudGVyZWREYXRhTWF0ZXJpYWxzKCk7XHJcbiAgfSk7XHJcbiAgbWF0ZXJpYWxzRGVsaXZlcnlUeXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXJFbnRlcmVkRGF0YU1hdGVyaWFscyk7XHJcbiAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlckVudGVyZWREYXRhTWF0ZXJpYWxzKTtcclxuICB0eXBlTWF0ZXJpYWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlckVudGVyZWREYXRhTWF0ZXJpYWxzKTtcclxuXHJcbiAgLyoqXHJcbiAgKiDQn9GA0L7RgdC70YPRiNC40LLQsNC10Lwg0YHQvtCx0YvRgtC40Y9cclxuICAqXHJcbiAgKiDQmtCw0LvRjNC60YPQu9GP0YLQvtGAINC/0L7QtNC00L7QvdC+0LI6XHJcbiAgKiBjaGVja2JveEVwYWwgLSDQuNC30LzQtdC90LXQvdC40LUg0L3QsNC70LjRh9C40Y8g0LrQu9C10LnQvNCwIEVwYWwg0L3QtdGCL9C10YHRgtGMXHJcbiAgKiBwYWxsZXRHcmFkZSAtINCy0YvQsdC+0YAg0YHQvtGA0YLQsCDQv9C+0LTQtNC+0L3QvtCyXHJcbiAgKiBwYWxsZXREZWxpdmVyeVR5cGUgLSDQuNC30LzQtdC90LXQvdC40LUg0YLQuNC/0LAg0LTQvtGB0YLQsNCy0LrQuFxyXG4gICogcGFsbGV0c1F1YW50aXR5IC0g0LjQt9C80LXQvdC10L3QuNC1INC60L7Qu9C40YfQtdGB0YLQstCwINC/0L7QtNC00L7QvdC+0LJcclxuICAqL1xyXG4gIGNoZWNrYm94RXBhbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyRW50ZXJlZERhdGFQYWxsZXRzKTtcclxuICBwYWxsZXRHcmFkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXJFbnRlcmVkRGF0YVBhbGxldHMpO1xyXG4gIHBhbGxldERlbGl2ZXJ5VHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyRW50ZXJlZERhdGFQYWxsZXRzKTtcclxuICBwYWxsZXRzUXVhbnRpdHkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vINC10YHQu9C4INC90LUg0LLRi9Cx0YDQsNC9INGB0L7RgNGCINC/0L7QtNC00L7QvdC+0LIsINC/0L7QutCw0LfRi9Cy0LDQtdC8IGVyb3JyINC90LAgc2VsZWN0YGVcclxuICAgIGlmICghY3VycmVudFBhbGxldEdyYWRlLmdldEF0dHJpYnV0ZSgnbmFtZScpKSBjdXN0b21TZWxlY3RzLnNob3dFcnJvcnNTZWxlY3QocGFsbGV0R3JhZGUpO1xyXG4gICAgaGFuZGxlckVudGVyZWREYXRhUGFsbGV0cygpO1xyXG4gIH0pO1xyXG4gIHBhbGxldHNSYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyDQtdGB0LvQuCDQvdC1INCy0YvQsdGA0LDQvSDRgdC+0YDRgiDQv9C+0LTQtNC+0L3QvtCyLCDQv9C+0LrQsNC30YvQstCw0LXQvCBlcm9yciDQvdCwIHNlbGVjdGBlXHJcbiAgICBpZiAoIWN1cnJlbnRQYWxsZXRHcmFkZS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkgY3VzdG9tU2VsZWN0cy5zaG93RXJyb3JzU2VsZWN0KHBhbGxldEdyYWRlKTtcclxuICAgIGhhbmRsZXJFbnRlcmVkRGF0YVBhbGxldHMoKTtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgKiDQn9GA0L7RgdC70YPRiNC40LLQsNC10Lwg0YHQvtCx0YvRgtC40Y9cclxuICAqXHJcbiAgKiDQmtCw0LvRjNC60YPQu9GP0YLQvtGAINGD0L3QuNGH0YLQvtC20LXQvdC40Y8g0LDRgNGF0LjQstCwOlxyXG4gICog0J/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQstC10YHQsCDQt9Cw0L/Rg9GB0LrQsNC10Lwg0YTRg9C90LrRhtC40Y4g0L/QvtC00YHRh9C10YLQsC5cclxuICAqINCf0L7Qu9GD0YfQtdC90L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YTQvtGA0LzQsNGC0LjRgNGD0LXQvCDQsiDRg9C00L7QsdC+0YfQuNGC0LDQtdC80L7QtSDRh9C40YHQu9C+LlxyXG4gICovXHJcbiAgZGVzdHJ1Y3Rpb25LZy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJlc3VsdFN1bUN1cnJlbmN5ID0gbWFrZXNDYWxjdWxhdGlvbkN1cnJlbmN5KDUsIHRoaXMudmFsdWUpO1xyXG4gICAgb3V0cHV0Q291bnRpbmdSZXN1bHRDdXJyZW5jeURlc3RydWN0aW9uLmlubmVySFRNTCA9IGZvcm1hdHRlctChdXJyZW5jeS5mb3JtYXQocmVzdWx0U3VtQ3VycmVuY3kpO1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAqINCf0YDQvtGB0LvRg9GI0LjQstCw0LXQvCDRgdC+0LHRi9GC0LjRj1xyXG4gICpcclxuICAqINCa0LDQu9GM0LrRg9C70Y/RgtC+0YAg0YXRgNCw0L3QtdC90LjRjyDQsNGA0YXQuNCy0LA6XHJcbiAgKiDQn9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INCy0LXRgdCwINC30LDQv9GD0YHQutCw0LXQvCDRhNGD0L3QutGG0LjRjiDQv9C+0LTRgdGH0LXRgtCwLlxyXG4gICog0J/QvtC70YPRh9C10L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRhNC+0YDQvNCw0YLQuNGA0YPQtdC8INCyINGD0LTQvtCx0L7Rh9C40YLQsNC10LzQvtC1INGH0LjRgdC70L4uXHJcbiAgKi9cclxuICBzdG9yYWdlS2cuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCByZXN1bHRTdW1DdXJyZW5jeSA9IG1ha2VzQ2FsY3VsYXRpb25DdXJyZW5jeSg1LCB0aGlzLnZhbHVlKTtcclxuICAgIG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lTdG9yYWdlLmlubmVySFRNTCA9IGZvcm1hdHRlctChdXJyZW5jeS5mb3JtYXQocmVzdWx0U3VtQ3VycmVuY3kpO1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAqINC+0LHRgNCw0LHQsNGC0YvQstCw0LXQvCDQstCy0LXQtNC10L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lwg0LTQsNC90L3Ri9C1INC4INC/0LXRgNC10LTQsNC10Lwg0LjRhSDQsiDQvNC10YLQvtC0INC+0LHRitC10LrRgtCwINC/0YDQsNC50YHQsCDQtNC70Y8g0LLRi9Cx0L7RgNC60Lgg0YbQtdC90YtcclxuICAqXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzIC0g0LfQvdCw0YfQtdC90Lgg0LDRgtGA0LjQsdGD0YLQsCAnbmFtZScsINC40YHQv9C+0LvRjNC30YPQtdC8INC60LDQuiDQutC70Y7RhyDQvtCx0YrQtdC60YLQsCBwcmljZU1hdGVyaWFsc1vRgtC40L/QsC3RgdGL0YDRjNGPXVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHR5cGVEZWxpdmVyeSAtIGNoZWNrYm94LCDQuNGB0L/QvtC70YzQt9GD0LXQvCDQutCw0Log0LrQu9GO0Ycg0L7QsdGK0LXQutGC0LAgcHJpY2VNYXRlcmlhbHNb0YLQuNC/0LAt0YHRi9GA0YzRj11b0YLQuNC/LdC00L7RgdGC0LDQstC60LhdXHJcbiAgKiBAcGFyYW0ge251bWJlcn0gcHJpY2UgLSDRhtC10L3QsCDQstGL0LHRgNCw0L3QvdC+0LPQviDRgtC+0LLQsNGA0LAsINCy0L7Qt9Cy0YDQsNGJ0LXQvdC90LDRjyDQvNC10YLQvtC00L7QvCBwcmljZU1hdGVyaWFscy5nZXRQcmljZVNlbGVjdGVkVHlwZU1hdGVyaWFscyhzZWxlY3RlZFR5cGVNYXRlcmlhbHMsIHR5cGVEZWxpdmVyeSwgbWF0ZXJpYWxzS2cudmFsdWUpXHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW59IHRyYXNoLmNoZWNrZWQgLSDQtdGB0LvQuCDQstGL0LHRgNCw0L0g0LfQsNGB0L7RgCBwcmljZSDRg9C80L3QvtC20LDQtdC8INC90LAgMC45XHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gb3V0cHV0Q291bnRpbmdSZXN1bHQgLSDQstGL0LLQvtC00LjQvCDRgNC10LfRg9C70YzRgtCw0YIg0L/QvtC00YHRh9C10YLQsCDQvdCwINGB0YLRgNCw0L3QuNGG0YNcclxuICAqKi9cclxuICBmdW5jdGlvbiBoYW5kbGVyRW50ZXJlZERhdGFNYXRlcmlhbHMoKSB7XHJcbiAgICBsZXQgc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzID0gY3VycmVudFR5cGVNYXRlcmlhbHMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBsZXQgdHlwZURlbGl2ZXJ5ID0gbWF0ZXJpYWxzRGVsaXZlcnlUeXBlLmNoZWNrZWQgPyAnb3VyLWRlbGl2ZXJ5JyA6ICdzZWxmLWRlbGl2ZXJ5JztcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzKSB7XHJcbiAgICAgIGxldCBwcmljZSA9IHByaWNlTWF0ZXJpYWxzLmdldFByaWNlU2VsZWN0ZWRUeXBlTWF0ZXJpYWxzKHNlbGVjdGVkVHlwZU1hdGVyaWFscywgdHlwZURlbGl2ZXJ5LCBtYXRlcmlhbHNLZy52YWx1ZSk7XHJcblxyXG4gICAgICBpZiAodHJhc2guY2hlY2tlZCkgcHJpY2UgPSBwcmljZSAqIDAuOTtcclxuXHJcbiAgICAgIG91dHB1dENvdW50aW5nUmVzdWx0LmlubmVySFRNTCA9IGZvcm1hdHRlctChdXJyZW5jeS5mb3JtYXQoIG1ha2VzQ2FsY3VsYXRpb25DdXJyZW5jeShwcmljZSwgbWF0ZXJpYWxzS2cudmFsdWUpICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqINC+0LHRgNCw0LHQsNGC0YvQstCw0LXQvCDQstCy0LXQtNC10L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lwg0LTQsNC90L3Ri9C1INC4INC/0LXRgNC10LTQsNC10Lwg0LjRhSDQsiDQvNC10YLQvtC0INC+0LHRitC10LrRgtCwINC/0YDQsNC50YHQsCDQtNC70Y8g0LLRi9Cx0L7RgNC60Lgg0YbQtdC90YtcclxuICAqXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRHcmFkZVBhbGxldCAtINC30L3QsNGH0LXQvdC40LUg0LDRgtGA0LjQsdGD0YLQsCAnbmFtZScsINC40YHQv9C+0LvRjNC30YPQtdC8INC60LDQuiDQutC70Y7RhyDQvtCx0YrQtdC60YLQsCBwcmljZVBhbGxldHNb0YHQvtGA0YIt0L/QvtC00LTQvtC90L7Qsl1cclxuICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlRGVsaXZlcnkgLSBjaGVja2JveCwg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LrQsNC6INC60LvRjtGHINC+0LHRitC10LrRgtCwIHByaWNlUGFsbGV0c1vRgdC+0YDRgi3Qv9C+0LTQtNC+0L3QvtCyXVvRgtC40L8t0LTQvtGB0YLQsNCy0LrQuF1cclxuICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVzZW5jZVN0YW1wRXBhbCAtIGNoZWNrYm94LCDQuNGB0L/QvtC70YzQt9GD0LXQvCDQutCw0Log0LrQu9GO0Ycg0L7QsdGK0LXQutGC0LAgcHJpY2VQYWxsZXRzW9GB0L7RgNGCLdC/0L7QtNC00L7QvdC+0LJdW9GC0LjQvy3QtNC+0YHRgtCw0LLQutC4XVvQvdCw0LvQuNGH0LjQtS3QutC70LXQudC80LAtZXBhbF1cclxuICAqIEBwYXJhbSB7bnVtYmVyfSBwcmljZSAtINGG0LXQvdCwINCy0YvQsdGA0LDQvdC90L7Qs9C+INGB0L7RgNGC0LAg0L/QvtC00LTQvtC90L7Qsiwg0LLQvtC30LLRgNCw0YnQtdC90L3QsNGPINC80LXRgtC+0LTQvtC8IHByaWNlTWF0ZXJpYWxzLmdldFByaWNlU2VsZWN0ZWRHcmFkZVBhbGxldChzZWxlY3RlZEdyYWRlUGFsbGV0LCB0eXBlRGVsaXZlcnksIHByZXNlbmNlU3RhbXBFcGFsKVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lQYWxsZXRzIC0g0LLRi9Cy0L7QtNC40Lwg0YDQtdC30YPQu9GM0YLQsNGCINC/0L7QtNGB0YfQtdGC0LAg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgKiovXHJcbiAgZnVuY3Rpb24gaGFuZGxlckVudGVyZWREYXRhUGFsbGV0cygpIHtcclxuICAgIGxldCBzZWxlY3RlZEdyYWRlUGFsbGV0ID0gY3VycmVudFBhbGxldEdyYWRlLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgbGV0IHR5cGVEZWxpdmVyeSA9IHBhbGxldERlbGl2ZXJ5VHlwZS5jaGVja2VkID8gJ291ci1kZWxpdmVyeScgOiAnc2VsZi1kZWxpdmVyeSc7XHJcbiAgICBsZXQgcHJlc2VuY2VTdGFtcEVwYWwgPSBjaGVja2JveEVwYWwuY2hlY2tlZCA/ICdlcGFsJyA6ICduby1lcGFsJztcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRHcmFkZVBhbGxldCkge1xyXG4gICAgICBsZXQgcHJpY2UgPSBwcmljZVBhbGxldHMuZ2V0UHJpY2VTZWxlY3RlZEdyYWRlUGFsbGV0KHNlbGVjdGVkR3JhZGVQYWxsZXQsIHR5cGVEZWxpdmVyeSwgcHJlc2VuY2VTdGFtcEVwYWwpO1xyXG4gICAgICBvdXRwdXRDb3VudGluZ1Jlc3VsdEN1cnJlbmN5UGFsbGV0cy5pbm5lckhUTUwgPSBmb3JtYXR0ZXLQoXVycmVuY3kuZm9ybWF0KCBtYWtlc0NhbGN1bGF0aW9uQ3VycmVuY3kocHJpY2UsIHBhbGxldHNRdWFudGl0eS52YWx1ZSkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICog0KPQvNC90L7QttCw0LXRgiDRhtC10L3RgyDRgtC+0LLQsNGA0LAg0L3QsCDQutC+0LvQuNGH0LXRgdGC0LLQvlxyXG4gICpcclxuICAqIEBwYXJhbSB7bnVtYmVyfSBwcmljZU1hdGVyaWFscyDRhtC10L3QsCDQt9CwINC10LTQuNC90LjRhtGDINGC0L7QstCw0YDQsFxyXG4gICogQHBhcmFtIHtudW1iZXJ9IG51bWJlcktpbG9ncmFtcyDQutC+0LvQuNGH0LXRgdGC0LLQvlxyXG4gICoqL1xyXG4gIGZ1bmN0aW9uIG1ha2VzQ2FsY3VsYXRpb25DdXJyZW5jeShwcmljZU1hdGVyaWFscywgbnVtYmVyS2lsb2dyYW1zKSB7XHJcbiAgICByZXR1cm4gcHJpY2VNYXRlcmlhbHMgKiBudW1iZXJLaWxvZ3JhbXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDQndCwINGA0L7QtNC40YLQtdC70YzRgdC60L7QvCDRjdC70LXQvNC10L3RgtC1INC/0L7QutCw0LfRi9Cy0LDQtdC8INC+0YjQuNCx0LrRg1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtET019IGN1cnJlbnRTZWxlY3Qg0Y3Qu9C10LzQtdC90YIg0YfRjNC10LPQviDRgNC+0LTQuNGC0LXQu9GPINCx0YPQtNC10Lwg0L3QsNGF0L7QtNC40YLRjFxyXG4gICAqINCf0YDQuCDRhNC+0LrRg9GB0LUsINC10YHQu9C4INC90LAg0Y3Qu9C10LzQtdC90YLQtSDQsdGL0LsgZXJyb3Ig0YHQvdC40LzQsNC10Lwg0LXQs9C+XHJcbiAgICog0J/QvtC60LDQt9GL0LLQsNC10LwgZXJyb3Ig0L3QsCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YJcclxuICAgKi9cclxuICAvLyBmdW5jdGlvbiBzaG93RXJyb3JzU2VsZWN0KGN1cnJlbnRTZWxlY3QpIHtcclxuICAvLyAgIGxldCBwYXJlbnRTZWxlY3QgPSBjdXJyZW50U2VsZWN0LmNsb3Nlc3QoJy5zZWxlY3QnKTtcclxuICAvLyAgIHBhcmVudFNlbGVjdC5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgIGN1cnJlbnRTZWxlY3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1uby1zZWxlY3RlZCcpO1xyXG4gIC8vICAgICBwYXJlbnRTZWxlY3QucXVlcnlTZWxlY3RvcignLmVycm9yLW5vLXNlbGVjdGVkX19tZXNzYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAvLyAgIH07XHJcbiAgLy8gICBjdXJyZW50U2VsZWN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZXJyb3Itbm8tc2VsZWN0ZWQnKTtcclxuICAvLyAgIHBhcmVudFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIC8vIH1cclxufSgpKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLyoqXHJcbiAgKiDQktGL0LLQvtC00LjRgiDQvNC40L3QuNC80LDQu9GM0L3Rg9GOINC4INC80LDQutGB0LjQvNCw0LvRjNC90YPRjiDRhtC10L3RgyDQsiDQutCw0YDRgtC+0YfQutGDINGC0L7QstCw0YDQsFxyXG4gICpcclxuICAqIEBwYXJhbSBjYXJkc1Byb2R1Y3QgLSDQvNCw0YHRgdC40LIg0LrQsNGA0YLQvtGH0LXQuiDRgtC+0LLQsNGA0LBcclxuICAqIEBwYXJhbSBwcm9kdWN0TmFtZSAtINCw0YLRgNC40LHRg9GCIG5hbWUg0LrQsNGA0YLQvtGH0LrQuCDRgtC+0LLQsNGA0LBcclxuICAqIEBwYXJhbSBzdGFydFByaWNlIC0gc3BhbiDQsiDQutCw0YDRgtC+0YfQutC1INCyINC60L7RgtC+0YDRi9C5INCy0YvQstC+0LTQuNGC0YHRjyDQvNC40L3QuNC80LDQu9GM0L3QsNGPINGG0LXQvdCwXHJcbiAgKiBAcGFyYW0gZmluYWxQcmljZSAtIHNwYW4g0LIg0LrQsNGA0YLQvtGH0LrQtSDQsiDQutC+0YLQvtGA0YvQuSDQstGL0LLQvtC00LjRgtGB0Y8g0LzQsNC60YHQuNC80LDQu9GM0L3QsNGPINGG0LXQvdCwXHJcbiAgKlxyXG4gICpcclxuICAqINCc0LXRgtC+0LQgcHJpY2VQYWxsZXRzLmdldE1pblByaWNlUGFsbGV0KCk7INC90LDRhdC+0LTQuNGC0YHRjyDQstC+INCy0L3QtdGI0L3QtdC8INGB0LrRgNC40L/RgtC1INCyINGE0LDQudC70LUgcHJpY2VzLmpzXHJcbiAgKiDQnNC10YLQvtC0IHByaWNlUGFsbGV0cy5nZXRNYXhQcmljZVBhbGxldCgpOyDQvdCw0YXQvtC00LjRgtGB0Y8g0LLQviDQstC90LXRiNC90LXQvCDRgdC60YDQuNC/0YLQtSDQsiDRhNCw0LnQu9C1IHByaWNlcy5qc1xyXG4gICpcclxuICAqINCf0YDQuNC90LjQvNCw0LXRgiBwcm9kdWN0TmFtZVxyXG4gICog0JXRgdC70Lgg0LzQsNC60YPQu9Cw0YLRg9GA0LAsINGB0YLQtdC60LvQviwg0L/Qu9C10L3QutCwINCf0JLQlCDQstGL0LHQuNGA0LDQtdC8IG1pbiDQuCBtYXgg0L/QviDQv9C+0LTQstC40LTQsNC8INGN0YLQvtCz0L4g0YHRi9GA0YzRj1xyXG4gICovXHJcblxyXG4gIGxldCBjYXJkc1Byb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1wcm9kdWN0Jyk7XHJcblxyXG4gIGNhcmRzUHJvZHVjdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgbGV0IHByb2R1Y3ROYW1lID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGxldCBzdGFydFByaWNlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdGFydGluZy1wcmljZV0nKTtcclxuICAgIGxldCBmaW5hbFByaWNlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maW5hbC1wcmljZV0nKTtcclxuXHJcbiAgICBpZiAocHJvZHVjdE5hbWUgPT0gXCJwYWxsZXRcIikge1xyXG4gICAgICBzdGFydFByaWNlLmlubmVyVGV4dCA9IHByaWNlUGFsbGV0cy5nZXRNaW5QcmljZVBhbGxldCgpO1xyXG4gICAgICBmaW5hbFByaWNlLmlubmVyVGV4dCA9IHByaWNlUGFsbGV0cy5nZXRNYXhQcmljZVBhbGxldCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2R1Y3ROYW1lID09IFwiZ2xhc3NcIikge1xyXG4gICAgICBzdGFydFByaWNlLmlubmVyVGV4dCA9IE1hdGgubWluKFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1pblByaWNlTWF0ZXJpYWwoXCJnbGFzc1wiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNaW5QcmljZU1hdGVyaWFsKFwiZ2xhc3Mtd2hpdGUtYnJvd25cIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWluUHJpY2VNYXRlcmlhbChcImdsYXNzLWdyZWVuXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmaW5hbFByaWNlLmlubmVyVGV4dCA9IE1hdGgubWF4KFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1heFByaWNlTWF0ZXJpYWwoXCJnbGFzc1wiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKFwiZ2xhc3Mtd2hpdGUtYnJvd25cIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWF4UHJpY2VNYXRlcmlhbChcImdsYXNzLWdyZWVuXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2R1Y3ROYW1lID09IFwicGFwZXJcIikge1xyXG4gICAgICBzdGFydFByaWNlLmlubmVyVGV4dCA9IE1hdGgubWluKFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1pblByaWNlTWF0ZXJpYWwoXCJwYXBlclwiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNaW5QcmljZU1hdGVyaWFsKFwiYm9va3NcIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWluUHJpY2VNYXRlcmlhbChcIm1hZ2F6aW5lc1wiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNaW5QcmljZU1hdGVyaWFsKFwibmV3c3BhcGVyc1wiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZmluYWxQcmljZS5pbm5lclRleHQgPSBNYXRoLm1heChcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKFwicGFwZXJcIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWF4UHJpY2VNYXRlcmlhbChcImJvb2tzXCIpLFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1heFByaWNlTWF0ZXJpYWwoXCJtYWdhemluZXNcIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWF4UHJpY2VNYXRlcmlhbChcIm5ld3NwYXBlcnNcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvZHVjdE5hbWUgPT0gXCJmaWxtLXB2ZFwiKSB7XHJcbiAgICAgIHN0YXJ0UHJpY2UuaW5uZXJUZXh0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWluUHJpY2VNYXRlcmlhbChcImZpbG0tcHZkXCIpLFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1pblByaWNlTWF0ZXJpYWwoXCJmaWxtLWNvbG9yLXB2ZFwiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZmluYWxQcmljZS5pbm5lclRleHQgPSBNYXRoLm1heChcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKFwiZmlsbS1wdmRcIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWF4UHJpY2VNYXRlcmlhbChcImZpbG0tY29sb3ItcHZkXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRQcmljZS5pbm5lclRleHQgPSBwcmljZU1hdGVyaWFscy5nZXRNaW5QcmljZU1hdGVyaWFsKHByb2R1Y3ROYW1lKTtcclxuICAgIGZpbmFsUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2VNYXRlcmlhbHMuZ2V0TWF4UHJpY2VNYXRlcmlhbChwcm9kdWN0TmFtZSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsImNvbnN0IGZvcm1PcmRlciA9IChmdW5jdGlvbigpe1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRleEdlbmVyYWxPcmRlcicpO1xyXG4gIGNvbnN0IGZvcm1SZXZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVJldmlldycpO1xyXG5cclxuICAvLyBzZWxlY3Rg0Ysg0L/QvtC70Y8g0LLRi9Cx0L7RgNCwLCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YLQuNC/0LAg0YPRgdC70YPQsyDQsdGD0LTQtdC8INGB0LrRgNGL0LLQsNGC0Ywg0LjQu9C4INC/0L7QutCw0LfQstGL0LDRgtGMINC/0L7Qu9GPXHJcbiAgY29uc3Qgc2VsZWN0ZWRTZXJ2aWNlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0ZWRTZXJ2aWNlJyk7XHJcbiAgY29uc3QgYnV5aW5nTWF0ZXJpYWxzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjYnV5aW5nTWF0ZXJpYWxzJyk7XHJcbiAgY29uc3QgcGFja2VkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcGFja2VkJyk7XHJcblxyXG4gIHNlbGVjdGVkU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1hc2tGaWVsZCk7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZW5kRm9ybSk7XHJcbiAgZm9ybVJldmlldy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZW5kRm9ybSk7XHJcblxyXG4gIC8qKlxyXG4gICAqINCe0YLQv9GA0LDQstC70Y/QtdGCINGE0L7RgNC80YMg0YfQtdGA0LXQtyBhamF4XHJcbiAgICogQHBhcmFtIHsqfSBldmVudCDQtNCw0L3QvdGL0LUg0L4g0YHQvtCx0YvRgtC40Lggc3VibWl0XHJcbiAgICog0JXRgdC70Lgg0YTQvtGA0LzQsCDQv9GA0L7RiNC70LAg0LLQsNC70LjQtNCw0YbQuNGOINC+0YLQv9GA0LDQstC70Y/QtdC8INC10LVcclxuICAgKiDQldGB0LvQuCDQvdC1INC/0YDQvtGI0LvQsCByZXR1cm5cclxuICAgKi9cclxuICBmdW5jdGlvbiBzZW5kRm9ybShldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCByZXN1bHRWYWxpZGF0ZSA9IGZvcm1WYWxpZGF0ZShldmVudC50YXJnZXQpO1xyXG5cclxuICAgIGlmIChyZXN1bHRWYWxpZGF0ZSkge1xyXG4gICAgICAvLyDQtNC70Y8g0L7RgtC/0LDRgNCy0LrQuCDQt9Cw0L/Rg9GB0LrQsNC10Lwg0LzQvtC00YPQu9GMIG1vZHVsZXMvYWpheC5qc1xyXG4gICAgICBzZW5kRm9ybU9yZGVyLnNlbmRSZXF1ZXN0KGV2ZW50LCBldmVudC50YXJnZXQpO1xyXG4gICAgfSBlbHNlIHtyZXR1cm47fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZm9ybVZhbGlkYXRlKCkg0LLQsNC70LjQtNC40YDRg9C10YIg0YTQvtGA0LzRgyDQvdCwINC30LDQv9C+0LvQvdC10L3QvtGB0YLRjFxyXG4gICAqIEBwYXJhbSB7Kn0gZm9ybSAtINGE0L7RgNC80LAsINC60L7RgtC+0YDRg9GOINCx0YPQtNC10Lwg0LLQsNC70LjQtNC40YDQvtCy0LDRgtGMXHJcbiAgICogQHZhciB7fSBzZWxlY3RzIC0g0LLRgdC1INC/0L7Qu9GPIHNlbGVjdCDQsiDRhNC+0YDQvNC1XHJcbiAgICogQHZhciB7fSBpbnB1dHMgLSDQstGB0LUg0L/QvtC70Y8gaW5wdXQg0LIg0YTQvtGA0LzQtVxyXG4gICAqIEB2YXIge2Jvb2x9IHJlc3VsdFZhbGlkYXRlIC0g0YDQtdC30YPQu9GM0YLQsNGCINCy0LDQu9C40LTQsNGG0LjQuFxyXG4gICAqINCf0YDQvtCy0LXRgNGP0LXQvCDQstGB0LUg0L/QvtC70Y8g0L3QsCDQt9Cw0L/QvtC70L3QtdC90L7RgdGC0YxcclxuICAgKiDQldGB0LvQuCDQv9C+0LvQtSDQvdC1INC30LDQv9C+0LvQvdC10L3Qviwg0L/QvtC60LDQt9GL0LLQsNC10Lwg0L3QsCDQvdC10Lwg0L7RiNC40LHQutGDXHJcbiAgICog0JXRgdC70Lgg0LLRi9Cx0YDQsNC90L3Ri9C5INGC0LjQvyDRg9GB0LvRg9Cz0Lgg0L3QtSBcItC/0YDQuNC10Lwg0YHRi9GA0YzRj1wiLCDRgdC60YDRi9Cy0LDQtdC8IHNlbGVjdGDRiyBcItGC0LjQvyDRgdGL0YDRjNGPXCIg0LggXCLQutCw0Log0YHQu9C+0LbQtdC90L5cIiDQv9C+0LQg0LzQsNGB0LrQvtC5LCDQvdC1INCy0LDQu9C40LTQuNGA0YPQtdC8INC40YVcclxuICAgKi9cclxuICBmdW5jdGlvbiBmb3JtVmFsaWRhdGUoZm9ybSkge1xyXG4gICAgY29uc3Qgc2VsZWN0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKTtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEnKTtcclxuICAgIGxldCByZXN1bHRWYWxpZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgc2VsZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBsZXQgc2VsZWN0Q3VycmVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNlbGVjdC1jdXJyZW50Jyk7XHJcblxyXG4gICAgICBpZiAoIXNlbGVjdEN1cnJlbnQuaGFzQXR0cmlidXRlKCduYW1lJykgJiYgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlLW1hc2snKSA9PSAnaGlkZScpIHtcclxuICAgICAgICAvLyDQuNGB0L/QvtC70YzQt9GD0LXQvCDQvNC+0LTRg9C70YwgbW9kdWxlcy9zZWxlY3RzLmpzXHJcbiAgICAgICAgY3VzdG9tU2VsZWN0cy5zaG93RXJyb3JzU2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgIHJlc3VsdFZhbGlkYXRlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbS5tYXRjaGVzKCcudGVsLWZpZWxkJykgJiYgaXRlbS52YWx1ZS5sZW5ndGggIT09IDE4KSB7XHJcbiAgICAgICAgLy8g0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LzQvtC00YPQu9GMIG1vZHVsZXMvaW5wdXRzLmpzXHJcbiAgICAgICAgaGFuZGxlcklucHV0cy5zaG93RXJyb3JzSW5wdXQoaXRlbSk7XHJcbiAgICAgICAgcmVzdWx0VmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgLy8g0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LzQvtC00YPQu9GMIG1vZHVsZXMvaW5wdXRzLmpzXHJcbiAgICAgICAgaGFuZGxlcklucHV0cy5zaG93RXJyb3JzSW5wdXQoaXRlbSk7XHJcbiAgICAgICAgcmVzdWx0VmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRleHRhcmVhKSB7XHJcbiAgICAgIGlmICh0ZXh0YXJlYS52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgIC8vINC40YHQv9C+0LvRjNC30YPQtdC8INC80L7QtNGD0LvRjCBtb2R1bGVzL3RleHRhcmVhLmpzXHJcbiAgICAgICAgaGFuZGxlclRleHRhcmVhLnNob3dFcnJvcnNUZXh0YXJlYSh0ZXh0YXJlYSk7XHJcbiAgICAgICAgcmVzdWx0VmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRWYWxpZGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRvZ2dsZU1hc2tGaWVsZCgpINCy0LrQu9GO0YfQsNC10YIg0LzQsNGB0LrRgyjQv9GA0Y/Rh9C10YIg0L/QvtC70Y8pXHJcbiAgICog0JXRgdC70LggXCLRgtC40L8g0YPRgdC70YPQs9C4XCIg0L3QtSBcItC/0YDQuNC10Lwg0YHRi9GA0YzRj1wiXHJcbiAgICog0JjQvdCw0YfQtSDRgdC90LjQvNCw0LXRgiDQvNCw0YHQutGDXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdG9nZ2xlTWFza0ZpZWxkKCkge1xyXG4gICAgbGV0IHNlbGVjdEN1cnJlbnQgPSBzZWxlY3RlZFNlcnZpY2UucXVlcnlTZWxlY3RvcignLnNlbGVjdC1jdXJyZW50Jyk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RDdXJyZW50Lmhhc0F0dHJpYnV0ZSgnbmFtZScpIHx8IHNlbGVjdEN1cnJlbnQubWF0Y2hlcygnW25hbWU9XCJidXlpbmctbWF0ZXJpYWxzXCJdJykpIHtcclxuICAgICAgYnV5aW5nTWF0ZXJpYWxzLnF1ZXJ5U2VsZWN0b3IoJy5tYXNrLWhpZGUtZmllbGQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBwYWNrZWQucXVlcnlTZWxlY3RvcignLm1hc2staGlkZS1maWVsZCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGJ1eWluZ01hdGVyaWFscy5kYXRhc2V0LnRvZ2dsZU1hc2sgPSAnaGlkZSc7XHJcbiAgICAgIHBhY2tlZC5kYXRhc2V0LnRvZ2dsZU1hc2sgPSAnaGlkZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXlpbmdNYXRlcmlhbHMucXVlcnlTZWxlY3RvcignLm1hc2staGlkZS1maWVsZCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBwYWNrZWQucXVlcnlTZWxlY3RvcignLm1hc2staGlkZS1maWVsZCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAvLyDRgdC90LjQvNCw0LXQvCDQvtGI0LjQsdC60YMsINC40YHQv9C+0LvRjNC30YPQtdC8INC80L7QtNGD0LvRjCBtb2R1bGVzL3NlbGVjdHMuanNcclxuICAgICAgY3VzdG9tU2VsZWN0cy5oaWRlRXJyb3JzU2VsZWN0KGJ1eWluZ01hdGVyaWFscyk7XHJcbiAgICAgIGN1c3RvbVNlbGVjdHMuaGlkZUVycm9yc1NlbGVjdChwYWNrZWQpO1xyXG4gICAgICBidXlpbmdNYXRlcmlhbHMuZGF0YXNldC50b2dnbGVNYXNrID0gJ3Nob3cnO1xyXG4gICAgICBwYWNrZWQuZGF0YXNldC50b2dnbGVNYXNrID0gJ3Nob3cnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbiIsIi8vIC8qKlxyXG4vLyAgKiDQktGB0LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQsiDQtNCw0L3QvdC+0Lkg0YTQsNC50LvQtSDRgNC10LDQu9C40LfRg9GO0YIg0YLQvtC70YzQutC+INC+0LHRidC10LUg0L/QvtCy0LXQtNC10L3QuNC1INGN0LvQtdC80LXQvdGC0L7QsjpcclxuLy8gICogU2VsZWN0YNGLXHJcbi8vICAqIENoZWNrYm94YNGLXHJcbi8vICAqIFJhbmdlYNGLXHJcbi8vICAqINCh0YLQuNC70LjQt9GD0Y7RglxyXG4vLyAgKiDQntCx0YDQsNCx0LDRgtGL0LLRjtGCINC/0L7QstC10LTQtdC90LjQtVxyXG4vLyAgKiDQpNC+0YDQvNC40YDRg9GO0YIg0YHQvtC+0LHRidC10L3QuNC1INC+0LEg0L7RiNC40LHQutC1LCDQvdC+INC90LUg0LLRi9Cy0L7QtNGP0YIg0LjRhVxyXG4vLyAgKlxyXG4vLyAgKiDQndC1INCy0YvQv9C+0LvQvdGP0LXRgjpcclxuLy8gICog0L/QtdGA0LXQtNCw0YfRgyDQt9C90LDRh9C10L3QuNC5INCyINC00YDRg9Cz0LjQtSDRgdC60YDQuNC/0YLRiyxcclxuLy8gICog0L3QtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10YIg0LTQsNC90L3Ri9C1INC00LvRjyDQv9C+0LTRgdGH0LXRgtCwINGH0LXQs9C+LdC70LjQsdC+LFxyXG4vLyAgKiDQvdC1INGF0YDQsNC90LjRgiDQtNCw0L3QvdGL0LUsXHJcbi8vICAqL1xyXG4vLyAoZnVuY3Rpb24oKSB7XHJcbi8vICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gICAvKipcclxuLy8gICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjRhSDRgdC10LvQtdC60YLQvtCyXHJcbi8vICAgICpcclxuLy8gICAgKiBAcGFyYW0ge0RPTVtdfSBzZWxlY3QgLSDQutC+0LvQu9C10LrRhtC40Y8g0LLRgdC10YUg0YHQtdC70LXQutGC0L7QsiDQvdCwINGB0LDQudGC0LVcclxuLy8gICAgKiBAcGFyYW0ge0RPTVtdfSBzZWxlY3RIZWFkZXIgLSDRiNCw0L/QutC4INGB0LXQu9C10LrRgtC+0LJcclxuLy8gICAgKiBAcGFyYW0ge0RPTVtdfSBzZWxlY3RPcHRpb24gLSDQutC+0LvQu9C10LrRhtC40Y8g0YLQtdC7INCy0L3Rg9GC0YDQuCDRgdC10LvQtdC60YLQvtCyLCDRgSDQstCw0YDQuNCw0L3RgtCw0LzQuCDQstGL0LHQvtGA0LAgKG9wdGlvbilcclxuLy8gICAgKlxyXG4vLyAgICAqIGhhbmRsZXJzOlxyXG4vLyAgICAqIHNlbGVjdFRvZ2dsZSAtINC/0L4g0LrQu9C40LrRgyDQvdCwINGB0LXQu9C10LrRgtC1INCw0LrRgtC40LLQuNGA0YPQtdGCINC10LPQvlxyXG4vLyAgICAqIG91dEZvY3VzIC0g0L/RgNC4INC/0L7RgtC10YDQtSDRhNC+0LrRg9GB0LAg0L3QsCDRgdC10LvQtdC60YLQtSDQt9Cw0LrRgNCy0LDQtdC8INC10LPQvlxyXG4vLyAgICAqIHNldFNlbGVjdGVkIC0g0L/QviDQutC70LjQutGDINC90LAgb3B0aW9uINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC10LPQviDQutCw0Log0LLRi9Cx0YDQsNC90L3Ri9C5INC4INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC10LPQviDQsNGC0YDQuNCx0YPRgiBbdGhpcy5uYW1lPVwidGhpcy52YWx1ZVwiXVxyXG4vLyAgICAqL1xyXG4vLyAgIGxldCBoYW5kbGVyU2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RcIik7XHJcbi8vICAgICBsZXQgc2VsZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RfX2hlYWRlclwiKTtcclxuLy8gICAgIGxldCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdF9fb3B0aW9uXCIpO1xyXG5cclxuLy8gICAgIHNlbGVjdEhlYWRlci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4vLyAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RUb2dnbGUpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgc2VsZWN0LmZvckVhY2goaXRlbSA9PiB7XHJcbi8vICAgICAgIC8vINCyINGB0L7QvtCx0YnQtdC90LjQuCDQvtCxINC+0YjQuNCx0LrQtSAo0L3QtSDQstGL0LHRgNCw0L0g0L3QuCDQvtC00LjQvSDQv9GD0L3QutGCKSDQt9Cw0L/QuNGB0YvQstCw0LXQvCDRgtC10LrRgdGCINC40Lcg0LfQsNCz0L7Qu9C+0LLQutCwIHNlbGVjdGBhXHJcbi8vICAgICAgIGxldCBjdXJyZW50VGV4dCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNlbGVjdC1jdXJyZW50JykuaW5uZXJUZXh0O1xyXG4vLyAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1uby1zZWxlY3RlZF9fbWVzc2FnZS10ZXh0JykuaW5uZXJUZXh0ID0gY3VycmVudFRleHQ7XHJcblxyXG4vLyAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG91dEZvY3VzKTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIHNlbGVjdE9wdGlvbi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4vLyAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTZWxlY3RlZCk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBmdW5jdGlvbiBzZWxlY3RUb2dnbGUoKSB7XHJcbi8vICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkKCkge1xyXG4vLyAgICAgICBsZXQgdGV4dCA9IHRoaXMuaW5uZXJUZXh0LFxyXG4vLyAgICAgICAgICAgYXR0cmlidXRlTmFtZVZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLFxyXG4vLyAgICAgICAgICAgc2VsZWN0ID0gdGhpcy5jbG9zZXN0KFwiLnNlbGVjdFwiKSxcclxuLy8gICAgICAgICAgIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtY3VycmVudFwiKTtcclxuXHJcbi8vICAgICAgIGN1cnJlbnRTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgYXR0cmlidXRlTmFtZVZhbHVlKTtcclxuLy8gICAgICAgY3VycmVudFNlbGVjdC5pbm5lclRleHQgPSB0ZXh0O1xyXG5cclxuLy8gICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gb3V0Rm9jdXMoKSB7XHJcbi8vICAgICAgIGxldCB0aGlzU2VsZWN0ID0gdGhpcy5jbG9zZXN0KFwiLnNlbGVjdFwiKTtcclxuLy8gICAgICAgdGhpc1NlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICB9O1xyXG5cclxuLy8gICBoYW5kbGVyU2VsZWN0KCk7XHJcblxyXG4vLyAgIC8qKlxyXG4vLyAgICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6IGNoZWNrYm94IC0g0LLRi9Cx0L7RgNCwINGC0LjQv9CwINC00L7RgdGC0LDQstC60LhcclxuLy8gICAgKlxyXG4vLyAgICAqINCc0LXRgtC+0LTQvtC8IGZvckVhY2goKSDQvdCwINC60LDQttC00YvQuSBpdGVtINC60L7Qu9C70LXQutGG0LjQuCBjaGVja2JveCDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9GA0L7RgdC70YPRiNC60YMgYWRkRXZlbnRMaXN0ZW5lcigpXHJcbi8vICAgICpcclxuLy8gICAgKiB2YXJpYWJsZXM6XHJcbi8vICAgICogcHJldlRleHRDaGVja2JveCAtINGDINC60LDQttC00L7Qs9C+IGl0ZW1g0LAgPSAoY2hlY2tib3gpINCy0YvQsdC40YDQsNC10YIg0YHQvtGB0LXQtNCwINC/0LXRgNC10LQgY2hlY2tib3hcclxuLy8gICAgKiBuZXh0VGV4dENoZWNrYm94IC0g0YMg0LrQsNC20LTQvtCz0L4gaXRlbWDQsCA9IChjaGVja2JveCkg0LLRi9Cx0LjRgNCw0LXRgiDRgdC+0YHQtdC00LAg0L/QvtGB0LvQtSBjaGVja2JveFxyXG4vLyAgICAqXHJcbi8vICAgICogaGFuZGxlcnM6XHJcbi8vICAgICog0JXRgdC70LggY2hlY2tib3guY2hlY2tlZCDRgdGC0LjQu9C40LfRg9C10Lwg0YHQvtGB0LXQtNCwINC/0L7RgdC70LVcclxuLy8gICAgKiDQldGB0LvQuCAhY2hlY2tib3guY2hlY2tlZCDRgdGC0LjQu9C40LfRg9C10Lwg0YHQvtGB0LXQtNCwINC/0LXRgNC10LRcclxuLy8gICAgKi9cclxuLy8gICBsZXQgY2hlY2tib3hDYWxjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94LXR5cGUtYicpO1xyXG5cclxuLy8gICBjaGVja2JveENhbGMuZm9yRWFjaChpdGVtID0+IHtcclxuLy8gICAgIGxldCBwcmV2VGV4dENoZWNrYm94ID0gaXRlbS5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbi8vICAgICBsZXQgbmV4dFRleHRDaGVja2JveCA9IGl0ZW0ucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4vLyAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4vLyAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XHJcbi8vICAgICAgICAgbmV4dFRleHRDaGVja2JveC5zdHlsZS5jb2xvciA9ICcjNjdhZjAxJztcclxuLy8gICAgICAgICBwcmV2VGV4dENoZWNrYm94LnN0eWxlLmNvbG9yID0gJyM2MTIyMjgnO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGlmICghaXRlbS5jaGVja2VkKSB7XHJcbi8vICAgICAgICAgbmV4dFRleHRDaGVja2JveC5zdHlsZS5jb2xvciA9ICcjNjEyMjI4JztcclxuLy8gICAgICAgICBwcmV2VGV4dENoZWNrYm94LnN0eWxlLmNvbG9yID0gJyM2N2FmMDEnO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuXHJcbi8vICAgLyoqXHJcbi8vICAgICog0J7QsdGA0LDQsdC+0YLRh9C40LogcmFuZ2VcclxuLy8gICAgKlxyXG4vLyAgICAqINCc0LXRgtC+0LTQvtC8IGZvckVhY2goKSDQvdCwINC60LDQttC00YvQuSBpdGVtINC60L7Qu9C70LXQutGG0LjQuCByYW5nZSDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9GA0L7RgdC70YPRiNC60YMgYWRkRXZlbnRMaXN0ZW5lcigpXHJcbi8vICAgICpcclxuLy8gICAgKiB2YXJpYWJsZXM6XHJcbi8vICAgICogcmFuZ2UgLSDQutC+0LvQu9C10LrRhtC40Y8g0LLRgdC10YUgcmFuZ2Vg0LXQuSDQvdCwINGB0LDQudGC0LVcclxuLy8gICAgKiBmb3JtYXR0ZXIgLSDRh9C10YDQtdC3INC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0LfQsNC00LDQtdGCINC60YDQsNGB0LjQstGL0Lkg0YfQuNGB0LvQvtCy0L7QuSDRhNC+0YDQvNCw0YIg0YEg0L/RgNC+0LHQtdC70LDQvNC4INCyINGA0LDQt9GA0Y/QtNCw0YVcclxuLy8gICAgKiBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GMIHJhbmdlYNCwXHJcbi8vICAgICogb3V0cHV0Q3VycmVudFZhbHVlIC0g0LHQu9C+0Log0LIg0LrQvtGC0L7RgNGL0Lkg0LLRi9Cy0L7QtNC40YLRgdGPINC30L3QsNGH0LXQvdC40LUgcmFuZ2VgYVxyXG4vLyAgICAqIG1lYXN1cmVVbml0IC0g0YXRgNCw0L3QuNGCIGHQsdCx0YDQtdCy0LjQsNGC0YPRgNGDINC10LTQuNC90LjRhtGLINC40LfQvNC10YDQuNC90LjRjywg0LrQvtGC0L7RgNCw0Y8g0L/RgNC+0L/QuNGB0LDQvdCwINCyIEhUTUwg0YDQsNC30LzQtdGC0LrQtVxyXG4vLyAgICAqXHJcbi8vICAgICogaGFuZGxlcnM6XHJcbi8vICAgICog0JfQvdCw0YfQtdC90LjQtSByYW5nZSDQvdCwINC60L7RgtC+0YDQvtC8INC/0YDQvtC40LfQvtGI0LvQviDRgdC+0LHRi9GC0LjQtSAnaW5wdXQnLCDRhNC+0YDQvNCw0YLQuNGA0YPQtdC8INC4INCy0YvQstC+0LTQuNC8INCyIG91dHB1dEN1cnJlbnRWYWx1ZVxyXG4vLyAgICAqL1xyXG4vLyAgIGxldCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZScpO1xyXG4vLyAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgncnUnKTtcclxuXHJcbi8vICAgcmFuZ2UuZm9yRWFjaChpdGVtID0+IHtcclxuLy8gICAgIGxldCBwYXJlbnQgPSBpdGVtLmNsb3Nlc3QoJy5yYW5nZS13cmFwJyk7XHJcbi8vICAgICBsZXQgb3V0cHV0Q3VycmVudFZhbHVlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fb3V0cHV0LWN1cnJlbnQtdmFsdWUnKTtcclxuLy8gICAgIGxldCBtZWFzdXJlVW5pdCA9IG91dHB1dEN1cnJlbnRWYWx1ZS5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJUZXh0O1xyXG5cclxuLy8gICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgb3V0cHV0Q3VycmVudFZhbHVlLmlubmVySFRNTCA9IGZvcm1hdHRlci5mb3JtYXQodGhpcy52YWx1ZSkgKyBcIiBcIiArIG1lYXN1cmVVbml0O1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfSk7XHJcblxyXG4vLyB9KCkpO1xyXG4iLCJmdW5jdGlvbiBpbml0TWFwKCkge1xyXG5cclxuICBsZXQgY2VudGVyTWFwID0ge2xhdDo1Ny4xNTA2MTUsIGxuZzo2NS41NDYwMjh9O1xyXG4gIGxldCBvZmZpY2UgPSB7bGF0OjU3LjEyOTYwMiwgbG5nOjY1LjUzNjQxNH07XHJcbiAgbGV0IHN0b2NrVG0gPSB7bGF0OjU3LjEzMTQ1NiwgbG5nOjY1LjUxODQ1OX07XHJcblx0bGV0IGJhc2UgPSB7bGF0OjU3LjA5NjI5MywgbG5nOjY1LjY3MDgwM307XHJcbiAgbGV0IGF2dG9yZW1vbnRuYXlhID0ge2xhdDo1Ny4xNTM3OTIsIGxuZzo2NS40Njc5MDJ9O1xyXG4gIGxldCBzaGVyYmFrb3ZhID0ge2xhdDo1Ny4xOTQ5MzcsIGxuZzo2NS41OTAxODh9O1xyXG5cclxuICAvLyDQntC/0YDQtdC00LXQu9GP0LXQvCDQutC70LjQtdC90YIsINGH0YLQvtCx0Ysg0L/QvtGB0LvQtSDQvtGC0LrQu9GO0YfQuNGC0Ywg0L/QtdGA0LXRgtCw0YHQutC40LLQsNC90LjQtSDQutCw0YDRgtGLINC90LAg0YHQvNCw0YDRgtGE0L7QvdCw0YUuICDQp9Cw0YHRgtGMIDEuXHJcbiAgLy8gbGV0IGlzRHJhZ2dhYmxlO1xyXG5cdC8vIGlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKSB7XHJcblx0Ly8gXHRpc0RyYWdnYWJsZSA9IGZhbHNlO1xyXG5cdC8vIH0gZWxzZSB7XHJcblx0Ly8gXHRpc0RyYWdnYWJsZSA9IHRydWU7XHJcblx0Ly8gfVxyXG5cclxuXHRsZXQgbXlNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XHJcblx0XHRjZW50ZXI6IGNlbnRlck1hcCxcclxuICAgIHpvb206IDEyLFxyXG4gICAgXHRcdC8vINCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0L3QsNGB0YLRgNC+0LnQutC4XHJcblxyXG5cdFx0Ly8g0KPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YLRiyDRg9C/0YDQsNCy0LvQtdC90LjRjyDQutCw0YDRgtC+0LlcclxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWUsXHJcbiAgICAvLyBtYXBUeXBlQ29udHJvbDogZmFsc2UsXHJcblxyXG5cdFx0Ly8g0JfQsNC/0YDQtdGC0LjRgtGMINGD0LLQtdC70LjRh9C10L3QuNC1INC60LDRgNGC0Ysg0L/QviDRgdC60YDQvtC70LvRg1xyXG5cdFx0c2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG5cclxuXHRcdC8vINCe0YLQutC70Y7Rh9C40YLRjCDQv9C10YDQtdGC0LDRgdC60LjQstCw0L3QuNC1INC00LvRjyDRgdC80LDRgNGC0YTQvtC90L7Qsi4g0KfQsNGB0YLRjCAyLlxyXG4gICAgLy8gZHJhZ2dhYmxlOiBpc0RyYWdnYWJsZSxcclxuXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiBcIjJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiBcIi0yOFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIi0xMFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQ0NDQ0NFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiLTFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMTJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubmF0dXJhbFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiLTMxXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiLTc0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCI2NVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5uYXR1cmFsLmxhbmRjb3ZlclwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiLTE1XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWwubGFuZGNvdmVyXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIjBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogNDVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiBcIjBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItOVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMTRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiLTM1XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZ2FtbWFcIjogXCIxXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiMS4zOVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiLTE5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIjQ2XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIi0xM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIndlaWdodFwiOiBcIjEuMjNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpbnZlcnRfbGlnaHRuZXNzXCI6IHRydWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJodWVcIjogXCIjZmYwMDAwXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNhZGFkYWRcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0pO1xyXG5cclxuICBsZXQgbWFya2VyT2ZmaWNlID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRwb3NpdGlvbjogb2ZmaWNlLFxyXG5cdFx0bWFwOiBteU1hcCxcclxuXHRcdHRpdGxlOiBcItC+0YTQuNGBOiDQsy7QotGO0LzQtdC90YwsINGD0Lsu0KDQtdCy0L7Qu9GO0YbQuNC4LCDQtC44OVwiLFxyXG5cdFx0aWNvbjogXCJhc3NldHMvaW1nL21hcC9tYXJrLXJlZC5wbmdcIlxyXG4gIH0pO1xyXG5cclxuICBsZXQgY29udGVudFN0cmluZ09mZmljZSA9XHJcbiAgICAnPGRpdiBpZD1cImNvbnRlbnRcIj4nK1xyXG4gICAgICAnPGRpdiBpZD1cInNpdGVOb3RpY2VcIj4nKyc8L2Rpdj4nK1xyXG4gICAgICAnPGgxIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmcgbWFwLWluZm8td2luZG93LXRpdGxlXCI+0J7RhNC40YE8L2gxPicrXHJcbiAgICAgICc8ZGl2IGlkPVwiYm9keUNvbnRlbnRcIj4nK1xyXG4gICAgICAgICc8cCBjbGFzcz1cIm1hcC1pbmZvLXdpbmRvdy10ZXh0XCI+0LMuINCi0Y7QvNC10L3RjCwg0YPQuy4g0KDQtdCy0L7Qu9GO0YbQuNC4LCDQtC44OTwvcD4nK1xyXG4gICAgICAgICc8cCBjbGFzcz1cIm1hcC1pbmZvLXdpbmRvdy10ZXh0XCI+KzcgKDM0NTIpIDUzMS02MDEsIDgtODAwLTYwMC03MS0zMTwvcD4nICtcclxuICAgICAgJzwvZGl2PicrXHJcbiAgICAnPC9kaXY+JztcclxuXHJcblx0bGV0IGluZm9XaW5kb3dPZmZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiBjb250ZW50U3RyaW5nT2ZmaWNlLFxyXG4gICAgbWF4V2lkdGg6IDQwMCxcclxuICB9KTtcclxuXHJcbiAgbWFya2VyT2ZmaWNlLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aW5mb1dpbmRvd09mZmljZS5vcGVuKG15TWFwLCBtYXJrZXJPZmZpY2UpO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQvNCw0YDQutC10YAg0YLQuNC80LjRgNGP0LfQtdCy0LBcclxuXHRsZXQgbWFya2VyU3RvY2tUbSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0cG9zaXRpb246IHN0b2NrVG0sXHJcblx0XHRtYXA6IG15TWFwLFxyXG5cdFx0dGl0bGU6IFwi0J/Rg9C90LrRgiDQv9GA0LjQtdC80LA6INCzLtCi0Y7QvNC10L3RjCwg0YPQuy7QotC40LzQuNGA0Y/Qt9C10LLQsCwg0LQuOSwg0YHRgtGALjEwXCIsXHJcblx0XHRpY29uOiBcImFzc2V0cy9pbWcvbWFwL21hcmstZ3JlZW4ucG5nXCJcclxuXHR9KTtcclxuXHJcblx0bGV0IGNvbnRlbnRTdHJpbmdTdG9ja1RtID1cclxuICAgICc8ZGl2IGlkPVwiY29udGVudFwiPicrXHJcbiAgICAgICc8ZGl2IGlkPVwic2l0ZU5vdGljZVwiPicrJzwvZGl2PicrXHJcbiAgICAgICc8aDEgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZyBtYXAtaW5mby13aW5kb3ctdGl0bGVcIj7Qn9GD0L3QutGCINC/0YDQuNC10LzQsDwvaDE+JytcclxuICAgICAgJzxkaXYgaWQ9XCJib2R5Q29udGVudFwiPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj7Qsy7QotGO0LzQtdC90YwsINGD0Lsu0KLQuNC80LjRgNGP0LfQtdCy0LAsINC0LjksINGB0YLRgC4xMDwvcD4nK1xyXG4gICAgICAgICc8cCBjbGFzcz1cIm1hcC1pbmZvLXdpbmRvdy10ZXh0XCI+KzcgKDM0NTIpIDUzMS02MDEsIDgtODAwLTYwMC03MS0zMTwvcD4nICtcclxuICAgICAgJzwvZGl2PicrXHJcbiAgICAnPC9kaXY+JztcclxuXHJcblx0bGV0IGluZm9XaW5kb3dTdG9ja1RtID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0Y29udGVudDogY29udGVudFN0cmluZ1N0b2NrVG0sXHJcblx0XHRtYXhXaWR0aDogNDAwXHJcblx0fSk7XHJcblxyXG5cdG1hcmtlclN0b2NrVG0uYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpbmZvV2luZG93U3RvY2tUbS5vcGVuKG15TWFwLCBtYXJrZXJTdG9ja1RtKTtcclxuXHR9KTtcclxuXHJcblx0Ly8g0LzQsNGA0LrQtdGAINGP0LvRg9GC0L7RgNC+0LLRgdC60LjQuSDRgtGA0LDQutGCXHJcblx0bGV0IG1hcmtlckJhc2UgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdHBvc2l0aW9uOiBiYXNlLFxyXG5cdFx0bWFwOiBteU1hcCxcclxuXHRcdHRpdGxlOiBcItCf0YPQvdC60YIg0L/RgNC40LXQvNCwOiDQsy7QotGO0LzQtdC90YwsINGD0LsuMTEt0LrQvCDQr9C70YPRgtC+0YDQvtCy0YHQutC+0LPQviDRgtGA0LDQutGC0LAsINGB0YLRgC43XCIsXHJcblx0XHRpY29uOiBcImFzc2V0cy9pbWcvbWFwL21hcmstZ3JlZW4ucG5nXCJcclxuXHR9KTtcclxuXHJcblx0bGV0IGNvbnRlbnRTdHJpbmdCYXNlID1cclxuICAgICc8ZGl2IGlkPVwiY29udGVudFwiPicrXHJcbiAgICAgICc8ZGl2IGlkPVwic2l0ZU5vdGljZVwiPicrJzwvZGl2PicrXHJcbiAgICAgICc8aDEgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZyBtYXAtaW5mby13aW5kb3ctdGl0bGVcIj7Qn9GD0L3QutGCINC/0YDQuNC10LzQsDwvaDE+JytcclxuICAgICAgJzxkaXYgaWQ9XCJib2R5Q29udGVudFwiPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj7Qsy7QotGO0LzQtdC90YwsINGD0LsuMTEt0LrQvCDQr9C70YPRgtC+0YDQvtCy0YHQutC+0LPQviDRgtGA0LDQutGC0LAsINGB0YLRgC43PC9wPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9wPicgK1xyXG4gICAgICAnPC9kaXY+JytcclxuICAgICc8L2Rpdj4nO1xyXG5cclxuXHRsZXQgaW5mb1dpbmRvd0Jhc2UgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiBjb250ZW50U3RyaW5nQmFzZSxcclxuXHRcdG1heFdpZHRoOiA0MDBcclxuXHR9KTtcclxuXHJcblx0bWFya2VyQmFzZS5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGluZm9XaW5kb3dCYXNlLm9wZW4obXlNYXAsIG1hcmtlckJhc2UpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyDQvNCw0YDQutC10YAg0LDQstGC0L7RgNC10LzQvtC90YLQvdCw0Y9cclxuXHRsZXQgbWFya2VyQXZ0b3JlbW9udG5heWEgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdHBvc2l0aW9uOiBhdnRvcmVtb250bmF5YSxcclxuXHRcdG1hcDogbXlNYXAsXHJcblx0XHR0aXRsZTogXCLQn9GD0L3QutGCINC/0YDQuNC10LzQsDog0LMu0KLRjtC80LXQvdGMLCDRg9C7LtCQ0LLRgtC+0YDQtdC80L7QvdGC0L3QsNGPINC0LjksINGB0LrQu9Cw0LQg4oSWMTFcIixcclxuXHRcdGljb246IFwiYXNzZXRzL2ltZy9tYXAvbWFyay1ncmVlbi5wbmdcIlxyXG5cdH0pO1xyXG5cclxuXHRsZXQgY29udGVudFN0cmluZ0F2dG9yZW1vbnRuYXlhID1cclxuICAgICc8ZGl2IGlkPVwiY29udGVudFwiPicrXHJcbiAgICAgICc8ZGl2IGlkPVwic2l0ZU5vdGljZVwiPicrJzwvZGl2PicrXHJcbiAgICAgICc8aDEgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZyBtYXAtaW5mby13aW5kb3ctdGl0bGVcIj7Qn9GD0L3QutGCINC/0YDQuNC10LzQsDwvaDE+JytcclxuICAgICAgJzxkaXYgaWQ9XCJib2R5Q29udGVudFwiPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj7Qsy7QotGO0LzQtdC90YwsINGD0Lsu0JDQstGC0L7RgNC10LzQvtC90YLQvdCw0Y8g0LQuOSwg0YHQutC70LDQtCDihJYxMTwvcD4nK1xyXG4gICAgICAgICc8cCBjbGFzcz1cIm1hcC1pbmZvLXdpbmRvdy10ZXh0XCI+KzcgKDM0NTIpIDUzMS02MDEsIDgtODAwLTYwMC03MS0zMTwvcD4nICtcclxuICAgICAgJzwvZGl2PicrXHJcbiAgICAnPC9kaXY+JztcclxuXHJcblx0bGV0IGluZm9XaW5kb3dBdnRvcmVtb250bmF5YSA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6IGNvbnRlbnRTdHJpbmdBdnRvcmVtb250bmF5YSxcclxuXHRcdG1heFdpZHRoOiA0MDBcclxuXHR9KTtcclxuXHJcblx0bWFya2VyQXZ0b3JlbW9udG5heWEuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpbmZvV2luZG93QXZ0b3JlbW9udG5heWEub3BlbihteU1hcCwgbWFya2VyQXZ0b3JlbW9udG5heWEpO1xyXG4gIH0pO1xyXG5cclxuXHQvLyDQvNCw0YDQutC10YAg0LDQstGC0L7RgNC10LzQvtC90YLQvdCw0Y9cclxuXHRsZXQgbWFya2VyU2hlcmJha292YSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0cG9zaXRpb246IHNoZXJiYWtvdmEsXHJcblx0XHRtYXA6IG15TWFwLFxyXG5cdFx0dGl0bGU6IFwi0J/Rg9C90LrRgiDQv9GA0LjQtdC80LA6INCzLtCi0Y7QvNC10L3RjCwg0YPQuy7QqdC10YDQsdCw0LrQvtCy0LAg0LQuMTYwLCDRgdGC0YAg4oSWM1wiLFxyXG5cdFx0aWNvbjogXCJhc3NldHMvaW1nL21hcC9tYXJrLWdyZWVuLnBuZ1wiXHJcblx0fSk7XHJcblxyXG5cdGxldCBjb250ZW50U3RyaW5nU2hlcmJha292YSA9XHJcbiAgICAnPGRpdiBpZD1cImNvbnRlbnRcIj4nK1xyXG4gICAgICAnPGRpdiBpZD1cInNpdGVOb3RpY2VcIj4nKyc8L2Rpdj4nK1xyXG4gICAgICAnPGgxIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmcgbWFwLWluZm8td2luZG93LXRpdGxlXCI+0J/Rg9C90LrRgiDQv9GA0LjQtdC80LA8L2gxPicrXHJcbiAgICAgICc8ZGl2IGlkPVwiYm9keUNvbnRlbnRcIj4nK1xyXG4gICAgICAgICc8cCBjbGFzcz1cIm1hcC1pbmZvLXdpbmRvdy10ZXh0XCI+0LMu0KLRjtC80LXQvdGMLCDRg9C7LtCp0LXRgNCx0LDQutC+0LLQsCDQtC4xNjAsINGB0YLRgCDihJYzPC9wPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9wPicgK1xyXG4gICAgICAnPC9kaXY+JytcclxuICAgICc8L2Rpdj4nO1xyXG5cclxuXHRsZXQgaW5mb1dpbmRvd1NoZXJiYWtvdmEgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiBjb250ZW50U3RyaW5nU2hlcmJha292YSxcclxuXHRcdG1heFdpZHRoOiA0MDBcclxuXHR9KTtcclxuXHJcblx0bWFya2VyU2hlcmJha292YS5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGluZm9XaW5kb3dTaGVyYmFrb3ZhLm9wZW4obXlNYXAsIG1hcmtlclNoZXJiYWtvdmEpO1xyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiDQodC60YDQuNC/0YIg0LTQu9GPINGP0L3QtNC10LrRgSDQutCw0YDRgtGLXHJcbiAqL1xyXG4vLyB5bWFwcy5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbi8vICAgICBjZW50ZXI6IFs1Ny4xMjk2MjYsIDY1LjUzNjMwNF0sXHJcbi8vICAgICB6b29tOiAxMlxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZShbXHJcbi8vICAgICAnc2Nyb2xsWm9vbSdcclxuLy8gICBdKTtcclxuXHJcbi8vICAgbXlNYXAuY29udHJvbHNcclxuLy8gICAgIC5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKVxyXG4vLyAgICAgLnJlbW92ZSgndHlwZVNlbGVjdG9yJylcclxuLy8gICAgIC5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xyXG5cclxuLy8gICB2YXIgb2ZmaWNlTWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU3LjEyOTYyNiwgNjUuNTM2MzA0XSwge1xyXG4vLyAgICAgYmFsbG9vbkNvbnRlbnRIZWFkZXI6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oZWFkZXJcIj7QntGE0LjRgTwvZGl2PicsXHJcbi8vICAgICBiYWxsb29uQ29udGVudEJvZHk6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1jb250ZW50XCI+0LMuINCi0Y7QvNC10L3RjCwg0YPQuy4g0KDQtdCy0L7Qu9GO0YbQuNC4LCDQtC44OTwvZGl2PicsXHJcbi8vICAgICBiYWxsb29uQ29udGVudEZvb3RlcjogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWNvbnRlbnRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9kaXY+JyxcclxuLy8gICAgIGhpbnRDb250ZW50OiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24taGludFwiPjxiPtCe0YTQuNGBPC9iPjwvZGl2PidcclxuLy8gICB9LCB7XHJcbi8vICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbi8vICAgICBpY29uSW1hZ2VIcmVmOiAnYXNzZXRzL2ltZy9tYXAvbWFyay1yZWQucG5nJyxcclxuLy8gICAgIGljb25JbWFnZVNpemU6IFszNCwgNDJdLFxyXG4vLyAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI1LCAtNjBdLFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICB2YXIgc3RvY2tUaW1pcnlheiA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU3LjEzMTM5MCwgNjUuNTE4MzU4XSwge1xyXG4vLyAgICAgYmFsbG9vbkNvbnRlbnRIZWFkZXI6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oZWFkZXJcIj7Qn9GD0L3QutGCINC/0YDQuNGR0LzQsDwvZGl2PicsXHJcbi8vICAgICBiYWxsb29uQ29udGVudEJvZHk6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1jb250ZW50XCI+0LMu0KLRjtC80LXQvdGMLCDRg9C7LtCi0LjQvNC40YDRj9C30LXQstCwLCDQtC45INGB0YLRgC4xMDwvZGl2PicsXHJcbi8vICAgICBiYWxsb29uQ29udGVudEZvb3RlcjogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWNvbnRlbnRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9kaXY+JyxcclxuLy8gICAgIGhpbnRDb250ZW50OiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24taGludFwiPjxiPtCf0YPQvdC60YIg0L/RgNC40ZHQvNCwPC9iPjwvZGl2PjxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhpbnRcIj7Qsy7QotGO0LzQtdC90YwsINGD0Lsu0KLQuNC80LjRgNGP0LfQtdCy0LAsINC0Ljkg0YHRgtGALjEwPC9kaXY+J1xyXG4vLyAgIH0sIHtcclxuLy8gICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuLy8gICAgIGljb25JbWFnZUhyZWY6ICdhc3NldHMvaW1nL21hcC9tYXJrLWdyZWVuLnBuZycsXHJcbi8vICAgICBpY29uSW1hZ2VTaXplOiBbMzQsIDQyXSxcclxuLy8gICAgIGljb25JbWFnZU9mZnNldDogWy0yNSwgLTYwXSxcclxuLy8gICB9KTtcclxuXHJcbi8vICAgdmFyIHN0b2NrQXZ0b3JlbSA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU3LjE1Mzc0NiwgNjUuNDY4NDA5XSwge1xyXG4vLyAgICAgYmFsbG9vbkNvbnRlbnRIZWFkZXI6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oZWFkZXJcIj7Qn9GD0L3QutGCINC/0YDQuNGR0LzQsDwvZGl2PicsXHJcbi8vICAgICBiYWxsb29uQ29udGVudEJvZHk6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1jb250ZW50XCI+0LMu0KLRjtC80LXQvdGMLCDRg9C7LtCQ0LLRgtC+0YDQtdC80L7QvdGC0L3QsNGPLCDQtC45INGB0LrQu9Cw0LQg4oSWMTE8L2Rpdj4nLFxyXG4vLyAgICAgYmFsbG9vbkNvbnRlbnRGb290ZXI6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1jb250ZW50XCI+KzcgKDM0NTIpIDUzMS02MDEsIDgtODAwLTYwMC03MS0zMTwvZGl2PicsXHJcbi8vICAgICBoaW50Q29udGVudDogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhpbnRcIj48Yj7Qn9GD0L3QutGCINC/0YDQuNGR0LzQsDwvYj48L2Rpdj48ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oaW50XCI+0LMu0KLRjtC80LXQvdGMLCDRg9C7LtCQ0LLRgtC+0YDQtdC80L7QvdGC0L3QsNGPLCDQtC45INGB0LrQu9Cw0LQg4oSWMTE8L2Rpdj4nXHJcbi8vICAgfSwge1xyXG4vLyAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4vLyAgICAgaWNvbkltYWdlSHJlZjogJ2Fzc2V0cy9pbWcvbWFwL21hcmstZ3JlZW4ucG5nJyxcclxuLy8gICAgIGljb25JbWFnZVNpemU6IFszNCwgNDJdLFxyXG4vLyAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI1LCAtNjBdLFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICB2YXIgc3RvY2tZYWx1dG9yID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTcuMDk2MjcyLCA2NS42NzA1ODZdLCB7XHJcbi8vICAgICBiYWxsb29uQ29udGVudEhlYWRlcjogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhlYWRlclwiPtCf0YPQvdC60YIg0L/RgNC40ZHQvNCwPC9kaXY+JyxcclxuLy8gICAgIGJhbGxvb25Db250ZW50Qm9keTogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWNvbnRlbnRcIj7Qsy7QotGO0LzQtdC90YwsINGD0LsuMTEt0LrQvCDQr9C70YPRgtC+0YDQvtCy0YHQutC+0LPQviDRgtGA0LDQutGC0LAsINGB0YLRgC43PC9kaXY+JyxcclxuLy8gICAgIGJhbGxvb25Db250ZW50Rm9vdGVyOiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24tY29udGVudFwiPis3ICgzNDUyKSA1MzEtNjAxLCA4LTgwMC02MDAtNzEtMzE8L2Rpdj4nLFxyXG4vLyAgICAgaGludENvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oaW50XCI+PGI+0J/Rg9C90LrRgiDQv9GA0LjRkdC80LA8L2I+PC9kaXY+PGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24taGludFwiPtCzLtCi0Y7QvNC10L3RjCwg0YPQuy4xMS3QutC8INCv0LvRg9GC0L7RgNC+0LLRgdC60L7Qs9C+INGC0YDQsNC60YLQsCwg0YHRgtGALjc8L2Rpdj4nXHJcbi8vICAgfSwge1xyXG4vLyAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4vLyAgICAgaWNvbkltYWdlSHJlZjogJ2Fzc2V0cy9pbWcvbWFwL21hcmstZ3JlZW4ucG5nJyxcclxuLy8gICAgIGljb25JbWFnZVNpemU6IFszNCwgNDJdLFxyXG4vLyAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI1LCAtNjBdLFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICBteU1hcC5nZW9PYmplY3RzLmFkZChvZmZpY2VNYXJrKS5hZGQoc3RvY2tUaW1pcnlheikuYWRkKHN0b2NrQXZ0b3JlbSkuYWRkKHN0b2NrWWFsdXRvcik7XHJcbi8vIH0pO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gICBsZXQgbWVudU1vYmlsZVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpO1xyXG4gICBsZXQgZHJvcGRvd25NZW51TW9iaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duTWVudU1vYmlsZScpO1xyXG4gICBsZXQgZHJvcGRvd25NZW51TW9iaWxlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1tZW51LW1vYmlsZV9fbGluaycpO1xyXG5cclxuICAgbWVudU1vYmlsZVRvZ2dsZS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChkcm9wZG93bk1lbnVNb2JpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZW51LW1vYmlsZS0tc2hvdy1tZW51JykpIHtcclxuICAgICAgZHJvcGRvd25NZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLW1lbnUtbW9iaWxlLS1zaG93LW1lbnUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3Bkb3duTWVudU1vYmlsZS5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1tZW51LW1vYmlsZS0tc2hvdy1tZW51Jyk7XHJcbiAgfTtcclxuXHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICBkcm9wZG93bk1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tbWVudS1tb2JpbGUtLXNob3ctbWVudScpO1xyXG4gIH07XHJcblxyXG4gIGRyb3Bkb3duTWVudU1vYmlsZUxpbmsuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZW51LW1vYmlsZV9fbGluay1hcnJvdycpKSByZXR1cm47XHJcbiAgICAgIGRyb3Bkb3duTWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1tZW51LW1vYmlsZS0tc2hvdy1tZW51Jyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGluZGV4SGVhZGVyU2xpZGVyID0gJCgnI2Nhcm91c2VsSW5kZXhQYWRlJyk7XHJcblxyXG4gIGluZGV4SGVhZGVyU2xpZGVyLm93bENhcm91c2VsKHtcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc21hcnRTcGVlZDogMTUwMCxcclxuICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6e1xyXG4gICAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6e1xyXG4gICAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLnNsaWRlci1oZWFkX19idXR0b20tLW5leHQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGluZGV4SGVhZGVyU2xpZGVyLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5zbGlkZXItaGVhZF9fYnV0dG9tLS1wcmV2JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpbmRleEhlYWRlclNsaWRlci50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICAvKipAcGFyYW0ge0RPTVtdfSB0YWJzINC60L7Qu9C70LXQutGG0LjRjyDQstGB0LXRhSDRgtCw0LHQvtCyINC90LAg0YHQsNC50YLQtSovXHJcbiAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpO1xyXG5cclxuICAvKipcclxuICAqINC90LAg0LLRgdC1INGC0LDQsdGLINCy0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4XHJcbiAgKlxyXG4gICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRJbmRleEFjdGl2ZUl0ZW0g0LjQvdC00LXQutGBINGC0LDQsdCwINC4INC40L3QtNC10LrRgSDRgdGC0YDQsNC90LjRhtGLIHRhYl9fY29udGVudCAo0L3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgMCwg0YfRgtC+INGB0L7QvtGC0LLQtdGC0YHQstGD0LXRgiDQv9C10YDQtdCy0L7QvNGDLCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQsNC60YLQuNCy0L3QvtC80YMg0YLQsNCx0YMpXHJcbiAgKiBAcGFyYW0ge0RPTVtdfSB0YWJzSGVhZGVySXRlbXMg0LrQvtC70LvQtdC60YbQuNGPINGC0LDQsdC+0LIg0YLQtdC60YPRidC10LPQviB0YWJzW2l0ZW1dXHJcbiAgKiBAcGFyYW0ge0RPTVtdfSB0YWJzQ29udGVudEl0ZW1zINC60L7Qu9C70LXQutGG0LjRjyDRgdGC0YDQsNC90LjRhiDRgtC10LrRg9GJ0LXQs9C+IHRhYnNbaXRlbV1cclxuICAqINCf0L4g0LrQu9C40LrRgyDQvtC/0YDQtdC00LXQu9GP0LXQvCDQuNC90LTQtdC60YEg0Y3Qu9C10LzQtdC90YLQsCwg0L3QsCDQutC+0YLQvtGA0L7QvCDQv9GA0L7QuNC30L7RiNC70L4g0YHQvtCx0YvRgtC40LVcclxuICAqINCX0LDQv9C40YHRi9Cy0LDQtdC8INC10LPQviDQuNC90LTQtdC60YEg0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y4gY3VycmVudEluZGV4QWN0aXZlSXRlbVxyXG4gICog0JTQtdC70LDQtdC8INCw0LrRgtC40LLQvdGL0Lwg0Y3Qu9C10LzQtdC90YIg0L3QsCDQutC+0YLQvtGA0L7QvCDQv9GA0L7QuNC30L7RiNC10Lsg0LrQu9C40LogKGl0ZW1bY3VycmVudEluZGV4QWN0aXZlSXRlbV0pXHJcbiAgKiovXHJcbiAgdGFicy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleEFjdGl2ZUl0ZW0gPSAwO1xyXG4gICAgbGV0IHRhYnNIZWFkZXJJdGVtcyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2hlYWRlci1pdGVtJyk7XHJcbiAgICBsZXQgdGFic0NvbnRlbnRJdGVtcyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfX2NvbnRlbnQnKTtcclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSB0YWJzSGVhZGVySXRlbXNbY3VycmVudEluZGV4QWN0aXZlSXRlbV0gJiYgZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50YWJzX19oZWFkZXItaXRlbScpKSB7XHJcbiAgICAgICAgdGFic0hlYWRlckl0ZW1zW2N1cnJlbnRJbmRleEFjdGl2ZUl0ZW1dLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2hlYWRlci1pdGVtLS1hY3RpdmUnKTtcclxuICAgICAgICB0YWJzQ29udGVudEl0ZW1zW2N1cnJlbnRJbmRleEFjdGl2ZUl0ZW1dLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYnNfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB0YWJzSGVhZGVySXRlbXMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChlbGVtID09IGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhBY3RpdmVJdGVtID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgndGFic19faGVhZGVyLWl0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB0YWJzQ29udGVudEl0ZW1zW2N1cnJlbnRJbmRleEFjdGl2ZUl0ZW1dLmNsYXNzTGlzdC5hZGQoJ3RhYnNfX2NvbnRlbnQtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSgpKTtcclxuIiwiY29uc3Qgc2VuZEZvcm1PcmRlciA9IChmdW5jdGlvbigpe1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy8gY29uc3QgX2Zvcm1PcmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRleEdlbmVyYWxPcmRlcicpO1xyXG5cclxuICAvLyBfZm9ybU9yZGVyLm9uc3VibWl0ID0gc2VuZFJlcXVlc3Q7XHJcbiAgLyoqXHJcbiAgICogc2VuZFJlcXVlc3QoKSAtINC+0YLQv9GA0LDQstC70Y/QtdGCINGE0L7RgNC80YNcclxuICAgKiBAcGFyYW0geyp9IGUgLSBldmVudCDRgdC+0LHRi9GC0LjRjyBzdWJtaXRcclxuICAgKiBAcGFyYW0geyp9IGZvcm0gLSDRhNC+0YDQvNCwLCDQutC+0YLQvtGA0YPRjiDQvtGC0L/RgNCw0LLQu9GP0LXQvFxyXG4gICAqINCe0YLQutGA0YvQstCw0LXQvCDQt9Cw0L/RgNC+0YFcclxuICAgKiDQntGC0L/RgNCw0LLQu9GP0LXQvCDQt9Cw0L/RgNC+0YFcclxuICAgKiDQn9C+INGB0L7QsdGL0YLQuNGP0Lwg0L3QsCDQt9Cw0L/RgNC+0YHQtSwg0LLRi9Cy0L7QtNC40Lwg0YDQtdC30YPQu9GM0YLQsNGCINC90LAg0YHRgtGA0LDQvdC40YbRg1xyXG4gICAqL1xyXG5cclxuICBmdW5jdGlvbiBzZW5kUmVxdWVzdChlLCBmb3JtKSB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgX3hodHRwUG9zdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgIF94aHR0cFBvc3Qub3BlbignUE9TVCcsICdwaHAvZm9ybS1vcmRlci5waHAnLCB0cnVlKTtcclxuICAgIF94aHR0cFBvc3Quc2VuZChjb2xsZWN0c09iamVjdFRvU2VuZChlLnRhcmdldCkpO1xyXG5cclxuICAgIF94aHR0cFBvc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdFF1ZXJ5ID0gZmFsc2U7XHJcbiAgICAgICAgb3V0cHV0UmVzdWx0VG9QYWdlKGUudGFyZ2V0LCByZXN1bHRRdWVyeSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgIGxldCByZXN1bHRRdWVyeSA9IHRoaXMucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgIG91dHB1dFJlc3VsdFRvUGFnZShlLnRhcmdldCwgcmVzdWx0UXVlcnkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF94aHR0cFBvc3Qub25lcnJvciA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgbGV0IHJlc3VsdFF1ZXJ5ID0gZmFsc2U7XHJcbiAgICAgIG91dHB1dFJlc3VsdFRvUGFnZShlLnRhcmdldCwgcmVzdWx0UXVlcnkpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbGxlY3RzT2JqZWN0VG9TZW5kKCkgLSDRgdC+0LHQuNGA0LDQtdGCINGB0L7Qu9C70LXQutGG0LjRjiDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDQvdCwINGB0LXRgNCy0LXRgFxyXG4gICAqIEBwYXJhbSB7Kn0gZm9ybSAtINGE0L7RgNC80LAg0LjQtyDQv9C+0LvQtdC5INC60L7RgtC+0YDQvtC5INC90LXQvtCx0YXQvtC00LjQvNC+INGB0L7QsdGA0LDRgtGMINC60L7Qu9C70LXQutGG0LjRjlxyXG4gICAqIEB2YXIgaW5wdXRzIC0g0L/QvtC70Y8g0YTQvtGA0LzRi1xyXG4gICAqIEB2YXIgY3VycmVudFNlbGVjdCAtINC/0L7Qu9GPINGE0L7RgNC80YtcclxuICAgKiBAdmFyIHRleHRhcmVhIC0g0L/QvtC70Y8g0YTQvtGA0LzRi1xyXG4gICAqIEB2YXIgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbCAtINC60L7Qu9C70LXQutGG0LjRjyDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAqIDEuINC30LDQv9C40YHRi9Cy0LDQtdC8INCyINC60L7Qu9C70LXQutGG0LjRjiDRgdC60YDRi9GC0YvQtSDQv9C+0LvRjyDQtNC70Y8g0LfQsNCz0L7Qu9C+0LLQutCwINCyINGELdGG0LjRjiBtYWlsKClcclxuICAgKiAyLiDQt9Cw0L/QuNGB0YvQstCw0LXQvCDRgtC+LCDRh9GC0L4g0LIgc2VsZWN0INCyINCw0YLRgNC40LHRg9GC0LUgbmFtZVxyXG4gICAqIDMuINC30LDQv9C40YHRi9Cy0LDQtdC8INC+0YHRgtCw0LLRiNC40LXRgdGPINC/0L7Qu9GPXHJcbiAgICogNC4g0LXRgdC70LggY2hlY2tib3gg0LHQtdC3INC30LDRgdC+0YDQsC/Qt9Cw0YHQvtGAXHJcbiAgICog0JLQvtC30LLRgNCw0YnQsNC10Lwg0LPQvtGC0L7QstGD0Y4g0LrQvtC70LvQtdC60YbQuNGOXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY29sbGVjdHNPYmplY3RUb1NlbmQoZm9ybSkge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgY29uc3QgY3VycmVudFNlbGVjdCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC1jdXJyZW50Jyk7XHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcclxuXHJcbiAgICBsZXQgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbCA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKCFpdGVtLm1hdGNoZXMoJ1t0eXBlPVwiaGlkZGVuXCJdJykpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBrZXkgPSBpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG5cclxuICAgICAgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbC5hcHBlbmQoa2V5LCBpdGVtLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGN1cnJlbnRTZWxlY3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKCFpdGVtLmhhc0F0dHJpYnV0ZSgnbmFtZScpKSByZXR1cm47XHJcbiAgICAgIGxldCBrZXkgPSBpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgICBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsLmFwcGVuZChrZXksIGl0ZW0uaW5uZXJUZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoaXRlbS5tYXRjaGVzKCdbdHlwZT1cImhpZGRlblwiXScpKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQga2V5ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuXHJcbiAgICAgIGlmIChpdGVtLm1hdGNoZXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKSAmJiBpdGVtLm1hdGNoZXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGVja2VkKSB7XHJcbiAgICAgICAgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbC5hcHBlbmQoa2V5LCAn0KEg0LfQsNGB0L7RgNC+0LwnKTtcclxuICAgICAgfSBlbHNlIGlmKGl0ZW0ubWF0Y2hlcygnW3R5cGU9XCJjaGVja2JveFwiXScpICYmICFpdGVtLm1hdGNoZXMoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKS5jaGVja2VkKSB7XHJcbiAgICAgICAgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbC5hcHBlbmQoa2V5LCAn0JHQtdC3INC30LDRgdC+0YDQsCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PSAnd2VpZ2h0Jykge1xyXG4gICAgICAgIGlucHV0U2VsZWN0QXR0ck5hbWVBbGwuYXBwZW5kKGtleSwgYCR7aXRlbS52YWx1ZX0g0LrQsy/RiNGCYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbC5hcHBlbmQoa2V5LCBpdGVtLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGV4dGFyZWEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgbGV0IGtleSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgIGlucHV0U2VsZWN0QXR0ck5hbWVBbGwuYXBwZW5kKGtleSwgaXRlbS52YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5wdXRTZWxlY3RBdHRyTmFtZUFsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG91dHB1dFJlc3VsdFRvUGFnZSgpIC0g0LLRi9Cy0L7QtNC40YIg0YDQtdC30YPQu9GM0YLQsNGCINGD0YHQv9C10YUv0L3QtdGD0YHQv9C10YUg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICogQHBhcmFtIHsqfSBmb3JtIC0g0YTQvtGA0LzQsFxyXG4gICAqIEBwYXJhbSB7Ym9vbH0gcmVzdWx0UXVlcnkgLSDQvtGC0LLQtdGCINGB0LXRgNC10LLQtdGA0LAgdHJ1ZS9mYWxzZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIG91dHB1dFJlc3VsdFRvUGFnZShmb3JtLCByZXN1bHRRdWVyeSkge1xyXG4gICAgaWYgKHJlc3VsdFF1ZXJ5KSB7XHJcbiAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnJlc3VsdC1xdWVyeS1lcnJvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctcmVzdWx0LXF1ZXJ5Jyk7XHJcbiAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnJlc3VsdC1xdWVyeS1zdWNjZXNzJykuY2xhc3NMaXN0LmFkZCgnc2hvdy1yZXN1bHQtcXVlcnknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLnJlc3VsdC1xdWVyeS1zdWNjZXNzJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1yZXN1bHQtcXVlcnknKTtcclxuICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXF1ZXJ5LWVycm9yJykuY2xhc3NMaXN0LmFkZCgnc2hvdy1yZXN1bHQtcXVlcnknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7c2VuZFJlcXVlc3R9O1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIGxldCB2aWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWJlcicpO1xyXG5cclxuICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fEJCfFBsYXlCb29rfElFTW9iaWxlfFdpbmRvd3MgUGhvbmV8S2luZGxlfFNpbGt8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgIHZpYmVyLmhyZWYgPSBcInZpYmVyOi8vYWRkP251bWJlcj0rNzk2MzQ1MjE2MDFcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdmliZXIuaHJlZiA9IFwidmliZXI6Ly9jaGF0P251bWJlcj0rNzk2MzQ1MjE2MDFcIjtcclxuICB9XHJcbn0pKCk7XHJcbiIsIi8vIC8qKlxyXG4vLyAgKiDQktGB0LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQsiDQtNCw0L3QvdC+0Lkg0YTQsNC50LvQtSDRgNC10LDQu9C40LfRg9GO0YIg0YLQvtC70YzQutC+INC+0LHRidC10LUg0L/QvtCy0LXQtNC10L3QuNC1INGN0LvQtdC80LXQvdGC0L7QsjpcclxuLy8gICogaW5wdXRcclxuLy8gICog0KHRgtC40LvQuNC30YPRjtGCXHJcbi8vICAqINCe0LHRgNCw0LHQsNGC0YvQstGO0YIg0L/QvtCy0LXQtNC10L3QuNC1XHJcbi8vICAqINCk0L7RgNC80LjRgNGD0Y7RgiDRgdC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LVcclxuLy8gICpcclxuLy8gICog0J3QtSDQstGL0L/QvtC70L3Rj9C10YI6XHJcbi8vICAqINC/0LXRgNC10LTQsNGH0YMg0LfQvdCw0YfQtdC90LjQuSDQsiDQtNGA0YPQs9C40LUg0YHQutGA0LjQv9GC0YssXHJcbi8vICAqINC90LUg0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC00LDQvdC90YvQtSDQtNC70Y8g0L/QvtC00YHRh9C10YLQsCDRh9C10LPQvi3Qu9C40LHQvixcclxuLy8gICog0L3QtSDRhdGA0LDQvdC40YIg0LTQsNC90L3Ri9C1LFxyXG4vLyAgKi9cclxuXHJcbmNvbnN0IGhhbmRsZXJJbnB1dHMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBfaW5wdXRzIC0g0LrQvtC70LvQtdC60YbQuNGPINC40L3Qv9GD0YLQvtCyXHJcbiAgICovXHJcbiAgY29uc3QgX2lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpO1xyXG5cclxuICAvKipcclxuICAgKiBzaG93RXJyb3JzSW5wdXQoKSAtINC/0L7QutCw0LfRi9Cy0LDQtdGCINC+0YjQuNCx0LrRgyDQvdCwINC40L3Qv9GD0YLQtVxyXG4gICAqINCf0YDQuNC90LjQvNCw0LXRgiBpbnB1dCDQvdCwINC60L7RgtC+0YDQvtC8INC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgICog0JXRgdC70LggaW5wdXQg0LIg0YTQvtC60YPRgdC1INGB0L3QuNC80LDQtdGCINC+0YjQuNCx0LrRg1xyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNob3dFcnJvcnNJbnB1dChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0Lm1hdGNoZXMoJy5pbnB1dCcpKSB7XHJcbiAgICAgIGxldCBlcnJvciA9IGlucHV0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICBlcnJvci5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UtdGV4dCcpLmlubmVyVGV4dCA9IGN1cnJlbnRUZXh0O1xyXG5cclxuICAgICAgaW5wdXQub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLW5vLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW5vLXNlbGVjdGVkJyk7XHJcbiAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygn0J/QtdGA0LXQtNCw0L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YIg0L3QtSAuaW5wdXQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNob3dFcnJvcnNJbnB1dCDQv9C10YDQtdC00LDQtdC8INGE0YPQvdC60LjRjiDQtNC70Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LLQvdC10YjQvdC40LzQuCDRgdC60YDQuNC/0YLQsNC80LhcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd0Vycm9yc0lucHV0XHJcbiAgfTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy/Ql9Cw0LTQsNC10Lwg0LjQvdC/0YPRglxyXG4gIGxldCBpbnB1dHNUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVsLWZpZWxkJyk7XHJcblxyXG4gIC8v0KTRg9C90LrRhtC40Y8g0LzQsNGB0LrQuCDQuNC90L/Rg9GC0LBcclxuICBmdW5jdGlvbiBzZXRNYXNrKGV2ZW50KSB7XHJcbiAgICAvL9CX0LDQtNCw0LXQvCDQsiDQv9C10YDQtdC80LXQvdC90YPRjiDQvdCw0LbQsNGC0YPRjiDQutC70LDQstC40YjRg1xyXG4gICAgbGV0IHByZXNzZWRLZXk7XHJcbiAgICAvL9Cj0YHQu9C+0LLQuNC1LCDQv9GA0L7QstC10YDRj9GO0YnQtdC1INC90LDQttCw0YLRg9GOINC60LvQsNCy0LjRiNGDXHJcbiAgICBldmVudC5rZXlDb2RlICYmIChwcmVzc2VkS2V5ID09PSBldmVudC5rZXlDb2RlKTtcclxuICAgIC8v0JfQsNC00LDQtdC8INCyINC/0LXRgNC10LzQtdC90L3Rg9GOINC/0L7Qt9C40YbQuNGOINCyINC40L3Qv9GD0YLQtSwg0YEg0LrQvtGC0L7RgNC+0Lkg0LHRg9C00LXRgiDQtNC+0YHRgtGD0L/QtdC9INCy0LLQvtC0INGG0LjRhNGAXHJcbiAgICBsZXQgbnVtYmVyUG9zID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcclxuICAgIC8v0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQstCy0L7QtNCwINGG0LjRhNGAINGBINGC0YDQtdGC0YzQtdC5INC/0L7Qt9C40YbQuNC4XHJcbiAgICBpZiAobnVtYmVyUG9zIDwgMykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICAvL9CX0LDQtNCw0LXQvCDQstC90LXRiNC90LjQuSDQstC40LQg0LzQsNGB0LrQuCDQuNC90L/Rg9GC0LBcclxuICAgIGxldCBtYXNrVHlwZSA9ICcrNyAoX19fKSBfX18tX18tX18nLFxyXG4gICAgICAgIGkgPSAwLFxyXG4gICAgLy/Qn9GA0L7QstC10YDQutCwINC4INC30LDQvNC10L3QsCB2YWx1ZSDQuNC90L/Rg9GC0LAg0L/QviDQsdGD0LrQstC10L3QvdC+XHJcbiAgICAgICAgcmVwbGFjZVZhbHVlID0gbWFza1R5cGUucmVwbGFjZSgvXFxEL2csICcnKSxcclxuICAgICAgICBwcmV2VmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyksXHJcbiAgICAgICAgY3VycmVudFZhbHVlID0gbWFza1R5cGUucmVwbGFjZSgvW19cXGRdL2csIChhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpIDwgcHJldlZhbHVlLmxlbmd0aCA/IHByZXZWYWx1ZS5jaGFyQXQoaSsrKSB8fCByZXBsYWNlVmFsdWUuY2hhckF0KGkpIDogYTtcclxuICAgICAgICB9KTtcclxuICAgIC8v0JfQsNGJ0LjRgtCwINC+0YIg0YHRgtC40YDQsNC90LjRjyDQv9C10YDQstGL0YUg0LTQstGD0YUg0YbQuNGE0YAgKCs3KVxyXG4gICAgaSA9IGN1cnJlbnRWYWx1ZS5pbmRleE9mKCdfJyk7XHJcbiAgICBpZiAoaSAhPSAtMSkge1xyXG4gICAgICBpIDwgNSAmJiAoaSA9IDMpO1xyXG4gICAgICBjdXJyZW50VmFsdWUgPSBjdXJyZW50VmFsdWUuc2xpY2UoMCwgaSk7XHJcbiAgICB9XHJcbiAgICAvL9Cg0LXQs9GD0LvRj9GA0L3QvtC1INCy0YvRgNCw0LbQtdC90LjQtSDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCB2YWx1ZSDQuNC90L/Rg9GC0LBcclxuICAgIGxldCByZWcgPSBtYXNrVHlwZS5zdWJzdHIoMCwgdGhpcy52YWx1ZS5sZW5ndGgpLnJlcGxhY2UoL18rL2csXHJcblxyXG4gICAgZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAnXFxcXGR7MSwnICsgYS5sZW5ndGggKyAnfSc7XHJcbiAgICB9KS5yZXBsYWNlKC9bKygpXS9nLCAnXFxcXCQmJyk7XHJcblxyXG4gICAgcmVnID0gbmV3IFJlZ0V4cCgnXicgKyByZWcgKyAnJCcpO1xyXG4gICAgLy/Qn9GA0L7QstC10YDQutCwINGB0L7QtNC10YDQttC40LzQvtCz0L4g0LjQvdC/0YPRgtCwINC90LAg0YDQtdCz0YPQu9GP0YDQvdC+0LUg0LLRi9GA0LDQttC10L3QuNC1LCDQtNC70LjQvdC90YMg0Lgg0L3QsNC20LjQvNCw0LXQvNGL0LUg0LrQu9Cw0LLQuNGI0LhcclxuICAgIGlmICghcmVnLnRlc3QodGhpcy52YWx1ZSkgfHwgdGhpcy52YWx1ZS5sZW5ndGggPCA1IHx8IHByZXNzZWRLZXkgPiA0NyAmJiBwcmVzc2VkS2V5IDwgNTgpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gY3VycmVudFZhbHVlO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnYmx1cicgJiYgdGhpcy52YWx1ZS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQutGD0YDRgdC+0YAg0LIg0LrQvtC90LXRhiDRgdGC0YDQvtC60Lgg0LIg0LjQvdC/0YPRgtC1LCDQtdGB0LvQuCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LrQvdC+0L/QutC4INC+0L0g0YHRgtC+0LjRgiDQvdC1INCyINC60L7QvdGG0LVcclxuXHJcblxyXG4gICAgaW5wdXRzVGVsLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShpbnB1dC52YWx1ZS5sZW5ndGgsIGlucHV0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8v0JfQsNC/0YPRgdC6INGE0YPQvdC60YbQuNC4IHNldE1hc2sg0YfQtdGA0LXQtyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjQuVxyXG4gIGlucHV0c1RlbC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2V0TWFzaywgZmFsc2UpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBzZXRNYXNrLCBmYWxzZSk7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgc2V0TWFzaywgZmFsc2UpO1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNldE1hc2ssIGZhbHNlKTtcclxuICB9KTtcclxuXHJcblxyXG59KSgpO1xyXG4iLCJjb25zdCByYW5nZXMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvKipcclxuICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiByYW5nZVxyXG4gICAqXHJcbiAgICog0JzQtdGC0L7QtNC+0LwgZm9yRWFjaCgpINC90LAg0LrQsNC20LTRi9C5IGl0ZW0g0LrQvtC70LvQtdC60YbQuNC4IHJhbmdlINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0YDQvtGB0LvRg9GI0LrRgyBhZGRFdmVudExpc3RlbmVyKClcclxuICAgKlxyXG4gICAqIHZhcmlhYmxlczpcclxuICAgKiByYW5nZSAtINC60L7Qu9C70LXQutGG0LjRjyDQstGB0LXRhSByYW5nZWDQtdC5INC90LAg0YHQsNC50YLQtVxyXG4gICAqIGZvcm1hdHRlciAtINGH0LXRgNC10Lcg0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQt9Cw0LTQsNC10YIg0LrRgNCw0YHQuNCy0YvQuSDRh9C40YHQu9C+0LLQvtC5INGE0L7RgNC80LDRgiDRgSDQv9GA0L7QsdC10LvQsNC80Lgg0LIg0YDQsNC30YDRj9C00LDRhVxyXG4gICAqIHBhcmVudCAtINGA0L7QtNC40YLQtdC70YwgcmFuZ2Vg0LBcclxuICAgKiBvdXRwdXRDdXJyZW50VmFsdWUgLSDQsdC70L7QuiDQsiDQutC+0YLQvtGA0YvQuSDQstGL0LLQvtC00LjRgtGB0Y8g0LfQvdCw0YfQtdC90LjQtSByYW5nZWBhXHJcbiAgICogbWVhc3VyZVVuaXQgLSDRhdGA0LDQvdC40YIgYdCx0LHRgNC10LLQuNCw0YLRg9GA0YMg0LXQtNC40L3QuNGG0Ysg0LjQt9C80LXRgNC40L3QuNGPLCDQutC+0YLQvtGA0LDRjyDQv9GA0L7Qv9C40YHQsNC90LAg0LIgSFRNTCDRgNCw0LfQvNC10YLQutC1XHJcbiAgICpcclxuICAgKiBoYW5kbGVyczpcclxuICAgKiDQl9C90LDRh9C10L3QuNC1IHJhbmdlINC90LAg0LrQvtGC0L7RgNC+0Lwg0L/RgNC+0LjQt9C+0YjQu9C+INGB0L7QsdGL0YLQuNC1ICdpbnB1dCcsINGE0L7RgNC80LDRgtC40YDRg9C10Lwg0Lgg0LLRi9Cy0L7QtNC40Lwg0LIgb3V0cHV0Q3VycmVudFZhbHVlXHJcbiAgICovXHJcbiAgbGV0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlJyk7XHJcbiAgLy8gY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydScpO1xyXG5cclxuICByYW5nZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgbGV0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnLnJhbmdlLXdyYXAnKTtcclxuICAgIGxldCBvdXRwdXRDdXJyZW50VmFsdWUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19vdXRwdXQtY3VycmVudC12YWx1ZS1pbnB1dCcpO1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgb3V0cHV0Q3VycmVudFZhbHVlLnZhbHVlID0gdGhpcy52YWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgb3V0cHV0Q3VycmVudFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGl0ZW0udmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb3V0cHV0Q3VycmVudFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG5cclxuICAgIG91dHB1dEN1cnJlbnRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBpdGVtLnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsIi8qKlxyXG4gKiDQktGB0LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQsiDQtNCw0L3QvdC+0Lkg0YTQsNC50LvQtSDRgNC10LDQu9C40LfRg9GO0YIg0YLQvtC70YzQutC+INC+0LHRidC10LUg0L/QvtCy0LXQtNC10L3QuNC1INGN0LvQtdC80LXQvdGC0L7QsjpcclxuICogU2VsZWN0XHJcbiAqINCh0YLQuNC70LjQt9GD0Y7RglxyXG4gKiDQntCx0YDQsNCx0LDRgtGL0LLRjtGCINC/0L7QstC10LTQtdC90LjQtVxyXG4gKiDQpNC+0YDQvNC40YDRg9GO0YIg0YHQvtC+0LHRidC10L3QuNC1INC+0LEg0L7RiNC40LHQutC1XHJcbiAqXHJcbiAqINCd0LUg0LLRi9C/0L7Qu9C90Y/QtdGCOlxyXG4gKiDQv9C10YDQtdC00LDRh9GDINC30L3QsNGH0LXQvdC40Lkg0LIg0LTRgNGD0LPQuNC1INGB0LrRgNC40L/RgtGLLFxyXG4gKiDQvdC1INC+0LHRgNCw0LHQsNGC0YvQstCw0LXRgiDQtNCw0L3QvdGL0LUg0LTQu9GPINC/0L7QtNGB0YfQtdGC0LAg0YfQtdCz0L4t0LvQuNCx0L4sXHJcbiAqINC90LUg0YXRgNCw0L3QuNGCINC00LDQvdC90YvQtSxcclxuICovXHJcbmNvbnN0IGN1c3RvbVNlbGVjdHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvKipcclxuICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjRhSDRgdC10LvQtdC60YLQvtCyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RPTVtdfSBfc2VsZWN0IC0g0LrQvtC70LvQtdC60YbQuNGPINCy0YHQtdGFINGB0LXQu9C10LrRgtC+0LIg0L3QsCDRgdCw0LnRgtC1XHJcbiAgICogQHBhcmFtIHtET01bXX0gX3NlbGVjdEhlYWRlciAtINGI0LDQv9C60Lgg0YHQtdC70LXQutGC0L7QslxyXG4gICAqIEBwYXJhbSB7RE9NW119IF9zZWxlY3RPcHRpb24gLSDQutC+0LvQu9C10LrRhtC40Y8g0YLQtdC7INCy0L3Rg9GC0YDQuCDRgdC10LvQtdC60YLQvtCyLCDRgSDQstCw0YDQuNCw0L3RgtCw0LzQuCDQstGL0LHQvtGA0LAgKG9wdGlvbilcclxuICAgKlxyXG4gICAqIGhhbmRsZXJzOlxyXG4gICAqIF9zZWxlY3RUb2dnbGUgLSDQv9C+INC60LvQuNC60YMg0L3QsCDRgdC10LvQtdC60YLQtSDQsNC60YLQuNCy0LjRgNGD0LXRgiDQtdCz0L5cclxuICAgKiBfb3V0Rm9jdXMgLSDQv9GA0Lgg0L/QvtGC0LXRgNC1INGE0L7QutGD0YHQsCDQvdCwINGB0LXQu9C10LrRgtC1INC30LDQutGA0LLQsNC10Lwg0LXQs9C+XHJcbiAgICogX3NldFNlbGVjdGVkIC0g0L/QviDQutC70LjQutGDINC90LAgb3B0aW9uINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC10LPQviDQutCw0Log0LLRi9Cx0YDQsNC90L3Ri9C5INC4INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC10LPQviDQsNGC0YDQuNCx0YPRgiBbdGhpcy5uYW1lPVwidGhpcy52YWx1ZVwiXVxyXG4gICAqL1xyXG4gIGxldCBfc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RcIik7XHJcbiAgbGV0IF9zZWxlY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdF9faGVhZGVyXCIpO1xyXG4gIGxldCBfc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RfX29wdGlvblwiKTtcclxuXHJcbiAgX3NlbGVjdEhlYWRlci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3NlbGVjdFRvZ2dsZSk7XHJcbiAgfSk7XHJcblxyXG4gIF9zZWxlY3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgX291dEZvY3VzKTtcclxuICB9KTtcclxuXHJcbiAgX3NlbGVjdE9wdGlvbi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3NldFNlbGVjdGVkKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gX3NlbGVjdFRvZ2dsZSgpIHtcclxuICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogX3NldFNlbGVjdGVkKCkg0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LIgc2VsZWN0INCy0YvQsdGA0LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQuNC3IG9wdGlvblxyXG4gICAqINC40Lcgb3B0aW9uINC/0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YHRgiDQuCDQsNGC0YDQuNCx0YPRgiBuYW1lXHJcbiAgICog0L/RgNC40YHQstCw0LjQstCw0LXQvCDQv9C+0LvRg9GH0LXQvdC90YvQtSDQt9C90LDRh9C10L3QuNGPIHNlbGVjdGDRgyDQsiAuc2VsZWN0LWN1cnJlbnRcclxuICAgKiDQt9Cw0LrRgNGL0LLQsNC10Lwg0LLRi9C/0LDQtNGO0YnQuNC5INGB0L/QuNGB0L7QulxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIF9zZXRTZWxlY3RlZCgpIHtcclxuICAgIGxldCB0ZXh0ID0gdGhpcy5pbm5lclRleHQsXHJcbiAgICAgICAgYXR0cmlidXRlTmFtZVZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLFxyXG4gICAgICAgIHNlbGVjdCA9IHRoaXMuY2xvc2VzdChcIi5zZWxlY3RcIiksXHJcbiAgICAgICAgY3VycmVudFNlbGVjdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1jdXJyZW50XCIpO1xyXG5cclxuICAgIGN1cnJlbnRTZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgYXR0cmlidXRlTmFtZVZhbHVlKTtcclxuICAgIGN1cnJlbnRTZWxlY3QuaW5uZXJUZXh0ID0gdGV4dDtcclxuXHJcbiAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIC8vINCf0YDQuCDQv9C+0YLQtdGA0LUg0YTQvtC60YPRgdCwINC30LDQutGA0YvQstCw0LXQvCDQstGL0L/QsNC00LDRjtGJ0LjQuSDRgdC/0LjRgdC+0LpcclxuICBmdW5jdGlvbiBfb3V0Rm9jdXMoKSB7XHJcbiAgICBsZXQgdGhpc1NlbGVjdCA9IHRoaXMuY2xvc2VzdChcIi5zZWxlY3RcIik7XHJcbiAgICB0aGlzU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzaG93RXJyb3JzU2VsZWN0KCkg0J/QvtC60LDQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDINC90LAg0YHQtdC70LXQutGC0LVcclxuICAgKiBAcGFyYW0geyp9IHNlbGVjdCDRjdC70LXQvNC10L3RgiDQvdCwINC60L7RgtC+0YDQvtC8INC90LDQtNC+INC/0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc2hvd0Vycm9yc1NlbGVjdChzZWxlY3QpIHtcclxuICAgIGlmIChzZWxlY3QubWF0Y2hlcygnLnNlbGVjdCcpKSB7XHJcbiAgICAgIGxldCBzZWxlY3RIZWFkZXIgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGVhZGVyJyk7XHJcbiAgICAgIC8vINCyINGB0L7QvtCx0YnQtdC90LjQuCDQvtCxINC+0YjQuNCx0LrQtSAo0L3QtSDQstGL0LHRgNCw0L0g0L3QuCDQvtC00LjQvSDQv9GD0L3QutGCKSDQt9Cw0L/QuNGB0YvQstCw0LXQvCDRgtC10LrRgdGCINC40Lcg0LfQsNCz0L7Qu9C+0LLQutCwIHNlbGVjdGBhXHJcbiAgICAgIGxldCBjdXJyZW50VGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWN1cnJlbnQnKS5pbm5lclRleHQ7XHJcbiAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UtdGV4dCcpLmlubmVyVGV4dCA9IGN1cnJlbnRUZXh0O1xyXG5cclxuICAgICAgc2VsZWN0Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxlY3RIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3Itbm8tc2VsZWN0ZWQnKTtcclxuICAgICAgICBzZWxlY3RIZWFkZXIucXVlcnlTZWxlY3RvcignLmVycm9yLW5vLXNlbGVjdGVkX19tZXNzYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlbGVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdlcnJvci1uby1zZWxlY3RlZCcpO1xyXG4gICAgICBzZWxlY3RIZWFkZXIucXVlcnlTZWxlY3RvcignLmVycm9yLW5vLXNlbGVjdGVkX19tZXNzYWdlJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfQn9C10YDQtdC00LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQvdC1IC5zZWxlY3QnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGhpZGVFcnJvcnNTZWxlY3QoKSDRgdC60YDRi9Cy0LDQtdGCINC+0YjQuNCx0LrRgyDQvdCwINGB0LXQu9C10LrRgtC1XHJcbiAgICogQHBhcmFtIHsqfSBzZWxlY3RcclxuICAgKi9cclxuICBmdW5jdGlvbiBoaWRlRXJyb3JzU2VsZWN0KHNlbGVjdCkge1xyXG4gICAgaWYgKHNlbGVjdC5tYXRjaGVzKCcuc2VsZWN0JykpIHtcclxuICAgICAgbGV0IHNlbGVjdEhlYWRlciA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oZWFkZXInKTtcclxuXHJcbiAgICAgIHNlbGVjdEhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1uby1zZWxlY3RlZCcpO1xyXG4gICAgICBzZWxlY3RIZWFkZXIucXVlcnlTZWxlY3RvcignLmVycm9yLW5vLXNlbGVjdGVkX19tZXNzYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfQn9C10YDQtdC00LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQvdC1IC5zZWxlY3QnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93RXJyb3JzU2VsZWN0LFxyXG4gICAgaGlkZUVycm9yc1NlbGVjdFxyXG4gIH07XHJcbn0oKSk7XHJcbiIsIi8vIC8qKlxyXG4vLyAgKiDQktGB0LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQsiDQtNCw0L3QvdC+0Lkg0YTQsNC50LvQtSDRgNC10LDQu9C40LfRg9GO0YIg0YLQvtC70YzQutC+INC+0LHRidC10LUg0L/QvtCy0LXQtNC10L3QuNC1INGN0LvQtdC80LXQvdGC0L7QsjpcclxuLy8gICogaW5wdXRcclxuLy8gICog0KHRgtC40LvQuNC30YPRjtGCXHJcbi8vICAqINCe0LHRgNCw0LHQsNGC0YvQstGO0YIg0L/QvtCy0LXQtNC10L3QuNC1XHJcbi8vICAqINCk0L7RgNC80LjRgNGD0Y7RgiDRgdC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LVcclxuLy8gICpcclxuLy8gICog0J3QtSDQstGL0L/QvtC70L3Rj9C10YI6XHJcbi8vICAqINC/0LXRgNC10LTQsNGH0YMg0LfQvdCw0YfQtdC90LjQuSDQsiDQtNGA0YPQs9C40LUg0YHQutGA0LjQv9GC0YssXHJcbi8vICAqINC90LUg0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC00LDQvdC90YvQtSDQtNC70Y8g0L/QvtC00YHRh9C10YLQsCDRh9C10LPQvi3Qu9C40LHQvixcclxuLy8gICog0L3QtSDRhdGA0LDQvdC40YIg0LTQsNC90L3Ri9C1LFxyXG4vLyAgKi9cclxuXHJcbmNvbnN0IGhhbmRsZXJUZXh0YXJlYSA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIF90ZXh0YXJlYSAtINC60L7Qu9C70LXQutGG0LjRjyDQuNC90L/Rg9GC0L7QslxyXG4gICAqL1xyXG4gIGNvbnN0IF90ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0YXJlYScpO1xyXG5cclxuICAvKipcclxuICAgKiBzaG93RXJyb3JzVGV4dGFyZWEoKSAtINC/0L7QutCw0LfRi9Cy0LDQtdGCINC+0YjQuNCx0LrRgyDQvdCwINC40L3Qv9GD0YLQtVxyXG4gICAqINCf0YDQuNC90LjQvNCw0LXRgiB0ZXh0YXJlYSDQvdCwINC60L7RgtC+0YDQvtC8INC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgICog0JXRgdC70LggdGV4dGFyZWEg0LIg0YTQvtC60YPRgdC1INGB0L3QuNC80LDQtdGCINC+0YjQuNCx0LrRg1xyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNob3dFcnJvcnNUZXh0YXJlYSh0ZXh0YXJlYSkge1xyXG4gICAgaWYgKHRleHRhcmVhLm1hdGNoZXMoJy50ZXh0YXJlYScpKSB7XHJcbiAgICAgIGxldCBlcnJvciA9IHRleHRhcmVhLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gdGV4dGFyZWEuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICBlcnJvci5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UtdGV4dCcpLmlubmVyVGV4dCA9IGN1cnJlbnRUZXh0O1xyXG5cclxuICAgICAgdGV4dGFyZWEub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLW5vLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW5vLXNlbGVjdGVkJyk7XHJcbiAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygn0J/QtdGA0LXQtNCw0L3QvdGL0Lkg0Y3Qu9C10LzQtdC90YIg0L3QtSAuVGV4dGFyZWEnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNob3dFcnJvcnN0ZXh0YXJlYSDQv9C10YDQtdC00LDQtdC8INGE0YPQvdC60LjRjiDQtNC70Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LLQvdC10YjQvdC40LzQuCDRgdC60YDQuNC/0YLQsNC80LhcclxuICByZXR1cm4ge1xyXG4gICAgc2hvd0Vycm9yc1RleHRhcmVhXHJcbiAgfTtcclxufSkoKTtcclxuIiwiY29uc3Qg0YFoZWNrYm94ID0gKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLyoqXHJcbiAgICog0J7QsdGA0LDQsdC+0YLRh9C40LogY2hlY2tib3ggLSDQstGL0LHQvtGA0LAg0YLQuNC/0LAg0LTQvtGB0YLQsNCy0LrQuFxyXG4gICAqXHJcbiAgICog0JzQtdGC0L7QtNC+0LwgZm9yRWFjaCgpINC90LAg0LrQsNC20LTRi9C5IGl0ZW0g0LrQvtC70LvQtdC60YbQuNC4IGNoZWNrYm94INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0YDQvtGB0LvRg9GI0LrRgyBhZGRFdmVudExpc3RlbmVyKClcclxuICAgKlxyXG4gICAqIHZhcmlhYmxlczpcclxuICAgKiBwcmV2VGV4dENoZWNrYm94IC0g0YMg0LrQsNC20LTQvtCz0L4gaXRlbWDQsCA9IChjaGVja2JveCkg0LLRi9Cx0LjRgNCw0LXRgiDRgdC+0YHQtdC00LAg0L/QtdGA0LXQtCBjaGVja2JveFxyXG4gICAqIG5leHRUZXh0Q2hlY2tib3ggLSDRgyDQutCw0LbQtNC+0LPQviBpdGVtYNCwID0gKGNoZWNrYm94KSDQstGL0LHQuNGA0LDQtdGCINGB0L7RgdC10LTQsCDQv9C+0YHQu9C1IGNoZWNrYm94XHJcbiAgICpcclxuICAgKiBoYW5kbGVyczpcclxuICAgKiDQldGB0LvQuCBjaGVja2JveC5jaGVja2VkINGB0YLQuNC70LjQt9GD0LXQvCDRgdC+0YHQtdC00LAg0L/QvtGB0LvQtVxyXG4gICAqINCV0YHQu9C4ICFjaGVja2JveC5jaGVja2VkINGB0YLQuNC70LjQt9GD0LXQvCDRgdC+0YHQtdC00LAg0L/QtdGA0LXQtFxyXG4gICAqL1xyXG4gIGxldCBjaGVja2JveENhbGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtdHlwZS1iJyk7XHJcblxyXG4gIGNoZWNrYm94Q2FsYy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgbGV0IHByZXZUZXh0Q2hlY2tib3ggPSBpdGVtLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIGxldCBuZXh0VGV4dENoZWNrYm94ID0gaXRlbS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtZ291cC10eXBlLWJfX3RleHQnKTtcclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcclxuICAgICAgICBuZXh0VGV4dENoZWNrYm94LnN0eWxlLmNvbG9yID0gJyM2N2FmMDEnO1xyXG4gICAgICAgIHByZXZUZXh0Q2hlY2tib3guc3R5bGUuY29sb3IgPSAnIzYxMjIyOCc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpdGVtLmNoZWNrZWQpIHtcclxuICAgICAgICBuZXh0VGV4dENoZWNrYm94LnN0eWxlLmNvbG9yID0gJyM2MTIyMjgnO1xyXG4gICAgICAgIHByZXZUZXh0Q2hlY2tib3guc3R5bGUuY29sb3IgPSAnIzY3YWYwMSc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iXX0=
