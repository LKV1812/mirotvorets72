/**
 * callsModalWindow() - выводит модальное окно по клику
 *
 * @param {DOM-element} buttonOpenModalWindow - кнопка вызывающая модальное окно
 * @param {DOM-element} modalWindow - модальное окно
 * @param {Number} minWidthScreen - минимальная ширина окна браузера, при которой модальное окно должно вызываться
 * @param {Number} MaxWidthScreen - максимальная ширина окна браузера, при которой модальное окно должно вызываться
 */

export let callsModalWindow = function(buttonOpenModalWindow, modalWindow, minWidthScreen, MaxWidthScreen) {
  minWidthScreen = minWidthScreen || 0;
  MaxWidthScreen = MaxWidthScreen || Infinity;

  let buttonCloseModalWindow = modalWindow.querySelector('.modal-close');

  buttonOpenModalWindow.addEventListener('click', function(e) {
    e.preventDefault();
    if (window.innerWidth >= minWidthScreen && window.innerWidth < MaxWidthScreen) {
      showModalWindow(modalWindow, e);
    }
  });

  buttonCloseModalWindow.addEventListener('click', function(e) {
    e.preventDefault();
    if (window.innerWidth >= minWidthScreen && window.innerWidth < MaxWidthScreen) {
      hideModalWindow(modalWindow, e);
    }
  });
};

/**
 * Показывает модальное окно
 * @param {DOM} modalWindow - модальное окно
 */
export function showModalWindow(modalWindow) {
  modalWindow.style.zIndex = '199';
  modalWindow.style.opacity = '1';
}

/**
 * Скрывает модальное окно
 * @param {DOM} modalWindow - модальное окно
 */
export function hideModalWindow(modalWindow) {
  modalWindow.style.opacity = '0';
  setTimeout(() => modalWindow.style.zIndex = '-199', 300);
}
