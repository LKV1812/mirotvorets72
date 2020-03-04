(function() {
  'use strict';
   let menuMobileToggle = document.getElementById('menu-toggle');
   let dropdownMenuMobile = document.getElementById('dropdownMenuMobile');
   let dropdownMenuMobileLink = document.querySelectorAll('.dropdown-menu-mobile__link');

   menuMobileToggle.onclick = function(e) {
    e.preventDefault();

    if (dropdownMenuMobile.classList.contains('dropdown-menu-mobile--show-menu')) {
      dropdownMenuMobile.classList.remove('dropdown-menu-mobile--show-menu');
      return;
    }

    dropdownMenuMobile.classList.add('dropdown-menu-mobile--show-menu');
  };

  dropdownMenuMobileLink.forEach( item => {
    item.addEventListener('click', function() {
      if (this.classList.contains('dropdown-menu-mobile__link-arrow')) return;
      dropdownMenuMobile.classList.remove('dropdown-menu-mobile--show-menu');
    });
  });



})();
