
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJnbG9iYWwvcHJpY2VzLmpzIiwibW9kdWxlcy9hamF4LmpzIiwibW9kdWxlcy9ocmVmLXZpYmVyLmpzIiwibW9kdWxlcy9pbnB1dHMuanMiLCJtb2R1bGVzL3Bob25lLW1hc2suanMiLCJtb2R1bGVzL3Jhbmdlcy5qcyIsIm1vZHVsZXMvc2VsZWN0cy5qcyIsIm1vZHVsZXMvdGV4dGFyZWEuanMiLCJtb2R1bGVzL9GBaGVja2JveC5qcyIsInNlY3Rpb24vY2FsY3VsYXRvci5qcyIsInNlY3Rpb24vY2FyZHMtcHJvZHVjdC5qcyIsInNlY3Rpb24vZm9ybXMuanMiLCJzZWN0aW9uL2lucHV0cy10bXAuanMiLCJzZWN0aW9uL21hcC5qcyIsInNlY3Rpb24vbW9iaWxlLW1lbnUtdG9nZ2xlLmpzIiwic2VjdGlvbi9vd2wtY2Fyb3VzZWwuanMiLCJzZWN0aW9uL3RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIndXNlIHN0cmljdCc7XHJcblxyXG4gIC8qKlxyXG4gICogcHJpY2VNYXRlcmlhbHN7fSAtINC/0YDQsNC50YEg0L3QsCDRgdGL0YDRjNC1XHJcbiAgKlxyXG4gICogcHJpY2VNYXRlcmlhbHNb0YLQuNC/LdGB0YvRgNGM0Y9dO1xyXG4gICogcHJpY2VNYXRlcmlhbHNb0YLQuNC/LdGB0YvRgNGM0Y9dW9GC0LjQvy3QtNC+0YHRgtCw0LLQutC4XTtcclxuICAqIHByaWNlTWF0ZXJpYWxzW9GC0LjQvy3RgdGL0YDRjNGPXVvRgtC40L8t0LTQvtGB0YLQsNCy0LrQuF1b0YbQtdC90LAt0LrQsy3QvtGCLdC+0LHRitC10LzQsF07XHJcbiAgKi9cclxuIGNvbnN0IHByaWNlTWF0ZXJpYWxzID0ge1xyXG4gIFwiY2FyZGJvYXJkXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMS41LFxyXG4gICAgICAnMjAwJzogMixcclxuICAgICAgJzUwMCc6IDIuNSxcclxuICAgICAgJzEwMDAnOiAzLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDMsXHJcbiAgICAgICcyMDAnOiAzLFxyXG4gICAgICAnNTAwJzogMyxcclxuICAgICAgJzEwMDAnOiAzLjUsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJwYXBlclwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDUuNSxcclxuICAgICAgJzIwMCc6IDUuNSxcclxuICAgICAgJzUwMCc6IDYsXHJcbiAgICAgICcxMDAwJzogNi41LFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDcsXHJcbiAgICAgICcyMDAnOiA3LFxyXG4gICAgICAnNTAwJzogOCxcclxuICAgICAgJzEwMDAnOiA4LFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwiYm9va3NcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA0LFxyXG4gICAgICAnMjAwJzogNCxcclxuICAgICAgJzUwMCc6IDUsXHJcbiAgICAgICcxMDAwJzogNS41LFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDUsXHJcbiAgICAgICcyMDAnOiA1LFxyXG4gICAgICAnNTAwJzogNSxcclxuICAgICAgJzEwMDAnOiA2LFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwibWFnYXppbmVzXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogNCxcclxuICAgICAgJzIwMCc6IDQsXHJcbiAgICAgICc1MDAnOiA1LFxyXG4gICAgICAnMTAwMCc6IDUuNSxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDUsXHJcbiAgICAgICcxMDAwJzogNixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcIm5ld3NwYXBlcnNcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA0LjUsXHJcbiAgICAgICcyMDAnOiA0LjUsXHJcbiAgICAgICc1MDAnOiA1LFxyXG4gICAgICAnMTAwMCc6IDUuNSxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDUsXHJcbiAgICAgICcxMDAwJzogNixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImZpbG0tc3RyZXRjaFwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDgsXHJcbiAgICAgICcyMDAnOiAxMCxcclxuICAgICAgJzUwMCc6IDEyLFxyXG4gICAgICAnMTAwMCc6IDEyLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEzLFxyXG4gICAgICAnMjAwJzogMTMsXHJcbiAgICAgICc1MDAnOiAxMyxcclxuICAgICAgJzEwMDAnOiAxNSxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImZpbG0tcHZkXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogOCxcclxuICAgICAgJzIwMCc6IDEwLFxyXG4gICAgICAnNTAwJzogMTIsXHJcbiAgICAgICcxMDAwJzogMTIsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMTMsXHJcbiAgICAgICcyMDAnOiAxMyxcclxuICAgICAgJzUwMCc6IDEzLFxyXG4gICAgICAnMTAwMCc6IDE1LFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwiZmlsbS1jb2xvci1wdmRcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA2LFxyXG4gICAgICAnMjAwJzogNixcclxuICAgICAgJzUwMCc6IDcsXHJcbiAgICAgICcxMDAwJzogNyxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA4LFxyXG4gICAgICAnMjAwJzogOCxcclxuICAgICAgJzUwMCc6IDgsXHJcbiAgICAgICcxMDAwJzogOCxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImtlZ3NcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAyLjUsXHJcbiAgICAgICcyMDAnOiAyLjUsXHJcbiAgICAgICc1MDAnOiAzLFxyXG4gICAgICAnMTAwMCc6IDQsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogNCxcclxuICAgICAgJzIwMCc6IDQsXHJcbiAgICAgICc1MDAnOiA0LFxyXG4gICAgICAnMTAwMCc6IDQsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJwbGFzdGljLWNhbmlzdGVyc1wiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDUsXHJcbiAgICAgICcyMDAnOiA1LFxyXG4gICAgICAnNTAwJzogNixcclxuICAgICAgJzEwMDAnOiA3LFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEwLFxyXG4gICAgICAnMjAwJzogMTAsXHJcbiAgICAgICc1MDAnOiAxMCxcclxuICAgICAgJzEwMDAnOiAxMCxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImFsdW1pbnVtLWNhbnNcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxNSxcclxuICAgICAgJzIwMCc6IDE1LFxyXG4gICAgICAnNTAwJzogMTUsXHJcbiAgICAgICcxMDAwJzogMTUsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMjAsXHJcbiAgICAgICcyMDAnOiAyMCxcclxuICAgICAgJzUwMCc6IDIwLFxyXG4gICAgICAnMTAwMCc6IDIwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwicGxhc3RpYy1ib3hcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxLFxyXG4gICAgICAnMjAwJzogMSxcclxuICAgICAgJzUwMCc6IDEsXHJcbiAgICAgICcxMDAwJzogMSxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxLFxyXG4gICAgICAnMjAwJzogMSxcclxuICAgICAgJzUwMCc6IDEsXHJcbiAgICAgICcxMDAwJzogMSxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcInBvbHlldGh5bGVuZS1waXBlXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMTAsXHJcbiAgICAgICcyMDAnOiAxMCxcclxuICAgICAgJzUwMCc6IDExLFxyXG4gICAgICAnMTAwMCc6IDEyLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEyLFxyXG4gICAgICAnMjAwJzogMTIsXHJcbiAgICAgICc1MDAnOiAxMixcclxuICAgICAgJzEwMDAnOiAxMixcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImNoZW1pY2FsLWNvbnRhaW5lcnNcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDYsXHJcbiAgICAgICcxMDAwJzogNyxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA3LFxyXG4gICAgICAnMjAwJzogNyxcclxuICAgICAgJzUwMCc6IDcsXHJcbiAgICAgICcxMDAwJzogMTAsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJwb2x5ZXRoeWxlbmVcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA1LFxyXG4gICAgICAnMjAwJzogNSxcclxuICAgICAgJzUwMCc6IDYsXHJcbiAgICAgICcxMDAwJzogNyxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiA3LFxyXG4gICAgICAnMjAwJzogNyxcclxuICAgICAgJzUwMCc6IDcsXHJcbiAgICAgICcxMDAwJzogMTAsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJnbGFzc1wiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDAuNyxcclxuICAgICAgJzIwMCc6IDAuNyxcclxuICAgICAgJzUwMCc6IDAuOSxcclxuICAgICAgJzEwMDAnOiAxLjIsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMS41LFxyXG4gICAgICAnMjAwJzogMS41LFxyXG4gICAgICAnNTAwJzogMS41LFxyXG4gICAgICAnMTAwMCc6IDEuNSxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBcImdsYXNzLXdoaXRlLWJyb3duXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMixcclxuICAgICAgJzIwMCc6IDIsXHJcbiAgICAgICc1MDAnOiAyLFxyXG4gICAgICAnMTAwMCc6IDIsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMyxcclxuICAgICAgJzIwMCc6IDMsXHJcbiAgICAgICc1MDAnOiAzLFxyXG4gICAgICAnMTAwMCc6IDMsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJnbGFzcy1ncmVlblwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEsXHJcbiAgICAgICcyMDAnOiAxLFxyXG4gICAgICAnNTAwJzogMSxcclxuICAgICAgJzEwMDAnOiAxLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnMCc6IDEuMixcclxuICAgICAgJzIwMCc6IDEuMixcclxuICAgICAgJzUwMCc6IDEuMixcclxuICAgICAgJzEwMDAnOiAxLjUsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJiYWdzXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogOCxcclxuICAgICAgJzIwMCc6IDgsXHJcbiAgICAgICc1MDAnOiAxMCxcclxuICAgICAgJzEwMDAnOiAxMixcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxMixcclxuICAgICAgJzIwMCc6IDEyLFxyXG4gICAgICAnNTAwJzogMTIsXHJcbiAgICAgICcxMDAwJzogMTIsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJvaWxcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAxMCxcclxuICAgICAgJzIwMCc6IDEwLFxyXG4gICAgICAnNTAwJzogMTAsXHJcbiAgICAgICcxMDAwJzogMTAsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICcwJzogMTAsXHJcbiAgICAgICcyMDAnOiAxMCxcclxuICAgICAgJzUwMCc6IDEwLFxyXG4gICAgICAnMTAwMCc6IDEwLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBcInRleHRpbGVcIjoge1xyXG4gICAgJ291ci1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAwLFxyXG4gICAgICAnMjAwJzogMCxcclxuICAgICAgJzUwMCc6IDAsXHJcbiAgICAgICcxMDAwJzogMCxcclxuICAgIH0sXHJcbiAgICAnc2VsZi1kZWxpdmVyeSc6IHtcclxuICAgICAgJzAnOiAwLFxyXG4gICAgICAnMjAwJzogMCxcclxuICAgICAgJzUwMCc6IDAsXHJcbiAgICAgICcxMDAwJzogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZ2V0UHJpY2VTZWxlY3RlZFR5cGVNYXRlcmlhbHMoc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzLCB0eXBlRGVsaXZlcnksIHdlaWdodEtnKSB7XHJcbiAgICBsZXQga2V5V2VpZ2h0S2cgPSAnJztcclxuICAgIGlmICgrd2VpZ2h0S2cgPCAyMDApIGtleVdlaWdodEtnID0gJzAnO1xyXG4gICAgaWYgKCt3ZWlnaHRLZyA+PSAyMDAgJiYgK3dlaWdodEtnIDwgNTAwKSBrZXlXZWlnaHRLZyA9ICcyMDAnO1xyXG4gICAgaWYgKCt3ZWlnaHRLZyA+PSA1MDAgJiYgK3dlaWdodEtnIDwgMTAwMCkga2V5V2VpZ2h0S2cgPSAnNTAwJztcclxuICAgIGlmICgrd2VpZ2h0S2cgPj0gMTAwMCkga2V5V2VpZ2h0S2cgPSAnMTAwMCc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXNbc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzXVt0eXBlRGVsaXZlcnldW2tleVdlaWdodEtnXTtcclxuICB9LFxyXG5cclxuICBnZXRNYXhQcmljZU1hdGVyaWFsKHR5cGVNYXRlcmlhbHMpIHtcclxuICAgIGxldCBtYXggPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzW3R5cGVNYXRlcmlhbHNdKSB7XHJcbiAgICAgIHNldE1heCh0aGlzW3R5cGVNYXRlcmlhbHNdW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0TWF4KG9iaikg0LLQvtC30LLRgNCw0YnQsNC10YIg0LzQsNC60YHQuNC80LDQu9GM0L3Rg9GOINGG0LXQvdGDXHJcbiAgICAgKiBAcGFyYW0gb2JqINGC0LjQvyDRgdGL0YDRjNGPXHJcbiAgICAgKlxyXG4gICAgICog0LXRgdC70Lgg0LrQu9GO0YfQvtC8INGP0LLQu9GP0LXRgtGB0Y8g0L7QsdGK0LXQutGCINC30LDQv9GD0YHQutCw0LXQvCDRgNC10LrRg9GA0YHQuNGOXHJcbiAgICAgKiDQutC+0LPQtNCwINC00L7RiNC70Lgg0LTQviDQsdCw0LfRiyDRgNC10LrRg9GA0YHQuNC4INGB0YDQsNCy0L3QuNCy0LDQtdC8INGBIG1heFxyXG4gICAgICog0LXRgdC70LggbWF4INC80LXQvdGM0YjQtSwg0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LIgbWF4INC90L7QstC+0LUg0LfQvdCw0YfQtdC90LjQtVxyXG4gICAgICog0YLQsNC6INC/0YDQvtGF0L7QtNC40Lwg0L/QviDQstGB0LXQvCDQt9C90LDRh9C10L3QuNGP0Lwg0YbQtdC90YtcclxuICAgICAqINCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC80LDQutGB0LjQvNCw0LvRjNC90L7QtVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldE1heChvYmopIHtcclxuICAgICAgbGV0IHRlbXAgPSBvYmo7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRlbXAgPT09IFwib2JqZWN0XCIgKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRlbXApIHNldE1heCh0ZW1wW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJykgbWF4ID0gTWF0aC5tYXgobWF4LCB0ZW1wKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWF4O1xyXG4gIH0sXHJcblxyXG4gIGdldE1pblByaWNlTWF0ZXJpYWwodHlwZU1hdGVyaWFscykge1xyXG4gICAgbGV0IG1pbiA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXNbdHlwZU1hdGVyaWFsc10pIHtcclxuICAgICAgc2V0TWluKHRoaXNbdHlwZU1hdGVyaWFsc11ba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRNaW4ob2JqKSDQstC+0LfQstGA0LDRidCw0LXRgiDQvNCw0LrRgdC40LzQsNC70YzQvdGD0Y4g0YbQtdC90YNcclxuICAgICAqIEBwYXJhbSBvYmog0YLQuNC/INGB0YvRgNGM0Y9cclxuICAgICAqXHJcbiAgICAgKiDQtdGB0LvQuCDQutC70Y7Rh9C+0Lwg0Y/QstC70Y/QtdGC0YHRjyDQvtCx0YrQtdC60YIg0LfQsNC/0YPRgdC60LDQtdC8INGA0LXQutGD0YDRgdC40Y5cclxuICAgICAqINC60L7Qs9C00LAg0LTQvtGI0LvQuCDQtNC+INCx0LDQt9GLINGA0LXQutGD0YDRgdC40Lgg0YHRgNCw0LLQvdC40LLQsNC10Lwg0YEgbWluXHJcbiAgICAgKiDQtdGB0LvQuCBtaW4g0LHQvtC70YzRiNC1LCDQt9Cw0L/QuNGB0YvQstCw0LXQvCDQsiBtaW4g0L3QvtCy0L7QtSDQt9C90LDRh9C10L3QuNC1XHJcbiAgICAgKiDRgtCw0Log0L/RgNC+0YXQvtC00LjQvCDQv9C+INCy0YHQtdC8INC30L3QsNGH0LXQvdC40Y/QvCDRhtC10L3Ri1xyXG4gICAgICog0LLQvtC30LLRgNCw0YnQsNC10Lwg0LzQuNC90LjQvNCw0LvRjNC90L7QtVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldE1pbihvYmopIHtcclxuICAgICAgbGV0IHRlbXAgPSBvYmo7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRlbXAgPT09IFwib2JqZWN0XCIgKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRlbXApIHNldE1pbih0ZW1wW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gPT09IG51bGwpIHtcclxuICAgICAgICBtaW4gPSB0ZW1wO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gIT09IG51bGwpIG1pbiA9IE1hdGgubWluKG1pbiwgdGVtcCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1pbjtcclxuICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiogcHJpY2VQYWxsZXRze30gLSDQv9GA0LDQudGBINC90LAg0L/QvtC00LTQvtC90YtcclxuKlxyXG4qIHByaWNlTWF0ZXJpYWxzW9GB0L7RgNGCLdC/0L7QtNC00L7QvdC+0LJdO1xyXG4qIHByaWNlTWF0ZXJpYWxzW9GB0L7RgNGCLdC/0L7QtNC00L7QvdC+0LJdW9GC0LjQvy3QtNC+0YHRgtCw0LLQutC4XTtcclxuKiBwcmljZU1hdGVyaWFsc1vRgdC+0YDRgi3Qv9C+0LTQtNC+0L3QvtCyXVvRgtC40L8t0LTQvtGB0YLQsNCy0LrQuF1b0L3QsNC70LjRh9C40LUt0LrQu9C10LnQvNCwLUVwYWxdO1xyXG4qL1xyXG5jb25zdCBwcmljZVBhbGxldHMgPSB7XHJcbiAgXCJmaXJzdC1ncmFkZVwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDgwLFxyXG4gICAgICAnbm8tZXBhbCc6IDYwLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDkwLFxyXG4gICAgICAnbm8tZXBhbCc6IDcwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIFwic2Vjb25kLWdyYWRlXCI6IHtcclxuICAgICdvdXItZGVsaXZlcnknOiB7XHJcbiAgICAgICdlcGFsJzogNjAsXHJcbiAgICAgICduby1lcGFsJzogNDAsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGYtZGVsaXZlcnknOiB7XHJcbiAgICAgICdlcGFsJzogNzAsXHJcbiAgICAgICduby1lcGFsJzogNTAsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgXCJ0aGlyZC1ncmFkZVwiOiB7XHJcbiAgICAnb3VyLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDIwLFxyXG4gICAgICAnbm8tZXBhbCc6IDIwLFxyXG4gICAgfSxcclxuICAgICdzZWxmLWRlbGl2ZXJ5Jzoge1xyXG4gICAgICAnZXBhbCc6IDMwLFxyXG4gICAgICAnbm8tZXBhbCc6IDMwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFByaWNlU2VsZWN0ZWRHcmFkZVBhbGxldChzZWxlY3RlZEdyYWRlLCB0eXBlRGVsaXZlcnksIGVwYWwpIHtcclxuICAgIHJldHVybiB0aGlzW3NlbGVjdGVkR3JhZGVdW3R5cGVEZWxpdmVyeV1bZXBhbF07XHJcbiAgfSxcclxuXHJcbiAgZ2V0TWF4UHJpY2VQYWxsZXQoKSB7XHJcbiAgICBsZXQgbWF4ID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcykge1xyXG4gICAgICBzZXRNYXgodGhpc1trZXldKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRNYXgob2JqKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gb2JqO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0ZW1wID09PSBcIm9iamVjdFwiICkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0ZW1wKSBzZXRNYXgodGVtcFtrZXldKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGVtcCA9PT0gJ251bWJlcicpIG1heCA9IE1hdGgubWF4KG1heCwgdGVtcCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1heDtcclxuICB9LFxyXG5cclxuICBnZXRNaW5QcmljZVBhbGxldCgpIHtcclxuICAgIGxldCBtaW4gPSBudWxsO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzKSB7XHJcbiAgICAgIHNldE1pbih0aGlzW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldE1pbihvYmopIHtcclxuICAgICAgbGV0IHRlbXAgPSBvYmo7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRlbXAgPT09IFwib2JqZWN0XCIgKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRlbXApIHNldE1pbih0ZW1wW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gPT09IG51bGwpIHtcclxuICAgICAgICBtaW4gPSB0ZW1wO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wID09PSAnbnVtYmVyJyAmJiBtaW4gIT09IG51bGwpIG1pbiA9IE1hdGgubWluKG1pbiwgdGVtcCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1pbjtcclxuICB9LFxyXG59O1xyXG4iLCJjb25zdCBzZW5kRm9ybU9yZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBjb25zdCBfZm9ybU9yZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGV4R2VuZXJhbE9yZGVyJyk7XHJcblxyXG4gIC8vIF9mb3JtT3JkZXIub25zdWJtaXQgPSBzZW5kUmVxdWVzdDtcclxuICAvKipcclxuICAgKiBzZW5kUmVxdWVzdCgpIC0g0L7RgtC/0YDQsNCy0LvRj9C10YIg0YTQvtGA0LzRg1xyXG4gICAqIEBwYXJhbSB7Kn0gZSAtIGV2ZW50INGB0L7QsdGL0YLQuNGPIHN1Ym1pdFxyXG4gICAqIEBwYXJhbSB7Kn0gZm9ybSAtINGE0L7RgNC80LAsINC60L7RgtC+0YDRg9GOINC+0YLQv9GA0LDQstC70Y/QtdC8XHJcbiAgICog0J7RgtC60YDRi9Cy0LDQtdC8INC30LDQv9GA0L7RgVxyXG4gICAqINCe0YLQv9GA0LDQstC70Y/QtdC8INC30LDQv9GA0L7RgVxyXG4gICAqINCf0L4g0YHQvtCx0YvRgtC40Y/QvCDQvdCwINC30LDQv9GA0L7RgdC1LCDQstGL0LLQvtC00LjQvCDRgNC10LfRg9C70YzRgtCw0YIg0L3QsCDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICovXHJcblxyXG4gIGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KGUsIGZvcm0pIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBfeGh0dHBQb3N0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgX3hodHRwUG9zdC5vcGVuKCdQT1NUJywgJ3BocC9mb3JtLW9yZGVyLnBocCcsIHRydWUpO1xyXG4gICAgX3hodHRwUG9zdC5zZW5kKGNvbGxlY3RzT2JqZWN0VG9TZW5kKGUudGFyZ2V0KSk7XHJcblxyXG4gICAgX3hodHRwUG9zdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICBsZXQgcmVzdWx0UXVlcnkgPSBmYWxzZTtcclxuICAgICAgICBvdXRwdXRSZXN1bHRUb1BhZ2UoZS50YXJnZXQsIHJlc3VsdFF1ZXJ5KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdFF1ZXJ5ID0gdGhpcy5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgb3V0cHV0UmVzdWx0VG9QYWdlKGUudGFyZ2V0LCByZXN1bHRRdWVyeSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX3hodHRwUG9zdC5vbmVycm9yID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICBsZXQgcmVzdWx0UXVlcnkgPSBmYWxzZTtcclxuICAgICAgb3V0cHV0UmVzdWx0VG9QYWdlKGUudGFyZ2V0LCByZXN1bHRRdWVyeSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29sbGVjdHNPYmplY3RUb1NlbmQoKSAtINGB0L7QsdC40YDQsNC10YIg0YHQvtC70LvQtdC60YbQuNGOINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC90LAg0YHQtdGA0LLQtdGAXHJcbiAgICogQHBhcmFtIHsqfSBmb3JtIC0g0YTQvtGA0LzQsCDQuNC3INC/0L7Qu9C10Lkg0LrQvtGC0L7RgNC+0Lkg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtCx0YDQsNGC0Ywg0LrQvtC70LvQtdC60YbQuNGOXHJcbiAgICogQHZhciBpbnB1dHMgLSDQv9C+0LvRjyDRhNC+0YDQvNGLXHJcbiAgICogQHZhciBjdXJyZW50U2VsZWN0IC0g0L/QvtC70Y8g0YTQvtGA0LzRi1xyXG4gICAqIEB2YXIgdGV4dGFyZWEgLSDQv9C+0LvRjyDRhNC+0YDQvNGLXHJcbiAgICogQHZhciBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsIC0g0LrQvtC70LvQtdC60YbQuNGPINC00LvRjyDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICogMS4g0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LIg0LrQvtC70LvQtdC60YbQuNGOINGB0LrRgNGL0YLRi9C1INC/0L7Qu9GPINC00LvRjyDQt9Cw0LPQvtC70L7QstC60LAg0LIg0YQt0YbQuNGOIG1haWwoKVxyXG4gICAqIDIuINC30LDQv9C40YHRi9Cy0LDQtdC8INGC0L4sINGH0YLQviDQsiBzZWxlY3Qg0LIg0LDRgtGA0LjQsdGD0YLQtSBuYW1lXHJcbiAgICogMy4g0LfQsNC/0LjRgdGL0LLQsNC10Lwg0L7RgdGC0LDQstGI0LjQtdGB0Y8g0L/QvtC70Y9cclxuICAgKiA0LiDQtdGB0LvQuCBjaGVja2JveCDQsdC10Lcg0LfQsNGB0L7RgNCwL9C30LDRgdC+0YBcclxuICAgKiDQktC+0LfQstGA0LDRidCw0LXQvCDQs9C+0YLQvtCy0YPRjiDQutC+0LvQu9C10LrRhtC40Y5cclxuICAgKi9cclxuICBmdW5jdGlvbiBjb2xsZWN0c09iamVjdFRvU2VuZChmb3JtKSB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LWN1cnJlbnQnKTtcclxuICAgIGNvbnN0IHRleHRhcmVhID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgIGxldCBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0ubWF0Y2hlcygnW3R5cGU9XCJoaWRkZW5cIl0nKSkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGtleSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcblxyXG4gICAgICBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsLmFwcGVuZChrZXksIGl0ZW0udmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY3VycmVudFNlbGVjdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0uaGFzQXR0cmlidXRlKCduYW1lJykpIHJldHVybjtcclxuICAgICAgbGV0IGtleSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgIGlucHV0U2VsZWN0QXR0ck5hbWVBbGwuYXBwZW5kKGtleSwgaXRlbS5pbm5lclRleHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLm1hdGNoZXMoJ1t0eXBlPVwiaGlkZGVuXCJdJykpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBrZXkgPSBpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG5cclxuICAgICAgaWYgKGl0ZW0ubWF0Y2hlcygnW3R5cGU9XCJjaGVja2JveFwiXScpICYmIGl0ZW0ubWF0Y2hlcygnW3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrZWQpIHtcclxuICAgICAgICBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsLmFwcGVuZChrZXksICfQoSDQt9Cw0YHQvtGA0L7QvCcpO1xyXG4gICAgICB9IGVsc2UgaWYoaXRlbS5tYXRjaGVzKCdbdHlwZT1cImNoZWNrYm94XCJdJykgJiYgIWl0ZW0ubWF0Y2hlcygnW3R5cGU9XCJjaGVja2JveFwiXScpLmNoZWNrZWQpIHtcclxuICAgICAgICBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsLmFwcGVuZChrZXksICfQkdC10Lcg0LfQsNGB0L7RgNCwJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09ICd3ZWlnaHQnKSB7XHJcbiAgICAgICAgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbC5hcHBlbmQoa2V5LCBgJHtpdGVtLnZhbHVlfSDQutCzL9GI0YJgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsLmFwcGVuZChrZXksIGl0ZW0udmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0ZXh0YXJlYS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBsZXQga2V5ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgICAgaW5wdXRTZWxlY3RBdHRyTmFtZUFsbC5hcHBlbmQoa2V5LCBpdGVtLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dFNlbGVjdEF0dHJOYW1lQWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogb3V0cHV0UmVzdWx0VG9QYWdlKCkgLSDQstGL0LLQvtC00LjRgiDRgNC10LfRg9C70YzRgtCw0YIg0YPRgdC/0LXRhS/QvdC10YPRgdC/0LXRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YNcclxuICAgKiBAcGFyYW0geyp9IGZvcm0gLSDRhNC+0YDQvNCwXHJcbiAgICogQHBhcmFtIHtib29sfSByZXN1bHRRdWVyeSAtINC+0YLQstC10YIg0YHQtdGA0LXQstC10YDQsCB0cnVlL2ZhbHNlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gb3V0cHV0UmVzdWx0VG9QYWdlKGZvcm0sIHJlc3VsdFF1ZXJ5KSB7XHJcbiAgICBpZiAocmVzdWx0UXVlcnkpIHtcclxuICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXF1ZXJ5LWVycm9yJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1yZXN1bHQtcXVlcnknKTtcclxuICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXF1ZXJ5LXN1Y2Nlc3MnKS5jbGFzc0xpc3QuYWRkKCdzaG93LXJlc3VsdC1xdWVyeScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LXF1ZXJ5LXN1Y2Nlc3MnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXJlc3VsdC1xdWVyeScpO1xyXG4gICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQtcXVlcnktZXJyb3InKS5jbGFzc0xpc3QuYWRkKCdzaG93LXJlc3VsdC1xdWVyeScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtzZW5kUmVxdWVzdH07XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgbGV0IHZpYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpYmVyJyk7XHJcblxyXG4gIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8QkJ8UGxheUJvb2t8SUVNb2JpbGV8V2luZG93cyBQaG9uZXxLaW5kbGV8U2lsa3xPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgdmliZXIuaHJlZiA9IFwidmliZXI6Ly9hZGQ/bnVtYmVyPSs3OTYzNDUyMTYwMVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2aWJlci5ocmVmID0gXCJ2aWJlcjovL2NoYXQ/bnVtYmVyPSs3OTYzNDUyMTYwMVwiO1xyXG4gIH1cclxufSkoKTtcclxuIiwiLy8gLyoqXHJcbi8vICAqINCS0YHQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INCyINC00LDQvdC90L7QuSDRhNCw0LnQu9C1INGA0LXQsNC70LjQt9GD0Y7RgiDRgtC+0LvRjNC60L4g0L7QsdGJ0LXQtSDQv9C+0LLQtdC00LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQvtCyOlxyXG4vLyAgKiBpbnB1dFxyXG4vLyAgKiDQodGC0LjQu9C40LfRg9GO0YJcclxuLy8gICog0J7QsdGA0LDQsdCw0YLRi9Cy0Y7RgiDQv9C+0LLQtdC00LXQvdC40LVcclxuLy8gICog0KTQvtGA0LzQuNGA0YPRjtGCINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyAgKlxyXG4vLyAgKiDQndC1INCy0YvQv9C+0LvQvdGP0LXRgjpcclxuLy8gICog0L/QtdGA0LXQtNCw0YfRgyDQt9C90LDRh9C10L3QuNC5INCyINC00YDRg9Cz0LjQtSDRgdC60YDQuNC/0YLRiyxcclxuLy8gICog0L3QtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10YIg0LTQsNC90L3Ri9C1INC00LvRjyDQv9C+0LTRgdGH0LXRgtCwINGH0LXQs9C+LdC70LjQsdC+LFxyXG4vLyAgKiDQvdC1INGF0YDQsNC90LjRgiDQtNCw0L3QvdGL0LUsXHJcbi8vICAqL1xyXG5cclxuY29uc3QgaGFuZGxlcklucHV0cyA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIF9pbnB1dHMgLSDQutC+0LvQu9C10LrRhtC40Y8g0LjQvdC/0YPRgtC+0LJcclxuICAgKi9cclxuICBjb25zdCBfaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0Jyk7XHJcblxyXG4gIC8qKlxyXG4gICAqIHNob3dFcnJvcnNJbnB1dCgpIC0g0L/QvtC60LDQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDINC90LAg0LjQvdC/0YPRgtC1XHJcbiAgICog0J/RgNC40L3QuNC80LDQtdGCIGlucHV0INC90LAg0LrQvtGC0L7RgNC+0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L/QvtC60LDQt9Cw0YLRjCDQvtGI0LjQsdC60YNcclxuICAgKiDQldGB0LvQuCBpbnB1dCDQsiDRhNC+0LrRg9GB0LUg0YHQvdC40LzQsNC10YIg0L7RiNC40LHQutGDXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc2hvd0Vycm9yc0lucHV0KGlucHV0KSB7XHJcbiAgICBpZiAoaW5wdXQubWF0Y2hlcygnLmlucHV0JykpIHtcclxuICAgICAgbGV0IGVycm9yID0gaW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBsZXQgY3VycmVudFRleHQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgIGVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1uby1zZWxlY3RlZF9fbWVzc2FnZS10ZXh0JykuaW5uZXJUZXh0ID0gY3VycmVudFRleHQ7XHJcblxyXG4gICAgICBpbnB1dC5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3Itbm8tc2VsZWN0ZWQnKTtcclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3Itbm8tc2VsZWN0ZWQnKTtcclxuICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfQn9C10YDQtdC00LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQvdC1IC5pbnB1dCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc2hvd0Vycm9yc0lucHV0INC/0LXRgNC10LTQsNC10Lwg0YTRg9C90LrQuNGOINC00LvRjyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDQstC90LXRiNC90LjQvNC4INGB0LrRgNC40L/RgtCw0LzQuFxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93RXJyb3JzSW5wdXRcclxuICB9O1xyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvL9CX0LDQtNCw0LXQvCDQuNC90L/Rg9GCXHJcbiAgbGV0IGlucHV0c1RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWwtZmllbGQnKTtcclxuXHJcbiAgLy/QpNGD0L3QutGG0LjRjyDQvNCw0YHQutC4INC40L3Qv9GD0YLQsFxyXG4gIGZ1bmN0aW9uIHNldE1hc2soZXZlbnQpIHtcclxuICAgIC8v0JfQsNC00LDQtdC8INCyINC/0LXRgNC10LzQtdC90L3Rg9GOINC90LDQttCw0YLRg9GOINC60LvQsNCy0LjRiNGDXHJcbiAgICBsZXQgcHJlc3NlZEtleTtcclxuICAgIC8v0KPRgdC70L7QstC40LUsINC/0YDQvtCy0LXRgNGP0Y7RidC10LUg0L3QsNC20LDRgtGD0Y4g0LrQu9Cw0LLQuNGI0YNcclxuICAgIGV2ZW50LmtleUNvZGUgJiYgKHByZXNzZWRLZXkgPT09IGV2ZW50LmtleUNvZGUpO1xyXG4gICAgLy/Ql9Cw0LTQsNC10Lwg0LIg0L/QtdGA0LXQvNC10L3QvdGD0Y4g0L/QvtC30LjRhtC40Y4g0LIg0LjQvdC/0YPRgtC1LCDRgSDQutC+0YLQvtGA0L7QuSDQsdGD0LTQtdGCINC00L7RgdGC0YPQv9C10L0g0LLQstC+0LQg0YbQuNGE0YBcclxuICAgIGxldCBudW1iZXJQb3MgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgLy/Qo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCy0LLQvtC00LAg0YbQuNGE0YAg0YEg0YLRgNC10YLRjNC10Lkg0L/QvtC30LjRhtC40LhcclxuICAgIGlmIChudW1iZXJQb3MgPCAzKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIC8v0JfQsNC00LDQtdC8INCy0L3QtdGI0L3QuNC5INCy0LjQtCDQvNCw0YHQutC4INC40L3Qv9GD0YLQsFxyXG4gICAgbGV0IG1hc2tUeXBlID0gJys3IChfX18pIF9fXy1fXy1fXycsXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAvL9Cf0YDQvtCy0LXRgNC60LAg0Lgg0LfQsNC80LXQvdCwIHZhbHVlINC40L3Qv9GD0YLQsCDQv9C+INCx0YPQutCy0LXQvdC90L5cclxuICAgICAgICByZXBsYWNlVmFsdWUgPSBtYXNrVHlwZS5yZXBsYWNlKC9cXEQvZywgJycpLFxyXG4gICAgICAgIHByZXZWYWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKSxcclxuICAgICAgICBjdXJyZW50VmFsdWUgPSBtYXNrVHlwZS5yZXBsYWNlKC9bX1xcZF0vZywgKGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGkgPCBwcmV2VmFsdWUubGVuZ3RoID8gcHJldlZhbHVlLmNoYXJBdChpKyspIHx8IHJlcGxhY2VWYWx1ZS5jaGFyQXQoaSkgOiBhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgLy/Ql9Cw0YnQuNGC0LAg0L7RgiDRgdGC0LjRgNCw0L3QuNGPINC/0LXRgNCy0YvRhSDQtNCy0YPRhSDRhtC40YTRgCAoKzcpXHJcbiAgICBpID0gY3VycmVudFZhbHVlLmluZGV4T2YoJ18nKTtcclxuICAgIGlmIChpICE9IC0xKSB7XHJcbiAgICAgIGkgPCA1ICYmIChpID0gMyk7XHJcbiAgICAgIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5zbGljZSgwLCBpKTtcclxuICAgIH1cclxuICAgIC8v0KDQtdCz0YPQu9GP0YDQvdC+0LUg0LLRi9GA0LDQttC10L3QuNC1INC00LvRjyDQv9GA0L7QstC10YDQutC4IHZhbHVlINC40L3Qv9GD0YLQsFxyXG4gICAgbGV0IHJlZyA9IG1hc2tUeXBlLnN1YnN0cigwLCB0aGlzLnZhbHVlLmxlbmd0aCkucmVwbGFjZSgvXysvZyxcclxuXHJcbiAgICBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuICdcXFxcZHsxLCcgKyBhLmxlbmd0aCArICd9JztcclxuICAgIH0pLnJlcGxhY2UoL1srKCldL2csICdcXFxcJCYnKTtcclxuXHJcbiAgICByZWcgPSBuZXcgUmVnRXhwKCdeJyArIHJlZyArICckJyk7XHJcbiAgICAvL9Cf0YDQvtCy0LXRgNC60LAg0YHQvtC00LXRgNC20LjQvNC+0LPQviDQuNC90L/Rg9GC0LAg0L3QsCDRgNC10LPRg9C70Y/RgNC90L7QtSDQstGL0YDQsNC20LXQvdC40LUsINC00LvQuNC90L3RgyDQuCDQvdCw0LbQuNC80LDQtdC80YvQtSDQutC70LDQstC40YjQuFxyXG4gICAgaWYgKCFyZWcudGVzdCh0aGlzLnZhbHVlKSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8IDUgfHwgcHJlc3NlZEtleSA+IDQ3ICYmIHByZXNzZWRLZXkgPCA1OCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdibHVyJyAmJiB0aGlzLnZhbHVlLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC60YPRgNGB0L7RgCDQsiDQutC+0L3QtdGGINGB0YLRgNC+0LrQuCDQsiDQuNC90L/Rg9GC0LUsINC10YHQu9C4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQutC90L7Qv9C60Lgg0L7QvSDRgdGC0L7QuNGCINC90LUg0LIg0LrQvtC90YbQtVxyXG5cclxuXHJcbiAgICBpbnB1dHNUZWwuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKGlucHV0LnZhbHVlLmxlbmd0aCwgaW5wdXQudmFsdWUubGVuZ3RoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy/Ql9Cw0L/Rg9GB0Log0YTRg9C90LrRhtC40Lggc2V0TWFzayDRh9C10YDQtdC3INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNC5XHJcbiAgaW5wdXRzVGVsLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZXRNYXNrLCBmYWxzZSk7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHNldE1hc2ssIGZhbHNlKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBzZXRNYXNrLCBmYWxzZSk7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc2V0TWFzaywgZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuXHJcbn0pKCk7XHJcbiIsImNvbnN0IHJhbmdlcyA9IChmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIC8qKlxyXG4gICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6IHJhbmdlXHJcbiAgICpcclxuICAgKiDQnNC10YLQvtC00L7QvCBmb3JFYWNoKCkg0L3QsCDQutCw0LbQtNGL0LkgaXRlbSDQutC+0LvQu9C10LrRhtC40LggcmFuZ2Ug0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/RgNC+0YHQu9GD0YjQutGDIGFkZEV2ZW50TGlzdGVuZXIoKVxyXG4gICAqXHJcbiAgICogdmFyaWFibGVzOlxyXG4gICAqIHJhbmdlIC0g0LrQvtC70LvQtdC60YbQuNGPINCy0YHQtdGFIHJhbmdlYNC10Lkg0L3QsCDRgdCw0LnRgtC1XHJcbiAgICogZm9ybWF0dGVyIC0g0YfQtdGA0LXQtyDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC30LDQtNCw0LXRgiDQutGA0LDRgdC40LLRi9C5INGH0LjRgdC70L7QstC+0Lkg0YTQvtGA0LzQsNGCINGBINC/0YDQvtCx0LXQu9Cw0LzQuCDQsiDRgNCw0LfRgNGP0LTQsNGFXHJcbiAgICogcGFyZW50IC0g0YDQvtC00LjRgtC10LvRjCByYW5nZWDQsFxyXG4gICAqIG91dHB1dEN1cnJlbnRWYWx1ZSAtINCx0LvQvtC6INCyINC60L7RgtC+0YDRi9C5INCy0YvQstC+0LTQuNGC0YHRjyDQt9C90LDRh9C10L3QuNC1IHJhbmdlYGFcclxuICAgKiBtZWFzdXJlVW5pdCAtINGF0YDQsNC90LjRgiBh0LHQsdGA0LXQstC40LDRgtGD0YDRgyDQtdC00LjQvdC40YbRiyDQuNC30LzQtdGA0LjQvdC40Y8sINC60L7RgtC+0YDQsNGPINC/0YDQvtC/0LjRgdCw0L3QsCDQsiBIVE1MINGA0LDQt9C80LXRgtC60LVcclxuICAgKlxyXG4gICAqIGhhbmRsZXJzOlxyXG4gICAqINCX0L3QsNGH0LXQvdC40LUgcmFuZ2Ug0L3QsCDQutC+0YLQvtGA0L7QvCDQv9GA0L7QuNC30L7RiNC70L4g0YHQvtCx0YvRgtC40LUgJ2lucHV0Jywg0YTQvtGA0LzQsNGC0LjRgNGD0LXQvCDQuCDQstGL0LLQvtC00LjQvCDQsiBvdXRwdXRDdXJyZW50VmFsdWVcclxuICAgKi9cclxuICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UnKTtcclxuICAvLyBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1Jyk7XHJcblxyXG4gIHJhbmdlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBsZXQgcGFyZW50ID0gaXRlbS5jbG9zZXN0KCcucmFuZ2Utd3JhcCcpO1xyXG4gICAgbGV0IG91dHB1dEN1cnJlbnRWYWx1ZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX291dHB1dC1jdXJyZW50LXZhbHVlLWlucHV0Jyk7XHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBvdXRwdXRDdXJyZW50VmFsdWUudmFsdWUgPSB0aGlzLnZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdXRwdXRDdXJyZW50VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgaXRlbS52YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvdXRwdXRDdXJyZW50VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb3V0cHV0Q3VycmVudFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiLyoqXHJcbiAqINCS0YHQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INCyINC00LDQvdC90L7QuSDRhNCw0LnQu9C1INGA0LXQsNC70LjQt9GD0Y7RgiDRgtC+0LvRjNC60L4g0L7QsdGJ0LXQtSDQv9C+0LLQtdC00LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQvtCyOlxyXG4gKiBTZWxlY3RcclxuICog0KHRgtC40LvQuNC30YPRjtGCXHJcbiAqINCe0LHRgNCw0LHQsNGC0YvQstGO0YIg0L/QvtCy0LXQtNC10L3QuNC1XHJcbiAqINCk0L7RgNC80LjRgNGD0Y7RgiDRgdC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LVcclxuICpcclxuICog0J3QtSDQstGL0L/QvtC70L3Rj9C10YI6XHJcbiAqINC/0LXRgNC10LTQsNGH0YMg0LfQvdCw0YfQtdC90LjQuSDQsiDQtNGA0YPQs9C40LUg0YHQutGA0LjQv9GC0YssXHJcbiAqINC90LUg0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC00LDQvdC90YvQtSDQtNC70Y8g0L/QvtC00YHRh9C10YLQsCDRh9C10LPQvi3Qu9C40LHQvixcclxuICog0L3QtSDRhdGA0LDQvdC40YIg0LTQsNC90L3Ri9C1LFxyXG4gKi9cclxuY29uc3QgY3VzdG9tU2VsZWN0cyA9IChmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIC8qKlxyXG4gICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNGFINGB0LXQu9C10LrRgtC+0LJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RE9NW119IF9zZWxlY3QgLSDQutC+0LvQu9C10LrRhtC40Y8g0LLRgdC10YUg0YHQtdC70LXQutGC0L7QsiDQvdCwINGB0LDQudGC0LVcclxuICAgKiBAcGFyYW0ge0RPTVtdfSBfc2VsZWN0SGVhZGVyIC0g0YjQsNC/0LrQuCDRgdC10LvQtdC60YLQvtCyXHJcbiAgICogQHBhcmFtIHtET01bXX0gX3NlbGVjdE9wdGlvbiAtINC60L7Qu9C70LXQutGG0LjRjyDRgtC10Lsg0LLQvdGD0YLRgNC4INGB0LXQu9C10LrRgtC+0LIsINGBINCy0LDRgNC40LDQvdGC0LDQvNC4INCy0YvQsdC+0YDQsCAob3B0aW9uKVxyXG4gICAqXHJcbiAgICogaGFuZGxlcnM6XHJcbiAgICogX3NlbGVjdFRvZ2dsZSAtINC/0L4g0LrQu9C40LrRgyDQvdCwINGB0LXQu9C10LrRgtC1INCw0LrRgtC40LLQuNGA0YPQtdGCINC10LPQvlxyXG4gICAqIF9vdXRGb2N1cyAtINC/0YDQuCDQv9C+0YLQtdGA0LUg0YTQvtC60YPRgdCwINC90LAg0YHQtdC70LXQutGC0LUg0LfQsNC60YDQstCw0LXQvCDQtdCz0L5cclxuICAgKiBfc2V0U2VsZWN0ZWQgLSDQv9C+INC60LvQuNC60YMg0L3QsCBvcHRpb24g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LXQs9C+INC60LDQuiDQstGL0LHRgNCw0L3QvdGL0Lkg0Lgg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LXQs9C+INCw0YLRgNC40LHRg9GCIFt0aGlzLm5hbWU9XCJ0aGlzLnZhbHVlXCJdXHJcbiAgICovXHJcbiAgbGV0IF9zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdFwiKTtcclxuICBsZXQgX3NlbGVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0X19oZWFkZXJcIik7XHJcbiAgbGV0IF9zZWxlY3RPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdF9fb3B0aW9uXCIpO1xyXG5cclxuICBfc2VsZWN0SGVhZGVyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc2VsZWN0VG9nZ2xlKTtcclxuICB9KTtcclxuXHJcbiAgX3NlbGVjdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBfb3V0Rm9jdXMpO1xyXG4gIH0pO1xyXG5cclxuICBfc2VsZWN0T3B0aW9uLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc2V0U2VsZWN0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBfc2VsZWN0VG9nZ2xlKCkge1xyXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBfc2V0U2VsZWN0ZWQoKSDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQsiBzZWxlY3Qg0LLRi9Cx0YDQsNC90L3Ri9C5INGN0LvQtdC80LXQvdGCINC40Lcgb3B0aW9uXHJcbiAgICog0LjQtyBvcHRpb24g0L/QvtC70YPRh9Cw0LXQvCDRgtC10LrRgdGCINC4INCw0YLRgNC40LHRg9GCIG5hbWVcclxuICAgKiDQv9GA0LjRgdCy0LDQuNCy0LDQtdC8INC/0L7Qu9GD0YfQtdC90L3Ri9C1INC30L3QsNGH0LXQvdC40Y8gc2VsZWN0YNGDINCyIC5zZWxlY3QtY3VycmVudFxyXG4gICAqINC30LDQutGA0YvQstCw0LXQvCDQstGL0L/QsNC00Y7RidC40Lkg0YHQv9C40YHQvtC6XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gX3NldFNlbGVjdGVkKCkge1xyXG4gICAgbGV0IHRleHQgPSB0aGlzLmlubmVyVGV4dCxcclxuICAgICAgICBhdHRyaWJ1dGVOYW1lVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcIm5hbWVcIiksXHJcbiAgICAgICAgc2VsZWN0ID0gdGhpcy5jbG9zZXN0KFwiLnNlbGVjdFwiKSxcclxuICAgICAgICBjdXJyZW50U2VsZWN0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LWN1cnJlbnRcIik7XHJcblxyXG4gICAgY3VycmVudFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBhdHRyaWJ1dGVOYW1lVmFsdWUpO1xyXG4gICAgY3VycmVudFNlbGVjdC5pbm5lclRleHQgPSB0ZXh0O1xyXG5cclxuICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8g0J/RgNC4INC/0L7RgtC10YDQtSDRhNC+0LrRg9GB0LAg0LfQsNC60YDRi9Cy0LDQtdC8INCy0YvQv9Cw0LTQsNGO0YnQuNC5INGB0L/QuNGB0L7QulxyXG4gIGZ1bmN0aW9uIF9vdXRGb2N1cygpIHtcclxuICAgIGxldCB0aGlzU2VsZWN0ID0gdGhpcy5jbG9zZXN0KFwiLnNlbGVjdFwiKTtcclxuICAgIHRoaXNTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNob3dFcnJvcnNTZWxlY3QoKSDQn9C+0LrQsNC30YvQstCw0LXRgiDQvtGI0LjQsdC60YMg0L3QsCDRgdC10LvQtdC60YLQtVxyXG4gICAqIEBwYXJhbSB7Kn0gc2VsZWN0INGN0LvQtdC80LXQvdGCINC90LAg0LrQvtGC0L7RgNC+0Lwg0L3QsNC00L4g0L/QvtC60LDQt9Cw0YLRjCDQvtGI0LjQsdC60YNcclxuICAgKi9cclxuICBmdW5jdGlvbiBzaG93RXJyb3JzU2VsZWN0KHNlbGVjdCkge1xyXG4gICAgaWYgKHNlbGVjdC5tYXRjaGVzKCcuc2VsZWN0JykpIHtcclxuICAgICAgbGV0IHNlbGVjdEhlYWRlciA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oZWFkZXInKTtcclxuICAgICAgLy8g0LIg0YHQvtC+0LHRidC10L3QuNC4INC+0LEg0L7RiNC40LHQutC1ICjQvdC1INCy0YvQsdGA0LDQvSDQvdC4INC+0LTQuNC9INC/0YPQvdC60YIpINC30LDQv9C40YHRi9Cy0LDQtdC8INGC0LXQutGB0YIg0LjQtyDQt9Cw0LPQvtC70L7QstC60LAgc2VsZWN0YGFcclxuICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtY3VycmVudCcpLmlubmVyVGV4dDtcclxuICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1uby1zZWxlY3RlZF9fbWVzc2FnZS10ZXh0JykuaW5uZXJUZXh0ID0gY3VycmVudFRleHQ7XHJcblxyXG4gICAgICBzZWxlY3Qub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNlbGVjdEhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1uby1zZWxlY3RlZCcpO1xyXG4gICAgICAgIHNlbGVjdEhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2VsZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW5vLXNlbGVjdGVkJyk7XHJcbiAgICAgIHNlbGVjdEhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ9Cf0LXRgNC10LTQsNC90L3Ri9C5INGN0LvQtdC80LXQvdGCINC90LUgLnNlbGVjdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaGlkZUVycm9yc1NlbGVjdCgpINGB0LrRgNGL0LLQsNC10YIg0L7RiNC40LHQutGDINC90LAg0YHQtdC70LXQutGC0LVcclxuICAgKiBAcGFyYW0geyp9IHNlbGVjdFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhpZGVFcnJvcnNTZWxlY3Qoc2VsZWN0KSB7XHJcbiAgICBpZiAoc2VsZWN0Lm1hdGNoZXMoJy5zZWxlY3QnKSkge1xyXG4gICAgICBsZXQgc2VsZWN0SGVhZGVyID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hlYWRlcicpO1xyXG5cclxuICAgICAgc2VsZWN0SGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLW5vLXNlbGVjdGVkJyk7XHJcbiAgICAgIHNlbGVjdEhlYWRlci5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ9Cf0LXRgNC10LTQsNC90L3Ri9C5INGN0LvQtdC80LXQvdGCINC90LUgLnNlbGVjdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNob3dFcnJvcnNTZWxlY3QsXHJcbiAgICBoaWRlRXJyb3JzU2VsZWN0XHJcbiAgfTtcclxufSgpKTtcclxuIiwiLy8gLyoqXHJcbi8vICAqINCS0YHQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INCyINC00LDQvdC90L7QuSDRhNCw0LnQu9C1INGA0LXQsNC70LjQt9GD0Y7RgiDRgtC+0LvRjNC60L4g0L7QsdGJ0LXQtSDQv9C+0LLQtdC00LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQvtCyOlxyXG4vLyAgKiBpbnB1dFxyXG4vLyAgKiDQodGC0LjQu9C40LfRg9GO0YJcclxuLy8gICog0J7QsdGA0LDQsdCw0YLRi9Cy0Y7RgiDQv9C+0LLQtdC00LXQvdC40LVcclxuLy8gICog0KTQvtGA0LzQuNGA0YPRjtGCINGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVxyXG4vLyAgKlxyXG4vLyAgKiDQndC1INCy0YvQv9C+0LvQvdGP0LXRgjpcclxuLy8gICog0L/QtdGA0LXQtNCw0YfRgyDQt9C90LDRh9C10L3QuNC5INCyINC00YDRg9Cz0LjQtSDRgdC60YDQuNC/0YLRiyxcclxuLy8gICog0L3QtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10YIg0LTQsNC90L3Ri9C1INC00LvRjyDQv9C+0LTRgdGH0LXRgtCwINGH0LXQs9C+LdC70LjQsdC+LFxyXG4vLyAgKiDQvdC1INGF0YDQsNC90LjRgiDQtNCw0L3QvdGL0LUsXHJcbi8vICAqL1xyXG5cclxuY29uc3QgaGFuZGxlclRleHRhcmVhID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gX3RleHRhcmVhIC0g0LrQvtC70LvQtdC60YbQuNGPINC40L3Qv9GD0YLQvtCyXHJcbiAgICovXHJcbiAgY29uc3QgX3RleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRhcmVhJyk7XHJcblxyXG4gIC8qKlxyXG4gICAqIHNob3dFcnJvcnNUZXh0YXJlYSgpIC0g0L/QvtC60LDQt9GL0LLQsNC10YIg0L7RiNC40LHQutGDINC90LAg0LjQvdC/0YPRgtC1XHJcbiAgICog0J/RgNC40L3QuNC80LDQtdGCIHRleHRhcmVhINC90LAg0LrQvtGC0L7RgNC+0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L/QvtC60LDQt9Cw0YLRjCDQvtGI0LjQsdC60YNcclxuICAgKiDQldGB0LvQuCB0ZXh0YXJlYSDQsiDRhNC+0LrRg9GB0LUg0YHQvdC40LzQsNC10YIg0L7RiNC40LHQutGDXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc2hvd0Vycm9yc1RleHRhcmVhKHRleHRhcmVhKSB7XHJcbiAgICBpZiAodGV4dGFyZWEubWF0Y2hlcygnLnRleHRhcmVhJykpIHtcclxuICAgICAgbGV0IGVycm9yID0gdGV4dGFyZWEubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBsZXQgY3VycmVudFRleHQgPSB0ZXh0YXJlYS5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgIGVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1uby1zZWxlY3RlZF9fbWVzc2FnZS10ZXh0JykuaW5uZXJUZXh0ID0gY3VycmVudFRleHQ7XHJcblxyXG4gICAgICB0ZXh0YXJlYS5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3Itbm8tc2VsZWN0ZWQnKTtcclxuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZXJyb3Itbm8tc2VsZWN0ZWQnKTtcclxuICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfQn9C10YDQtdC00LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiDQvdC1IC5UZXh0YXJlYScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc2hvd0Vycm9yc3RleHRhcmVhINC/0LXRgNC10LTQsNC10Lwg0YTRg9C90LrQuNGOINC00LvRjyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDQstC90LXRiNC90LjQvNC4INGB0LrRgNC40L/RgtCw0LzQuFxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93RXJyb3JzVGV4dGFyZWFcclxuICB9O1xyXG59KSgpO1xyXG4iLCJjb25zdCDRgWhlY2tib3ggPSAoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvKipcclxuICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiBjaGVja2JveCAtINCy0YvQsdC+0YDQsCDRgtC40L/QsCDQtNC+0YHRgtCw0LLQutC4XHJcbiAgICpcclxuICAgKiDQnNC10YLQvtC00L7QvCBmb3JFYWNoKCkg0L3QsCDQutCw0LbQtNGL0LkgaXRlbSDQutC+0LvQu9C10LrRhtC40LggY2hlY2tib3gg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/RgNC+0YHQu9GD0YjQutGDIGFkZEV2ZW50TGlzdGVuZXIoKVxyXG4gICAqXHJcbiAgICogdmFyaWFibGVzOlxyXG4gICAqIHByZXZUZXh0Q2hlY2tib3ggLSDRgyDQutCw0LbQtNC+0LPQviBpdGVtYNCwID0gKGNoZWNrYm94KSDQstGL0LHQuNGA0LDQtdGCINGB0L7RgdC10LTQsCDQv9C10YDQtdC0IGNoZWNrYm94XHJcbiAgICogbmV4dFRleHRDaGVja2JveCAtINGDINC60LDQttC00L7Qs9C+IGl0ZW1g0LAgPSAoY2hlY2tib3gpINCy0YvQsdC40YDQsNC10YIg0YHQvtGB0LXQtNCwINC/0L7RgdC70LUgY2hlY2tib3hcclxuICAgKlxyXG4gICAqIGhhbmRsZXJzOlxyXG4gICAqINCV0YHQu9C4IGNoZWNrYm94LmNoZWNrZWQg0YHRgtC40LvQuNC30YPQtdC8INGB0L7RgdC10LTQsCDQv9C+0YHQu9C1XHJcbiAgICog0JXRgdC70LggIWNoZWNrYm94LmNoZWNrZWQg0YHRgtC40LvQuNC30YPQtdC8INGB0L7RgdC10LTQsCDQv9C10YDQtdC0XHJcbiAgICovXHJcbiAgbGV0IGNoZWNrYm94Q2FsYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC10eXBlLWInKTtcclxuXHJcbiAgY2hlY2tib3hDYWxjLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBsZXQgcHJldlRleHRDaGVja2JveCA9IGl0ZW0ucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgbGV0IG5leHRUZXh0Q2hlY2tib3ggPSBpdGVtLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1nb3VwLXR5cGUtYl9fdGV4dCcpO1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xyXG4gICAgICAgIG5leHRUZXh0Q2hlY2tib3guc3R5bGUuY29sb3IgPSAnIzY3YWYwMSc7XHJcbiAgICAgICAgcHJldlRleHRDaGVja2JveC5zdHlsZS5jb2xvciA9ICcjNjEyMjI4JztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWl0ZW0uY2hlY2tlZCkge1xyXG4gICAgICAgIG5leHRUZXh0Q2hlY2tib3guc3R5bGUuY29sb3IgPSAnIzYxMjIyOCc7XHJcbiAgICAgICAgcHJldlRleHRDaGVja2JveC5zdHlsZS5jb2xvciA9ICcjNjdhZjAxJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLyoqXHJcbiAgICog0J/QtdGA0LXQvNC10L3QvdGL0LUg0LTQu9GPINC60LDQu9GM0LrRg9C70Y/RgtC+0YDQsCDRgdGL0YDRjNGPXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RPTX0gdHJhc2gg0LfQsNGB0L7RgFxyXG4gICAqIEBwYXJhbSB7RE9NfSBtYXRlcmlhbHNEZWxpdmVyeVR5cGUg0YLQuNC/INC00L7RgdGC0LDQstC60LhcclxuICAgKiBAcGFyYW0ge0RPTX0gbWF0ZXJpYWxzS2cg0LrQuNC70L7Qs9GA0LDQvNC80Ysg0YHRi9GA0YzRj1xyXG4gICAqIEBwYXJhbSB7RE9NfSBvdXRwdXRDb3VudGluZ1Jlc3VsdCDQt9C00LXRgdGMINCy0YvQstC+0LTQuNC8INGB0YHRg9C80LzRgyDQsiDRgNGD0LHQu9GP0YUg0L/QviDRgdGL0YDRjNGOXHJcbiAgICogQHBhcmFtIHtET019IHR5cGVNYXRlcmlhbHMg0LLQtdGB0Ywg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5IHNlbGVjdCDQtNC70Y8g0YLQuNC/0LAg0YHRi9GA0YzRj1xyXG4gICAqIEBwYXJhbSB7RE9NfSBjdXJyZW50VHlwZU1hdGVyaWFscyDQstGL0LHRgNCw0L3QvdGL0Lkg0YLQuNC/INGB0YvRgNGM0Y9cclxuICAgKiBAbWV0aG9kIGN1c3RvbVNlbGVjdHMuc2hvd0Vycm9yc1NlbGVjdCgpOyDQv9C+0LrQsNC30YvQstCw0LXRgiDQvtGI0LjQsdC60YMg0L3QsCBzZWxlY3RgZSwg0LvQvtCz0LjQutCwINGA0LDQsdC+0YLRiyDQvNC10YLQvtC00LAg0LIg0YTQsNC50LvQtSBtb2R1bGVzL3NlbGVjdHMuanNcclxuICAgKi9cclxuICBsZXQgdHJhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tib3hDYWxjJyk7XHJcbiAgbGV0IG1hdGVyaWFsc0RlbGl2ZXJ5VHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF0ZXJpYWxzRGVsaXZlcnlUeXBlXCIpO1xyXG4gIGxldCBtYXRlcmlhbHNLZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRlcmlhbHNLZycpO1xyXG4gIGxldCBtYXRlcmlhbHNLZ0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGVyaWFsc0tnSW5wdXQnKTtcclxuICBsZXQgb3V0cHV0Q291bnRpbmdSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0TWF0ZXJpYWxzQ3VycmVuY3kgc3BhbicpO1xyXG4gIGxldCB0eXBlTWF0ZXJpYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGVNYXRlcmlhbHMnKTtcclxuICBsZXQgY3VycmVudFR5cGVNYXRlcmlhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFR5cGVNYXRlcmlhbHMnKTtcclxuXHJcbiAgLyoqXHJcbiAgICog0J/QtdGA0LXQvNC10L3QvdGL0LUg0LTQu9GPINC60LDQu9GM0LrRg9C70Y/RgtC+0YDQsCDQv9C+0LTQtNC+0L3QvtCyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RPTX0gY2hlY2tib3hFcGFsIGNoZWNrYm94INC90LDQu9C40YfQuNC1INC60LvQtdC50LzQsCBFcGFsLlxyXG4gICAqIEBwYXJhbSB7RE9NfSBwYWxsZXRHcmFkZSDQstC10YHRjCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkgc2VsZWN0INCy0YvQsdC+0YDQsCDRgdC+0YDRgtCwINC/0L7QtNC00L7QvdC+0LJcclxuICAgKiBAcGFyYW0ge0RPTX0gY3VycmVudFBhbGxldEdyYWRlINCy0YvQsdGA0LDQvdC90YvQuSDRgdC+0YDRgiDQv9C+0LTQtNC+0L3QvtCyXHJcbiAgICogQHBhcmFtIHtET019IHBhbGxldERlbGl2ZXJ5VHlwZSDRgtC40L8g0LTQvtGB0YLQsNCy0LrQuCDQv9C+0LTQtNC+0L3QvtCyXHJcbiAgICogQHBhcmFtIHtET019IHBhbGxldHNRdWFudGl0eSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0LTQtNC+0L3QvtCyXHJcbiAgICogQHBhcmFtIHtET019IG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lQYWxsZXRzINC30LTQtdGB0Ywg0LLRi9Cy0L7QtNC40Lwg0YHRgdGD0LzQvNGDINCyINGA0YPQsdC70Y/RhSDQv9C+INC/0L7QtNC00L7QvdCw0LxcclxuICAgKiBAbWV0aG9kIGN1c3RvbVNlbGVjdHMuc2hvd0Vycm9yc1NlbGVjdCgpOyDQv9GA0LjQvdC40LzQsNC10YIgINC/0L7QutCw0LfRi9Cy0LDQtdGCINC+0YjQuNCx0LrRgyDQvdCwIHNlbGVjdGBlXHJcbiAgICovXHJcbiAgbGV0IGNoZWNrYm94RXBhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcGFsJyk7XHJcbiAgbGV0IHBhbGxldEdyYWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbGxldEdyYWRlJyk7XHJcbiAgbGV0IGN1cnJlbnRQYWxsZXRHcmFkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50UGFsbGV0R3JhZGUnKTtcclxuICBsZXQgcGFsbGV0RGVsaXZlcnlUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbGxldERlbGl2ZXJ5VHlwZScpO1xyXG4gIGxldCBwYWxsZXRzUXVhbnRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFsbGV0c1JhbmdlJyk7XHJcbiAgbGV0IHBhbGxldHNSYW5nZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbGxldHNSYW5nZUlucHV0Jyk7XHJcbiAgbGV0IG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lQYWxsZXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdFBhbGxldHNDdXJyZW5jeScpO1xyXG5cclxuICAvKipcclxuICAgKiDQn9C10YDQtdC80LXQvdC90YvQtSDQtNC70Y8g0LrQsNC70YzQutGD0LvRj9GC0L7RgNCwINGD0L3QuNGH0YLQvtC20LXQvdC40Y8g0LDRgNGF0LjQstCwXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RPTX0gZGVzdHJ1Y3Rpb25LZyDQstC10YEg0LDRgNGF0LjQstCwINC00LvRjyDRg9C90LjRh9GC0L7QttC10L3QuNGPINCyINC60LNcclxuICAgKiBAcGFyYW0ge0RPTX0gb3V0cHV0Q291bnRpbmdSZXN1bHRDdXJyZW5jeURlc3RydWN0aW9uINC30LTQtdGB0Ywg0LLRi9Cy0L7QtNC40Lwg0YHRgdGD0LzQvNGDINCyINGA0YPQsdC70Y/RhSDQv9C+INGD0L3QuNGH0YLQvtC20LXQvdC40Y5cclxuICAgKi9cclxuICBsZXQgZGVzdHJ1Y3Rpb25LZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0cnVjdGlvblJhbmdlJyk7XHJcbiAgbGV0IG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lEZXN0cnVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHREZXN0cnVjdGlvbkN1cnJlbmN5Jyk7XHJcblxyXG4gIC8qKlxyXG4gICAqINCf0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQutCw0LvRjNC60YPQu9GP0YLQvtGA0LAg0YPQvdC40YfRgtC+0LbQtdC90LjRjyDQsNGA0YXQuNCy0LBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RE9NfSBkZXN0cnVjdGlvbktnINCy0LXRgSDQsNGA0YXQuNCy0LAg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LIg0LrQs1xyXG4gICAqIEBwYXJhbSB7RE9NfSBvdXRwdXRDb3VudGluZ1Jlc3VsdEN1cnJlbmN5RGVzdHJ1Y3Rpb24g0LfQtNC10YHRjCDQstGL0LLQvtC00LjQvCDRgdGB0YPQvNC80YMg0LIg0YDRg9Cx0LvRj9GFINC00LvRjyDRhdGA0LDQvdC10L3QuNGPXHJcbiAgICovXHJcbiAgbGV0IHN0b3JhZ2VLZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yYWdlUmFuZ2UnKTtcclxuICBsZXQgb3V0cHV0Q291bnRpbmdSZXN1bHRDdXJyZW5jeVN0b3JhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0U3RvcmFnZUN1cnJlbmN5Jyk7XHJcblxyXG4gIC8qKlxyXG4gICAqINGE0L7RgNC80LDRgtC40YDRg9C10YIg0YfQuNGB0LvQvlxyXG4gICAqXHJcbiAgICogQGNvbnN0cnVjdG9yIGZvcm1hdHRlctChdXJyZW5jeSDRhNC+0YDQvNCw0YLQuNGA0YPQtdC8INC40YLQvtCz0L7QstC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiDRgNGD0LHQu9GP0YUg0LIg0YPQtNC+0LHQvdC+0YfQuNGC0LDQtdC80L7QuSDRhNC+0YDQvNCw0YLQtSDRgSDRgNCw0LfQtNC10LvQtdC90LjQtdC8INC90LAg0YDQsNC30YDRj9C00Ysg0Lgg0LfQvdCw0YfQtdC6INCy0LDQu9GO0YLRi1xyXG4gICAqL1xyXG4gIGNvbnN0IGZvcm1hdHRlctChdXJyZW5jeSA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcInJ1XCIsIHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdSVUInXHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICog0L/RgNC+0YHQu9GD0YjQuNCy0LDQtdC8INGB0L7QsdGL0YLQuNGPXHJcbiAgKlxyXG4gICog0JrQsNC70YzQutGD0LvRj9GC0L7RgCDRgdGL0YDRjNGPOlxyXG4gICogbWF0ZXJpYWxzS2cgLSDQuNC30LzQtdC90LXQvdC40Y8g0LLQtdGB0LAg0LIg0LrQs1xyXG4gICogbWF0ZXJpYWxzRGVsaXZlcnlUeXBlIC0g0LjQt9C80LXQvdC10L3QuNGPINGC0LjQv9CwINC00L7RgdGC0LDQstC60LhcclxuICAqIHRyYXNoIC0g0LjQt9C80LXQvdC10L3QuNGPINC90LDQu9C40YfQuNGPINC30LDRgdC+0YDQsCDQtdGB0YLRjC/QvdC10YJcclxuICAqIHR5cGVNYXRlcmlhbHMgLSDQuNC30LzQtdC90LXQvdC40LUg0YLQuNC/0LAg0YHRi9GA0YzRj1xyXG4gICoqL1xyXG4gIG1hdGVyaWFsc0tnLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIC8vINC10YHQu9C4INGC0LjQvyDRgdGL0YDRjyDQvdC1INCy0YvQsdGA0LDQvSwg0L/QvtC60LDQt9GL0LLQsNC10LwgZXJvcnIg0L3QsCBzZWxlY3RgZVxyXG4gICAgaWYgKCFjdXJyZW50VHlwZU1hdGVyaWFscy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkgY3VzdG9tU2VsZWN0cy5zaG93RXJyb3JzU2VsZWN0KHR5cGVNYXRlcmlhbHMpO1xyXG4gICAgaGFuZGxlckVudGVyZWREYXRhTWF0ZXJpYWxzKCk7XHJcbiAgfSk7XHJcbiAgbWF0ZXJpYWxzS2dJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8g0LXRgdC70Lgg0YLQuNC/INGB0YvRgNGPINC90LUg0LLRi9Cx0YDQsNC9LCDQv9C+0LrQsNC30YvQstCw0LXQvCBlcm9yciDQvdCwIHNlbGVjdGBlXHJcbiAgICBpZiAoIWN1cnJlbnRUeXBlTWF0ZXJpYWxzLmdldEF0dHJpYnV0ZSgnbmFtZScpKSBjdXN0b21TZWxlY3RzLnNob3dFcnJvcnNTZWxlY3QodHlwZU1hdGVyaWFscyk7XHJcbiAgICBoYW5kbGVyRW50ZXJlZERhdGFNYXRlcmlhbHMoKTtcclxuICB9KTtcclxuICBtYXRlcmlhbHNEZWxpdmVyeVR5cGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlckVudGVyZWREYXRhTWF0ZXJpYWxzKTtcclxuICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyRW50ZXJlZERhdGFNYXRlcmlhbHMpO1xyXG4gIHR5cGVNYXRlcmlhbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyRW50ZXJlZERhdGFNYXRlcmlhbHMpO1xyXG5cclxuICAvKipcclxuICAqINCf0YDQvtGB0LvRg9GI0LjQstCw0LXQvCDRgdC+0LHRi9GC0LjRj1xyXG4gICpcclxuICAqINCa0LDQu9GM0LrRg9C70Y/RgtC+0YAg0L/QvtC00LTQvtC90L7QsjpcclxuICAqIGNoZWNrYm94RXBhbCAtINC40LfQvNC10L3QtdC90LjQtSDQvdCw0LvQuNGH0LjRjyDQutC70LXQudC80LAgRXBhbCDQvdC10YIv0LXRgdGC0YxcclxuICAqIHBhbGxldEdyYWRlIC0g0LLRi9Cx0L7RgCDRgdC+0YDRgtCwINC/0L7QtNC00L7QvdC+0LJcclxuICAqIHBhbGxldERlbGl2ZXJ5VHlwZSAtINC40LfQvNC10L3QtdC90LjQtSDRgtC40L/QsCDQtNC+0YHRgtCw0LLQutC4XHJcbiAgKiBwYWxsZXRzUXVhbnRpdHkgLSDQuNC30LzQtdC90LXQvdC40LUg0LrQvtC70LjRh9C10YHRgtCy0LAg0L/QvtC00LTQvtC90L7QslxyXG4gICovXHJcbiAgY2hlY2tib3hFcGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXJFbnRlcmVkRGF0YVBhbGxldHMpO1xyXG4gIHBhbGxldEdyYWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlckVudGVyZWREYXRhUGFsbGV0cyk7XHJcbiAgcGFsbGV0RGVsaXZlcnlUeXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXJFbnRlcmVkRGF0YVBhbGxldHMpO1xyXG4gIHBhbGxldHNRdWFudGl0eS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8g0LXRgdC70Lgg0L3QtSDQstGL0LHRgNCw0L0g0YHQvtGA0YIg0L/QvtC00LTQvtC90L7Qsiwg0L/QvtC60LDQt9GL0LLQsNC10LwgZXJvcnIg0L3QsCBzZWxlY3RgZVxyXG4gICAgaWYgKCFjdXJyZW50UGFsbGV0R3JhZGUuZ2V0QXR0cmlidXRlKCduYW1lJykpIGN1c3RvbVNlbGVjdHMuc2hvd0Vycm9yc1NlbGVjdChwYWxsZXRHcmFkZSk7XHJcbiAgICBoYW5kbGVyRW50ZXJlZERhdGFQYWxsZXRzKCk7XHJcbiAgfSk7XHJcbiAgcGFsbGV0c1JhbmdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vINC10YHQu9C4INC90LUg0LLRi9Cx0YDQsNC9INGB0L7RgNGCINC/0L7QtNC00L7QvdC+0LIsINC/0L7QutCw0LfRi9Cy0LDQtdC8IGVyb3JyINC90LAgc2VsZWN0YGVcclxuICAgIGlmICghY3VycmVudFBhbGxldEdyYWRlLmdldEF0dHJpYnV0ZSgnbmFtZScpKSBjdXN0b21TZWxlY3RzLnNob3dFcnJvcnNTZWxlY3QocGFsbGV0R3JhZGUpO1xyXG4gICAgaGFuZGxlckVudGVyZWREYXRhUGFsbGV0cygpO1xyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAqINCf0YDQvtGB0LvRg9GI0LjQstCw0LXQvCDRgdC+0LHRi9GC0LjRj1xyXG4gICpcclxuICAqINCa0LDQu9GM0LrRg9C70Y/RgtC+0YAg0YPQvdC40YfRgtC+0LbQtdC90LjRjyDQsNGA0YXQuNCy0LA6XHJcbiAgKiDQn9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4INCy0LXRgdCwINC30LDQv9GD0YHQutCw0LXQvCDRhNGD0L3QutGG0LjRjiDQv9C+0LTRgdGH0LXRgtCwLlxyXG4gICog0J/QvtC70YPRh9C10L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRhNC+0YDQvNCw0YLQuNGA0YPQtdC8INCyINGD0LTQvtCx0L7Rh9C40YLQsNC10LzQvtC1INGH0LjRgdC70L4uXHJcbiAgKi9cclxuICBkZXN0cnVjdGlvbktnLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcmVzdWx0U3VtQ3VycmVuY3kgPSBtYWtlc0NhbGN1bGF0aW9uQ3VycmVuY3koNSwgdGhpcy52YWx1ZSk7XHJcbiAgICBvdXRwdXRDb3VudGluZ1Jlc3VsdEN1cnJlbmN5RGVzdHJ1Y3Rpb24uaW5uZXJIVE1MID0gZm9ybWF0dGVy0KF1cnJlbmN5LmZvcm1hdChyZXN1bHRTdW1DdXJyZW5jeSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICog0J/RgNC+0YHQu9GD0YjQuNCy0LDQtdC8INGB0L7QsdGL0YLQuNGPXHJcbiAgKlxyXG4gICog0JrQsNC70YzQutGD0LvRj9GC0L7RgCDRhdGA0LDQvdC10L3QuNGPINCw0YDRhdC40LLQsDpcclxuICAqINCf0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0LLQtdGB0LAg0LfQsNC/0YPRgdC60LDQtdC8INGE0YPQvdC60YbQuNGOINC/0L7QtNGB0YfQtdGC0LAuXHJcbiAgKiDQn9C+0LvRg9GH0LXQvdC90L7QtSDQt9C90LDRh9C10L3QuNC1INGE0L7RgNC80LDRgtC40YDRg9C10Lwg0LIg0YPQtNC+0LHQvtGH0LjRgtCw0LXQvNC+0LUg0YfQuNGB0LvQvi5cclxuICAqL1xyXG4gIHN0b3JhZ2VLZy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJlc3VsdFN1bUN1cnJlbmN5ID0gbWFrZXNDYWxjdWxhdGlvbkN1cnJlbmN5KDUsIHRoaXMudmFsdWUpO1xyXG4gICAgb3V0cHV0Q291bnRpbmdSZXN1bHRDdXJyZW5jeVN0b3JhZ2UuaW5uZXJIVE1MID0gZm9ybWF0dGVy0KF1cnJlbmN5LmZvcm1hdChyZXN1bHRTdW1DdXJyZW5jeSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICog0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INCy0LLQtdC00LXQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQtNCw0L3QvdGL0LUg0Lgg0L/QtdGA0LXQtNCw0LXQvCDQuNGFINCyINC80LXRgtC+0LQg0L7QsdGK0LXQutGC0LAg0L/RgNCw0LnRgdCwINC00LvRjyDQstGL0LHQvtGA0LrQuCDRhtC10L3Ri1xyXG4gICpcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZFR5cGVNYXRlcmlhbHMgLSDQt9C90LDRh9C10L3QuCDQsNGC0YDQuNCx0YPRgtCwICduYW1lJywg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LrQsNC6INC60LvRjtGHINC+0LHRitC10LrRgtCwIHByaWNlTWF0ZXJpYWxzW9GC0LjQv9CwLdGB0YvRgNGM0Y9dXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZURlbGl2ZXJ5IC0gY2hlY2tib3gsINC40YHQv9C+0LvRjNC30YPQtdC8INC60LDQuiDQutC70Y7RhyDQvtCx0YrQtdC60YLQsCBwcmljZU1hdGVyaWFsc1vRgtC40L/QsC3RgdGL0YDRjNGPXVvRgtC40L8t0LTQvtGB0YLQsNCy0LrQuF1cclxuICAqIEBwYXJhbSB7bnVtYmVyfSBwcmljZSAtINGG0LXQvdCwINCy0YvQsdGA0LDQvdC90L7Qs9C+INGC0L7QstCw0YDQsCwg0LLQvtC30LLRgNCw0YnQtdC90L3QsNGPINC80LXRgtC+0LTQvtC8IHByaWNlTWF0ZXJpYWxzLmdldFByaWNlU2VsZWN0ZWRUeXBlTWF0ZXJpYWxzKHNlbGVjdGVkVHlwZU1hdGVyaWFscywgdHlwZURlbGl2ZXJ5LCBtYXRlcmlhbHNLZy52YWx1ZSlcclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gdHJhc2guY2hlY2tlZCAtINC10YHQu9C4INCy0YvQsdGA0LDQvSDQt9Cw0YHQvtGAIHByaWNlINGD0LzQvdC+0LbQsNC10Lwg0L3QsCAwLjlcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBvdXRwdXRDb3VudGluZ1Jlc3VsdCAtINCy0YvQstC+0LTQuNC8INGA0LXQt9GD0LvRjNGC0LDRgiDQv9C+0LTRgdGH0LXRgtCwINC90LAg0YHRgtGA0LDQvdC40YbRg1xyXG4gICoqL1xyXG4gIGZ1bmN0aW9uIGhhbmRsZXJFbnRlcmVkRGF0YU1hdGVyaWFscygpIHtcclxuICAgIGxldCBzZWxlY3RlZFR5cGVNYXRlcmlhbHMgPSBjdXJyZW50VHlwZU1hdGVyaWFscy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgIGxldCB0eXBlRGVsaXZlcnkgPSBtYXRlcmlhbHNEZWxpdmVyeVR5cGUuY2hlY2tlZCA/ICdvdXItZGVsaXZlcnknIDogJ3NlbGYtZGVsaXZlcnknO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZFR5cGVNYXRlcmlhbHMpIHtcclxuICAgICAgbGV0IHByaWNlID0gcHJpY2VNYXRlcmlhbHMuZ2V0UHJpY2VTZWxlY3RlZFR5cGVNYXRlcmlhbHMoc2VsZWN0ZWRUeXBlTWF0ZXJpYWxzLCB0eXBlRGVsaXZlcnksIG1hdGVyaWFsc0tnLnZhbHVlKTtcclxuXHJcbiAgICAgIGlmICh0cmFzaC5jaGVja2VkKSBwcmljZSA9IHByaWNlICogMC45O1xyXG5cclxuICAgICAgb3V0cHV0Q291bnRpbmdSZXN1bHQuaW5uZXJIVE1MID0gZm9ybWF0dGVy0KF1cnJlbmN5LmZvcm1hdCggbWFrZXNDYWxjdWxhdGlvbkN1cnJlbmN5KHByaWNlLCBtYXRlcmlhbHNLZy52YWx1ZSkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICog0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INCy0LLQtdC00LXQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQtNCw0L3QvdGL0LUg0Lgg0L/QtdGA0LXQtNCw0LXQvCDQuNGFINCyINC80LXRgtC+0LQg0L7QsdGK0LXQutGC0LAg0L/RgNCw0LnRgdCwINC00LvRjyDQstGL0LHQvtGA0LrQuCDRhtC10L3Ri1xyXG4gICpcclxuICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZEdyYWRlUGFsbGV0IC0g0LfQvdCw0YfQtdC90LjQtSDQsNGC0YDQuNCx0YPRgtCwICduYW1lJywg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LrQsNC6INC60LvRjtGHINC+0LHRitC10LrRgtCwIHByaWNlUGFsbGV0c1vRgdC+0YDRgi3Qv9C+0LTQtNC+0L3QvtCyXVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHR5cGVEZWxpdmVyeSAtIGNoZWNrYm94LCDQuNGB0L/QvtC70YzQt9GD0LXQvCDQutCw0Log0LrQu9GO0Ycg0L7QsdGK0LXQutGC0LAgcHJpY2VQYWxsZXRzW9GB0L7RgNGCLdC/0L7QtNC00L7QvdC+0LJdW9GC0LjQvy3QtNC+0YHRgtCw0LLQutC4XVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IHByZXNlbmNlU3RhbXBFcGFsIC0gY2hlY2tib3gsINC40YHQv9C+0LvRjNC30YPQtdC8INC60LDQuiDQutC70Y7RhyDQvtCx0YrQtdC60YLQsCBwcmljZVBhbGxldHNb0YHQvtGA0YIt0L/QvtC00LTQvtC90L7Qsl1b0YLQuNC/LdC00L7RgdGC0LDQstC60LhdW9C90LDQu9C40YfQuNC1LdC60LvQtdC50LzQsC1lcGFsXVxyXG4gICogQHBhcmFtIHtudW1iZXJ9IHByaWNlIC0g0YbQtdC90LAg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0YHQvtGA0YLQsCDQv9C+0LTQtNC+0L3QvtCyLCDQstC+0LfQstGA0LDRidC10L3QvdCw0Y8g0LzQtdGC0L7QtNC+0LwgcHJpY2VNYXRlcmlhbHMuZ2V0UHJpY2VTZWxlY3RlZEdyYWRlUGFsbGV0KHNlbGVjdGVkR3JhZGVQYWxsZXQsIHR5cGVEZWxpdmVyeSwgcHJlc2VuY2VTdGFtcEVwYWwpXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gb3V0cHV0Q291bnRpbmdSZXN1bHRDdXJyZW5jeVBhbGxldHMgLSDQstGL0LLQvtC00LjQvCDRgNC10LfRg9C70YzRgtCw0YIg0L/QvtC00YHRh9C10YLQsCDQvdCwINGB0YLRgNCw0L3QuNGG0YNcclxuICAqKi9cclxuICBmdW5jdGlvbiBoYW5kbGVyRW50ZXJlZERhdGFQYWxsZXRzKCkge1xyXG4gICAgbGV0IHNlbGVjdGVkR3JhZGVQYWxsZXQgPSBjdXJyZW50UGFsbGV0R3JhZGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICBsZXQgdHlwZURlbGl2ZXJ5ID0gcGFsbGV0RGVsaXZlcnlUeXBlLmNoZWNrZWQgPyAnb3VyLWRlbGl2ZXJ5JyA6ICdzZWxmLWRlbGl2ZXJ5JztcclxuICAgIGxldCBwcmVzZW5jZVN0YW1wRXBhbCA9IGNoZWNrYm94RXBhbC5jaGVja2VkID8gJ2VwYWwnIDogJ25vLWVwYWwnO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZEdyYWRlUGFsbGV0KSB7XHJcbiAgICAgIGxldCBwcmljZSA9IHByaWNlUGFsbGV0cy5nZXRQcmljZVNlbGVjdGVkR3JhZGVQYWxsZXQoc2VsZWN0ZWRHcmFkZVBhbGxldCwgdHlwZURlbGl2ZXJ5LCBwcmVzZW5jZVN0YW1wRXBhbCk7XHJcbiAgICAgIG91dHB1dENvdW50aW5nUmVzdWx0Q3VycmVuY3lQYWxsZXRzLmlubmVySFRNTCA9IGZvcm1hdHRlctChdXJyZW5jeS5mb3JtYXQoIG1ha2VzQ2FsY3VsYXRpb25DdXJyZW5jeShwcmljZSwgcGFsbGV0c1F1YW50aXR5LnZhbHVlKSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiDQo9C80L3QvtC20LDQtdGCINGG0LXQvdGDINGC0L7QstCw0YDQsCDQvdCwINC60L7Qu9C40YfQtdGB0YLQstC+XHJcbiAgKlxyXG4gICogQHBhcmFtIHtudW1iZXJ9IHByaWNlTWF0ZXJpYWxzINGG0LXQvdCwINC30LAg0LXQtNC40L3QuNGG0YMg0YLQvtCy0LDRgNCwXHJcbiAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyS2lsb2dyYW1zINC60L7Qu9C40YfQtdGB0YLQstC+XHJcbiAgKiovXHJcbiAgZnVuY3Rpb24gbWFrZXNDYWxjdWxhdGlvbkN1cnJlbmN5KHByaWNlTWF0ZXJpYWxzLCBudW1iZXJLaWxvZ3JhbXMpIHtcclxuICAgIHJldHVybiBwcmljZU1hdGVyaWFscyAqIG51bWJlcktpbG9ncmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqINCd0LAg0YDQvtC00LjRgtC10LvRjNGB0LrQvtC8INGN0LvQtdC80LXQvdGC0LUg0L/QvtC60LDQt9GL0LLQsNC10Lwg0L7RiNC40LHQutGDXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0RPTX0gY3VycmVudFNlbGVjdCDRjdC70LXQvNC10L3RgiDRh9GM0LXQs9C+INGA0L7QtNC40YLQtdC70Y8g0LHRg9C00LXQvCDQvdCw0YXQvtC00LjRgtGMXHJcbiAgICog0J/RgNC4INGE0L7QutGD0YHQtSwg0LXRgdC70Lgg0L3QsCDRjdC70LXQvNC10L3RgtC1INCx0YvQuyBlcnJvciDRgdC90LjQvNCw0LXQvCDQtdCz0L5cclxuICAgKiDQn9C+0LrQsNC30YvQstCw0LXQvCBlcnJvciDQvdCwINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RglxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNob3dFcnJvcnNTZWxlY3QoY3VycmVudFNlbGVjdCkge1xyXG4gICAgbGV0IHBhcmVudFNlbGVjdCA9IGN1cnJlbnRTZWxlY3QuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG4gICAgcGFyZW50U2VsZWN0Lm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3VycmVudFNlbGVjdC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLW5vLXNlbGVjdGVkJyk7XHJcbiAgICAgIHBhcmVudFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuZXJyb3Itbm8tc2VsZWN0ZWRfX21lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICAgIGN1cnJlbnRTZWxlY3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlcnJvci1uby1zZWxlY3RlZCcpO1xyXG4gICAgcGFyZW50U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1uby1zZWxlY3RlZF9fbWVzc2FnZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgfVxyXG59KCkpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvKipcclxuICAqINCS0YvQstC+0LTQuNGCINC80LjQvdC40LzQsNC70YzQvdGD0Y4g0Lgg0LzQsNC60YHQuNC80LDQu9GM0L3Rg9GOINGG0LXQvdGDINCyINC60LDRgNGC0L7Rh9C60YMg0YLQvtCy0LDRgNCwXHJcbiAgKlxyXG4gICogQHBhcmFtIGNhcmRzUHJvZHVjdCAtINC80LDRgdGB0LjQsiDQutCw0YDRgtC+0YfQtdC6INGC0L7QstCw0YDQsFxyXG4gICogQHBhcmFtIHByb2R1Y3ROYW1lIC0g0LDRgtGA0LjQsdGD0YIgbmFtZSDQutCw0YDRgtC+0YfQutC4INGC0L7QstCw0YDQsFxyXG4gICogQHBhcmFtIHN0YXJ0UHJpY2UgLSBzcGFuINCyINC60LDRgNGC0L7Rh9C60LUg0LIg0LrQvtGC0L7RgNGL0Lkg0LLRi9Cy0L7QtNC40YLRgdGPINC80LjQvdC40LzQsNC70YzQvdCw0Y8g0YbQtdC90LBcclxuICAqIEBwYXJhbSBmaW5hbFByaWNlIC0gc3BhbiDQsiDQutCw0YDRgtC+0YfQutC1INCyINC60L7RgtC+0YDRi9C5INCy0YvQstC+0LTQuNGC0YHRjyDQvNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0YbQtdC90LBcclxuICAqXHJcbiAgKlxyXG4gICog0JzQtdGC0L7QtCBwcmljZVBhbGxldHMuZ2V0TWluUHJpY2VQYWxsZXQoKTsg0L3QsNGF0L7QtNC40YLRgdGPINCy0L4g0LLQvdC10YjQvdC10Lwg0YHQutGA0LjQv9GC0LUg0LIg0YTQsNC50LvQtSBwcmljZXMuanNcclxuICAqINCc0LXRgtC+0LQgcHJpY2VQYWxsZXRzLmdldE1heFByaWNlUGFsbGV0KCk7INC90LDRhdC+0LTQuNGC0YHRjyDQstC+INCy0L3QtdGI0L3QtdC8INGB0LrRgNC40L/RgtC1INCyINGE0LDQudC70LUgcHJpY2VzLmpzXHJcbiAgKlxyXG4gICog0J/RgNC40L3QuNC80LDQtdGCIHByb2R1Y3ROYW1lXHJcbiAgKiDQldGB0LvQuCDQvNCw0LrRg9C70LDRgtGD0YDQsCwg0YHRgtC10LrQu9C+LCDQv9C70LXQvdC60LAg0J/QktCUINCy0YvQsdC40YDQsNC10LwgbWluINC4IG1heCDQv9C+INC/0L7QtNCy0LjQtNCw0Lwg0Y3RgtC+0LPQviDRgdGL0YDRjNGPXHJcbiAgKi9cclxuXHJcbiAgbGV0IGNhcmRzUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXByb2R1Y3QnKTtcclxuXHJcbiAgY2FyZHNQcm9kdWN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBsZXQgcHJvZHVjdE5hbWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgbGV0IHN0YXJ0UHJpY2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN0YXJ0aW5nLXByaWNlXScpO1xyXG4gICAgbGV0IGZpbmFsUHJpY2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbmFsLXByaWNlXScpO1xyXG5cclxuICAgIGlmIChwcm9kdWN0TmFtZSA9PSBcInBhbGxldFwiKSB7XHJcbiAgICAgIHN0YXJ0UHJpY2UuaW5uZXJUZXh0ID0gcHJpY2VQYWxsZXRzLmdldE1pblByaWNlUGFsbGV0KCk7XHJcbiAgICAgIGZpbmFsUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2VQYWxsZXRzLmdldE1heFByaWNlUGFsbGV0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvZHVjdE5hbWUgPT0gXCJnbGFzc1wiKSB7XHJcbiAgICAgIHN0YXJ0UHJpY2UuaW5uZXJUZXh0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWluUHJpY2VNYXRlcmlhbChcImdsYXNzXCIpLFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1pblByaWNlTWF0ZXJpYWwoXCJnbGFzcy13aGl0ZS1icm93blwiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNaW5QcmljZU1hdGVyaWFsKFwiZ2xhc3MtZ3JlZW5cIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZpbmFsUHJpY2UuaW5uZXJUZXh0ID0gTWF0aC5tYXgoXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWF4UHJpY2VNYXRlcmlhbChcImdsYXNzXCIpLFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1heFByaWNlTWF0ZXJpYWwoXCJnbGFzcy13aGl0ZS1icm93blwiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKFwiZ2xhc3MtZ3JlZW5cIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvZHVjdE5hbWUgPT0gXCJwYXBlclwiKSB7XHJcbiAgICAgIHN0YXJ0UHJpY2UuaW5uZXJUZXh0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWluUHJpY2VNYXRlcmlhbChcInBhcGVyXCIpLFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1pblByaWNlTWF0ZXJpYWwoXCJib29rc1wiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNaW5QcmljZU1hdGVyaWFsKFwibWFnYXppbmVzXCIpLFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1pblByaWNlTWF0ZXJpYWwoXCJuZXdzcGFwZXJzXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmaW5hbFByaWNlLmlubmVyVGV4dCA9IE1hdGgubWF4KFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1heFByaWNlTWF0ZXJpYWwoXCJwYXBlclwiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKFwiYm9va3NcIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWF4UHJpY2VNYXRlcmlhbChcIm1hZ2F6aW5lc1wiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKFwibmV3c3BhcGVyc1wiKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9kdWN0TmFtZSA9PSBcImZpbG0tcHZkXCIpIHtcclxuICAgICAgc3RhcnRQcmljZS5pbm5lclRleHQgPSBNYXRoLm1pbihcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNaW5QcmljZU1hdGVyaWFsKFwiZmlsbS1wdmRcIiksXHJcbiAgICAgICAgcHJpY2VNYXRlcmlhbHMuZ2V0TWluUHJpY2VNYXRlcmlhbChcImZpbG0tY29sb3ItcHZkXCIpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmaW5hbFByaWNlLmlubmVyVGV4dCA9IE1hdGgubWF4KFxyXG4gICAgICAgIHByaWNlTWF0ZXJpYWxzLmdldE1heFByaWNlTWF0ZXJpYWwoXCJmaWxtLXB2ZFwiKSxcclxuICAgICAgICBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKFwiZmlsbS1jb2xvci1wdmRcIilcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFByaWNlLmlubmVyVGV4dCA9IHByaWNlTWF0ZXJpYWxzLmdldE1pblByaWNlTWF0ZXJpYWwocHJvZHVjdE5hbWUpO1xyXG4gICAgZmluYWxQcmljZS5pbm5lclRleHQgPSBwcmljZU1hdGVyaWFscy5nZXRNYXhQcmljZU1hdGVyaWFsKHByb2R1Y3ROYW1lKTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiY29uc3QgZm9ybU9yZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGV4R2VuZXJhbE9yZGVyJyk7XHJcbiAgY29uc3QgZm9ybVJldmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtUmV2aWV3Jyk7XHJcblxyXG4gIC8vIHNlbGVjdGDRiyDQv9C+0LvRjyDQstGL0LHQvtGA0LAsINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDRgtC40L/QsCDRg9GB0LvRg9CzINCx0YPQtNC10Lwg0YHQutGA0YvQstCw0YLRjCDQuNC70Lgg0L/QvtC60LDQt9Cy0YvQsNGC0Ywg0L/QvtC70Y9cclxuICBjb25zdCBzZWxlY3RlZFNlcnZpY2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZFNlcnZpY2UnKTtcclxuICBjb25zdCBidXlpbmdNYXRlcmlhbHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNidXlpbmdNYXRlcmlhbHMnKTtcclxuICBjb25zdCBwYWNrZWQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwYWNrZWQnKTtcclxuXHJcbiAgc2VsZWN0ZWRTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWFza0ZpZWxkKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlbmRGb3JtKTtcclxuICBmb3JtUmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlbmRGb3JtKTtcclxuXHJcbiAgLyoqXHJcbiAgICog0J7RgtC/0YDQsNCy0LvRj9C10YIg0YTQvtGA0LzRgyDRh9C10YDQtdC3IGFqYXhcclxuICAgKiBAcGFyYW0geyp9IGV2ZW50INC00LDQvdC90YvQtSDQviDRgdC+0LHRi9GC0LjQuCBzdWJtaXRcclxuICAgKiDQldGB0LvQuCDRhNC+0YDQvNCwINC/0YDQvtGI0LvQsCDQstCw0LvQuNC00LDRhtC40Y4g0L7RgtC/0YDQsNCy0LvRj9C10Lwg0LXQtVxyXG4gICAqINCV0YHQu9C4INC90LUg0L/RgNC+0YjQu9CwIHJldHVyblxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNlbmRGb3JtKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHJlc3VsdFZhbGlkYXRlID0gZm9ybVZhbGlkYXRlKGV2ZW50LnRhcmdldCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdFZhbGlkYXRlKSB7XHJcbiAgICAgIC8vINC00LvRjyDQvtGC0L/QsNGA0LLQutC4INC30LDQv9GD0YHQutCw0LXQvCDQvNC+0LTRg9C70YwgbW9kdWxlcy9hamF4LmpzXHJcbiAgICAgIHNlbmRGb3JtT3JkZXIuc2VuZFJlcXVlc3QoZXZlbnQsIGV2ZW50LnRhcmdldCk7XHJcbiAgICB9IGVsc2Uge3JldHVybjt9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmb3JtVmFsaWRhdGUoKSDQstCw0LvQuNC00LjRgNGD0LXRgiDRhNC+0YDQvNGDINC90LAg0LfQsNC/0L7Qu9C90LXQvdC+0YHRgtGMXHJcbiAgICogQHBhcmFtIHsqfSBmb3JtIC0g0YTQvtGA0LzQsCwg0LrQvtGC0L7RgNGD0Y4g0LHRg9C00LXQvCDQstCw0LvQuNC00LjRgNC+0LLQsNGC0YxcclxuICAgKiBAdmFyIHt9IHNlbGVjdHMgLSDQstGB0LUg0L/QvtC70Y8gc2VsZWN0INCyINGE0L7RgNC80LVcclxuICAgKiBAdmFyIHt9IGlucHV0cyAtINCy0YHQtSDQv9C+0LvRjyBpbnB1dCDQsiDRhNC+0YDQvNC1XHJcbiAgICogQHZhciB7Ym9vbH0gcmVzdWx0VmFsaWRhdGUgLSDRgNC10LfRg9C70YzRgtCw0YIg0LLQsNC70LjQtNCw0YbQuNC4XHJcbiAgICog0J/RgNC+0LLQtdGA0Y/QtdC8INCy0YHQtSDQv9C+0LvRjyDQvdCwINC30LDQv9C+0LvQvdC10L3QvtGB0YLRjFxyXG4gICAqINCV0YHQu9C4INC/0L7Qu9C1INC90LUg0LfQsNC/0L7Qu9C90LXQvdC+LCDQv9C+0LrQsNC30YvQstCw0LXQvCDQvdCwINC90LXQvCDQvtGI0LjQsdC60YNcclxuICAgKiDQldGB0LvQuCDQstGL0LHRgNCw0L3QvdGL0Lkg0YLQuNC/INGD0YHQu9GD0LPQuCDQvdC1IFwi0L/RgNC40LXQvCDRgdGL0YDRjNGPXCIsINGB0LrRgNGL0LLQsNC10Lwgc2VsZWN0YNGLIFwi0YLQuNC/INGB0YvRgNGM0Y9cIiDQuCBcItC60LDQuiDRgdC70L7QttC10L3QvlwiINC/0L7QtCDQvNCw0YHQutC+0LksINC90LUg0LLQsNC70LjQtNC40YDRg9C10Lwg0LjRhVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGZvcm1WYWxpZGF0ZShmb3JtKSB7XHJcbiAgICBjb25zdCBzZWxlY3RzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpO1xyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0YXJlYScpO1xyXG4gICAgbGV0IHJlc3VsdFZhbGlkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICBzZWxlY3RzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGxldCBzZWxlY3RDdXJyZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWN1cnJlbnQnKTtcclxuXHJcbiAgICAgIGlmICghc2VsZWN0Q3VycmVudC5oYXNBdHRyaWJ1dGUoJ25hbWUnKSAmJiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtbWFzaycpID09ICdoaWRlJykge1xyXG4gICAgICAgIC8vINC40YHQv9C+0LvRjNC30YPQtdC8INC80L7QtNGD0LvRjCBtb2R1bGVzL3NlbGVjdHMuanNcclxuICAgICAgICBjdXN0b21TZWxlY3RzLnNob3dFcnJvcnNTZWxlY3QoaXRlbSk7XHJcbiAgICAgICAgcmVzdWx0VmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLm1hdGNoZXMoJy50ZWwtZmllbGQnKSAmJiBpdGVtLnZhbHVlLmxlbmd0aCAhPT0gMTgpIHtcclxuICAgICAgICAvLyDQuNGB0L/QvtC70YzQt9GD0LXQvCDQvNC+0LTRg9C70YwgbW9kdWxlcy9pbnB1dHMuanNcclxuICAgICAgICBoYW5kbGVySW5wdXRzLnNob3dFcnJvcnNJbnB1dChpdGVtKTtcclxuICAgICAgICByZXN1bHRWYWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgPT0gJycpIHtcclxuICAgICAgICAvLyDQuNGB0L/QvtC70YzQt9GD0LXQvCDQvNC+0LTRg9C70YwgbW9kdWxlcy9pbnB1dHMuanNcclxuICAgICAgICBoYW5kbGVySW5wdXRzLnNob3dFcnJvcnNJbnB1dChpdGVtKTtcclxuICAgICAgICByZXN1bHRWYWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGV4dGFyZWEpIHtcclxuICAgICAgaWYgKHRleHRhcmVhLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgLy8g0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LzQvtC00YPQu9GMIG1vZHVsZXMvdGV4dGFyZWEuanNcclxuICAgICAgICBoYW5kbGVyVGV4dGFyZWEuc2hvd0Vycm9yc1RleHRhcmVhKHRleHRhcmVhKTtcclxuICAgICAgICByZXN1bHRWYWxpZGF0ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFZhbGlkYXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdG9nZ2xlTWFza0ZpZWxkKCkg0LLQutC70Y7Rh9Cw0LXRgiDQvNCw0YHQutGDKNC/0YDRj9GH0LXRgiDQv9C+0LvRjylcclxuICAgKiDQldGB0LvQuCBcItGC0LjQvyDRg9GB0LvRg9Cz0LhcIiDQvdC1IFwi0L/RgNC40LXQvCDRgdGL0YDRjNGPXCJcclxuICAgKiDQmNC90LDRh9C1INGB0L3QuNC80LDQtdGCINC80LDRgdC60YNcclxuICAgKi9cclxuICBmdW5jdGlvbiB0b2dnbGVNYXNrRmllbGQoKSB7XHJcbiAgICBsZXQgc2VsZWN0Q3VycmVudCA9IHNlbGVjdGVkU2VydmljZS5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWN1cnJlbnQnKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdEN1cnJlbnQuaGFzQXR0cmlidXRlKCduYW1lJykgfHwgc2VsZWN0Q3VycmVudC5tYXRjaGVzKCdbbmFtZT1cImJ1eWluZy1tYXRlcmlhbHNcIl0nKSkge1xyXG4gICAgICBidXlpbmdNYXRlcmlhbHMucXVlcnlTZWxlY3RvcignLm1hc2staGlkZS1maWVsZCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHBhY2tlZC5xdWVyeVNlbGVjdG9yKCcubWFzay1oaWRlLWZpZWxkJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgYnV5aW5nTWF0ZXJpYWxzLmRhdGFzZXQudG9nZ2xlTWFzayA9ICdoaWRlJztcclxuICAgICAgcGFja2VkLmRhdGFzZXQudG9nZ2xlTWFzayA9ICdoaWRlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1eWluZ01hdGVyaWFscy5xdWVyeVNlbGVjdG9yKCcubWFzay1oaWRlLWZpZWxkJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHBhY2tlZC5xdWVyeVNlbGVjdG9yKCcubWFzay1oaWRlLWZpZWxkJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIC8vINGB0L3QuNC80LDQtdC8INC+0YjQuNCx0LrRgywg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LzQvtC00YPQu9GMIG1vZHVsZXMvc2VsZWN0cy5qc1xyXG4gICAgICBjdXN0b21TZWxlY3RzLmhpZGVFcnJvcnNTZWxlY3QoYnV5aW5nTWF0ZXJpYWxzKTtcclxuICAgICAgY3VzdG9tU2VsZWN0cy5oaWRlRXJyb3JzU2VsZWN0KHBhY2tlZCk7XHJcbiAgICAgIGJ1eWluZ01hdGVyaWFscy5kYXRhc2V0LnRvZ2dsZU1hc2sgPSAnc2hvdyc7XHJcbiAgICAgIHBhY2tlZC5kYXRhc2V0LnRvZ2dsZU1hc2sgPSAnc2hvdyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuIiwiLy8gLyoqXHJcbi8vICAqINCS0YHQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INCyINC00LDQvdC90L7QuSDRhNCw0LnQu9C1INGA0LXQsNC70LjQt9GD0Y7RgiDRgtC+0LvRjNC60L4g0L7QsdGJ0LXQtSDQv9C+0LLQtdC00LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQvtCyOlxyXG4vLyAgKiBTZWxlY3Rg0YtcclxuLy8gICogQ2hlY2tib3hg0YtcclxuLy8gICogUmFuZ2Vg0YtcclxuLy8gICog0KHRgtC40LvQuNC30YPRjtGCXHJcbi8vICAqINCe0LHRgNCw0LHQsNGC0YvQstGO0YIg0L/QvtCy0LXQtNC10L3QuNC1XHJcbi8vICAqINCk0L7RgNC80LjRgNGD0Y7RgiDRgdC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LUsINC90L4g0L3QtSDQstGL0LLQvtC00Y/RgiDQuNGFXHJcbi8vICAqXHJcbi8vICAqINCd0LUg0LLRi9C/0L7Qu9C90Y/QtdGCOlxyXG4vLyAgKiDQv9C10YDQtdC00LDRh9GDINC30L3QsNGH0LXQvdC40Lkg0LIg0LTRgNGD0LPQuNC1INGB0LrRgNC40L/RgtGLLFxyXG4vLyAgKiDQvdC1INC+0LHRgNCw0LHQsNGC0YvQstCw0LXRgiDQtNCw0L3QvdGL0LUg0LTQu9GPINC/0L7QtNGB0YfQtdGC0LAg0YfQtdCz0L4t0LvQuNCx0L4sXHJcbi8vICAqINC90LUg0YXRgNCw0L3QuNGCINC00LDQvdC90YvQtSxcclxuLy8gICovXHJcbi8vIChmdW5jdGlvbigpIHtcclxuLy8gICAndXNlIHN0cmljdCc7XHJcblxyXG4vLyAgIC8qKlxyXG4vLyAgICAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNGFINGB0LXQu9C10LrRgtC+0LJcclxuLy8gICAgKlxyXG4vLyAgICAqIEBwYXJhbSB7RE9NW119IHNlbGVjdCAtINC60L7Qu9C70LXQutGG0LjRjyDQstGB0LXRhSDRgdC10LvQtdC60YLQvtCyINC90LAg0YHQsNC50YLQtVxyXG4vLyAgICAqIEBwYXJhbSB7RE9NW119IHNlbGVjdEhlYWRlciAtINGI0LDQv9C60Lgg0YHQtdC70LXQutGC0L7QslxyXG4vLyAgICAqIEBwYXJhbSB7RE9NW119IHNlbGVjdE9wdGlvbiAtINC60L7Qu9C70LXQutGG0LjRjyDRgtC10Lsg0LLQvdGD0YLRgNC4INGB0LXQu9C10LrRgtC+0LIsINGBINCy0LDRgNC40LDQvdGC0LDQvNC4INCy0YvQsdC+0YDQsCAob3B0aW9uKVxyXG4vLyAgICAqXHJcbi8vICAgICogaGFuZGxlcnM6XHJcbi8vICAgICogc2VsZWN0VG9nZ2xlIC0g0L/QviDQutC70LjQutGDINC90LAg0YHQtdC70LXQutGC0LUg0LDQutGC0LjQstC40YDRg9C10YIg0LXQs9C+XHJcbi8vICAgICogb3V0Rm9jdXMgLSDQv9GA0Lgg0L/QvtGC0LXRgNC1INGE0L7QutGD0YHQsCDQvdCwINGB0LXQu9C10LrRgtC1INC30LDQutGA0LLQsNC10Lwg0LXQs9C+XHJcbi8vICAgICogc2V0U2VsZWN0ZWQgLSDQv9C+INC60LvQuNC60YMg0L3QsCBvcHRpb24g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LXQs9C+INC60LDQuiDQstGL0LHRgNCw0L3QvdGL0Lkg0Lgg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LXQs9C+INCw0YLRgNC40LHRg9GCIFt0aGlzLm5hbWU9XCJ0aGlzLnZhbHVlXCJdXHJcbi8vICAgICovXHJcbi8vICAgbGV0IGhhbmRsZXJTZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdFwiKTtcclxuLy8gICAgIGxldCBzZWxlY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdF9faGVhZGVyXCIpO1xyXG4vLyAgICAgbGV0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0X19vcHRpb25cIik7XHJcblxyXG4vLyAgICAgc2VsZWN0SGVhZGVyLmZvckVhY2goaXRlbSA9PiB7XHJcbi8vICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFRvZ2dsZSk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBzZWxlY3QuZm9yRWFjaChpdGVtID0+IHtcclxuLy8gICAgICAgLy8g0LIg0YHQvtC+0LHRidC10L3QuNC4INC+0LEg0L7RiNC40LHQutC1ICjQvdC1INCy0YvQsdGA0LDQvSDQvdC4INC+0LTQuNC9INC/0YPQvdC60YIpINC30LDQv9C40YHRi9Cy0LDQtdC8INGC0LXQutGB0YIg0LjQtyDQt9Cw0LPQvtC70L7QstC60LAgc2VsZWN0YGFcclxuLy8gICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWN1cnJlbnQnKS5pbm5lclRleHQ7XHJcbi8vICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmVycm9yLW5vLXNlbGVjdGVkX19tZXNzYWdlLXRleHQnKS5pbm5lclRleHQgPSBjdXJyZW50VGV4dDtcclxuXHJcbi8vICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgb3V0Rm9jdXMpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgc2VsZWN0T3B0aW9uLmZvckVhY2goaXRlbSA9PiB7XHJcbi8vICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldFNlbGVjdGVkKTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGZ1bmN0aW9uIHNlbGVjdFRvZ2dsZSgpIHtcclxuLy8gICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWQoKSB7XHJcbi8vICAgICAgIGxldCB0ZXh0ID0gdGhpcy5pbm5lclRleHQsXHJcbi8vICAgICAgICAgICBhdHRyaWJ1dGVOYW1lVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcIm5hbWVcIiksXHJcbi8vICAgICAgICAgICBzZWxlY3QgPSB0aGlzLmNsb3Nlc3QoXCIuc2VsZWN0XCIpLFxyXG4vLyAgICAgICAgICAgY3VycmVudFNlbGVjdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1jdXJyZW50XCIpO1xyXG5cclxuLy8gICAgICAgY3VycmVudFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBhdHRyaWJ1dGVOYW1lVmFsdWUpO1xyXG4vLyAgICAgICBjdXJyZW50U2VsZWN0LmlubmVyVGV4dCA9IHRleHQ7XHJcblxyXG4vLyAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBvdXRGb2N1cygpIHtcclxuLy8gICAgICAgbGV0IHRoaXNTZWxlY3QgPSB0aGlzLmNsb3Nlc3QoXCIuc2VsZWN0XCIpO1xyXG4vLyAgICAgICB0aGlzU2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIik7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgIH07XHJcblxyXG4vLyAgIGhhbmRsZXJTZWxlY3QoKTtcclxuXHJcbi8vICAgLyoqXHJcbi8vICAgICog0J7QsdGA0LDQsdC+0YLRh9C40LogY2hlY2tib3ggLSDQstGL0LHQvtGA0LAg0YLQuNC/0LAg0LTQvtGB0YLQsNCy0LrQuFxyXG4vLyAgICAqXHJcbi8vICAgICog0JzQtdGC0L7QtNC+0LwgZm9yRWFjaCgpINC90LAg0LrQsNC20LTRi9C5IGl0ZW0g0LrQvtC70LvQtdC60YbQuNC4IGNoZWNrYm94INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0YDQvtGB0LvRg9GI0LrRgyBhZGRFdmVudExpc3RlbmVyKClcclxuLy8gICAgKlxyXG4vLyAgICAqIHZhcmlhYmxlczpcclxuLy8gICAgKiBwcmV2VGV4dENoZWNrYm94IC0g0YMg0LrQsNC20LTQvtCz0L4gaXRlbWDQsCA9IChjaGVja2JveCkg0LLRi9Cx0LjRgNCw0LXRgiDRgdC+0YHQtdC00LAg0L/QtdGA0LXQtCBjaGVja2JveFxyXG4vLyAgICAqIG5leHRUZXh0Q2hlY2tib3ggLSDRgyDQutCw0LbQtNC+0LPQviBpdGVtYNCwID0gKGNoZWNrYm94KSDQstGL0LHQuNGA0LDQtdGCINGB0L7RgdC10LTQsCDQv9C+0YHQu9C1IGNoZWNrYm94XHJcbi8vICAgICpcclxuLy8gICAgKiBoYW5kbGVyczpcclxuLy8gICAgKiDQldGB0LvQuCBjaGVja2JveC5jaGVja2VkINGB0YLQuNC70LjQt9GD0LXQvCDRgdC+0YHQtdC00LAg0L/QvtGB0LvQtVxyXG4vLyAgICAqINCV0YHQu9C4ICFjaGVja2JveC5jaGVja2VkINGB0YLQuNC70LjQt9GD0LXQvCDRgdC+0YHQtdC00LAg0L/QtdGA0LXQtFxyXG4vLyAgICAqL1xyXG4vLyAgIGxldCBjaGVja2JveENhbGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtdHlwZS1iJyk7XHJcblxyXG4vLyAgIGNoZWNrYm94Q2FsYy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4vLyAgICAgbGV0IHByZXZUZXh0Q2hlY2tib3ggPSBpdGVtLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuLy8gICAgIGxldCBuZXh0VGV4dENoZWNrYm94ID0gaXRlbS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcbi8vICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcclxuLy8gICAgICAgICBuZXh0VGV4dENoZWNrYm94LnN0eWxlLmNvbG9yID0gJyM2N2FmMDEnO1xyXG4vLyAgICAgICAgIHByZXZUZXh0Q2hlY2tib3guc3R5bGUuY29sb3IgPSAnIzYxMjIyOCc7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgaWYgKCFpdGVtLmNoZWNrZWQpIHtcclxuLy8gICAgICAgICBuZXh0VGV4dENoZWNrYm94LnN0eWxlLmNvbG9yID0gJyM2MTIyMjgnO1xyXG4vLyAgICAgICAgIHByZXZUZXh0Q2hlY2tib3guc3R5bGUuY29sb3IgPSAnIzY3YWYwMSc7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG5cclxuLy8gICAvKipcclxuLy8gICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiByYW5nZVxyXG4vLyAgICAqXHJcbi8vICAgICog0JzQtdGC0L7QtNC+0LwgZm9yRWFjaCgpINC90LAg0LrQsNC20LTRi9C5IGl0ZW0g0LrQvtC70LvQtdC60YbQuNC4IHJhbmdlINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0YDQvtGB0LvRg9GI0LrRgyBhZGRFdmVudExpc3RlbmVyKClcclxuLy8gICAgKlxyXG4vLyAgICAqIHZhcmlhYmxlczpcclxuLy8gICAgKiByYW5nZSAtINC60L7Qu9C70LXQutGG0LjRjyDQstGB0LXRhSByYW5nZWDQtdC5INC90LAg0YHQsNC50YLQtVxyXG4vLyAgICAqIGZvcm1hdHRlciAtINGH0LXRgNC10Lcg0LrQvtC90YHRgtGA0YPQutGC0L7RgCDQt9Cw0LTQsNC10YIg0LrRgNCw0YHQuNCy0YvQuSDRh9C40YHQu9C+0LLQvtC5INGE0L7RgNC80LDRgiDRgSDQv9GA0L7QsdC10LvQsNC80Lgg0LIg0YDQsNC30YDRj9C00LDRhVxyXG4vLyAgICAqIHBhcmVudCAtINGA0L7QtNC40YLQtdC70YwgcmFuZ2Vg0LBcclxuLy8gICAgKiBvdXRwdXRDdXJyZW50VmFsdWUgLSDQsdC70L7QuiDQsiDQutC+0YLQvtGA0YvQuSDQstGL0LLQvtC00LjRgtGB0Y8g0LfQvdCw0YfQtdC90LjQtSByYW5nZWBhXHJcbi8vICAgICogbWVhc3VyZVVuaXQgLSDRhdGA0LDQvdC40YIgYdCx0LHRgNC10LLQuNCw0YLRg9GA0YMg0LXQtNC40L3QuNGG0Ysg0LjQt9C80LXRgNC40L3QuNGPLCDQutC+0YLQvtGA0LDRjyDQv9GA0L7Qv9C40YHQsNC90LAg0LIgSFRNTCDRgNCw0LfQvNC10YLQutC1XHJcbi8vICAgICpcclxuLy8gICAgKiBoYW5kbGVyczpcclxuLy8gICAgKiDQl9C90LDRh9C10L3QuNC1IHJhbmdlINC90LAg0LrQvtGC0L7RgNC+0Lwg0L/RgNC+0LjQt9C+0YjQu9C+INGB0L7QsdGL0YLQuNC1ICdpbnB1dCcsINGE0L7RgNC80LDRgtC40YDRg9C10Lwg0Lgg0LLRi9Cy0L7QtNC40Lwg0LIgb3V0cHV0Q3VycmVudFZhbHVlXHJcbi8vICAgICovXHJcbi8vICAgbGV0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlJyk7XHJcbi8vICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydScpO1xyXG5cclxuLy8gICByYW5nZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4vLyAgICAgbGV0IHBhcmVudCA9IGl0ZW0uY2xvc2VzdCgnLnJhbmdlLXdyYXAnKTtcclxuLy8gICAgIGxldCBvdXRwdXRDdXJyZW50VmFsdWUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19vdXRwdXQtY3VycmVudC12YWx1ZScpO1xyXG4vLyAgICAgbGV0IG1lYXN1cmVVbml0ID0gb3V0cHV0Q3VycmVudFZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lclRleHQ7XHJcblxyXG4vLyAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBvdXRwdXRDdXJyZW50VmFsdWUuaW5uZXJIVE1MID0gZm9ybWF0dGVyLmZvcm1hdCh0aGlzLnZhbHVlKSArIFwiIFwiICsgbWVhc3VyZVVuaXQ7XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuXHJcbi8vIH0oKSk7XHJcbiIsImZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcblxyXG4gIGxldCBjZW50ZXJNYXAgPSB7bGF0OjU3LjE1MDYxNSwgbG5nOjY1LjU0NjAyOH07XHJcbiAgbGV0IG9mZmljZSA9IHtsYXQ6NTcuMTI5NjAyLCBsbmc6NjUuNTM2NDE0fTtcclxuICBsZXQgc3RvY2tUbSA9IHtsYXQ6NTcuMTMxNDU2LCBsbmc6NjUuNTE4NDU5fTtcclxuXHRsZXQgYmFzZSA9IHtsYXQ6NTcuMDk2MjkzLCBsbmc6NjUuNjcwODAzfTtcclxuICBsZXQgYXZ0b3JlbW9udG5heWEgPSB7bGF0OjU3LjE1Mzc5MiwgbG5nOjY1LjQ2NzkwMn07XHJcbiAgbGV0IHNoZXJiYWtvdmEgPSB7bGF0OjU3LjE5NDkzNywgbG5nOjY1LjU5MDE4OH07XHJcblxyXG4gIC8vINCe0L/RgNC10LTQtdC70Y/QtdC8INC60LvQuNC10L3Rgiwg0YfRgtC+0LHRiyDQv9C+0YHQu9C1INC+0YLQutC70Y7Rh9C40YLRjCDQv9C10YDQtdGC0LDRgdC60LjQstCw0L3QuNC1INC60LDRgNGC0Ysg0L3QsCDRgdC80LDRgNGC0YTQvtC90LDRhS4gINCn0LDRgdGC0YwgMS5cclxuICAvLyBsZXQgaXNEcmFnZ2FibGU7XHJcblx0Ly8gaWYoIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApIHtcclxuXHQvLyBcdGlzRHJhZ2dhYmxlID0gZmFsc2U7XHJcblx0Ly8gfSBlbHNlIHtcclxuXHQvLyBcdGlzRHJhZ2dhYmxlID0gdHJ1ZTtcclxuXHQvLyB9XHJcblxyXG5cdGxldCBteU1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuXHRcdGNlbnRlcjogY2VudGVyTWFwLFxyXG4gICAgem9vbTogMTIsXHJcbiAgICBcdFx0Ly8g0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQvdCw0YHRgtGA0L7QudC60LhcclxuXHJcblx0XHQvLyDQo9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgtGLINGD0L/RgNCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7QuVxyXG4gICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgIC8vIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuXHJcblx0XHQvLyDQl9Cw0L/RgNC10YLQuNGC0Ywg0YPQstC10LvQuNGH0LXQvdC40LUg0LrQsNGA0YLRiyDQv9C+INGB0LrRgNC+0LvQu9GDXHJcblx0XHRzY3JvbGx3aGVlbDogZmFsc2UsXHJcblxyXG5cdFx0Ly8g0J7RgtC60LvRjtGH0LjRgtGMINC/0LXRgNC10YLQsNGB0LrQuNCy0LDQvdC40LUg0LTQu9GPINGB0LzQsNGA0YLRhNC+0L3QvtCyLiDQp9Cw0YHRgtGMIDIuXHJcbiAgICAvLyBkcmFnZ2FibGU6IGlzRHJhZ2dhYmxlLFxyXG5cclxuICAgIHN0eWxlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiMlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiLTI4XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiLTEwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjJmMmYyXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInNhdHVyYXRpb25cIjogXCItMVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIi0xMlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5uYXR1cmFsXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMzFcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubmF0dXJhbFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItNzRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubmF0dXJhbFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIjY1XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWwubGFuZGNvdmVyXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMTVcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubmF0dXJhbC5sYW5kY292ZXJcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiMFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IFwiMFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIi05XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiBcIi0xNFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMzVcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJnYW1tYVwiOiBcIjFcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCIxLjM5XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCItMTlcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiNDZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IFwiLTEzXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiMS4yM1wiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImludmVydF9saWdodG5lc3NcIjogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImh1ZVwiOiBcIiNmZjAwMDBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2FkYWRhZFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSk7XHJcblxyXG4gIGxldCBtYXJrZXJPZmZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdHBvc2l0aW9uOiBvZmZpY2UsXHJcblx0XHRtYXA6IG15TWFwLFxyXG5cdFx0dGl0bGU6IFwi0L7RhNC40YE6INCzLtCi0Y7QvNC10L3RjCwg0YPQuy7QoNC10LLQvtC70Y7RhtC40LgsINC0Ljg5XCIsXHJcblx0XHRpY29uOiBcImFzc2V0cy9pbWcvbWFwL21hcmstcmVkLnBuZ1wiXHJcbiAgfSk7XHJcblxyXG4gIGxldCBjb250ZW50U3RyaW5nT2ZmaWNlID1cclxuICAgICc8ZGl2IGlkPVwiY29udGVudFwiPicrXHJcbiAgICAgICc8ZGl2IGlkPVwic2l0ZU5vdGljZVwiPicrJzwvZGl2PicrXHJcbiAgICAgICc8aDEgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZyBtYXAtaW5mby13aW5kb3ctdGl0bGVcIj7QntGE0LjRgTwvaDE+JytcclxuICAgICAgJzxkaXYgaWQ9XCJib2R5Q29udGVudFwiPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj7Qsy4g0KLRjtC80LXQvdGMLCDRg9C7LiDQoNC10LLQvtC70Y7RhtC40LgsINC0Ljg5PC9wPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9wPicgK1xyXG4gICAgICAnPC9kaXY+JytcclxuICAgICc8L2Rpdj4nO1xyXG5cclxuXHRsZXQgaW5mb1dpbmRvd09mZmljZSA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6IGNvbnRlbnRTdHJpbmdPZmZpY2UsXHJcbiAgICBtYXhXaWR0aDogNDAwLFxyXG4gIH0pO1xyXG5cclxuICBtYXJrZXJPZmZpY2UuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpbmZvV2luZG93T2ZmaWNlLm9wZW4obXlNYXAsIG1hcmtlck9mZmljZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINC80LDRgNC60LXRgCDRgtC40LzQuNGA0Y/Qt9C10LLQsFxyXG5cdGxldCBtYXJrZXJTdG9ja1RtID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRwb3NpdGlvbjogc3RvY2tUbSxcclxuXHRcdG1hcDogbXlNYXAsXHJcblx0XHR0aXRsZTogXCLQn9GD0L3QutGCINC/0YDQuNC10LzQsDog0LMu0KLRjtC80LXQvdGMLCDRg9C7LtCi0LjQvNC40YDRj9C30LXQstCwLCDQtC45LCDRgdGC0YAuMTBcIixcclxuXHRcdGljb246IFwiYXNzZXRzL2ltZy9tYXAvbWFyay1ncmVlbi5wbmdcIlxyXG5cdH0pO1xyXG5cclxuXHRsZXQgY29udGVudFN0cmluZ1N0b2NrVG0gPVxyXG4gICAgJzxkaXYgaWQ9XCJjb250ZW50XCI+JytcclxuICAgICAgJzxkaXYgaWQ9XCJzaXRlTm90aWNlXCI+JysnPC9kaXY+JytcclxuICAgICAgJzxoMSBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nIG1hcC1pbmZvLXdpbmRvdy10aXRsZVwiPtCf0YPQvdC60YIg0L/RgNC40LXQvNCwPC9oMT4nK1xyXG4gICAgICAnPGRpdiBpZD1cImJvZHlDb250ZW50XCI+JytcclxuICAgICAgICAnPHAgY2xhc3M9XCJtYXAtaW5mby13aW5kb3ctdGV4dFwiPtCzLtCi0Y7QvNC10L3RjCwg0YPQuy7QotC40LzQuNGA0Y/Qt9C10LLQsCwg0LQuOSwg0YHRgtGALjEwPC9wPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9wPicgK1xyXG4gICAgICAnPC9kaXY+JytcclxuICAgICc8L2Rpdj4nO1xyXG5cclxuXHRsZXQgaW5mb1dpbmRvd1N0b2NrVG0gPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcblx0XHRjb250ZW50OiBjb250ZW50U3RyaW5nU3RvY2tUbSxcclxuXHRcdG1heFdpZHRoOiA0MDBcclxuXHR9KTtcclxuXHJcblx0bWFya2VyU3RvY2tUbS5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGluZm9XaW5kb3dTdG9ja1RtLm9wZW4obXlNYXAsIG1hcmtlclN0b2NrVG0pO1xyXG5cdH0pO1xyXG5cclxuXHQvLyDQvNCw0YDQutC10YAg0Y/Qu9GD0YLQvtGA0L7QstGB0LrQuNC5INGC0YDQsNC60YJcclxuXHRsZXQgbWFya2VyQmFzZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0cG9zaXRpb246IGJhc2UsXHJcblx0XHRtYXA6IG15TWFwLFxyXG5cdFx0dGl0bGU6IFwi0J/Rg9C90LrRgiDQv9GA0LjQtdC80LA6INCzLtCi0Y7QvNC10L3RjCwg0YPQuy4xMS3QutC8INCv0LvRg9GC0L7RgNC+0LLRgdC60L7Qs9C+INGC0YDQsNC60YLQsCwg0YHRgtGALjdcIixcclxuXHRcdGljb246IFwiYXNzZXRzL2ltZy9tYXAvbWFyay1ncmVlbi5wbmdcIlxyXG5cdH0pO1xyXG5cclxuXHRsZXQgY29udGVudFN0cmluZ0Jhc2UgPVxyXG4gICAgJzxkaXYgaWQ9XCJjb250ZW50XCI+JytcclxuICAgICAgJzxkaXYgaWQ9XCJzaXRlTm90aWNlXCI+JysnPC9kaXY+JytcclxuICAgICAgJzxoMSBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nIG1hcC1pbmZvLXdpbmRvdy10aXRsZVwiPtCf0YPQvdC60YIg0L/RgNC40LXQvNCwPC9oMT4nK1xyXG4gICAgICAnPGRpdiBpZD1cImJvZHlDb250ZW50XCI+JytcclxuICAgICAgICAnPHAgY2xhc3M9XCJtYXAtaW5mby13aW5kb3ctdGV4dFwiPtCzLtCi0Y7QvNC10L3RjCwg0YPQuy4xMS3QutC8INCv0LvRg9GC0L7RgNC+0LLRgdC60L7Qs9C+INGC0YDQsNC60YLQsCwg0YHRgtGALjc8L3A+JytcclxuICAgICAgICAnPHAgY2xhc3M9XCJtYXAtaW5mby13aW5kb3ctdGV4dFwiPis3ICgzNDUyKSA1MzEtNjAxLCA4LTgwMC02MDAtNzEtMzE8L3A+JyArXHJcbiAgICAgICc8L2Rpdj4nK1xyXG4gICAgJzwvZGl2Pic7XHJcblxyXG5cdGxldCBpbmZvV2luZG93QmFzZSA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6IGNvbnRlbnRTdHJpbmdCYXNlLFxyXG5cdFx0bWF4V2lkdGg6IDQwMFxyXG5cdH0pO1xyXG5cclxuXHRtYXJrZXJCYXNlLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aW5mb1dpbmRvd0Jhc2Uub3BlbihteU1hcCwgbWFya2VyQmFzZSk7XHJcblx0fSk7XHJcblxyXG5cdC8vINC80LDRgNC60LXRgCDQsNCy0YLQvtGA0LXQvNC+0L3RgtC90LDRj1xyXG5cdGxldCBtYXJrZXJBdnRvcmVtb250bmF5YSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0cG9zaXRpb246IGF2dG9yZW1vbnRuYXlhLFxyXG5cdFx0bWFwOiBteU1hcCxcclxuXHRcdHRpdGxlOiBcItCf0YPQvdC60YIg0L/RgNC40LXQvNCwOiDQsy7QotGO0LzQtdC90YwsINGD0Lsu0JDQstGC0L7RgNC10LzQvtC90YLQvdCw0Y8g0LQuOSwg0YHQutC70LDQtCDihJYxMVwiLFxyXG5cdFx0aWNvbjogXCJhc3NldHMvaW1nL21hcC9tYXJrLWdyZWVuLnBuZ1wiXHJcblx0fSk7XHJcblxyXG5cdGxldCBjb250ZW50U3RyaW5nQXZ0b3JlbW9udG5heWEgPVxyXG4gICAgJzxkaXYgaWQ9XCJjb250ZW50XCI+JytcclxuICAgICAgJzxkaXYgaWQ9XCJzaXRlTm90aWNlXCI+JysnPC9kaXY+JytcclxuICAgICAgJzxoMSBpZD1cImZpcnN0SGVhZGluZ1wiIGNsYXNzPVwiZmlyc3RIZWFkaW5nIG1hcC1pbmZvLXdpbmRvdy10aXRsZVwiPtCf0YPQvdC60YIg0L/RgNC40LXQvNCwPC9oMT4nK1xyXG4gICAgICAnPGRpdiBpZD1cImJvZHlDb250ZW50XCI+JytcclxuICAgICAgICAnPHAgY2xhc3M9XCJtYXAtaW5mby13aW5kb3ctdGV4dFwiPtCzLtCi0Y7QvNC10L3RjCwg0YPQuy7QkNCy0YLQvtGA0LXQvNC+0L3RgtC90LDRjyDQtC45LCDRgdC60LvQsNC0IOKEljExPC9wPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9wPicgK1xyXG4gICAgICAnPC9kaXY+JytcclxuICAgICc8L2Rpdj4nO1xyXG5cclxuXHRsZXQgaW5mb1dpbmRvd0F2dG9yZW1vbnRuYXlhID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG5cdFx0Y29udGVudDogY29udGVudFN0cmluZ0F2dG9yZW1vbnRuYXlhLFxyXG5cdFx0bWF4V2lkdGg6IDQwMFxyXG5cdH0pO1xyXG5cclxuXHRtYXJrZXJBdnRvcmVtb250bmF5YS5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGluZm9XaW5kb3dBdnRvcmVtb250bmF5YS5vcGVuKG15TWFwLCBtYXJrZXJBdnRvcmVtb250bmF5YSk7XHJcbiAgfSk7XHJcblxyXG5cdC8vINC80LDRgNC60LXRgCDQsNCy0YLQvtGA0LXQvNC+0L3RgtC90LDRj1xyXG5cdGxldCBtYXJrZXJTaGVyYmFrb3ZhID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcblx0XHRwb3NpdGlvbjogc2hlcmJha292YSxcclxuXHRcdG1hcDogbXlNYXAsXHJcblx0XHR0aXRsZTogXCLQn9GD0L3QutGCINC/0YDQuNC10LzQsDog0LMu0KLRjtC80LXQvdGMLCDRg9C7LtCp0LXRgNCx0LDQutC+0LLQsCDQtC4xNjAsINGB0YLRgCDihJYzXCIsXHJcblx0XHRpY29uOiBcImFzc2V0cy9pbWcvbWFwL21hcmstZ3JlZW4ucG5nXCJcclxuXHR9KTtcclxuXHJcblx0bGV0IGNvbnRlbnRTdHJpbmdTaGVyYmFrb3ZhID1cclxuICAgICc8ZGl2IGlkPVwiY29udGVudFwiPicrXHJcbiAgICAgICc8ZGl2IGlkPVwic2l0ZU5vdGljZVwiPicrJzwvZGl2PicrXHJcbiAgICAgICc8aDEgaWQ9XCJmaXJzdEhlYWRpbmdcIiBjbGFzcz1cImZpcnN0SGVhZGluZyBtYXAtaW5mby13aW5kb3ctdGl0bGVcIj7Qn9GD0L3QutGCINC/0YDQuNC10LzQsDwvaDE+JytcclxuICAgICAgJzxkaXYgaWQ9XCJib2R5Q29udGVudFwiPicrXHJcbiAgICAgICAgJzxwIGNsYXNzPVwibWFwLWluZm8td2luZG93LXRleHRcIj7Qsy7QotGO0LzQtdC90YwsINGD0Lsu0KnQtdGA0LHQsNC60L7QstCwINC0LjE2MCwg0YHRgtGAIOKEljM8L3A+JytcclxuICAgICAgICAnPHAgY2xhc3M9XCJtYXAtaW5mby13aW5kb3ctdGV4dFwiPis3ICgzNDUyKSA1MzEtNjAxLCA4LTgwMC02MDAtNzEtMzE8L3A+JyArXHJcbiAgICAgICc8L2Rpdj4nK1xyXG4gICAgJzwvZGl2Pic7XHJcblxyXG5cdGxldCBpbmZvV2luZG93U2hlcmJha292YSA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdGNvbnRlbnQ6IGNvbnRlbnRTdHJpbmdTaGVyYmFrb3ZhLFxyXG5cdFx0bWF4V2lkdGg6IDQwMFxyXG5cdH0pO1xyXG5cclxuXHRtYXJrZXJTaGVyYmFrb3ZhLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aW5mb1dpbmRvd1NoZXJiYWtvdmEub3BlbihteU1hcCwgbWFya2VyU2hlcmJha292YSk7XHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqINCh0LrRgNC40L/RgiDQtNC70Y8g0Y/QvdC00LXQutGBINC60LDRgNGC0YtcclxuICovXHJcbi8vIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuLy8gICAgIGNlbnRlcjogWzU3LjEyOTYyNiwgNjUuNTM2MzA0XSxcclxuLy8gICAgIHpvb206IDEyXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKFtcclxuLy8gICAgICdzY3JvbGxab29tJ1xyXG4vLyAgIF0pO1xyXG5cclxuLy8gICBteU1hcC5jb250cm9sc1xyXG4vLyAgICAgLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpXHJcbi8vICAgICAucmVtb3ZlKCd0eXBlU2VsZWN0b3InKVxyXG4vLyAgICAgLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XHJcblxyXG4vLyAgIHZhciBvZmZpY2VNYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTcuMTI5NjI2LCA2NS41MzYzMDRdLCB7XHJcbi8vICAgICBiYWxsb29uQ29udGVudEhlYWRlcjogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhlYWRlclwiPtCe0YTQuNGBPC9kaXY+JyxcclxuLy8gICAgIGJhbGxvb25Db250ZW50Qm9keTogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWNvbnRlbnRcIj7Qsy4g0KLRjtC80LXQvdGMLCDRg9C7LiDQoNC10LLQvtC70Y7RhtC40LgsINC0Ljg5PC9kaXY+JyxcclxuLy8gICAgIGJhbGxvb25Db250ZW50Rm9vdGVyOiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24tY29udGVudFwiPis3ICgzNDUyKSA1MzEtNjAxLCA4LTgwMC02MDAtNzEtMzE8L2Rpdj4nLFxyXG4vLyAgICAgaGludENvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oaW50XCI+PGI+0J7RhNC40YE8L2I+PC9kaXY+J1xyXG4vLyAgIH0sIHtcclxuLy8gICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuLy8gICAgIGljb25JbWFnZUhyZWY6ICdhc3NldHMvaW1nL21hcC9tYXJrLXJlZC5wbmcnLFxyXG4vLyAgICAgaWNvbkltYWdlU2l6ZTogWzM0LCA0Ml0sXHJcbi8vICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjUsIC02MF0sXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHZhciBzdG9ja1RpbWlyeWF6ID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTcuMTMxMzkwLCA2NS41MTgzNThdLCB7XHJcbi8vICAgICBiYWxsb29uQ29udGVudEhlYWRlcjogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhlYWRlclwiPtCf0YPQvdC60YIg0L/RgNC40ZHQvNCwPC9kaXY+JyxcclxuLy8gICAgIGJhbGxvb25Db250ZW50Qm9keTogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWNvbnRlbnRcIj7Qsy7QotGO0LzQtdC90YwsINGD0Lsu0KLQuNC80LjRgNGP0LfQtdCy0LAsINC0Ljkg0YHRgtGALjEwPC9kaXY+JyxcclxuLy8gICAgIGJhbGxvb25Db250ZW50Rm9vdGVyOiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24tY29udGVudFwiPis3ICgzNDUyKSA1MzEtNjAxLCA4LTgwMC02MDAtNzEtMzE8L2Rpdj4nLFxyXG4vLyAgICAgaGludENvbnRlbnQ6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oaW50XCI+PGI+0J/Rg9C90LrRgiDQv9GA0LjRkdC80LA8L2I+PC9kaXY+PGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24taGludFwiPtCzLtCi0Y7QvNC10L3RjCwg0YPQuy7QotC40LzQuNGA0Y/Qt9C10LLQsCwg0LQuOSDRgdGC0YAuMTA8L2Rpdj4nXHJcbi8vICAgfSwge1xyXG4vLyAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4vLyAgICAgaWNvbkltYWdlSHJlZjogJ2Fzc2V0cy9pbWcvbWFwL21hcmstZ3JlZW4ucG5nJyxcclxuLy8gICAgIGljb25JbWFnZVNpemU6IFszNCwgNDJdLFxyXG4vLyAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI1LCAtNjBdLFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICB2YXIgc3RvY2tBdnRvcmVtID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTcuMTUzNzQ2LCA2NS40Njg0MDldLCB7XHJcbi8vICAgICBiYWxsb29uQ29udGVudEhlYWRlcjogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhlYWRlclwiPtCf0YPQvdC60YIg0L/RgNC40ZHQvNCwPC9kaXY+JyxcclxuLy8gICAgIGJhbGxvb25Db250ZW50Qm9keTogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWNvbnRlbnRcIj7Qsy7QotGO0LzQtdC90YwsINGD0Lsu0JDQstGC0L7RgNC10LzQvtC90YLQvdCw0Y8sINC0Ljkg0YHQutC70LDQtCDihJYxMTwvZGl2PicsXHJcbi8vICAgICBiYWxsb29uQ29udGVudEZvb3RlcjogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWNvbnRlbnRcIj4rNyAoMzQ1MikgNTMxLTYwMSwgOC04MDAtNjAwLTcxLTMxPC9kaXY+JyxcclxuLy8gICAgIGhpbnRDb250ZW50OiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24taGludFwiPjxiPtCf0YPQvdC60YIg0L/RgNC40ZHQvNCwPC9iPjwvZGl2PjxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhpbnRcIj7Qsy7QotGO0LzQtdC90YwsINGD0Lsu0JDQstGC0L7RgNC10LzQvtC90YLQvdCw0Y8sINC0Ljkg0YHQutC70LDQtCDihJYxMTwvZGl2PidcclxuLy8gICB9LCB7XHJcbi8vICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbi8vICAgICBpY29uSW1hZ2VIcmVmOiAnYXNzZXRzL2ltZy9tYXAvbWFyay1ncmVlbi5wbmcnLFxyXG4vLyAgICAgaWNvbkltYWdlU2l6ZTogWzM0LCA0Ml0sXHJcbi8vICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjUsIC02MF0sXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHZhciBzdG9ja1lhbHV0b3IgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1Ny4wOTYyNzIsIDY1LjY3MDU4Nl0sIHtcclxuLy8gICAgIGJhbGxvb25Db250ZW50SGVhZGVyOiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24taGVhZGVyXCI+0J/Rg9C90LrRgiDQv9GA0LjRkdC80LA8L2Rpdj4nLFxyXG4vLyAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiAnPGRpdiBjbGFzcz1cIm1hcF9fbWFyay1iYWxsb24tY29udGVudFwiPtCzLtCi0Y7QvNC10L3RjCwg0YPQuy4xMS3QutC8INCv0LvRg9GC0L7RgNC+0LLRgdC60L7Qs9C+INGC0YDQsNC60YLQsCwg0YHRgtGALjc8L2Rpdj4nLFxyXG4vLyAgICAgYmFsbG9vbkNvbnRlbnRGb290ZXI6ICc8ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1jb250ZW50XCI+KzcgKDM0NTIpIDUzMS02MDEsIDgtODAwLTYwMC03MS0zMTwvZGl2PicsXHJcbi8vICAgICBoaW50Q29udGVudDogJzxkaXYgY2xhc3M9XCJtYXBfX21hcmstYmFsbG9uLWhpbnRcIj48Yj7Qn9GD0L3QutGCINC/0YDQuNGR0LzQsDwvYj48L2Rpdj48ZGl2IGNsYXNzPVwibWFwX19tYXJrLWJhbGxvbi1oaW50XCI+0LMu0KLRjtC80LXQvdGMLCDRg9C7LjExLdC60Lwg0K/Qu9GD0YLQvtGA0L7QstGB0LrQvtCz0L4g0YLRgNCw0LrRgtCwLCDRgdGC0YAuNzwvZGl2PidcclxuLy8gICB9LCB7XHJcbi8vICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbi8vICAgICBpY29uSW1hZ2VIcmVmOiAnYXNzZXRzL2ltZy9tYXAvbWFyay1ncmVlbi5wbmcnLFxyXG4vLyAgICAgaWNvbkltYWdlU2l6ZTogWzM0LCA0Ml0sXHJcbi8vICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjUsIC02MF0sXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIG15TWFwLmdlb09iamVjdHMuYWRkKG9mZmljZU1hcmspLmFkZChzdG9ja1RpbWlyeWF6KS5hZGQoc3RvY2tBdnRvcmVtKS5hZGQoc3RvY2tZYWx1dG9yKTtcclxuLy8gfSk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgIGxldCBtZW51TW9iaWxlVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdG9nZ2xlJyk7XHJcbiAgIGxldCBkcm9wZG93bk1lbnVNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd25NZW51TW9iaWxlJyk7XHJcbiAgIGxldCBkcm9wZG93bk1lbnVNb2JpbGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW1lbnUtbW9iaWxlX19saW5rJyk7XHJcblxyXG4gICBtZW51TW9iaWxlVG9nZ2xlLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGRyb3Bkb3duTWVudU1vYmlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLW1lbnUtbW9iaWxlLS1zaG93LW1lbnUnKSkge1xyXG4gICAgICBkcm9wZG93bk1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tbWVudS1tb2JpbGUtLXNob3ctbWVudScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcGRvd25NZW51TW9iaWxlLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLW1lbnUtbW9iaWxlLS1zaG93LW1lbnUnKTtcclxuICB9O1xyXG5cclxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgIGRyb3Bkb3duTWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi1tZW51LW1vYmlsZS0tc2hvdy1tZW51Jyk7XHJcbiAgfTtcclxuXHJcbiAgZHJvcGRvd25NZW51TW9iaWxlTGluay5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLW1lbnUtbW9iaWxlX19saW5rLWFycm93JykpIHJldHVybjtcclxuICAgICAgZHJvcGRvd25NZW51TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLW1lbnUtbW9iaWxlLS1zaG93LW1lbnUnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICB2YXIgaW5kZXhIZWFkZXJTbGlkZXIgPSAkKCcjY2Fyb3VzZWxJbmRleFBhZGUnKTtcclxuXHJcbiAgaW5kZXhIZWFkZXJTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzbWFydFNwZWVkOiAxNTAwLFxyXG4gICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDp7XHJcbiAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjp7XHJcbiAgICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuc2xpZGVyLWhlYWRfX2J1dHRvbS0tbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgaW5kZXhIZWFkZXJTbGlkZXIudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLnNsaWRlci1oZWFkX19idXR0b20tLXByZXYnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGluZGV4SGVhZGVyU2xpZGVyLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIC8qKkBwYXJhbSB7RE9NW119IHRhYnMg0LrQvtC70LvQtdC60YbQuNGPINCy0YHQtdGFINGC0LDQsdC+0LIg0L3QsCDRgdCw0LnRgtC1Ki9cclxuICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzJyk7XHJcblxyXG4gIC8qKlxyXG4gICog0L3QsCDQstGB0LUg0YLQsNCx0Ysg0LLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60LhcclxuICAqXHJcbiAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudEluZGV4QWN0aXZlSXRlbSDQuNC90LTQtdC60YEg0YLQsNCx0LAg0Lgg0LjQvdC00LXQutGBINGB0YLRgNCw0L3QuNGG0YsgdGFiX19jb250ZW50ICjQvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAwLCDRh9GC0L4g0YHQvtC+0YLQstC10YLRgdCy0YPQtdGCINC/0LXRgNC10LLQvtC80YMsINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCw0LrRgtC40LLQvdC+0LzRgyDRgtCw0LHRgylcclxuICAqIEBwYXJhbSB7RE9NW119IHRhYnNIZWFkZXJJdGVtcyDQutC+0LvQu9C10LrRhtC40Y8g0YLQsNCx0L7QsiDRgtC10LrRg9GJ0LXQs9C+IHRhYnNbaXRlbV1cclxuICAqIEBwYXJhbSB7RE9NW119IHRhYnNDb250ZW50SXRlbXMg0LrQvtC70LvQtdC60YbQuNGPINGB0YLRgNCw0L3QuNGGINGC0LXQutGD0YnQtdCz0L4gdGFic1tpdGVtXVxyXG4gICog0J/QviDQutC70LjQutGDINC+0L/RgNC10LTQtdC70Y/QtdC8INC40L3QtNC10LrRgSDRjdC70LXQvNC10L3RgtCwLCDQvdCwINC60L7RgtC+0YDQvtC8INC/0YDQvtC40LfQvtGI0LvQviDRgdC+0LHRi9GC0LjQtVxyXG4gICog0JfQsNC/0LjRgdGL0LLQsNC10Lwg0LXQs9C+INC40L3QtNC10LrRgSDQsiDQv9C10YDQtdC80LXQvdC90YPRjiBjdXJyZW50SW5kZXhBY3RpdmVJdGVtXHJcbiAgKiDQlNC10LvQsNC10Lwg0LDQutGC0LjQstC90YvQvCDRjdC70LXQvNC10L3RgiDQvdCwINC60L7RgtC+0YDQvtC8INC/0YDQvtC40LfQvtGI0LXQuyDQutC70LjQuiAoaXRlbVtjdXJyZW50SW5kZXhBY3RpdmVJdGVtXSlcclxuICAqKi9cclxuICB0YWJzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBsZXQgY3VycmVudEluZGV4QWN0aXZlSXRlbSA9IDA7XHJcbiAgICBsZXQgdGFic0hlYWRlckl0ZW1zID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19faGVhZGVyLWl0ZW0nKTtcclxuICAgIGxldCB0YWJzQ29udGVudEl0ZW1zID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcudGFic19fY29udGVudCcpO1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IHRhYnNIZWFkZXJJdGVtc1tjdXJyZW50SW5kZXhBY3RpdmVJdGVtXSAmJiBldmVudC50YXJnZXQubWF0Y2hlcygnLnRhYnNfX2hlYWRlci1pdGVtJykpIHtcclxuICAgICAgICB0YWJzSGVhZGVySXRlbXNbY3VycmVudEluZGV4QWN0aXZlSXRlbV0uY2xhc3NMaXN0LnJlbW92ZSgndGFic19faGVhZGVyLWl0ZW0tLWFjdGl2ZScpO1xyXG4gICAgICAgIHRhYnNDb250ZW50SXRlbXNbY3VycmVudEluZGV4QWN0aXZlSXRlbV0uY2xhc3NMaXN0LnJlbW92ZSgndGFic19fY29udGVudC0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRhYnNIZWFkZXJJdGVtcy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsZW0gPT0gZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleEFjdGl2ZUl0ZW0gPSBpbmRleDtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCd0YWJzX19oZWFkZXItaXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRhYnNDb250ZW50SXRlbXNbY3VycmVudEluZGV4QWN0aXZlSXRlbV0uY2xhc3NMaXN0LmFkZCgndGFic19fY29udGVudC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KCkpO1xyXG4iXX0=
