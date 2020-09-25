
export function addProductInBasket() {

}

export function countsTotalNumberProductInBasket() {
  let basketPallets = document.getElementById('basketPallets');
  let basketAmountItems = basketPallets.querySelectorAll('.row-in-basket-calc__amount');
  let basketSumItems = basketPallets.querySelectorAll('.row-in-basket-calc__output-sum [data-sum]');
  let totalSumProduct = 0;
  let totalSumCurrency = 0;
  let outputTotalSumProduct = document.querySelector('[data-basket="product"]');
  let outputTotalSumCurrency = document.querySelector('[data-basket="currency"]');

  if(basketAmountItems) {
    basketAmountItems.forEach(item => {
      let currentAmountValue = Number(item.value);
      totalSumProduct += Number(item.value);

      item.addEventListener('input', () => {
        // считаем разницу введенного значения и предыдущего
        // Если введенное значение будет меньше предыщего, значит получим разницу с отрицательным число
        // Прибавляем полученное значение к общему количеству, если число отрицтельное(т.е. введенное число уменьшилось), то общее количество при сложении уменьшится
        totalSumProduct += Number(item.value) - currentAmountValue;
        currentAmountValue = Number(item.value);
        outputTotalSumProduct.innerText = totalSumProduct;
      });
    });
  }
  outputTotalSumProduct.innerText = totalSumProduct;
}

export function calculatesTotalAmountProductCurrency() {

}

countsTotalNumberProductInBasket();
