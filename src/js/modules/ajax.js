export const sendFormOrder = (function(){
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
