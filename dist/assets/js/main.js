!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=26)}([function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));var i={cardboard:{"our-delivery":{0:4.5,200:5,500:5.5,1e3:5.5},"self-delivery":{0:7,200:7,500:7,1e3:7}},paper:{"our-delivery":{0:5.5,200:6,500:7,1e3:7},"self-delivery":{0:8.5,200:8.5,500:8.5,1e3:8.5}},books:{"our-delivery":{0:4,200:4,500:5,1e3:5.5},"self-delivery":{0:5,200:5,500:5,1e3:6}},magazines:{"our-delivery":{0:4,200:4,500:5,1e3:5.5},"self-delivery":{0:5,200:5,500:5,1e3:6}},newspapers:{"our-delivery":{0:4.5,200:4.5,500:5,1e3:5.5},"self-delivery":{0:5,200:5,500:5,1e3:6}},"film-stretch":{"our-delivery":{0:8,200:10,500:12,1e3:12},"self-delivery":{0:13,200:13,500:13,1e3:15}},"film-pvd":{"our-delivery":{0:8,200:10,500:12,1e3:12},"self-delivery":{0:13,200:13,500:13,1e3:15}},"film-color-pvd":{"our-delivery":{0:6,200:6,500:7,1e3:7},"self-delivery":{0:8,200:8,500:8,1e3:8}},kegs:{"our-delivery":{0:2,200:2,500:2.5,1e3:2.5},"self-delivery":{0:3,200:3,500:3,1e3:3}},"plastic-canisters":{"our-delivery":{0:5,200:5,500:6,1e3:7},"self-delivery":{0:10,200:10,500:10,1e3:10}},"aluminum-cans":{"our-delivery":{0:15,200:15,500:15,1e3:15},"self-delivery":{0:20,200:20,500:20,1e3:20}},"plastic-box":{"our-delivery":{0:1,200:1,500:1,1e3:1},"self-delivery":{0:1,200:1,500:1,1e3:1}},"polyethylene-pipe":{"our-delivery":{0:10,200:10,500:11,1e3:12},"self-delivery":{0:12,200:12,500:12,1e3:12}},"chemical-containers":{"our-delivery":{0:5,200:5,500:6,1e3:7},"self-delivery":{0:10,200:10,500:10,1e3:10}},polyethylene:{"our-delivery":{0:5,200:5,500:6,1e3:7},"self-delivery":{0:10,200:10,500:10,1e3:10}},glass:{"our-delivery":{0:1,200:1,500:1.2,1e3:1.4},"self-delivery":{0:2,200:2,500:2,1e3:2}},"glass-white-brown":{"our-delivery":{0:2,200:2,500:2,1e3:2},"self-delivery":{0:3,200:3,500:3,1e3:3}},"glass-green":{"our-delivery":{0:1,200:1,500:1,1e3:1},"self-delivery":{0:1.2,200:1.2,500:1.2,1e3:1.5}},bags:{"our-delivery":{0:8,200:8,500:10,1e3:12},"self-delivery":{0:12,200:12,500:12,1e3:12}},oil:{"our-delivery":{0:10,200:10,500:10,1e3:10},"self-delivery":{0:10,200:10,500:10,1e3:10}},textile:{"our-delivery":{0:0,200:0,500:0,1e3:0},"self-delivery":{0:.7,200:.7,500:.7,1e3:.7}},bushing:{"our-delivery":{0:3,200:3,500:3,1e3:3},"self-delivery":{0:3.5,200:3.5,500:3.5,1e3:3.5}},getPriceSelectedTypeMaterials:function(e,t,r){var n="";return+r<200&&(n="0"),+r>=200&&+r<500&&(n="200"),+r>=500&&+r<1e3&&(n="500"),+r>=1e3&&(n="1000"),this[e][t][n]},getMaxPriceMaterial:function(e){var t=0;for(var r in this[e])i(this[e][r]);function i(e){var r=e;if("object"===n(r))for(var a in r)i(r[a]);else"number"==typeof r&&(t=Math.max(t,r))}return t},getMinPriceMaterial:function(e){var t=null;for(var r in this[e])i(this[e][r]);function i(e){var r=e;if("object"===n(r))for(var a in r)i(r[a]);else"number"==typeof r&&null===t?t=r:"number"==typeof r&&null!==t&&(t=Math.min(t,r))}return t}},a={"first-grade":{"our-delivery":{epal:80,"no-epal":60},"self-delivery":{epal:90,"no-epal":70}},"second-grade":{"our-delivery":{epal:60,"no-epal":40},"self-delivery":{epal:70,"no-epal":50}},"third-grade":{"our-delivery":{epal:20,"no-epal":20},"self-delivery":{epal:30,"no-epal":30}},getPriceSelectedGradePallet:function(e,t,r){return this[e][t][r]},getMaxPricePallet:function(){var e=0;for(var t in this)r(this[t]);function r(t){var i=t;if("object"===n(i))for(var a in i)r(i[a]);else"number"==typeof i&&(e=Math.max(e,i))}return e},getMinPricePallet:function(){var e=null;for(var t in this)r(this[t]);function r(t){var i=t;if("object"===n(i))for(var a in i)r(i[a]);else"number"==typeof i&&null===e?e=i:"number"==typeof i&&null!==e&&(e=Math.min(e,i))}return e}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){document.querySelectorAll(".input");return{showErrorsInput:function(e){if(e.matches(".input")){var t=e.nextElementSibling,r=e.getAttribute("placeholder");t.querySelector(".error-no-selected__message-text").innerText=r,e.onfocus=function(){e.classList.remove("error-no-selected"),t.style.display="none"},e.classList.add("error-no-selected"),t.style.display="flex"}else console.log("Переданный элемент не .input")}}}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){var e=document.querySelectorAll(".select"),t=document.querySelectorAll(".select__header"),r=document.querySelectorAll(".select__option");function n(){this.parentElement.classList.toggle("is-active")}function i(){var e=this.innerText,t=this.getAttribute("name"),r=this.closest(".select"),n=r.querySelector(".select-current");n.setAttribute("name",t),n.innerText=e,r.classList.remove("is-active")}function a(){this.closest(".select").classList.remove("is-active")}t.forEach((function(e){e.addEventListener("click",n)})),e.forEach((function(e){e.addEventListener("blur",a)})),r.forEach((function(e){e.addEventListener("click",i)}));return{showErrorsSelect:function(e){if(e.matches(".select")){var t=e.querySelector(".select__header"),r=e.querySelector(".select-current").innerText;e.querySelector(".error-no-selected__message-text").innerText=r,e.onfocus=function(){t.classList.remove("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="none"},t.classList.add("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="flex"}else console.log("Переданный элемент не .select")},hideErrorsSelect:function(e){if(e.matches(".select")){var t=e.querySelector(".select__header");t.classList.remove("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="none"}else console.log("Переданный элемент не .select")},setSelectedProduct:function(e,t){var r=t.querySelector(".select__option[name=".concat(e,"]")),n=r.innerText,i=r.getAttribute("name"),a=r.closest(".select"),l=a.querySelector(".select-current");l.setAttribute("name",i),l.innerText=n,a.classList.remove("is-active")}}}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){function e(e,t){t?(e.querySelector(".result-query-error").classList.remove("show-result-query"),e.querySelector(".result-query-success").classList.add("show-result-query")):(e.querySelector(".result-query-success").classList.remove("show-result-query"),e.querySelector(".result-query-error").classList.add("show-result-query"))}return{sendRequest:function(t,r){var n=!1,i=new XMLHttpRequest;return i.open("POST","php/form-order.php",!0),i.send(function(e){var t=e.querySelectorAll("input"),r=e.querySelectorAll(".select-current"),n=e.querySelectorAll("textarea"),i=new FormData;return t.forEach((function(e){if(e.matches('[type="hidden"]')){var t=e.getAttribute("name");i.append(t,e.value)}})),r.forEach((function(e){if(e.hasAttribute("name")){var t=e.getAttribute("name");i.append(t,e.innerText)}})),t.forEach((function(e){if(!e.matches('[type="hidden"]')){var t=e.getAttribute("name");e.matches('[type="checkbox"]')&&e.matches('[type="checkbox"]').checked?i.append(t,"С засором"):e.matches('[type="checkbox"]')&&!e.matches('[type="checkbox"]').checked?i.append(t,"Без засора"):"weight"==t?i.append(t,"".concat(e.value," кг/шт")):i.append(t,e.value)}})),n.forEach((function(e){var t=e.getAttribute("name");i.append(t,e.value)})),i}(t.target)),i.onreadystatechange=function(r){if(404==this.status){e(t.target,!1)}if(4==this.readyState&&200==this.status){n=!0;var i=this.responseText;e(t.target,i)}},i.onerror=function(r){e(t.target,!1)},n}}}()},function(e,t,r){"use strict";r(5),r(6)},function(e,t){!function(){"use strict";var e=document.getElementById("menu-toggle"),t=document.getElementById("dropdownMenuMobile"),r=document.querySelectorAll(".dropdown-menu-mobile__link");e.onclick=function(e){e.preventDefault(),t.classList.contains("dropdown-menu-mobile--show-menu")?t.classList.remove("dropdown-menu-mobile--show-menu"):t.classList.add("dropdown-menu-mobile--show-menu")},window.onscroll=function(){t.classList.remove("dropdown-menu-mobile--show-menu")},r.forEach((function(e){e.addEventListener("click",(function(e){this.classList.contains("dropdown-menu-mobile__link-arrow")?e.preventDefault():t.classList.remove("dropdown-menu-mobile--show-menu")}))}))}()},function(e,t){!function(){"use strict";document.querySelectorAll(".viber").forEach((function(e){/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)?e.href="viber://add?number=79634521601":e.href="viber://chat?number=+79634521601"}))}()},function(e,t){!function(){"use strict";function e(e){e.keyCode&&e.keyCode,this.selectionStart<3&&e.preventDefault();var t="+7 (___) ___-__-__",r=0,n=t.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=t.replace(/[_\d]/g,(function(e){return r<i.length?i.charAt(r++)||n.charAt(r):e}));-1!=(r=a.indexOf("_"))&&(r<5&&(r=3),a=a.slice(0,r));var l=t.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5?this.value=a:"blur"===e.type&&this.value.length<5&&(this.value="")}document.querySelectorAll(".tel-field").forEach((function(t){t.addEventListener("input",e,!1),t.addEventListener("focus",e,!1),t.addEventListener("blur",e,!1),t.addEventListener("keydown",e,!1)}))}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){document.querySelectorAll(".textarea");return{showErrorsTextarea:function(e){if(e.matches(".textarea")){var t=e.nextElementSibling,r=e.getAttribute("placeholder");t.querySelector(".error-no-selected__message-text").innerText=r,e.onfocus=function(){e.classList.remove("error-no-selected"),t.style.display="none"},e.classList.add("error-no-selected"),t.style.display="flex"}else console.log("Переданный элемент не .Textarea")}}}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){var e=document.querySelectorAll(".tabs"),t=0;return e.forEach((function(e){var r=e.querySelectorAll(".tabs__header-item"),n=e.querySelectorAll(".tabs__content");e.addEventListener("click",(function(e){e.target!=r[t]&&e.target.matches(".tabs__header-item")&&(r[t].classList.remove("tabs__header-item--active"),n[t].classList.remove("tabs__content--active"),r.forEach((function(r,i){r==e.target&&(t=i,r.classList.add("tabs__header-item--active"),n[t].classList.add("tabs__content--active"))})))}))})),{setActiveTab:function(e,r){var n=e.querySelectorAll(".tabs__header-item"),i=e.querySelectorAll(".tabs__content");t!=r&&(n[t].classList.remove("tabs__header-item--active"),i[t].classList.remove("tabs__content--active")),n.forEach((function(e,n){n==r&&(t=r,e.classList.add("tabs__header-item--active"),i[t].classList.add("tabs__content--active"))}))}}}()},function(e,t){!function(){"use strict";document.querySelectorAll(".range").forEach((function(e){var t=e.closest(".range-wrap").querySelector(".range__output-current-value-input");e.addEventListener("input",(function(){t.value=this.value})),t.addEventListener("input",(function(){e.value=this.value})),t.addEventListener("focus",(function(){this.value=""})),t.addEventListener("blur",(function(){this.value=e.value}))}))}()},,function(e,t){!function(){"use strict";document.querySelectorAll(".checkbox-type-b").forEach((function(e){var t=e.parentNode.previousElementSibling,r=e.parentNode.nextElementSibling.querySelector(".checkbox-goup-type-b__text");e.addEventListener("change",(function(){e.checked&&(r.style.color="#67af01",t.style.color="#612228"),e.checked||(r.style.color="#612228",t.style.color="#67af01")}))}))}()},function(e,t,r){"use strict";var n,i,a,l,o=r(2),s=r(1),c=r(8),u=r(3);r(7),n=document.getElementById("indexGeneralOrder"),i=n.querySelector("#selectedService"),a=n.querySelector("#buyingMaterials"),l=n.querySelector("#packed"),i.addEventListener("click",(function(){var e=i.querySelector(".select-current");!e.hasAttribute("name")||e.matches('[name="buying-materials"]')?(a.querySelector(".mask-hide-field").style.display="none",l.querySelector(".mask-hide-field").style.display="none",a.dataset.toggleMask="hide",l.dataset.toggleMask="hide"):(a.querySelector(".mask-hide-field").style.display="block",l.querySelector(".mask-hide-field").style.display="block",o.a.hideErrorsSelect(a),o.a.hideErrorsSelect(l),a.dataset.toggleMask="show",l.dataset.toggleMask="show")})),n.addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=e.querySelectorAll(".select"),r=e.querySelectorAll(".input"),n=e.querySelector(".textarea"),i=!0;return t.forEach((function(e){e.querySelector(".select-current").hasAttribute("name")||"hide"!=e.getAttribute("data-toggle-mask")||(o.a.showErrorsSelect(e),i=!1)})),r.forEach((function(e){(e.matches(".tel-field")&&18!==e.value.length||""==e.value)&&(s.a.showErrorsInput(e),i=!1)})),n&&""==n.value&&(c.a.showErrorsTextarea(n),i=!1),i}(e.target)&&u.a.sendRequest(e,e.target)}))},,,function(e,t){!function(){var e=new google.maps.Map(document.getElementById("map"),{center:{lat:57.150615,lng:65.546028},zoom:10,disableDefaultUI:!0,scrollwheel:!1,styles:[{featureType:"administrative",elementType:"geometry",stylers:[{saturation:"2"},{visibility:"simplified"}]},{featureType:"administrative",elementType:"labels",stylers:[{saturation:"-28"},{lightness:"-10"},{visibility:"on"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{saturation:"-1"},{lightness:"-12"}]},{featureType:"landscape.natural",elementType:"labels.text",stylers:[{lightness:"-31"}]},{featureType:"landscape.natural",elementType:"labels.text.fill",stylers:[{lightness:"-74"}]},{featureType:"landscape.natural",elementType:"labels.text.stroke",stylers:[{lightness:"65"}]},{featureType:"landscape.natural.landcover",elementType:"geometry",stylers:[{lightness:"-15"}]},{featureType:"landscape.natural.landcover",elementType:"geometry.fill",stylers:[{lightness:"0"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{saturation:"0"},{lightness:"-9"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{lightness:"-14"}]},{featureType:"road",elementType:"labels",stylers:[{lightness:"-35"},{gamma:"1"},{weight:"1.39"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{lightness:"-19"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{lightness:"46"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{lightness:"-13"},{weight:"1.23"},{invert_lightness:!0},{visibility:"simplified"},{hue:"#ff0000"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#adadad"},{visibility:"on"}]}]}),t=new google.maps.Marker({position:{lat:57.129602,lng:65.536414},map:e,title:"офис: г.Тюмень, ул.Революции, д.89",icon:"assets/img/map/mark-red.png"}),r=new google.maps.InfoWindow({content:'<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Офис</h1><div id="bodyContent"><p class="map-info-window-text">г. Тюмень, ул. Революции, д.89</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',maxWidth:400});t.addListener("click",(function(){r.open(e,t)}));var n=new google.maps.Marker({position:{lat:57.131456,lng:65.518459},map:e,title:"Пункт приема: г.Тюмень, ул.Тимирязева, д.9, стр.10",icon:"assets/img/map/mark-green.png"}),i=new google.maps.InfoWindow({content:'<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.Тимирязева, д.9, стр.10</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',maxWidth:400});n.addListener("click",(function(){i.open(e,n)}));var a=new google.maps.Marker({position:{lat:57.096293,lng:65.670803},map:e,title:"Пункт приема: г.Тюмень, ул.11-км Ялуторовского тракта, стр.7",icon:"assets/img/map/mark-green.png"}),l=new google.maps.InfoWindow({content:'<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',maxWidth:400});a.addListener("click",(function(){l.open(e,a)}));var o=new google.maps.Marker({position:{lat:57.153792,lng:65.467902},map:e,title:"Пункт приема: г.Тюмень, ул.Авторемонтная д.9, склад №11",icon:"assets/img/map/mark-green.png"}),s=new google.maps.InfoWindow({content:'<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.Авторемонтная д.9, склад №11</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',maxWidth:400});o.addListener("click",(function(){s.open(e,o)}));var c=new google.maps.Marker({position:{lat:57.194937,lng:65.590188},map:e,title:"Пункт приема: г.Тюмень, ул.Щербакова д.160, стр №3",icon:"assets/img/map/mark-green.png"}),u=new google.maps.InfoWindow({content:'<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.Щербакова д.160, стр №3</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',maxWidth:400});c.addListener("click",(function(){u.open(e,c)}))}()},function(e,t,r){"use strict";var n=r(2),i=r(0);r(10),r(12);!function(){var e=document.getElementById("checkboxCalc"),t=document.getElementById("materialsDeliveryType"),r=document.getElementById("materialsKg"),a=document.getElementById("materialsKgInput"),l=document.querySelector("#resultMaterialsCurrency span"),o=document.getElementById("typeMaterials"),s=document.getElementById("currentTypeMaterials"),c=document.getElementById("epal"),u=document.getElementById("palletGrade"),d=document.getElementById("currentPalletGrade"),f=document.getElementById("palletDeliveryType"),y=document.getElementById("palletsRange"),p=document.getElementById("palletsRangeInput"),m=document.getElementById("resultPalletsCurrency"),v=document.getElementById("destructionRange"),g=document.getElementById("destructionInput"),h=document.getElementById("resultDestructionCurrency"),b=document.getElementById("storageRange"),w=document.getElementById("storageInput"),x=document.getElementById("resultStorageCurrency"),E=new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"});function S(){var n=s.getAttribute("name"),a=t.checked?"our-delivery":"self-delivery";if(n){var o=i.a.getPriceSelectedTypeMaterials(n,a,r.value);e.checked&&(o*=.9),l.innerHTML=E.format(T(o,r.value))}}function M(){var e=d.getAttribute("name"),t=f.checked?"our-delivery":"self-delivery",r=c.checked?"epal":"no-epal";if(e){var n=i.b.getPriceSelectedGradePallet(e,t,r);m.innerHTML=E.format(T(n,y.value))}}function T(e,t){return e*t}r.addEventListener("input",(function(){s.getAttribute("name")||n.a.showErrorsSelect(o),S()})),a.addEventListener("input",(function(){s.getAttribute("name")||n.a.showErrorsSelect(o),S()})),t.addEventListener("change",S),e.addEventListener("change",S),o.addEventListener("click",S),c.addEventListener("change",M),u.addEventListener("click",M),f.addEventListener("change",M),y.addEventListener("input",(function(){d.getAttribute("name")||n.a.showErrorsSelect(u),M()})),p.addEventListener("input",(function(){d.getAttribute("name")||n.a.showErrorsSelect(u),M()})),v.addEventListener("input",(function(){var e=T(5,this.value);h.innerHTML=E.format(e)})),g.addEventListener("input",(function(){var e=T(5,this.value);h.innerHTML=E.format(e)})),b.addEventListener("input",(function(){var e=T(5,this.value);x.innerHTML=E.format(e)})),w.addEventListener("input",(function(){var e=T(5,this.value);x.innerHTML=E.format(e)}))}()},,function(e,t){$(document).ready((function(){var e=$("#carouselIndexPade");e.owlCarousel({autoplay:!0,loop:!0,smartSpeed:1500,responsive:{0:{items:1,dots:!0},992:{items:1,dots:!1}}}),$(".slider-head__buttom--next").click((function(){e.trigger("next.owl.carousel")})),$(".slider-head__buttom--prev").click((function(){e.trigger("prev.owl.carousel")}))}))},,,,,,,function(e,t,r){"use strict";r.r(t);r(4),r(19);var n=r(0);document.querySelectorAll(".card-product").forEach((function(e){var t=e.getAttribute("name"),r=e.querySelector("[data-starting-price]"),i=e.querySelector("[data-final-price]");return"pallet"==t?(r.innerText=n.b.getMinPricePallet(),void(i.innerText=n.b.getMaxPricePallet())):"glass"==t?(r.innerText=Math.min(n.a.getMinPriceMaterial("glass"),n.a.getMinPriceMaterial("glass-white-brown"),n.a.getMinPriceMaterial("glass-green")),void(i.innerText=Math.max(n.a.getMaxPriceMaterial("glass"),n.a.getMaxPriceMaterial("glass-white-brown"),n.a.getMaxPriceMaterial("glass-green")))):"paper"==t?(r.innerText=Math.min(n.a.getMinPriceMaterial("paper"),n.a.getMinPriceMaterial("books"),n.a.getMinPriceMaterial("magazines"),n.a.getMinPriceMaterial("newspapers")),void(i.innerText=Math.max(n.a.getMaxPriceMaterial("paper"),n.a.getMaxPriceMaterial("books"),n.a.getMaxPriceMaterial("magazines"),n.a.getMaxPriceMaterial("newspapers")))):"film-pvd"==t?(r.innerText=Math.min(n.a.getMinPriceMaterial("film-pvd"),n.a.getMinPriceMaterial("film-color-pvd")),void(i.innerText=Math.max(n.a.getMaxPriceMaterial("film-pvd"),n.a.getMaxPriceMaterial("film-color-pvd")))):(r.innerText=n.a.getMinPriceMaterial(t),void(i.innerText=n.a.getMaxPriceMaterial(t)))}));r(13);var i=r(1),a=r(8),l=r(3);r(7),formReview.addEventListener("submit",(function(e){e.preventDefault(),function(e){var t=e.querySelectorAll(".input"),r=e.querySelector(".textarea"),n=!0;return t.forEach((function(e){(e.matches(".tel-field")&&18!==e.value.length||""==e.value)&&(i.a.showErrorsInput(e),n=!1)})),r&&""==r.value&&(a.a.showErrorsTextarea(r),n=!1),n}(e.target)&&l.a.sendRequest(e,e.target)})),r(16),r(17),r(10),r(12),r(9)}]);