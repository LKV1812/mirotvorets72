/**
 * callsModalWindow() - выводит модальное окно по клику
 *
 * @param {DOM-element} buttonOpenModalWindow - кнопка вызывающая модальное окно
 * @param {DOM-element} modalWindow - модальное окно
 * @param {string} targetSelector - селектор по клику на который показываем окно
 * @param {Number} minWidthScreen - минимальная ширина окна браузера, при которой модальное окно должно вызываться
 * @param {Number} MaxWidthScreen - максимальная ширина окна браузера, при которой модальное окно должно вызываться
 */

export let callsModalWindow = function(buttonOpenModalWindow, modalWindow, targetSelector,  minWidthScreen, MaxWidthScreen) {
  minWidthScreen = minWidthScreen || 0;
  MaxWidthScreen = MaxWidthScreen || Infinity;

  let body = modalWindow.closest('body');
  let buttonCloseModalWindow = modalWindow.querySelector('.modal-close');
  let bodyCurrentScroll;

  buttonOpenModalWindow.addEventListener('click', function(e) {
    if (targetSelector && e.target.matches(targetSelector)) {
      e.preventDefault();
      if (window.innerWidth >= minWidthScreen && window.innerWidth < MaxWidthScreen) {
        bodyCurrentScroll = showModalWindow(modalWindow, body);
      }
    } else if(!targetSelector) {
      e.preventDefault();
      if (window.innerWidth >= minWidthScreen && window.innerWidth < MaxWidthScreen) {
        bodyCurrentScroll = showModalWindow(modalWindow, body);
      }
    } else {
      return;
    }
  });

  buttonCloseModalWindow.addEventListener('click', function(e) {
    e.preventDefault();
    if (window.innerWidth >= minWidthScreen && window.innerWidth < MaxWidthScreen) {
      hideModalWindow(modalWindow, body, bodyCurrentScroll);
    }
  });
};

/**
 * Показывает модальное окно, возвращает родительский тег body
 * @param {DOM} modalWindow - модальное окно
 * @param {DOM} body - тег body
 */
export function showModalWindow(modalWindow, body) {
  modalWindow.style.zIndex = '199';
  modalWindow.style.opacity = '1';
  return hideScroll(body);
}

/**
 * hideScroll() скрываем скролл у body и запрещаем странице скроллица, возвращает позицию до куда была проскролена страница, на момента скрытия скролла
 * @param {DOM} body
 */
function hideScroll(body) {
  body.classList.add('no-scroll');

  let _scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
  body.style.position = 'fixed';

  // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
  body.style.width = `calc(100% - ${_getScrollbarSize()}px)`;

  body.style.top = -_scrollTop + 'px';

  return _scrollTop;
}

/**
 * _getScrollbarSize() получение ширины скролла
 */
function _getScrollbarSize() {
  let outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer);

  let widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  let inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  let widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}

/**
 * Скрывает модальное окно
 * @param {DOM} modalWindow - модальное окно
 * @param {DOM} body - тег body
 * @param {DOM} scrollTop - до куда была проскроллена страница на момент открытия модального окна
 */
export function hideModalWindow(modalWindow, body, scrollTop) {
  modalWindow.style.opacity = '0';

  setTimeout(() => {
    modalWindow.style.zIndex = '-199';
    body.classList.remove('no-scroll');
    body.style.position = '';
    body.style.width = '';
    body.style.top = '';
    window.scroll(0, scrollTop);
  }, 300);
}
