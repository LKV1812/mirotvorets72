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