/**
 * addProductInBasket() - Принимает два параметра. Добавляет элемент в корзину. Возвращает вставленный элемент
 * @param {DOM} basket - Куда будем втавлять элемент
 * @param {object} productData - Данные для вставляемого элемента
 */

let _position = 0; // переменная наращивается при каждом вызове addProductInBasket() и добавляется к name у инпутов, чтобы при передаче в $_POST не затирались элементы и каждый имел уникальный ключ

export function addProductInBasket(basket, productData) {
  let newProduct = document.createElement('div');
  newProduct.className = 'row-in-basket';
  _position += 1;

  let productTextAllRow = '';
  for (let text of productData.description.text) {
    productTextAllRow += `<div class="text">${text}</div>`;
  }

  newProduct.innerHTML =
    `<div class="row-in-basket__content">
      <div class="row-in-basket__img">
        <img src=${productData.img.src} alt=${productData.img.alt} />
      </div>
      <div class="row-in-basket__body">
        <div class="row-in-basket__order-management-mobile-dots">
          <?xml version="1.0" encoding="iso-8859-1"?>
          <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="408px" height="408px" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve">
            <g>
              <g id="more-vert">
                <path d="M204,102c28.05,0,51-22.95,51-51S232.05,0,204,0s-51,22.95-51,51S175.95,102,204,102z M204,153c-28.05,0-51,22.95-51,51
    s22.95,51,51,51s51-22.95,51-51S232.05,153,204,153z M204,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
    S232.05,306,204,306z" />
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
          </svg>
        </div>
        <div class="row-in-basket__body-order">
          <div class="text-bold">${productData.description.title}</div>
          ${productTextAllRow}
        </div>
        <div class="row-in-basket__order-management"><a class="row-in-basket__delete-order-item" href="#">удалить</a></div>
      </div>
    </div>
    <div class="row-in-basket__interaction" data-grade=${productData.data.type} data-product=${productData.data.name}>
      <div class="row-in-basket-calc">
        <div class="row-in-basket-calc__plus">+</div>
        <input type="hidden" name='${productData.data.type} (pos ${_position})' value='${(productData.data.inputValue)}' />
        <input class="row-in-basket-calc__amount" type="number" name="order-volume (pos ${_position})" value='${productData.data.amountValue}' />
        <div class="row-in-basket-calc__minus">-</div>
      </div>
      <div class="row-in-basket-calc__output-sum"><span class="row-in-basket-calc__output-sum" data-sum>0</span> руб.</div>
    </div>`;
  basket.prepend(newProduct);
  mobileShowDelete(newProduct);

  return newProduct;
}



let _totalSumProduct = 0;
let _totalSumCurrency = 0;

/**
 * calculatesTotalAmountProductCurrency() - Принимает один параметр. Считает общее количество товара и общую стоимость. Выводить подсчеты внизу корзины. Включает наблюдателя за изменениями, при изменениях данных в корзине, запускает повторный подсчет
 * @param {object} productData - Объект с даннми для их подсчета и вывода
 */
export function calculatesTotalAmountProductCurrency(productData) {
  let sumCurrency = productData.sumCurrency;
  let outputTotalSumProduct = productData.outputTotalSumProduct;
  let outputTotalSumCurrency = productData.outputTotalSumCurrency;
  let currentAmountValue = Number(productData.amountSumProduct.value);
  let currentSumCurrency = Number(sumCurrency.innerText);

  _totalSumProduct += currentAmountValue;
  _totalSumCurrency += Number(currentSumCurrency);
  outputTotalSumProduct.innerText = _totalSumProduct;
  outputTotalSumCurrency.innerText = _totalSumCurrency;
  productData.iconBasket.innerText = _totalSumProduct;

  let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.target == productData.observeElement) {
        _totalSumProduct += Number(productData.amountSumProduct.value) - currentAmountValue;
        currentAmountValue = Number(productData.amountSumProduct.value);
        outputTotalSumProduct.innerText = _totalSumProduct;
        productData.iconBasket.innerText = _totalSumProduct;

        _totalSumCurrency += Number(sumCurrency.innerText) - currentSumCurrency;
        currentSumCurrency = Number(sumCurrency.innerText);
        outputTotalSumCurrency.innerText = _totalSumCurrency;
      }
    });
  });

  observer.observe(sumCurrency, {
    childList: true,
    subtree: true,
  });

  productData.deleteButton.addEventListener('click', () => {
    _totalSumProduct -= currentAmountValue;
    outputTotalSumProduct.innerText = _totalSumProduct;
    productData.iconBasket.innerText = _totalSumProduct;

    _totalSumCurrency -= currentSumCurrency;
    outputTotalSumCurrency.innerText = _totalSumCurrency;
    observer.disconnect();
    deletesProduct(productData.cardProduct);
  });
}

export function deletesProduct(product) {
  product.remove();
}

// показывает на мобильных кнопку "удалить"
function mobileShowDelete(productCard) {
  let managmentDotts = productCard.querySelector('.row-in-basket__order-management-mobile-dots');

  managmentDotts.addEventListener('click', () => {
    productCard.querySelector('.row-in-basket__order-management').classList.toggle('row-in-basket__order-management--is-active');
  });
}
