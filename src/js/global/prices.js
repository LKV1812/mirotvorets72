// let hello = "привет от глобального скрипта";
// export{hello};
'use strict';

  /**
  * priceMaterials{} - прайс на сырье
  *
  * priceMaterials[тип-сырья];
  * priceMaterials[тип-сырья][тип-доставки];
  * priceMaterials[тип-сырья][тип-доставки][цена-кг-от-объема];
  */
export const priceMaterials = {
  "cardboard": {
    'our-delivery': {
      '0': 4,
      '200': 4.5,
      '500': 5,
      '1000': 5,
    },
    'self-delivery': {
      '0': 6,
      '200': 6,
      '500': 6,
      '1000': 6,
    }
  },

  "paper": {
    'our-delivery': {
      '0': 5.5,
      '200': 6,
      '500': 7,
      '1000': 7,
    },
    'self-delivery': {
      '0': 8.5,
      '200': 8.5,
      '500': 8.5,
      '1000': 8.5,
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
      '0': 2,
      '200': 2,
      '500': 2.5,
      '1000': 2.5,
    },
    'self-delivery': {
      '0': 3,
      '200': 3,
      '500': 3,
      '1000': 3,
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
      '0': 10,
      '200': 10,
      '500': 10,
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
      '0': 10,
      '200': 10,
      '500': 10,
      '1000': 10,
    }
  },

  "glass": {
    'our-delivery': {
      '0': 1,
      '200': 1,
      '500': 1.2,
      '1000': 1.4,
    },
    'self-delivery': {
      '0': 2,
      '200': 2,
      '500': 2,
      '1000': 2,
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
export const pricePallets = {
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
