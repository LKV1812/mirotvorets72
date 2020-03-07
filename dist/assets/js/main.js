"use strict";!function(){function e(){var e=c.getAttribute("name"),t=a.checked?"our-delivery":"self-delivery";if(e){var r=h.getPriceSelectedTypeMaterials(e,t,o.value);l.checked&&(r*=.9),i.innerHTML=E.format(n(r,o.value))}}function t(){var e=u.getAttribute("name"),t=v.checked?"our-delivery":"self-delivery",r=d.checked?"epal":"no-epal";if(e){var l=k.getPriceSelectedGradePallet(e,t,r);p.innerHTML=E.format(n(l,y.value))}}function n(e,t){return e*t}function r(e){var t=e.closest(".select");t.onfocus=function(){e.parentElement.classList.remove("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="none"},e.parentElement.classList.add("error-no-selected"),t.querySelector(".error-no-selected__message").style.display="flex"}var l=document.getElementById("checkboxCalc"),a=document.getElementById("materialsDeliveryType"),o=document.getElementById("materialsKg"),i=document.querySelector("#resultMaterialsCurrency span"),s=document.getElementById("typeMaterials"),c=document.getElementById("currentTypeMaterials"),d=document.getElementById("epal"),m=document.getElementById("palletGrade"),u=document.getElementById("currentPalletGrade"),v=document.getElementById("palletDeliveryType"),y=document.getElementById("palletsRange"),p=document.getElementById("resultPalletsCurrency"),f=document.getElementById("destructionRange"),g=document.getElementById("resultDestructionCurrency"),b=document.getElementById("storageRange"),_=document.getElementById("resultStorageCurrency"),h={cardboard:{"our-delivery":{0:2.5,500:3,1000:3.5},"self-delivery":{0:3,500:3,1000:3.5}},paper:{"our-delivery":{0:5.5,500:6,1000:6.5},"self-delivery":{0:7,500:7,1000:8}},books:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},magazines:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},newspapers:{"our-delivery":{0:4.5,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},"film-stretch":{"our-delivery":{0:12,500:15,1000:19},"self-delivery":{0:17,500:17,1000:19}},"film-pvd":{"our-delivery":{0:12,500:15,1000:19},"self-delivery":{0:17,500:17,1000:19}},"film-color-pvd":{"our-delivery":{0:8,500:10,1000:12},"self-delivery":{0:12,500:12,1000:12}},kegs:{"our-delivery":{0:2.5,500:2.5,1000:4},"self-delivery":{0:4,500:4,1000:4}},"plastic-canisters":{"our-delivery":{0:3,500:6,1000:7},"self-delivery":{0:6,500:6,1000:12}},canisters:{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:10,500:10,1000:10}},"aluminum-cans":{"our-delivery":{0:15,500:17,1000:19},"self-delivery":{0:20,500:20,1000:20}},"plastic-box":{"our-delivery":{0:1,500:1,1000:1},"self-delivery":{0:1,500:1,1000:1}},"polyethylene-pipe":{"our-delivery":{0:10,500:11,1000:12},"self-delivery":{0:12,500:12,1000:12}},"plastic-containers":{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},polyethylene:{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},glass:{"our-delivery":{0:.7,500:.9,1000:1.2},"self-delivery":{0:1.5,500:1.5,1000:1.5}},"glass-white-brown":{"our-delivery":{0:.9,500:1.2,1000:1.4},"self-delivery":{0:3,500:3,1000:3}},"glass-green":{"our-delivery":{0:.3,500:.5,1000:.7},"self-delivery":{0:1.2,500:1.2,1000:1.5}},bags:{"our-delivery":{0:8,500:10,1000:12},"self-delivery":{0:12,500:12,1000:15}},oil:{"our-delivery":{0:10,500:10,1000:10},"self-delivery":{0:10,500:10,1000:10}},getPriceSelectedTypeMaterials:function(e,t,n){var r="";return+n<500&&(r="0"),+n>=500&&+n<1e3&&(r="500"),+n>=1e3&&(r="1000"),this[e][t][r]}},k={"first-grade":{"our-delivery":{epal:80,"no-epal":60},"self-delivery":{epal:90,"no-epal":70}},"second-grade":{"our-delivery":{epal:60,"no-epal":40},"self-delivery":{epal:70,"no-epal":50}},"third-grade":{"our-delivery":{epal:20,"no-epal":20},"self-delivery":{epal:30,"no-epal":30}},getPriceSelectedGradePallet:function(e,t,n){return this[e][t][n]}},E=new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"});o.addEventListener("input",function(){c.getAttribute("name")||r(c),e()}),a.addEventListener("change",e),l.addEventListener("change",e),s.addEventListener("click",e),d.addEventListener("change",t),m.addEventListener("click",t),v.addEventListener("change",t),y.addEventListener("input",function(){u.getAttribute("name")||r(u),t()}),f.addEventListener("input",function(){var e=n(5,this.value);g.innerHTML=E.format(e)}),b.addEventListener("input",function(){var e=n(5,this.value);_.innerHTML=E.format(e)})}(),function(){(function(){function e(){this.parentElement.classList.toggle("is-active")}function t(){var e=this.innerText,t=this.getAttribute("name"),n=this.closest(".select"),r=n.querySelector(".select-current");r.setAttribute("name",t),r.innerText=e,n.classList.remove("is-active")}function n(){this.closest(".select").classList.remove("is-active")}var r=document.querySelectorAll(".select"),l=document.querySelectorAll(".select__header"),a=document.querySelectorAll(".select__option");l.forEach(function(t){t.addEventListener("click",e)}),r.forEach(function(e){var t=e.querySelector(".select-current").innerText;e.querySelector(".error-no-selected__message-text").innerText=t,e.addEventListener("blur",n)}),a.forEach(function(e){e.addEventListener("click",t)})})(),document.querySelectorAll(".checkbox-type-b").forEach(function(e){var t=e.parentNode.previousElementSibling,n=e.parentNode.nextElementSibling;e.addEventListener("change",function(){e.checked&&(n.style.color="#67af01",t.style.color="#612228"),e.checked||(n.style.color="#612228",t.style.color="#67af01")})});var e=document.querySelectorAll(".range"),t=new Intl.NumberFormat("ru");e.forEach(function(e){var n=e.closest(".range-wrap"),r=n.querySelector(".range__output-current-value"),l=r.querySelector("span").innerText;e.addEventListener("input",function(){r.innerHTML=t.format(this.value)+" "+l})})}(),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[57.129626,65.536304],zoom:12});e.behaviors.disable(["scrollZoom"]),e.controls.remove("searchControl").remove("typeSelector").remove("rulerControl");var t=new ymaps.Placemark([57.129626,65.536304],{balloonContentHeader:'<div class="map__mark-ballon-header">Офис</div>',balloonContentBody:'<div class="map__mark-ballon-content">г. Тюмень, ул. Революции, д.89</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Офис</b></div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-red.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]}),n=new ymaps.Placemark([57.13139,65.518358],{balloonContentHeader:'<div class="map__mark-ballon-header">Пункт приёма</div>',balloonContentBody:'<div class="map__mark-ballon-content">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-green.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]}),r=new ymaps.Placemark([57.153746,65.468409],{balloonContentHeader:'<div class="map__mark-ballon-header">Пункт приёма</div>',balloonContentBody:'<div class="map__mark-ballon-content">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-green.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]}),l=new ymaps.Placemark([57.096272,65.670586],{balloonContentHeader:'<div class="map__mark-ballon-header">Пункт приёма</div>',balloonContentBody:'<div class="map__mark-ballon-content">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>',balloonContentFooter:'<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',hintContent:'<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>'},{iconLayout:"default#image",iconImageHref:"assets/img/map/mark-green.png",iconImageSize:[34,42],iconImageOffset:[-25,-60]});e.geoObjects.add(t).add(n).add(r).add(l)}),function(){var e=document.getElementById("menu-toggle"),t=document.getElementById("dropdownMenuMobile"),n=document.querySelectorAll(".dropdown-menu-mobile__link");e.onclick=function(e){if(e.preventDefault(),t.classList.contains("dropdown-menu-mobile--show-menu"))return void t.classList.remove("dropdown-menu-mobile--show-menu");t.classList.add("dropdown-menu-mobile--show-menu")},window.onscroll=function(){t.classList.remove("dropdown-menu-mobile--show-menu")},n.forEach(function(e){e.addEventListener("click",function(){this.classList.contains("dropdown-menu-mobile__link-arrow")||t.classList.remove("dropdown-menu-mobile--show-menu")})})}(),$(document).ready(function(){var e=$("#carouselIndexPade");e.owlCarousel({autoplay:!0,loop:!0,smartSpeed:1500,responsive:{0:{items:1,dots:!0},992:{items:1,dots:!1}}}),$(".slider-head__buttom--next").click(function(){e.trigger("next.owl.carousel")}),$(".slider-head__buttom--prev").click(function(){e.trigger("prev.owl.carousel")})}),function(){document.querySelectorAll(".tabs").forEach(function(e){var t=0,n=e.querySelectorAll(".tabs__header-item"),r=e.querySelectorAll(".tabs__content");e.addEventListener("click",function(e){e.target!=n[t]&&e.target.matches(".tabs__header-item")&&(n[t].classList.remove("tabs__header-item--active"),r[t].classList.remove("tabs__content--active"),n.forEach(function(n,l){n==e.target&&(t=l,n.classList.add("tabs__header-item--active"),r[t].classList.add("tabs__content--active"))}))})})}();