"use strict";function initMap(){var e={lat:57.150615,lng:65.546028},t={lat:57.129602,lng:65.536414},r={lat:57.131456,lng:65.518459},n={lat:57.096293,lng:65.670803},l={lat:57.153792,lng:65.467902},i={lat:57.194937,lng:65.590188},a=new google.maps.Map(document.getElementById("map"),{center:e,zoom:12,disableDefaultUI:!0,scrollwheel:!1,styles:[{featureType:"administrative",elementType:"geometry",stylers:[{saturation:"2"},{visibility:"simplified"}]},{featureType:"administrative",elementType:"labels",stylers:[{saturation:"-28"},{lightness:"-10"},{visibility:"on"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{saturation:"-1"},{lightness:"-12"}]},{featureType:"landscape.natural",elementType:"labels.text",stylers:[{lightness:"-31"}]},{featureType:"landscape.natural",elementType:"labels.text.fill",stylers:[{lightness:"-74"}]},{featureType:"landscape.natural",elementType:"labels.text.stroke",stylers:[{lightness:"65"}]},{featureType:"landscape.natural.landcover",elementType:"geometry",stylers:[{lightness:"-15"}]},{featureType:"landscape.natural.landcover",elementType:"geometry.fill",stylers:[{lightness:"0"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{saturation:"0"},{lightness:"-9"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{lightness:"-14"}]},{featureType:"road",elementType:"labels",stylers:[{lightness:"-35"},{gamma:"1"},{weight:"1.39"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{lightness:"-19"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{lightness:"46"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{lightness:"-13"},{weight:"1.23"},{invert_lightness:!0},{visibility:"simplified"},{hue:"#ff0000"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#adadad"},{visibility:"on"}]}]}),s=new google.maps.Marker({position:t,map:a,title:"офис: г.Тюмень, ул.Революции, д.89",icon:"assets/img/map/mark-red.png"}),o='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Офис</h1><div id="bodyContent"><p class="map-info-window-text">г. Тюмень, ул. Революции, д.89</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',c=new google.maps.InfoWindow({content:o,maxWidth:400});s.addListener("click",function(){c.open(a,s)});var u=new google.maps.Marker({position:r,map:a,title:"Пункт приема: г.Тюмень, ул.Тимирязева, д.9, стр.10",icon:"assets/img/map/mark-green.png"}),d='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.Тимирязева, д.9, стр.10</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',y=new google.maps.InfoWindow({content:d,maxWidth:400});u.addListener("click",function(){y.open(a,u)});var p=new google.maps.Marker({position:n,map:a,title:"Пункт приема: г.Тюмень, ул.11-км Ялуторовского тракта, стр.7",icon:"assets/img/map/mark-green.png"}),f='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',m=new google.maps.InfoWindow({content:f,maxWidth:400});p.addListener("click",function(){m.open(a,p)});var v=new google.maps.Marker({position:l,map:a,title:"Пункт приема: г.Тюмень, ул.Авторемонтная д.9, склад №11",icon:"assets/img/map/mark-green.png"}),g='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.Авторемонтная д.9, склад №11</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',h=new google.maps.InfoWindow({content:g,maxWidth:400});v.addListener("click",function(){h.open(a,v)});var b=new google.maps.Marker({position:i,map:a,title:"Пункт приема: г.Тюмень, ул.Щербакова д.160, стр №3",icon:"assets/img/map/mark-green.png"}),M='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1><div id="bodyContent"><p class="map-info-window-text">г.Тюмень, ул.Щербакова д.160, стр №3</p><p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p></div></div>',E=new google.maps.InfoWindow({content:M,maxWidth:400});b.addListener("click",function(){E.open(a,b)})}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},priceMaterials={cardboard:{"our-delivery":{0:2,500:2.5,1000:3},"self-delivery":{0:3,500:3,1000:3}},paper:{"our-delivery":{0:5.5,500:6,1000:6.5},"self-delivery":{0:7,500:7,1000:8}},books:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},magazines:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},newspapers:{"our-delivery":{0:4.5,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},"film-stretch":{"our-delivery":{0:10,500:12,1000:14},"self-delivery":{0:13,500:13,1000:15}},"film-pvd":{"our-delivery":{0:10,500:12,1000:14},"self-delivery":{0:13,500:13,1000:15}},"film-color-pvd":{"our-delivery":{0:6,500:7,1000:8},"self-delivery":{0:8,500:8,1000:8}},kegs:{"our-delivery":{0:2.5,500:2.5,1000:4},"self-delivery":{0:4,500:4,1000:4}},"plastic-canisters":{"our-delivery":{0:3,500:6,1000:7},"self-delivery":{0:6,500:6,1000:12}},canisters:{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:10,500:10,1000:10}},"aluminum-cans":{"our-delivery":{0:15,500:15,1000:15},"self-delivery":{0:20,500:20,1000:20}},"plastic-box":{"our-delivery":{0:1,500:1,1000:1},"self-delivery":{0:1,500:1,1000:1}},"polyethylene-pipe":{"our-delivery":{0:10,500:11,1000:12},"self-delivery":{0:12,500:12,1000:12}},"plastic-containers":{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},polyethylene:{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},glass:{"our-delivery":{0:.7,500:.9,1000:1.2},"self-delivery":{0:1.5,500:1.5,1000:1.5}},"glass-white-brown":{"our-delivery":{0:2,500:2,1000:2},"self-delivery":{0:3,500:3,1000:3}},"glass-green":{"our-delivery":{0:1,500:1,1000:1},"self-delivery":{0:1.2,500:1.2,1000:1.5}},bags:{"our-delivery":{0:8,500:10,1000:12},"self-delivery":{0:12,500:12,1000:12}},oil:{"our-delivery":{0:10,500:10,1000:10},"self-delivery":{0:10,500:10,1000:10}},textile:{"our-delivery":{0:0,500:0,1000:0},"self-delivery":{0:1,500:1,1000:1}},getPriceSelectedTypeMaterials:function(e,t,r){var n="";return+r<500&&(n="0"),+r>=500&&+r<1e3&&(n="500"),+r>=1e3&&(n="1000"),this[e][t][n]},getMaxPriceMaterial:function(e){function t(e){var n=e;if("object"===(void 0===n?"undefined":_typeof(n)))for(var l in n)t(n[l]);else"number"==typeof n&&(r=Math.max(r,n))}var r=0;for(var n in this[e])t(this[e][n]);return r},getMinPriceMaterial:function(e){function t(e){var n=e;if("object"===(void 0===n?"undefined":_typeof(n)))for(var l in n)t(n[l]);else"number"==typeof n&&null===r?r=n:"number"==typeof n&&null!==r&&(r=Math.min(r,n))}var r=null;for(var n in this[e])t(this[e][n]);return r}},pricePallets={"first-grade":{"our-delivery":{epal:80,"no-epal":60},"self-delivery":{epal:90,"no-epal":70}},"second-grade":{"our-delivery":{epal:60,"no-epal":40},"self-delivery":{epal:70,"no-epal":50}},"third-grade":{"our-delivery":{epal:20,"no-epal":20},"self-delivery":{epal:30,"no-epal":30}},getPriceSelectedGradePallet:function(e,t,r){return this[e][t][r]},getMaxPricePallet:function(){function e(r){var n=r;if("object"===(void 0===n?"undefined":_typeof(n)))for(var l in n)e(n[l]);else"number"==typeof n&&(t=Math.max(t,n))}var t=0;for(var r in this)e(this[r]);return t},getMinPricePallet:function(){function e(r){var n=r;if("object"===(void 0===n?"undefined":_typeof(n)))for(var l in n)e(n[l]);else"number"==typeof n&&null===t?t=n:"number"==typeof n&&null!==t&&(t=Math.min(t,n))}var t=null;for(var r in this)e(this[r]);return t}},sendFormOrder=function(){function e(e,n){var l=new XMLHttpRequest;l.open("POST","php/form-order.php",!0),l.send(t(e.target)),l.onreadystatechange=function(t){if(404==this.status){r(e.target,!1)}if(4==this.readyState&&200==this.status){var n=this.responseText;r(e.target,n)}},l.onerror=function(t){r(e.target,!1)}}function t(e){var t=e.querySelectorAll("input"),r=e.querySelectorAll(".select-current"),n=e.querySelectorAll("textarea"),l=new FormData;return t.forEach(function(e){if(e.matches('[type="hidden"]')){var t=e.getAttribute("name");l.append(t,e.value)}}),r.forEach(function(e){if(e.hasAttribute("name")){var t=e.getAttribute("name");l.append(t,e.innerText)}}),t.forEach(function(e){if(!e.matches('[type="hidden"]')){var t=e.getAttribute("name");e.matches('[type="checkbox"]')&&e.matches('[type="checkbox"]').checked?l.append(t,"С засором"):e.matches('[type="checkbox"]')&&!e.matches('[type="checkbox"]').checked?l.append(t,"Без засора"):"weight"==t?l.append(t,e.value+" кг/шт"):l.append(t,e.value)}}),n.forEach(function(e){var t=e.getAttribute("name");l.append(t,e.innerText)}),l}function r(e,t){t?(e.querySelector(".result-query-error").classList.remove("show-result-query"),e.querySelector(".result-query-success").classList.add("show-result-query")):(e.querySelector(".result-query-success").classList.remove("show-result-query"),e.querySelector(".result-query-error").classList.add("show-result-query"))}return{sendRequest:e}}(),handlerInputs=function(){function e(e){if(e.matches(".input")){var t=e.nextElementSibling,r=e.getAttribute("placeholder");t.querySelector(".error-no-selected__message-text").innerText=r,e.onfocus=function(){e.classList.remove("error-no-selected"),t.style.display="none"},e.classList.add("error-no-selected"),t.style.display="flex"}else console.log("Переданный элемент не .input")}document.querySelectorAll(".input");return{showErrorsInput:e}}();!function(){function e(e){var r=void 0;e.keyCode&&e.keyCode,this.selectionStart<3&&e.preventDefault();var n="+7 (___) ___-__-__",l=0,i=n.replace(/\D/g,""),a=this.value.replace(/\D/g,""),s=n.replace(/[_\d]/g,function(e){return l<a.length?a.charAt(l++)||i.charAt(l):e});-1!=(l=s.indexOf("_"))&&(l<5&&(l=3),s=s.slice(0,l));var o=n.substr(0,this.value.length).replace(/_+/g,function(e){return"\\d{1,"+e.length+"}"}).replace(/[+()]/g,"\\$&");o=new RegExp("^"+o+"$"),!o.test(this.value)||this.value.length<5||r>47&&r<58?this.value=s:"blur"===e.type&&this.value.length<5&&(this.value=""),t.forEach(function(e){e.setSelectionRange(e.value.length,e.value.length)})}var t=document.querySelectorAll(".tel-field");t.forEach(function(t){t.addEventListener("input",e,!1),t.addEventListener("focus",e,!1),t.addEventListener("blur",e,!1),t.addEventListener("keydown",e,!1)})}();var ranges=function(){document.querySelectorAll(".range").forEach(function(e){var t=e.closest(".range-wrap"),r=t.querySelector(".range__output-current-value-input");e.addEventListener("input",function(){r.value=this.value}),r.addEventListener("input",function(){e.value=this.value}),r.addEventListener("focus",function(){this.value=""}),r.addEventListener("blur",function(){this.value=e.value})})}(),customSelects=function(){function e(){this.parentElement.classList.toggle("is-active")}function t(){var e=this.innerText,t=this.getAttribute("name"),r=this.closest(".select"),n=r.querySelector(".select-current");n.setAttribute("name",t),n.innerText=e,r.classList.remove("is-active")}function r(){this.closest(".select").classList.remove("is-active")}function n(e){if(e.matches(".select")){var t=e.querySelector(".select__header"),r=e.querySelector(".select-current").innerText;e.querySelector(".error-no-selected__message-text").innerText=r,e.onfocus=function(){t.classList.remove("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="none"},t.classList.add("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="flex"}else console.log("Переданный элемент не .select")}function l(e){if(e.matches(".select")){var t=e.querySelector(".select__header");t.classList.remove("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="none"}else console.log("Переданный элемент не .select")}var i=document.querySelectorAll(".select"),a=document.querySelectorAll(".select__header"),s=document.querySelectorAll(".select__option");return a.forEach(function(t){t.addEventListener("click",e)}),i.forEach(function(e){e.addEventListener("blur",r)}),s.forEach(function(e){e.addEventListener("click",t)}),{showErrorsSelect:n,hideErrorsSelect:l}}(),сheckbox=function(){document.querySelectorAll(".checkbox-type-b").forEach(function(e){var t=e.parentNode.previousElementSibling,r=e.parentNode.nextElementSibling.querySelector(".checkbox-goup-type-b__text");e.addEventListener("change",function(){e.checked&&(r.style.color="#67af01",t.style.color="#612228"),e.checked||(r.style.color="#612228",t.style.color="#67af01")})})}();!function(){function e(){var e=c.getAttribute("name"),t=l.checked?"our-delivery":"self-delivery";if(e){var a=priceMaterials.getPriceSelectedTypeMaterials(e,t,i.value);n.checked&&(a*=.9),s.innerHTML=E.format(r(a,i.value))}}function t(){var e=y.getAttribute("name"),t=p.checked?"our-delivery":"self-delivery",n=u.checked?"epal":"no-epal";if(e){var l=pricePallets.getPriceSelectedGradePallet(e,t,n);v.innerHTML=E.format(r(l,f.value))}}function r(e,t){return e*t}var n=document.getElementById("checkboxCalc"),l=document.getElementById("materialsDeliveryType"),i=document.getElementById("materialsKg"),a=document.getElementById("materialsKgInput"),s=document.querySelector("#resultMaterialsCurrency span"),o=document.getElementById("typeMaterials"),c=document.getElementById("currentTypeMaterials"),u=document.getElementById("epal"),d=document.getElementById("palletGrade"),y=document.getElementById("currentPalletGrade"),p=document.getElementById("palletDeliveryType"),f=document.getElementById("palletsRange"),m=document.getElementById("palletsRangeInput"),v=document.getElementById("resultPalletsCurrency"),g=document.getElementById("destructionRange"),h=document.getElementById("resultDestructionCurrency"),b=document.getElementById("storageRange"),M=document.getElementById("resultStorageCurrency"),E=new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"});i.addEventListener("input",function(){c.getAttribute("name")||customSelects.showErrorsSelect(o),e()}),a.addEventListener("input",function(){c.getAttribute("name")||customSelects.showErrorsSelect(o),e()}),l.addEventListener("change",e),n.addEventListener("change",e),o.addEventListener("click",e),u.addEventListener("change",t),d.addEventListener("click",t),p.addEventListener("change",t),f.addEventListener("input",function(){y.getAttribute("name")||customSelects.showErrorsSelect(d),t()}),m.addEventListener("input",function(){y.getAttribute("name")||customSelects.showErrorsSelect(d),t()}),g.addEventListener("input",function(){var e=r(5,this.value);h.innerHTML=E.format(e)}),b.addEventListener("input",function(){var e=r(5,this.value);M.innerHTML=E.format(e)})}(),function(){document.querySelectorAll(".card-product").forEach(function(e){var t=e.getAttribute("name"),r=e.querySelector("[data-starting-price]"),n=e.querySelector("[data-final-price]");return"pallet"==t?(r.innerText=pricePallets.getMinPricePallet(),void(n.innerText=pricePallets.getMaxPricePallet())):"glass"==t?(r.innerText=Math.min(priceMaterials.getMinPriceMaterial("glass"),priceMaterials.getMinPriceMaterial("glass-white-brown"),priceMaterials.getMinPriceMaterial("glass-green")),void(n.innerText=Math.max(priceMaterials.getMaxPriceMaterial("glass"),priceMaterials.getMaxPriceMaterial("glass-white-brown"),priceMaterials.getMaxPriceMaterial("glass-green")))):"paper"==t?(r.innerText=Math.min(priceMaterials.getMinPriceMaterial("paper"),priceMaterials.getMinPriceMaterial("books"),priceMaterials.getMinPriceMaterial("magazines"),priceMaterials.getMinPriceMaterial("newspapers")),void(n.innerText=Math.max(priceMaterials.getMaxPriceMaterial("paper"),priceMaterials.getMaxPriceMaterial("books"),priceMaterials.getMaxPriceMaterial("magazines"),priceMaterials.getMaxPriceMaterial("newspapers")))):"film-pvd"==t?(r.innerText=Math.min(priceMaterials.getMinPriceMaterial("film-pvd"),priceMaterials.getMinPriceMaterial("film-color-pvd")),void(n.innerText=Math.max(priceMaterials.getMaxPriceMaterial("film-pvd"),priceMaterials.getMaxPriceMaterial("film-color-pvd")))):(r.innerText=priceMaterials.getMinPriceMaterial(t),void(n.innerText=priceMaterials.getMaxPriceMaterial(t)))})}();var formOrder=function(){function e(e){e.preventDefault(),t(e.target)&&sendFormOrder.sendRequest(e,e.target)}function t(e){var t=e.querySelectorAll(".select"),r=e.querySelectorAll(".input"),n=!0;return t.forEach(function(e){e.querySelector(".select-current").hasAttribute("name")||"hide"!=e.getAttribute("data-toggle-mask")||(customSelects.showErrorsSelect(e),n=!1)}),r.forEach(function(e){e.matches(".tel-field")&&18!==e.value.length?(handlerInputs.showErrorsInput(e),n=!1):""==e.value&&(handlerInputs.showErrorsInput(e),n=!1)}),n}function r(){var e=l.querySelector(".select-current");!e.hasAttribute("name")||e.matches('[name="buying-materials"]')?(i.querySelector(".mask-hide-field").style.display="none",a.querySelector(".mask-hide-field").style.display="none",i.dataset.toggleMask="hide",a.dataset.toggleMask="hide"):(i.querySelector(".mask-hide-field").style.display="block",a.querySelector(".mask-hide-field").style.display="block",customSelects.hideErrorsSelect(i),customSelects.hideErrorsSelect(a),i.dataset.toggleMask="show",a.dataset.toggleMask="show")}var n=document.getElementById("indexGeneralOrder"),l=n.querySelector("#selectedService"),i=n.querySelector("#buyingMaterials"),a=n.querySelector("#packed");l.addEventListener("click",r),n.addEventListener("submit",e)}();!function(){var e=document.getElementById("menu-toggle"),t=document.getElementById("dropdownMenuMobile"),r=document.querySelectorAll(".dropdown-menu-mobile__link");e.onclick=function(e){if(e.preventDefault(),t.classList.contains("dropdown-menu-mobile--show-menu"))return void t.classList.remove("dropdown-menu-mobile--show-menu");t.classList.add("dropdown-menu-mobile--show-menu")},window.onscroll=function(){t.classList.remove("dropdown-menu-mobile--show-menu")},r.forEach(function(e){e.addEventListener("click",function(){this.classList.contains("dropdown-menu-mobile__link-arrow")||t.classList.remove("dropdown-menu-mobile--show-menu")})})}(),$(document).ready(function(){var e=$("#carouselIndexPade");e.owlCarousel({autoplay:!0,loop:!0,smartSpeed:1500,responsive:{0:{items:1,dots:!0},992:{items:1,dots:!1}}}),$(".slider-head__buttom--next").click(function(){e.trigger("next.owl.carousel")}),$(".slider-head__buttom--prev").click(function(){e.trigger("prev.owl.carousel")})}),function(){document.querySelectorAll(".tabs").forEach(function(e){var t=0,r=e.querySelectorAll(".tabs__header-item"),n=e.querySelectorAll(".tabs__content");e.addEventListener("click",function(e){e.target!=r[t]&&e.target.matches(".tabs__header-item")&&(r[t].classList.remove("tabs__header-item--active"),n[t].classList.remove("tabs__content--active"),r.forEach(function(r,l){r==e.target&&(t=l,r.classList.add("tabs__header-item--active"),n[t].classList.add("tabs__content--active"))}))})})}();