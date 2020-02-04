"use strict";!function(){function e(){var e=o.getAttribute("name"),r=l.checked?"our-delivery":"self-delivery";if(e){var c=s.getPriceSelectedTypeMaterials(e,r,n.value);i.innerHTML=a.format(t(c,n.value))}}function t(e,t){return r.checked?e*t*.9:e*t}var r=document.getElementById("checkboxCalc"),l=document.getElementById("materialsDeliveryType"),n=document.getElementById("materialsKg"),i=document.querySelector("#resultMaterialsCurrency span"),c=document.getElementById("typeMaterials"),o=document.getElementById("currentTypeMaterials"),s={cardboard:{"our-delivery":{0:2.5,500:3,1000:3.5},"self-delivery":{0:3,500:3,1000:3.5}},paper:{"our-delivery":{0:5.5,500:6,1000:6.5},"self-delivery":{0:7,500:7,1000:8}},books:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},magazines:{"our-delivery":{0:4,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},newspapers:{"our-delivery":{0:4.5,500:5,1000:5.5},"self-delivery":{0:5,500:5,1000:6}},"film-stretch":{"our-delivery":{0:12,500:15,1000:19},"self-delivery":{0:17,500:17,1000:19}},"film-pvd":{"our-delivery":{0:12,500:15,1000:19},"self-delivery":{0:17,500:17,1000:19}},"film-color-pvd":{"our-delivery":{0:8,500:10,1000:12},"self-delivery":{0:12,500:12,1000:12}},kegs:{"our-delivery":{0:2.5,500:2.5,1000:4},"self-delivery":{0:4,500:4,1000:4}},canisters:{"our-delivery":{0:3,500:6,1000:7},"self-delivery":{0:6,500:6,1000:12}},"aluminum-cans":{"our-delivery":{0:15,500:17,1000:19},"self-delivery":{0:20,500:20,1000:20}},"plastic-box":{"our-delivery":{0:1,500:1,1000:1},"self-delivery":{0:1,500:1,1000:1}},"polyethylene-pipe":{"our-delivery":{0:10,500:11,1000:12},"self-delivery":{0:12,500:12,1000:12}},"plastic-containers":{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},polyethylene:{"our-delivery":{0:5,500:6,1000:7},"self-delivery":{0:7,500:7,1000:10}},glass:{"our-delivery":{0:.7,500:.9,1000:1.2},"self-delivery":{0:1.5,500:1.5,1000:1.5}},"glass-white-brown":{"our-delivery":{0:.9,500:1.2,1000:1.4},"self-delivery":{0:3,500:3,1000:3}},"glass-green":{"our-delivery":{0:.3,500:.5,1000:.7},"self-delivery":{0:1.2,500:1.2,1000:1.5}},oil:{"our-delivery":{0:10,500:10,1000:10},"self-delivery":{0:10,500:10,1000:10}},getPriceSelectedTypeMaterials:function(e,t,r){var l="";return+r<500&&(l="0"),+r>=500&&+r<1e3&&(l="500"),+r>=1e3&&(l="1000"),this[e][t][l]}},a=new Intl.NumberFormat("ru",{style:"currency",currency:"RUB"});n.addEventListener("input",e),l.addEventListener("change",e),r.addEventListener("change",e),c.addEventListener("click",e)}(),function(){(function(){function e(){this.parentElement.classList.toggle("is-active")}function t(){var e=this.innerText,t=this.getAttribute("name"),r=this.closest(".select"),l=r.querySelector(".select-current");l.setAttribute("name",t),l.innerText=e,r.classList.remove("is-active")}function r(){this.closest(".select").classList.remove("is-active")}var l=document.querySelectorAll(".select"),n=document.querySelectorAll(".select__header"),i=document.querySelectorAll(".select__option");n.forEach(function(t){t.addEventListener("click",e)}),l.forEach(function(e){e.addEventListener("blur",r)}),i.forEach(function(e){e.addEventListener("click",t)})})(),document.querySelectorAll(".checkbox-type-b").forEach(function(e){var t=e.parentNode.previousElementSibling,r=e.parentNode.nextElementSibling;e.addEventListener("change",function(){e.checked&&(r.style.color="#67af01",t.style.color="#612228"),e.checked||(r.style.color="#612228",t.style.color="#67af01")})});var e=document.querySelectorAll(".range"),t=new Intl.NumberFormat("ru");e.forEach(function(e){var r=e.closest(".range-wrap"),l=r.querySelector(".range__output-current-value"),n=l.querySelector("span").innerText;e.addEventListener("input",function(){l.innerHTML=t.format(this.value)+" "+n})})}(),function(){document.querySelectorAll(".tabs").forEach(function(e){var t=0,r=e.querySelectorAll(".tabs__header-item"),l=e.querySelectorAll(".tabs__content");e.addEventListener("click",function(e){e.target!=r[t]&&e.target.matches(".tabs__header-item")&&(r[t].classList.remove("tabs__header-item--active"),l[t].classList.remove("tabs__content--active"),r.forEach(function(r,n){r==e.target&&(t=n,r.classList.add("tabs__header-item--active"),l[t].classList.add("tabs__content--active"))}))})})}();