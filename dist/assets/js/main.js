"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},priceMaterials={cardboard:{"our-delivery":{0:2,500:2.5,1000:3},"self-delivery":{0:3,500:3,1000:3}},paper:{"our-delivery":{0:5.5,500:6,1000:6.5},"self-delivery":{0:7,500:7,1000:8}},books:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},magazines:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},newspapers:{"our-delivery":{0:4.5,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},"film-stretch":{"our-delivery":{0:10,500:12,1000:14},"self-delivery":{0:13,500:13,1000:15}},"film-pvd":{"our-delivery":{0:10,500:12,1000:14},"self-delivery":{0:13,500:13,1000:15}},"film-color-pvd":{"our-delivery":{0:6,500:7,1000:8},"self-delivery":{0:8,500:8,1000:8}},kegs:{"our-delivery":{0:2.5,500:2.5,1000:4},"self-delivery":{0:4,500:4,1000:4}},"plastic-canisters":{"our-delivery":{0:3,500:6,1000:7},"self-delivery":{0:6,500:6,1000:12}},canisters:{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:10,500:10,1000:10}},"aluminum-cans":{"our-delivery":{0:15,500:15,1000:15},"self-delivery":{0:20,500:20,1000:20}},"plastic-box":{"our-delivery":{0:1,500:1,1000:1},"self-delivery":{0:1,500:1,1000:1}},"polyethylene-pipe":{"our-delivery":{0:10,500:11,1000:12},"self-delivery":{0:12,500:12,1000:12}},"plastic-containers":{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},polyethylene:{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},glass:{"our-delivery":{0:.7,500:.9,1000:1.2},"self-delivery":{0:1.5,500:1.5,1000:1.5}},"glass-white-brown":{"our-delivery":{0:2,500:2,1000:2},"self-delivery":{0:3,500:3,1000:3}},"glass-green":{"our-delivery":{0:1,500:1,1000:1},"self-delivery":{0:1.2,500:1.2,1000:1.5}},bags:{"our-delivery":{0:8,500:10,1000:12},"self-delivery":{0:12,500:12,1000:12}},oil:{"our-delivery":{0:10,500:10,1000:10},"self-delivery":{0:10,500:10,1000:10}},textile:{"our-delivery":{0:0,500:0,1000:0},"self-delivery":{0:1,500:1,1000:1}},getPriceSelectedTypeMaterials:function(e,t,r){var n="";return+r<500&&(n="0"),+r>=500&&+r<1e3&&(n="500"),+r>=1e3&&(n="1000"),this[e][t][n]},getMaxPriceMaterial:function(e){function t(e){var n=e;if("object"===(void 0===n?"undefined":_typeof(n)))for(var a in n)t(n[a]);else"number"==typeof n&&(r=Math.max(r,n))}var r=0;for(var n in this[e])t(this[e][n]);return r},getMinPriceMaterial:function(e){function t(e){var n=e;if("object"===(void 0===n?"undefined":_typeof(n)))for(var a in n)t(n[a]);else"number"==typeof n&&null===r?r=n:"number"==typeof n&&null!==r&&(r=Math.min(r,n))}var r=null;for(var n in this[e])t(this[e][n]);return r}},pricePallets={"first-grade":{"our-delivery":{epal:80,"no-epal":60},"self-delivery":{epal:90,"no-epal":70}},"second-grade":{"our-delivery":{epal:60,"no-epal":40},"self-delivery":{epal:70,"no-epal":50}},"third-grade":{"our-delivery":{epal:20,"no-epal":20},"self-delivery":{epal:30,"no-epal":30}},getPriceSelectedGradePallet:function(e,t,r){return this[e][t][r]},getMaxPricePallet:function(){function e(r){var n=r;if("object"===(void 0===n?"undefined":_typeof(n)))for(var a in n)e(n[a]);else"number"==typeof n&&(t=Math.max(t,n))}var t=0;for(var r in this)e(this[r]);return t},getMinPricePallet:function(){function e(r){var n=r;if("object"===(void 0===n?"undefined":_typeof(n)))for(var a in n)e(n[a]);else"number"==typeof n&&null===t?t=n:"number"==typeof n&&null!==t&&(t=Math.min(t,n))}var t=null;for(var r in this)e(this[r]);return t}},sendFormOrder=function(){function e(e,n){var a=new XMLHttpRequest;a.open("POST","php/form-order.php",!0),a.send(t(e.target)),a.onreadystatechange=function(t){if(404==this.status){r(e.target,!1)}if(4==this.readyState&&200==this.status){var n=this.responseText;r(e.target,n)}},a.onerror=function(t){r(e.target,!1)}}function t(e){var t=e.querySelectorAll("input"),r=e.querySelectorAll(".select-current"),n=e.querySelectorAll("textarea"),a=new FormData;return t.forEach(function(e){if(e.matches('[type="hidden"]')){var t=e.getAttribute("name");a.append(t,e.value)}}),r.forEach(function(e){if(e.hasAttribute("name")){var t=e.getAttribute("name");a.append(t,e.innerText)}}),t.forEach(function(e){if(!e.matches('[type="hidden"]')){var t=e.getAttribute("name");e.matches('[type="checkbox"]')&&e.matches('[type="checkbox"]').checked?a.append(t,"С засором"):e.matches('[type="checkbox"]')&&!e.matches('[type="checkbox"]').checked?a.append(t,"Без засора"):"weight"==t?a.append(t,e.value+" кг/шт"):a.append(t,e.value)}}),n.forEach(function(e){var t=e.getAttribute("name");a.append(t,e.innerText)}),a}function r(e,t){t?(e.querySelector(".result-query-error").classList.remove("show-result-query"),e.querySelector(".result-query-success").classList.add("show-result-query")):(e.querySelector(".result-query-success").classList.remove("show-result-query"),e.querySelector(".result-query-error").classList.add("show-result-query"))}return{sendRequest:e}}(),handlerInputs=function(){function e(e){if(e.matches(".input")){var t=e.nextElementSibling,r=e.getAttribute("placeholder");t.querySelector(".error-no-selected__message-text").innerText=r,e.onfocus=function(){e.classList.remove("error-no-selected"),t.style.display="none"},e.classList.add("error-no-selected"),t.style.display="flex"}else console.log("Переданный элемент не .input")}document.querySelectorAll(".input");return{showErrorsInput:e}}();!function(){function e(e){var r=void 0;e.keyCode&&e.keyCode,this.selectionStart<3&&e.preventDefault();var n="+7 (___) ___-__-__",a=0,l=n.replace(/\D/g,""),i=this.value.replace(/\D/g,""),o=n.replace(/[_\d]/g,function(e){return a<i.length?i.charAt(a++)||l.charAt(a):e});-1!=(a=o.indexOf("_"))&&(a<5&&(a=3),o=o.slice(0,a));var s=n.substr(0,this.value.length).replace(/_+/g,function(e){return"\\d{1,"+e.length+"}"}).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),!s.test(this.value)||this.value.length<5||r>47&&r<58?this.value=o:"blur"===e.type&&this.value.length<5&&(this.value=""),t.forEach(function(e){e.setSelectionRange(e.value.length,e.value.length)})}var t=document.querySelectorAll(".tel-field");t.forEach(function(t){t.addEventListener("input",e,!1),t.addEventListener("focus",e,!1),t.addEventListener("blur",e,!1),t.addEventListener("keydown",e,!1)})}();var ranges=function(){document.querySelectorAll(".range").forEach(function(e){var t=e.closest(".range-wrap"),r=t.querySelector(".range__output-current-value-input");e.addEventListener("input",function(){r.value=this.value}),r.addEventListener("input",function(){e.value=this.value}),r.addEventListener("focus",function(){this.value=""}),r.addEventListener("blur",function(){this.value=e.value})})}(),customSelects=function(){function e(){this.parentElement.classList.toggle("is-active")}function t(){var e=this.innerText,t=this.getAttribute("name"),r=this.closest(".select"),n=r.querySelector(".select-current");n.setAttribute("name",t),n.innerText=e,r.classList.remove("is-active")}function r(){this.closest(".select").classList.remove("is-active")}function n(e){if(e.matches(".select")){var t=e.querySelector(".select__header"),r=e.querySelector(".select-current").innerText;e.querySelector(".error-no-selected__message-text").innerText=r,e.onfocus=function(){t.classList.remove("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="none"},t.classList.add("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="flex"}else console.log("Переданный элемент не .select")}function a(e){if(e.matches(".select")){var t=e.querySelector(".select__header");t.classList.remove("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="none"}else console.log("Переданный элемент не .select")}var l=document.querySelectorAll(".select"),i=document.querySelectorAll(".select__header"),o=document.querySelectorAll(".select__option");return i.forEach(function(t){t.addEventListener("click",e)}),l.forEach(function(e){e.addEventListener("blur",r)}),o.forEach(function(e){e.addEventListener("click",t)}),{showErrorsSelect:n,hideErrorsSelect:a}}(),сheckbox=function(){document.querySelectorAll(".checkbox-type-b").forEach(function(e){var t=e.parentNode.previousElementSibling,r=e.parentNode.nextElementSibling.querySelector(".checkbox-goup-type-b__text");e.addEventListener("change",function(){e.checked&&(r.style.color="#67af01",t.style.color="#612228"),e.checked||(r.style.color="#612228",t.style.color="#67af01")})})}();!function(){function e(){var e=c.getAttribute("name"),t=a.checked?"our-delivery":"self-delivery";if(e){var i=priceMaterials.getPriceSelectedTypeMaterials(e,t,l.value);n.checked&&(i*=.9),o.innerHTML=_.format(r(i,l.value))}}function t(){var e=m.getAttribute("name"),t=v.checked?"our-delivery":"self-delivery",n=d.checked?"epal":"no-epal";if(e){var a=pricePallets.getPriceSelectedGradePallet(e,t,n);f.innerHTML=_.format(r(a,p.value))}}function r(e,t){return e*t}var n=document.getElementById("checkboxCalc"),a=document.getElementById("materialsDeliveryType"),l=document.getElementById("materialsKg"),i=document.getElementById("materialsKgInput"),o=document.querySelector("#resultMaterialsCurrency span"),s=document.getElementById("typeMaterials"),c=document.getElementById("currentTypeMaterials"),d=document.getElementById("epal"),u=document.getElementById("palletGrade"),m=document.getElementById("currentPalletGrade"),v=document.getElementById("palletDeliveryType"),p=document.getElementById("palletsRange"),y=document.getElementById("palletsRangeInput"),f=document.getElementById("resultPalletsCurrency"),g=document.getElementById("destructionRange"),h=document.getElementById("resultDestructionCurrency"),b=document.getElementById("storageRange"),M=document.getElementById("resultStorageCurrency"),_=new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"});l.addEventListener("input",function(){c.getAttribute("name")||customSelects.showErrorsSelect(s),e()}),i.addEventListener("input",function(){c.getAttribute("name")||customSelects.showErrorsSelect(s),e()}),a.addEventListener("change",e),n.addEventListener("change",e),s.addEventListener("click",e),d.addEventListener("change",t),u.addEventListener("click",t),v.addEventListener("change",t),p.addEventListener("input",function(){m.getAttribute("name")||customSelects.showErrorsSelect(u),t()}),y.addEventListener("input",function(){m.getAttribute("name")||customSelects.showErrorsSelect(u),t()}),g.addEventListener("input",function(){var e=r(5,this.value);h.innerHTML=_.format(e)}),b.addEventListener("input",function(){var e=r(5,this.value);M.innerHTML=_.format(e)})}(),function(){document.querySelectorAll(".card-product").forEach(function(e){var t=e.getAttribute("name"),r=e.querySelector("[data-starting-price]"),n=e.querySelector("[data-final-price]");return"pallet"==t?(r.innerText=pricePallets.getMinPricePallet(),void(n.innerText=pricePallets.getMaxPricePallet())):"glass"==t?(r.innerText=Math.min(priceMaterials.getMinPriceMaterial("glass"),priceMaterials.getMinPriceMaterial("glass-white-brown"),priceMaterials.getMinPriceMaterial("glass-green")),void(n.innerText=Math.max(priceMaterials.getMaxPriceMaterial("glass"),priceMaterials.getMaxPriceMaterial("glass-white-brown"),priceMaterials.getMaxPriceMaterial("glass-green")))):"paper"==t?(r.innerText=Math.min(priceMaterials.getMinPriceMaterial("paper"),priceMaterials.getMinPriceMaterial("books"),priceMaterials.getMinPriceMaterial("magazines"),priceMaterials.getMinPriceMaterial("newspapers")),void(n.innerText=Math.max(priceMaterials.getMaxPriceMaterial("paper"),priceMaterials.getMaxPriceMaterial("books"),priceMaterials.getMaxPriceMaterial("magazines"),priceMaterials.getMaxPriceMaterial("newspapers")))):"film-pvd"==t?(r.innerText=Math.min(priceMaterials.getMinPriceMaterial("film-pvd"),priceMaterials.getMinPriceMaterial("film-color-pvd")),void(n.innerText=Math.max(priceMaterials.getMaxPriceMaterial("film-pvd"),priceMaterials.getMaxPriceMaterial("film-color-pvd")))):(r.innerText=priceMaterials.getMinPriceMaterial(t),void(n.innerText=priceMaterials.getMaxPriceMaterial(t)))})}();var formOrder=function(){function e(e){e.preventDefault(),t(e.target)&&sendFormOrder.sendRequest(e,e.target)}function t(e){var t=e.querySelectorAll(".select"),r=e.querySelectorAll(".input"),n=!0;return t.forEach(function(e){e.querySelector(".select-current").hasAttribute("name")||"hide"!=e.getAttribute("data-toggle-mask")||(customSelects.showErrorsSelect(e),n=!1)}),r.forEach(function(e){e.matches(".tel-field")&&18!==e.value.length?(handlerInputs.showErrorsInput(e),n=!1):""==e.value&&(handlerInputs.showErrorsInput(e),n=!1)}),n}function r(){var e=a.querySelector(".select-current");!e.hasAttribute("name")||e.matches('[name="buying-materials"]')?(l.querySelector(".mask-hide-field").style.display="none",i.querySelector(".mask-hide-field").style.display="none",l.dataset.toggleMask="hide",i.dataset.toggleMask="hide"):(l.querySelector(".mask-hide-field").style.display="block",i.querySelector(".mask-hide-field").style.display="block",customSelects.hideErrorsSelect(l),customSelects.hideErrorsSelect(i),l.dataset.toggleMask="show",i.dataset.toggleMask="show")}var n=document.getElementById("indexGeneralOrder"),a=n.querySelector("#selectedService"),l=n.querySelector("#buyingMaterials"),i=n.querySelector("#packed");a.addEventListener("click",r),n.addEventListener("submit",e)}();ymaps.ready(function(){var e=new ymaps.Map("map",{center:[57.129626,65.536304],zoom:12});e.behaviors.disable(["scrollZoom"]),e.controls.remove("searchControl").remove("typeSelector").remove("rulerControl");var t=new ymaps.Placemark([57.129626,65.536304],{balloonContentHeader:'<div class="map__mark-ballon-header">Офис</div>',balloonContentBody:'<div class="map__mark-ballon-content">г. Тюмень, ул. Революции, д.89</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Офис</b></div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-red.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]}),r=new ymaps.Placemark([57.13139,65.518358],{balloonContentHeader:'<div class="map__mark-ballon-header">Пункт приёма</div>',balloonContentBody:'<div class="map__mark-ballon-content">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-green.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]}),n=new ymaps.Placemark([57.153746,65.468409],{balloonContentHeader:'<div class="map__mark-ballon-header">Пункт приёма</div>',balloonContentBody:'<div class="map__mark-ballon-content">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-green.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]}),a=new ymaps.Placemark([57.096272,65.670586],{balloonContentHeader:'<div class="map__mark-ballon-header">Пункт приёма</div>',balloonContentBody:'<div class="map__mark-ballon-content">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-green.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]});e.geoObjects.add(t).add(r).add(n).add(a)}),function(){var e=document.getElementById("menu-toggle"),t=document.getElementById("dropdownMenuMobile"),r=document.querySelectorAll(".dropdown-menu-mobile__link");e.onclick=function(e){if(e.preventDefault(),t.classList.contains("dropdown-menu-mobile--show-menu"))return void t.classList.remove("dropdown-menu-mobile--show-menu");t.classList.add("dropdown-menu-mobile--show-menu")},window.onscroll=function(){t.classList.remove("dropdown-menu-mobile--show-menu")},r.forEach(function(e){e.addEventListener("click",function(){this.classList.contains("dropdown-menu-mobile__link-arrow")||t.classList.remove("dropdown-menu-mobile--show-menu")})})}(),$(document).ready(function(){var e=$("#carouselIndexPade");e.owlCarousel({autoplay:!0,loop:!0,smartSpeed:1500,responsive:{0:{items:1,dots:!0},992:{items:1,dots:!1}}}),$(".slider-head__buttom--next").click(function(){e.trigger("next.owl.carousel")}),$(".slider-head__buttom--prev").click(function(){e.trigger("prev.owl.carousel")})}),function(){document.querySelectorAll(".tabs").forEach(function(e){var t=0,r=e.querySelectorAll(".tabs__header-item"),n=e.querySelectorAll(".tabs__content");e.addEventListener("click",function(e){e.target!=r[t]&&e.target.matches(".tabs__header-item")&&(r[t].classList.remove("tabs__header-item--active"),n[t].classList.remove("tabs__content--active"),r.forEach(function(r,a){r==e.target&&(t=a,r.classList.add("tabs__header-item--active"),n[t].classList.add("tabs__content--active"))}))})})}();