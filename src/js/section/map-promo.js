function initMap() {
  let marksPromo = {
    '1': {
      сoords: {lat:57.127251, lng:65.582705},
      date: '04.09.20',
      address: '09:00-09:15 - Геологоразведчиков, 42'
    },
    '2': {
      сoords: {lat:57.138141, lng:65.566931},
      date: '04.09.20',
      address: '09:30-09:45 - Республики, 142'
    },
    '3': {
      сoords: {lat:57.129888, lng:65.591293},
      date: '04.09.20',
      address: '10:00-10:15 - Пермякова, 22'
    },
    '4': {
      сoords: {lat:57.134108, lng:65.598076},
      date: '04.09.20',
      address: '10:30-10:45 - Энергетиков, 53'
    },
    '5': {
      сoords: {lat:57.137084, lng:65.593542},
      date: '04.09.20',
      address: '11:00-11:15 - Севастопольская, 7'
    },
    '6': {
      сoords: {lat:57.140649, lng:65.592212},
      date: '04.09.20',
      address: '11:30-11:45 - 50 лет Октября, 57Б'
    },
    '7': {
      сoords: {lat:57.146040, lng:65.656255},
      date: '04.09.20',
      address: '12:00-12:15 - Западносибирская, 28'
    },
    '8': {
      сoords: {lat:57.175978, lng:65.653618},
      date: '04.09.20',
      address: '12:30-12:45 - Беляева, 35 к1'
    },
    '9': {
      сoords: {lat:57.181425, lng:65.631205},
      date: '04.09.20',
      address: '13:00-13:15 - Академика Сахарова, 7'
    },
    '10': {
      сoords: {lat:57.115374, lng:65.560798},
      date: '10.09.20',
      address: '09:00-09:15 - Николая Федорова, 17 к1'
    },
    '11': {
      сoords: {lat:57.112230, lng:65.565457},
      date: '10.09.20',
      address: '09:30-09:45 - Николая Зелинского, 23'
    },
    '12': {
      сoords: {lat:57.109899, lng:65.560546},
      date: '10.09.20',
      address: '10:00-10:15 - Бориса Опрокиднева, 12'
    },
    '13': {
      сoords: {lat:57.110594, lng:65.580731},
      date: '10.09.20',
      address: '10:30-10:45 - Широтная, 104'
    },
    '14': {
      сoords: {lat:57.105316, lng:65.587154},
      date: '10.09.20',
      address: '11:00-11:15 - Широтная, 148 к1'
    },
    '15': {
      сoords: {lat:57.101877, lng:65.585688},
      date: '10.09.20',
      address: '11:30-11:45 - Широтная, 136'
    },
    '16': {
      сoords: {lat:57.100290, lng:65.586308},
      date: '10.09.20',
      address: '12:00-12:15 - Бориса Житкова, 8 к1'
    },
    '17': {
      сoords: {lat:57.099078, lng:65.593997},
      date: '10.09.20',
      address: '12:30-12:45 - Бориса Житкова, 10'
    },
    '18': {
      сoords: {lat:57.097960, lng:65.599649},
      date: '10.09.20',
      address: '13:00-13:15 - Линейная, 17'
    },
    '19': {
      сoords: {lat:57.101951, lng:65.598089},
      date: '10.09.20',
      address: '13:30-13:45 - Широтная, 170 к3'
    },
    '20': {
      сoords: {lat:57.095402, lng:65.616792},
      date: '10.09.20',
      address: '14:00-14:15 - Широная, 192 к1'
    },
    '21': {
      сoords: {lat:57.095412, lng:65.619671},
      date: '10.09.20',
      address: '14:30-14:45 - Родниковая, 2'
    },
    '22': {
      сoords: {lat:57.093594, lng:65.629241},
      date: '11.09.20',
      address: '09:00-09:15 - Широтная, 213'
    },
    '23': {
      сoords: {lat:57.099514, lng:65.617102},
      date: '11.09.20',
      address: '09:30-09:45 - Ивана Словцова, 23'
    },
    '24': {
      сoords: {lat:57.113441, lng:65.597531},
      date: '11.09.20',
      address: '10:00-10:15 - Олимпийская, 51'
    },
    '25': {
      сoords: {lat:57.118546, lng:65.586308},
      date: '11.09.20',
      address: '10:30-10:45 - 30 лет Победы, 92'
    },
    '26': {
      сoords: {lat:57.120227, lng:65.579594},
      date: '11.09.20',
      address: '11:00-11:15 - Пермякова, 48'
    },
    '27': {
      сoords: {lat:57.118335, lng:65.574259},
      date: '11.09.20',
      address: '11:30-11:45 - Пермякова, 54А'
    },
    '28': {
      сoords: {lat:57.117759, lng:65.567412},
      date: '11.09.20',
      address: '12:00-12:15 - Широтная, 45'
    },
    '29': {
      сoords: {lat:57.120439, lng:65.553469},
      date: '11.09.20',
      address: '12:30-12:45 - Широтная, 17'
    },
    '30': {
      сoords: {lat:57.127798, lng:65.541350},
      date: '17.09.20',
      address: '09:00-09:15 - Демьяна Бедного, 83 к1'
    },
    '31': {
      сoords: {lat:57.120092, lng:65.529360},
      date: '17.09.20',
      address: '09:30-09:45 - Самарцева, 30'
    },
    '32': {
      сoords: {lat:57.125569, lng:65.512008},
      date: '17.09.20',
      address: '10:00-10:15 - Панфиловцев, 86'
    },
    '33': {
      сoords: {lat:57.126459, lng:65.505731},
      date: '17.09.20',
      address: '10:30-10:45 - Степной 7й переулок, 57'
    },
    '34': {
      сoords: {lat:57.129437, lng:65.488395},
      date: '17.09.20',
      address: '11:00-11:15 - Московский тракт, 163'
    },
    '35': {
      сoords: {lat:57.132328, lng:65.493314},
      date: '17.09.20',
      address: '11:30-11:45 - Московский тракт, 137'
    },
    '36': {
      сoords: {lat:57.134017, lng:65.475655},
      date: '17.09.20',
      address: '12:00-12:15 - Кремлевская, 89'
    },
    '37': {
      сoords: {lat:57.125664, lng:65.489183},
      date: '17.09.20',
      address: '12:30-12:45 - Обдорская, 1'
    },
    '38': {
      сoords: {lat:57.116788, lng:65.485496},
      date: '17.09.20',
      address: '13:00-13:15 - Фармана Салманова, 4'
    },
    '39': {
      сoords: {lat:57.118943, lng:65.502836},
      date: '17.09.20',
      address: '13:30-13:45 - Александра Протозанова, 10 к1'
    },
    '40': {
      сoords: {lat:57.137065, lng:65.500413},
      date: '18.09.20',
      address: '09:00-09:15 - Магнитогорская, 4'
    },
    '41': {
      сoords: {lat:57.139217, lng:65.499315},
      date: '18.09.20',
      address: '09:30-09:45 - Амурская, 39'
    },
    '42': {
      сoords: {lat:57.148031, lng:65.487163},
      date: '18.09.20',
      address: '10:00-10:15 - Восстания, 19'
    },
    '43': {
      сoords: {lat:57.141293, lng:65.521869},
      date: '18.09.20',
      address: '10:30-10:45 - Карла Маркса, 8'
    },
    '44': {
      сoords: {lat:57.157682, lng:65.508428},
      date: '18.09.20',
      address: '11:00-11:15 - Чернышевского, 2а'
    },
    '45': {
      сoords: {lat:57.160728, lng:65.507375},
      date: '18.09.20',
      address: '11:30-11:45 - Полевая, 12а'
    },
    '46': {
      сoords: {lat:57.160038, lng:65.494603},
      date: '18.09.20',
      address: '12:00-12:15 - Ямская, 73 к2'
    },
    '47': {
      сoords: {lat:57.168287, lng:65.491087},
      date: '18.09.20',
      address: '12:30-12:45 - Полевая, 105/2'
    },
    '48': {
      сoords: {lat:57.172288, lng:65.469115},
      date: '18.09.20',
      address: '13:00-13:15 - Петербургская, 27'
    },
    '49': {
      сoords: {lat:57.169448, lng:65.452438},
      date: '18.09.20',
      address: '13:30-13:45 - Зеркальная, 22'
    },
    '50': {
      сoords: {lat:57.139083, lng:65.556080},
      date: '25.09.20',
      address: '09:00-9:15 – Холодильная, 136'
    },
    '51': {
      сoords: {lat:57.140261, lng:65.552063},
      date: '25.09.20',
      address: '09:30-09:45 - Салтыкова-Щедрина, 53'
    },
    '52': {
      сoords: {lat:57.143772, lng:65.549452},
      date: '25.09.20',
      address: '10:00-10:15 - Шиллера, 22'
    },
    '53': {
      сoords: {lat:57.160317, lng:65.561882},
      date: '25.09.20',
      address: '10:30-10:45 - Циолковского, 9 к1'
    },
    '54': {
      сoords: {lat:57.168639, lng:65.557470},
      date: '25.09.20',
      address: '11:00-11:15 - Тихий проезд, 6'
    },
    '55': {
      сoords: {lat:57.171275, lng:65.560229},
      date: '25.09.20',
      address: '11:30-11:45 - Эрвье, 30 к4'
    },
    '56': {
      сoords: {lat:57.176252, lng:65.559984},
      date: '25.09.20',
      address: '12:00-12:15 - Заречный проезд, 39'
    },
    '57': {
      сoords: {lat:57.179712, lng:65.566600},
      date: '25.09.20',
      address: '12:30-12:45 - Солнечный проезд, 25'
    },
    '58': {
      сoords: {lat:57.186888, lng:65.569992},
      date: '25.09.20',
      address: '13:00-13:15 - Шишкова, 16 к1'
    },
    '59': {
      сoords: {lat:57.201426, lng:65.555229},
      date: '25.09.20',
      address: '13:30-13:45 - Избышева, 8'
    },
    '60': {
      сoords: {lat:57.153968, lng:65.530326},
      date: '26.09.20',
      address: '10:00-11:00 - Герцена, 55. Эко-акция совместно с магазином «Zerno» - средства с данной акции будут переведены в фонд помощи животным «ЖиВи»'
    },
  };

  let centerMap = {lat:57.150615, lng:65.546028};

	let myMap = new google.maps.Map(document.getElementById("map"), {
		center: centerMap,
    zoom: 12,
    		// Дополнительные настройки

		// Удалить элементы управления картой
    // disableDefaultUI: true,
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

  for (let item in marksPromo) {
    let locationPromo = new google.maps.Marker({
      position: marksPromo[item].сoords,
      map: myMap,
      title: marksPromo[item].address
    });

    let contentWindow =
      '<div id="content">'+
        '<div id="siteNotice">'+'</div>'+
        `<h1 id="firstHeading" class="firstHeading map-info-window-title">${marksPromo[item].date}</h1>`+
        '<div id="bodyContent">'+
          `<p class="map-info-window-text">${marksPromo[item].address}</p>`+
        '</div>'+
      '</div>';

    let info = new google.maps.InfoWindow({
      content: contentWindow,
      maxWidth: 400
    });

    locationPromo.addListener('click', function() {
      info.open(myMap, locationPromo);
    });
  }

}

initMap();
