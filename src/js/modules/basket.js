export function addProductInBasket(basket, productData) {
  let newProduct = document.createElement('div');
  newProduct.className = 'row-in-basket';

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
        <input type="hidden" name=${productData.data.inputAttrName} value=${productData.data.inputValue}/>
        <input class="row-in-basket-calc__amount" type="number" name="order-volume" value=${productData.data.amountValue} />
        <div class="row-in-basket-calc__minus">-</div>
      </div>
      <div class="row-in-basket-calc__output-sum"><span class="row-in-basket-calc__output-sum" data-sum>0</span> руб.</div>
    </div>`;
  basket.prepend(newProduct);

  return newProduct;
}

export function calculatesTotalAmountProductCurrency() {
  let basketPallets = document.getElementById('basketPallets');
  let sumCurrencyAllitems = basketPallets.querySelectorAll('.row-in-basket-calc__output-sum [data-sum]');
  let outputTotalSumProduct = document.querySelector('[data-basket="product"]');
  let outputTotalSumCurrency = document.querySelector('[data-basket="currency"]');
  let totalSumProduct = 0;
  let totalSumCurrency = 0;

  console.log(basketPallets)

  if (sumCurrencyAllitems) {
    sumCurrencyAllitems.forEach(sumCurrency => {
      let parent = sumCurrency.closest('.row-in-basket');
      let siblingAmount = parent.querySelector('.row-in-basket-calc__amount');
      let currentAmountValue = Number(siblingAmount.value);
      let currentSumCurrency = Number(sumCurrency.innerText);
      totalSumProduct += Number(siblingAmount.value);
      totalSumCurrency += Number(currentSumCurrency);

      let observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.target.matches('.row-in-basket-calc__output-sum [data-sum]')) {
            totalSumProduct += Number(siblingAmount.value) - currentAmountValue;
            currentAmountValue = Number(siblingAmount.value);
            outputTotalSumProduct.innerText = totalSumProduct;

            totalSumCurrency += Number(sumCurrency.innerText) - currentSumCurrency;
            currentSumCurrency = Number(sumCurrency.innerText);
            outputTotalSumCurrency.innerText = totalSumCurrency;
          }
        });
      });

      observer.observe(sumCurrency, {
        childList: true,
        subtree: true,
      });
    });
  }
}
