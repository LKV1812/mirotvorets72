import '../modules/ranges';

/**
 * Переменные для калькулятора уничтожения архива
 *
 * @param {DOM} storageKg вес архива для хранения в кг
 * @param {DOM} outputCountingResultCurrencyDestruction здесь выводим ссумму в рублях для хранения
 */
  let storageKg = document.getElementById('storageRange');
  let storageInput = document.getElementById('storageInput');
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
storageInput.addEventListener('input', function() {
  let resultSumCurrency = makesCalculationCurrency(5, this.value);
  outputCountingResultCurrencyStorage.innerHTML = formatterСurrency.format(resultSumCurrency);
});

/**
* Умножает цену товара на количество
*
* @param {number} priceMaterials цена за единицу товара
* @param {number} numberKilograms количество
**/
 function makesCalculationCurrency(priceMaterials, numberKilograms) {
  return priceMaterials * numberKilograms;
}
