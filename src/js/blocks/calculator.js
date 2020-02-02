(function() {
  "use strict";

  let checkboxCalc = document.getElementById("checkboxCalcTypeB");
  let rangeKg = document.querySelector('.range-kg');
  let rangeKgOutputCurrentValue = document.querySelector('.range-kg__output-current-value');
  let outputCountingResult = document.querySelector('.output-counting-result span');
  let currentTypeService = document.getElementById('currentTypeService');

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

    "canisters": {
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

    getPriceSelectedTypeService(selectedTypeService, typeDelivery, weightKg) {
      let keyWeightKg = '';
      if (+weightKg < 500) keyWeightKg = '0';
      if (+weightKg >= 500 && +weightKg < 1000) keyWeightKg = '500';
      if (+weightKg >= 1000) keyWeightKg = '1000';

      switch (selectedTypeService) {
        case 'Картон':
          return this.cardboard[typeDelivery][keyWeightKg];
        case 'Макулатура (книги)':
          return this.books[typeDelivery][keyWeightKg];
        case 'Макулатура (офисная бумага)':
          return this.paper[typeDelivery][keyWeightKg];
        case 'Макулатура (газеты)':
          return this.newspapers[typeDelivery][keyWeightKg];
        case 'Макулатура (журналы)':
          return this.magazines[typeDelivery][keyWeightKg];
        case 'Макулатура (иное)':
          return this.cardboard[typeDelivery][keyWeightKg];
        case 'Пленка (ПВД)':
          return this['film-pvd'][typeDelivery][keyWeightKg];
        case 'Цветная пленка (ПВД)':
          return this['film-color-pvd'][typeDelivery][keyWeightKg];
        case 'Пленка (стрейч)':
          return this['film-stretch'][typeDelivery][keyWeightKg];
        case 'ПЭТ':
          return this.polyethylene[typeDelivery][keyWeightKg];
        case 'Масло':
          return this.polyethylene[typeDelivery][keyWeightKg];
        case 'Кеги (ПЭТ)':
          return this.kegs[typeDelivery][keyWeightKg];
        case 'Пластиковые канистры':
          return this.canisters[typeDelivery][keyWeightKg];
        case 'Алюминиевые банки':
          return this['aluminum-cans'][typeDelivery][keyWeightKg];
        case 'Пластиковые ящики':
          return this['plastic-box'][typeDelivery][keyWeightKg];
        case 'Трубы полиэтиленовые черные':
          return this['polyethylene-pipe'][typeDelivery][keyWeightKg];
        case 'Пластиковая тара из под бытовой химии':
          return this['plastic-containers'][typeDelivery][keyWeightKg];
        case 'Стекло листовое прозрачное':
          return this.glass[typeDelivery][keyWeightKg];
        case 'Стекло белое и коричневое (банки, бутылки)':
          return this['glass-white-brown'][typeDelivery][keyWeightKg];
        case 'Стекло зеленое (банки, бутылки)':
          return this['glass-green'][typeDelivery][keyWeightKg];
      }
    }
  };

  const formatter = new Intl.NumberFormat('ru');
  const formatterСurrency = new Intl.NumberFormat("ru", {
    style: 'currency',
    currency: 'RUB'
  });

  rangeKg.addEventListener('input', function() {
    let selectedTypeService = currentTypeService.innerHTML;
    let typeDelivery = checkboxCalc.checked ? 'our-delivery' : 'self-delivery';

    rangeKgOutputCurrentValue.innerHTML = formatter.format(this.value) + " кг";
    outputCountingResult.innerHTML = formatterСurrency.format(this.value);

    console.log(priceMaterials.getPriceSelectedTypeService(selectedTypeService, typeDelivery, this.value));
    // calculatesTotalAmount(priceMaterials.getPriceSelectedTypeService(selectedTypeService), +this.value);
  });

  checkboxCalc.addEventListener('change', function() {
    let selectedTypeService = currentTypeService.innerHTML;
    let typeDelivery = checkboxCalc.checked ? 'our-delivery' : 'self-delivery';

    rangeKgOutputCurrentValue.innerHTML = formatter.format(rangeKg.value) + " кг";
    outputCountingResult.innerHTML = formatterСurrency.format(rangeKg.value);

    console.log(priceMaterials.getPriceSelectedTypeService(selectedTypeService, typeDelivery, rangeKg.value));
  });

  currentTypeService.addEventListener('click', function() {
    let selectedTypeService = currentTypeService.innerHTML;
    let typeDelivery = checkboxCalc.checked ? 'our-delivery' : 'self-delivery';

    rangeKgOutputCurrentValue.innerHTML = formatter.format(rangeKg.value) + " кг";
    outputCountingResult.innerHTML = formatterСurrency.format(rangeKg.value);

    console.log(priceMaterials.getPriceSelectedTypeService(selectedTypeService, typeDelivery, rangeKg.value));
  });

}());
