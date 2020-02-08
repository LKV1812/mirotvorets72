ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [57.129626, 65.536304],
    zoom: 14
  });

  myMap.behaviors.disable([
    'scrollZoom'
  ]);

  myMap.controls
    .remove('searchControl')
    .remove('typeSelector')
    .remove('rulerControl');


  var collectionPinStock = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/map/mark-green.png',
    iconImageSize: [34, 42],
    iconImageOffset: [-25, -60]
  });

//   var placemarkOffice = new ymaps.Placemark([55.76, 37.56], {}, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-red.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60]
// });

  var officeMark = new ymaps.Placemark([57.129626, 65.536304], {
    balloonContentHeader: '<div class="map__mark-ballon-header">Офис</div>',
    balloonContentBody: '<div class="map__mark-ballon-content">г. Тюмень, ул. Революции, д.89</div>',
    balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
    hintContent: '<div class="map__mark-ballon-hint"><b>Офис</b></div>'
  });

  var stockTimiryaz = new ymaps.Placemark([57.131390, 65.518358], {
    balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
    balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>',
    balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
    hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>'
  });

  var stockAvtorem = new ymaps.Placemark([57.153746, 65.468409], {
    balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
    balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>',
    balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
    hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>'
  });

  var stockYalutor = new ymaps.Placemark([57.096272, 65.670586], {
    balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
    balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>',
    balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
    hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>'
  });

  collectionPinStock.add(officeMark).add(stockAvtorem).add(stockTimiryaz).add(stockYalutor);
  myMap.geoObjects.add(collectionPinStock);
});
