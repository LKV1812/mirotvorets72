(function() {
  "use strict";

  /**
   * Переменные для калькулятора сырья
   */
  let trash = document.getElementById('checkboxCalc');
  let materialsDeliveryType = document.getElementById("materialsDeliveryType");
  let materialsKg = document.getElementById('materialsKg');
  let outputCountingResult = document.querySelector('#resultMaterialsCurrency span');
  let typeMaterials = document.getElementById('typeMaterials');
  let currentTypeMaterials = document.getElementById('currentTypeMaterials');

  /**
   * Переменные для калькулятора поддонов
   */
  let checkboxEpal = document.getElementById('epal');
  let palletGrade = document.getElementById('palletGrade');
  let currentPalletGrade = document.getElementById('currentPalletGrade');
  let palletDeliveryType = document.getElementById('palletDeliveryType');
  let palletsQuantity = document.getElementById('palletsRange');
  let outputCountingResultCurrencyPallets = document.getElementById('resultPalletsCurrency');

  /**
   * Переменные для калькулятора утилизации
   */
  let destructionKg = document.getElementById('destructionRange');
  let outputCountingResultCurrencyDestruction = document.getElementById('resultDestructionCurrency');

  /**
   * Переменные для калькулятора хранения
   */
  let storageKg = document.getElementById('storageRange');
  let outputCountingResultCurrencyStorage = document.getElementById('resultStorageCurrency');

  /**
  * priceMaterials{} - прайс на сырье
  *
  * свойста объекта -> Цены на сырье, зависят от объема в кг и типа доставки
  * метод объекта getPriceSelectedTypeMaterials возвращет цену выбранного сырья.   Принимает на воход объем в кг и тип доставки
  *
  * pricePallets{} - прайс на поддоны
  *
  * свойства объекта -> цены на сырье, зависят от сорта, наличия клейма epal, типа доставки
  * метод объекта getPriceSelectedGradePallet возвращет цену выбранного сырья.   Принимает на воход объем в кг и тип доставки
  **/
  const priceMaterials = {
    "cardboard": {
      'our-delivery': {
        '0': 2.5,
        '500': 3,
        '1000': 3.5,
      },
      'self-delivery': {
        '0': 3,
        '500': 3,
        '1000': 3.5,
      }
    },

    "paper": {
      'our-delivery': {
        '0': 5.5,
        '500': 6,
        '1000': 6.5,
      },
      'self-delivery': {
        '0': 7,
        '500': 7,
        '1000': 8,
      }
    },

    "books": {
      'our-delivery': {
        '0': 4,
        '500': 5,
        '1000': 5.5,
      },
      'self-delivery': {
        '0': 5,
        '500': 5,
        '1000': 6,
      }
    },

    "magazines": {
      'our-delivery': {
        '0': 4,
        '500': 5,
        '1000': 5.5,
      },
      'self-delivery': {
        '0': 5,
        '500': 5,
        '1000': 6,
      }
    },

    "newspapers": {
      'our-delivery': {
        '0': 4.5,
        '500': 5,
        '1000': 5.5,
      },
      'self-delivery': {
        '0': 5,
        '500': 5,
        '1000': 6,
      }
    },

    "film-stretch": {
      'our-delivery': {
        '0': 12,
        '500': 15,
        '1000': 19,
      },
      'self-delivery': {
        '0': 17,
        '500': 17,
        '1000': 19,
      }
    },

    "film-pvd": {
      'our-delivery': {
        '0': 12,
        '500': 15,
        '1000': 19,
      },
      'self-delivery': {
        '0': 17,
        '500': 17,
        '1000': 19,
      }
    },

    "film-color-pvd": {
      'our-delivery': {
        '0': 8,
        '500': 10,
        '1000': 12,
      },
      'self-delivery': {
        '0': 12,
        '500': 12,
        '1000': 12,
      }
    },

    "kegs": {
      'our-delivery': {
        '0': 2.5,
        '500': 2.5,
        '1000': 4,
      },
      'self-delivery': {
        '0': 4,
        '500': 4,
        '1000': 4,
      }
    },

    "plastic-canisters": {
      'our-delivery': {
        '0': 3,
        '500': 6,
        '1000': 7,
      },
      'self-delivery': {
        '0': 6,
        '500': 6,
        '1000': 12,
      }
    },

    "canisters": {
      'our-delivery': {
        '0': 5,
        '500': 6,
        '1000': 7,
      },
      'self-delivery': {
        '0': 10,
        '500': 10,
        '1000': 10,
      }
    },

    "aluminum-cans": {
      'our-delivery': {
        '0': 15,
        '500': 17,
        '1000': 19,
      },
      'self-delivery': {
        '0': 20,
        '500': 20,
        '1000': 20,
      }
    },

    "plastic-box": {
      'our-delivery': {
        '0': 1,
        '500': 1,
        '1000': 1,
      },
      'self-delivery': {
        '0': 1,
        '500': 1,
        '1000': 1,
      }
    },

    "polyethylene-pipe": {
      'our-delivery': {
        '0': 10,
        '500': 11,
        '1000': 12,
      },
      'self-delivery': {
        '0': 12,
        '500': 12,
        '1000': 12,
      }
    },

    "plastic-containers": {
      'our-delivery': {
        '0': 5,
        '500': 6,
        '1000': 7,
      },
      'self-delivery': {
        '0': 7,
        '500': 7,
        '1000': 10,
      }
    },

    "polyethylene": {
      'our-delivery': {
        '0': 5,
        '500': 6,
        '1000': 7,
      },
      'self-delivery': {
        '0': 7,
        '500': 7,
        '1000': 10,
      }
    },

    "glass": {
      'our-delivery': {
        '0': 0.7,
        '500': 0.9,
        '1000': 1.2,
      },
      'self-delivery': {
        '0': 1.5,
        '500': 1.5,
        '1000': 1.5,
      }
    },

    "glass-white-brown": {
      'our-delivery': {
        '0': 0.9,
        '500': 1.2,
        '1000': 1.4,
      },
      'self-delivery': {
        '0': 3,
        '500': 3,
        '1000': 3,
      }
    },

    "glass-green": {
      'our-delivery': {
        '0': 0.3,
        '500': 0.5,
        '1000': 0.7,
      },
      'self-delivery': {
        '0': 1.2,
        '500': 1.2,
        '1000': 1.5,
      }
    },

    "bags": {
      'our-delivery': {
        '0': 8,
        '500': 10,
        '1000': 12,
      },
      'self-delivery': {
        '0': 12,
        '500': 12,
        '1000': 15,
      }
    },

    "oil": {
      'our-delivery': {
        '0': 10,
        '500': 10,
        '1000': 10,
      },
      'self-delivery': {
        '0': 10,
        '500': 10,
        '1000': 10,
      }
    },

    getPriceSelectedTypeMaterials(selectedTypeMaterials, typeDelivery, weightKg) {
      let keyWeightKg = '';
      if (+weightKg < 500) keyWeightKg = '0';
      if (+weightKg >= 500 && +weightKg < 1000) keyWeightKg = '500';
      if (+weightKg >= 1000) keyWeightKg = '1000';

      return this[selectedTypeMaterials][typeDelivery][keyWeightKg];
    }
  };

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
    }
  };

  // с помощью конструктора будем форматировать выводимые на страницах значения в рублях
  // const formatter = new Intl.NumberFormat('ru');
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
  *
  * Калькулятор поддонов:
  * checkboxEpal - изменение наличия клейма Epal нет/есть
  * palletGrade - выбор сорта поддонов
  * palletDeliveryType - изменение типа доставки
  * palletsQuantity - изменение количества поддонов
  **/
  materialsKg.addEventListener('input', function(){
    // если тип сыря не выбран, выводим erorr на select`e
    if (!currentTypeMaterials.getAttribute('name')) showErrorsSelect(currentTypeMaterials);
    handlerEnteredDataMaterials();
  });
  materialsDeliveryType.addEventListener('change', handlerEnteredDataMaterials);
  trash.addEventListener('change', handlerEnteredDataMaterials);
  typeMaterials.addEventListener('click', handlerEnteredDataMaterials);

  checkboxEpal.addEventListener('change', handlerEnteredDataPallets);
  palletGrade.addEventListener('click', handlerEnteredDataPallets);
  palletDeliveryType.addEventListener('change', handlerEnteredDataPallets);
  palletsQuantity.addEventListener('input', function() {
    if (!currentPalletGrade.getAttribute('name')) showErrorsSelect(currentPalletGrade);
    handlerEnteredDataPallets();
  });

  destructionKg.addEventListener('input', function() {
    let resultSumCurrency = makesCalculationCurrency(5, this.value);
    outputCountingResultCurrencyDestruction.innerHTML = formatterСurrency.format(resultSumCurrency);
  });

  storageKg.addEventListener('input', function() {
    let resultSumCurrency = makesCalculationCurrency(5, this.value);
    outputCountingResultCurrencyStorage.innerHTML = formatterСurrency.format(resultSumCurrency);
  });

  /**
  * функция handlerEnteredDataMaterials()
  *
  * variables:
  * selectedTypeMaterials - хранит значени атрибута 'name', в котором значение является ключом объекта priceMaterials типа сырья
  * typeDelivery - хранит тип досатвки, который также будет педаваться в объект priceMaterials в виде ключа для типа доставки
  *
  * Логика:
  * если в selectedTypeMaterials есть значение атрибута 'name', т.е. тип сырья выбран
  * запускаем метод объекта priceMaterials.getPriceSelectedTypeMaterials()
  * в метод передаем парметры: тип сырья, тип доставки, количество кг(в параметрах ключи для объекта priceMaterials{})
  * возвращает цену выбранного сырья в соответствеии с параметрами переданными в виде ключей
  * вызвыаем функцию makesCalculationCurrency(), в которую передаем цену и количество кг
  * полученный рерзультат из функции makesCalculationCurrency() форматируем и выводим на страницу
  **/
  function handlerEnteredDataMaterials() {
    let selectedTypeMaterials = currentTypeMaterials.getAttribute('name');
    let typeDelivery = materialsDeliveryType.checked ? 'our-delivery' : 'self-delivery';

    if (selectedTypeMaterials) {
      let price = priceMaterials.getPriceSelectedTypeMaterials(selectedTypeMaterials, typeDelivery, materialsKg.value);
      outputCountingResult.innerHTML = formatterСurrency.format( makesCalculationCurrency(price, materialsKg.value) );
    }
  }

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
  * Если выбран засор умножает на коофициент 0.9
  *
  * @param {number} priceMaterials цена за единицу товара
  * @param {number} numberKilograms количество
  **/
  function makesCalculationCurrency(priceMaterials, numberKilograms) {
    return (trash.checked)? (priceMaterials * numberKilograms) * 0.9 : priceMaterials * numberKilograms;
  }

  /**
   * На родительском элементе устанавливается ошибка
   *
   * @param {DOM} currentSelect элемент чьего родителя будем находить
   * При фокусе, если на элементе был error снимаем его
   * Ставим error на родительский элемент
   */
  function showErrorsSelect(currentSelect) {
    let parentSelect = currentSelect.closest('.select');
    parentSelect.onfocus = function() {
      currentSelect.parentElement.classList.remove('error-no-selected');
      parentSelect.querySelector('.error-no-selected__message').style.display = 'none';
    };
    currentSelect.parentElement.classList.add('error-no-selected');
    parentSelect.querySelector('.error-no-selected__message').style.display = 'flex';
  }
}());
