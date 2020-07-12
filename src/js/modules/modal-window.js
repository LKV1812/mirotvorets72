export let callsModalWindow = function(buttonOpenModalWindow, modalWindow) {
  let buttonCloseModalWindow = modalWindow.querySelector('.modal-close');

  buttonOpenModalWindow.addEventListener('click', function(e) {
    if (window.innerWidth >= 992) {
      e.preventDefault();
      modalWindow.style.zIndex = '199';
      modalWindow.style.opacity = '1';
    }
  });

  buttonCloseModalWindow.addEventListener('click', function(e) {
    if (window.innerWidth >= 992) {
      e.preventDefault();
      modalWindow.style.opacity = '0';
      setTimeout(() => modalWindow.style.zIndex = '-199', 300);
    }
  });
}
