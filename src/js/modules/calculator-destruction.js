import '../modules/ranges';

/**
 * Переменные для калькулятора уничтожения архива
 *
 * @param {DOM} destructionKg вес архива для уничтожения в кг
 * @param {DOM} outputCountingResultCurrencyDestruction здесь выводим ссумму в рублях по уничтожению
*/
let destructionKg = document.getElementById('destructionRange');
let destructionInput = document.getElementById('destructionInput');
let outputCountingResultCurrencyDestruction = document.getElementById('resultDestructionCurrency');

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
* Калькулятор уничтожения архива:
* При изменении веса запускаем функцию подсчета.
* Полученное значение форматируем в удобочитаемое число.
*/
destructionKg.addEventListener('input', function() {
  let resultSumCurrency = makesCalculationCurrency(5, this.value);
  outputCountingResultCurrencyDestruction.innerHTML = formatterСurrency.format(resultSumCurrency);
});

destructionInput.addEventListener('input', function() {
  let resultSumCurrency = makesCalculationCurrency(5, this.value);
  outputCountingResultCurrencyDestruction.innerHTML = formatterСurrency.format(resultSumCurrency);
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
