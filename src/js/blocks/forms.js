(function() {
  'use strict';

  let select = function() {
    let selectHeader = document.querySelectorAll(".select__header");
    let selectOption = document.querySelectorAll(".select__option");
    let select = document.querySelectorAll(".select");

    selectHeader.forEach(item => {
      item.addEventListener("click", selectToggle);
    });

    select.forEach(item => {
      item.addEventListener("blur", outFocus);
    });

    selectOption.forEach(item => {
      item.addEventListener("click", setSelected);
    });

    function selectToggle() {
      this.parentElement.classList.toggle("is-active");
    }

    function setSelected() {
      let text = this.innerText,
          select = this.closest(".select"),
          currentText = select.querySelector(".select-current");

      currentText.innerText = text;
      select.classList.remove("is-active");
    }

    function outFocus() {
      let thisSelect = this.closest(".select");
      thisSelect.classList.remove("is-active");
    }

  };

  select();
}());
