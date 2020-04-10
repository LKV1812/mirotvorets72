function initMap() {

  let centerMap = {lat:57.150615, lng:65.546028};
  let office = {lat:57.129602, lng:65.536414};
  let stockTm = {lat:57.131456, lng:65.518459};
	let base = {lat:57.096293, lng:65.670803};
  let avtoremontnaya = {lat:57.153792, lng:65.467902};
  let sherbakova = {lat:57.194937, lng:65.590188};

  // Определяем клиент, чтобы после отключить перетаскивание карты на смартфонах.  Часть 1.
  // let isDraggable;
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// 	isDraggable = false;
	// } else {
	// 	isDraggable = true;
	// }

	let myMap = new google.maps.Map(document.getElementById("map"), {
		center: centerMap,
    zoom: 10,
    		// Дополнительные настройки

		// Удалить элементы управления картой
    disableDefaultUI: true,
    // mapTypeControl: false,

		// Запретить увеличение карты по скроллу
		scrollwheel: false,

		// Отключить перетаскивание для смартфонов. Часть 2.
    // draggable: isDraggable,

    styles: [
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": "2"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "saturation": "-28"
          },
          {
            "lightness": "-10"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "-1"
          },
          {
            "lightness": "-12"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "labels.text",
        "stylers": [
          {
            "lightness": "-31"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "lightness": "-74"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "lightness": "65"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": "-15"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "lightness": "0"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "0"
          },
          {
            "lightness": "-9"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "lightness": "-14"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "lightness": "-35"
          },
          {
            "gamma": "1"
          },
          {
            "weight": "1.39"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "lightness": "-19"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "lightness": "46"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
          {
            "lightness": "-13"
          },
          {
            "weight": "1.23"
          },
          {
            "invert_lightness": true
          },
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#adadad"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]
  });

  let markerOffice = new google.maps.Marker({
		position: office,
		map: myMap,
		title: "офис: г.Тюмень, ул.Революции, д.89",
		icon: "assets/img/map/mark-red.png"
  });

  let contentStringOffice =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Офис</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г. Тюмень, ул. Революции, д.89</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowOffice = new google.maps.InfoWindow({
		content: contentStringOffice,
    maxWidth: 400,
  });

  markerOffice.addListener('click', function() {
		infoWindowOffice.open(myMap, markerOffice);
  });

  // маркер тимирязева
	let markerStockTm = new google.maps.Marker({
		position: stockTm,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.Тимирязева, д.9, стр.10",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringStockTm =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.Тимирязева, д.9, стр.10</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowStockTm = new google.maps.InfoWindow({
		content: contentStringStockTm,
		maxWidth: 400
	});

	markerStockTm.addListener('click', function() {
		infoWindowStockTm.open(myMap, markerStockTm);
	});

	// маркер ялуторовский тракт
	let markerBase = new google.maps.Marker({
		position: base,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.11-км Ялуторовского тракта, стр.7",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringBase =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowBase = new google.maps.InfoWindow({
		content: contentStringBase,
		maxWidth: 400
	});

	markerBase.addListener('click', function() {
		infoWindowBase.open(myMap, markerBase);
	});

	// маркер авторемонтная
	let markerAvtoremontnaya = new google.maps.Marker({
		position: avtoremontnaya,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.Авторемонтная д.9, склад №11",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringAvtoremontnaya =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.Авторемонтная д.9, склад №11</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowAvtoremontnaya = new google.maps.InfoWindow({
		content: contentStringAvtoremontnaya,
		maxWidth: 400
	});

	markerAvtoremontnaya.addListener('click', function() {
		infoWindowAvtoremontnaya.open(myMap, markerAvtoremontnaya);
  });

	// маркер авторемонтная
	let markerSherbakova = new google.maps.Marker({
		position: sherbakova,
		map: myMap,
		title: "Пункт приема: г.Тюмень, ул.Щербакова д.160, стр №3",
		icon: "assets/img/map/mark-green.png"
	});

	let contentStringSherbakova =
    '<div id="content">'+
      '<div id="siteNotice">'+'</div>'+
      '<h1 id="firstHeading" class="firstHeading map-info-window-title">Пункт приема</h1>'+
      '<div id="bodyContent">'+
        '<p class="map-info-window-text">г.Тюмень, ул.Щербакова д.160, стр №3</p>'+
        '<p class="map-info-window-text">+7 (3452) 531-601, 8-800-600-71-31</p>' +
      '</div>'+
    '</div>';

	let infoWindowSherbakova = new google.maps.InfoWindow({
		content: contentStringSherbakova,
		maxWidth: 400
	});

	markerSherbakova.addListener('click', function() {
		infoWindowSherbakova.open(myMap, markerSherbakova);
	});
}
/**
 * Скрипт для яндекс карты
 */
// ymaps.ready(function () {
//   var myMap = new ymaps.Map("map", {
//     center: [57.129626, 65.536304],
//     zoom: 12
//   });

//   myMap.behaviors.disable([
//     'scrollZoom'
//   ]);

//   myMap.controls
//     .remove('searchControl')
//     .remove('typeSelector')
//     .remove('rulerControl');

//   var officeMark = new ymaps.Placemark([57.129626, 65.536304], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Офис</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г. Тюмень, ул. Революции, д.89</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Офис</b></div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-red.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   var stockTimiryaz = new ymaps.Placemark([57.131390, 65.518358], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Тимирязева, д.9 стр.10</div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-green.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   var stockAvtorem = new ymaps.Placemark([57.153746, 65.468409], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.Авторемонтная, д.9 склад №11</div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-green.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   var stockYalutor = new ymaps.Placemark([57.096272, 65.670586], {
//     balloonContentHeader: '<div class="map__mark-ballon-header">Пункт приёма</div>',
//     balloonContentBody: '<div class="map__mark-ballon-content">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>',
//     balloonContentFooter: '<div class="map__mark-ballon-content">+7 (3452) 531-601, 8-800-600-71-31</div>',
//     hintContent: '<div class="map__mark-ballon-hint"><b>Пункт приёма</b></div><div class="map__mark-ballon-hint">г.Тюмень, ул.11-км Ялуторовского тракта, стр.7</div>'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'assets/img/map/mark-green.png',
//     iconImageSize: [34, 42],
//     iconImageOffset: [-25, -60],
//   });

//   myMap.geoObjects.add(officeMark).add(stockTimiryaz).add(stockAvtorem).add(stockYalutor);
// });
