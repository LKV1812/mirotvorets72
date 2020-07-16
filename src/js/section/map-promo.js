function initMap() {
  let marksPromo = {
    '1': {
      сoords: {lat:57.115254, lng:65.560860},
      date: '17.07.20',
      address: '09:00-09:15 Николая Федорова, 17 к1'
    },
    '2': {
      сoords: {lat:57.109917, lng:65.560438},
      date: '17.07.20',
      address: '09:30-09:45 Бориса Опрокиднева, 12'
    },
    '3': {
      сoords: {lat:57.110629, lng:65.580774},
      date: '17.07.20',
      address: '10:15-10:30 Широтная, 104'
    },
    '4': {
      сoords: {lat:57.105101, lng:65.586981},
      date: '17.07.20',
      address: '10:45-11:00 Широтная, 148 к1'
    },
    '5': {
      сoords: {lat:57.101729, lng:65.585705},
      date: '17.07.20',
      address: '11:15-11:30 Широтная, 136'
    },
    '6': {
      сoords: {lat:57.100168, lng:65.592611},
      date: '17.07.20',
      address: '12:00-12:15 Бориса Житкова, 8 к1'
    },
    '7': {
      сoords: {lat:57.097864, lng:65.599648},
      date: '17.07.20',
      address: '12:30-12:45 Линейная, 17'
    },
    '8': {
      сoords: {lat:57.101704, lng:65.598093},
      date: '17.07.20',
      address: '13:00-13:15 Широтная, 170 к3'
    },
    '9': {
      сoords: {lat:57.095642, lng:65.617039},
      date: '17.07.20',
      address: '13:30-13:45 Широтная, 192 к1'
    },
    '10': {
      сoords: {lat:57.093600, lng:65.629177},
      date: '18.07.20',
      address: '09:00-09:15 Широтная, 213'
    },
    '11': {
      сoords: {lat:57.099479, lng:65.617156},
      date: '18.07.20',
      address: '09:30-09:45 Ивана Словцова, 23'
    },
    '12': {
      сoords: {lat:57.113430, lng:65.597520},
      date: '18.07.20',
      address: '10:15-10:30 Олимпийская, 51'
    },
    '13': {
      сoords: {lat:57.118517, lng:65.586308},
      date: '18.07.20',
      address: '10:45-11:00 30 лет Победы, 92'
    },
    '14': {
      сoords: {lat:57.118422, lng:65.574275},
      date: '18.07.20',
      address: '11:30-11:45 Пермякова, 54а'
    },
    '15': {
      сoords: {lat:57.117759, lng:65.567487},
      date: '18.07.20',
      address: '12:00-12:15 Широтная, 45'
    },
    '16': {
      сoords: {lat:57.120462, lng:65.553501},
      date: '18.07.20',
      address: '12:30-12:45 Широтная, 17'
    },
    '17': {
      сoords: {lat:57.127700, lng:65.541862},
      date: '23.07.20',
      address: '09:00-09:15 Демьяна Бедного, 83 к1'
    },
    '18': {
      сoords: {lat:57.125447, lng:65.511981},
      date: '23.07.20',
      address: '09:30-09:45 Панфиловцев, 86'
    },
    '19': {
      сoords: {lat:57.126338, lng:65.505799},
      date: '23.07.20',
      address: '10:00-10:15 Степной 7й переулок, 57'
    },
    '20': {
      сoords: {lat:57.129437, lng:65.488309},
      date: '23.07.20',
      address: '10:30-10:45 Московский тракт, 163'
    },
    '21': {
      сoords: {lat:57.132374, lng:65.493389},
      date: '23.07.20',
      address: '11:00-11:15 Московский тракт, 137'
    },
    '22': {
      сoords: {lat:57.134023, lng:65.475644},
      date: '23.07.20',
      address: '11:30-11:45 Кремлевская, 89'
    },
    '23': {
      сoords: {lat:57.117021, lng:65.485346},
      date: '23.07.20',
      address: '12:15-12:30 Фармана Салманова, 4'
    },
    '24': {
      сoords: {lat:57.118920, lng:65.502826},
      date: '23.07.20',
      address: '12:45-13:00 Александра Протозанова, 10 к1'
    },
    '25': {
      сoords: {lat:57.137007, lng:65.500392},
      date: '24.07.20',
      address: '09:00-09:15 Магнитогорская, 4'
    },
    '26': {
      сoords: {lat:57.139246, lng:65.499240},
      date: '24.07.20',
      address: '09:30-09:45 Амурская, 39'
    },
    '27': {
      сoords: {lat:57.148048, lng:65.487206},
      date: '24.07.20',
      address: '10:00-10:15 Восстания, 19'
    },
    '28': {
      сoords: {lat:57.141264, lng:65.521869},
      date: '24.07.20',
      address: '10:45-11:00 Карла Маркса, 8'
    },
    '29': {
      сoords: {lat:57.160710, lng:65.507343},
      date: '24.07.20',
      address: '11:30-11:45 Полевая, 12а'
    },
    '30': {
      сoords: {lat:57.160030, lng:65.494927},
      date: '24.07.20',
      address: '12:00-12:15 Ямская, 73 к2'
    },
    '31': {
      сoords: {lat:57.167871, lng:65.491200},
      date: '24.07.20',
      address: '12:30-12:45 Полевая, 105/2'
    },
    '32': {
      сoords: {lat:57.172265, lng:65.469136},
      date: '24.07.20',
      address: '13:15-13:30 Петербургская, 27'
    },
    '33': {
      сoords: {lat:57.169413, lng:65.452481},
      date: '24.07.20',
      address: '13:45-14:00 Зеркальная, 22'
    },
    '34': {
      сoords: {lat:57.140221, lng:65.552117},
      date: '31.07.20',
      address: '09:00-09:15 Салтыкова-Щедрина, 53'
    },
    '35': {
      сoords: {lat:57.160111, lng:65.561897},
      date: '31.07.20',
      address: '09:30-09:45 Циолковского, 9 к1'
    },
    '36': {
      сoords: {lat:57.176298, lng:65.559888},
      date: '31.07.20',
      address: '10:15-10:30 Заречный проезд, 39'
    },
    '37': {
      сoords: {lat:57.179718, lng:65.566643},
      date: '31.07.20',
      address: '10:45-11:00 Солнечный проезд, 25'
    },
    '38': {
      сoords: {lat:57.186700, lng:65.570218},
      date: '31.07.20',
      address: '11:30-11:45 Шишкова, 16 к1'
    },
    '39': {
      сoords: {lat:57.201421, lng:65.555207},
      date: '31.07.20',
      address: '12:15-12:30 Избышева, 8'
    },
    '40': {
      сoords: {lat:57.154072, lng:65.530348},
      date: '31.07.20',
      address: '13:00-14:00 Герцена, 55'
    },
    '41': {
      сoords: {lat:57.129935, lng:65.591260},
      date: '07.08.20',
      address: '09:00-09:15 Пермякова, 22'
    },
    '42': {
      сoords: {lat:57.134091, lng:65.598130},
      date: '07.08.20',
      address: '09:30-09:45 Энергетиков, 53'
    },
    '43': {
      сoords: {lat:57.137061, lng:65.593413},
      date: '07.08.20',
      address: '10:00-10:15 Севастопольская, 7'
    },
    '44': {
      сoords: {lat:57.140632, lng:65.592277},
      date: '07.08.20',
      address: '10:30-10:45 50 лет Октября, 57Б'
    },
    '45': {
      сoords: {lat:57.146011, lng:65.656298},
      date: '07.08.20',
      address: '11:05-11:20 Западносибирская, 28'
    },
    '46': {
      сoords: {lat:57.181425, lng:65.631205},
      date: '07.08.20',
      address: '12:10-12:25 Академика Сахарова, 7'
    },
  };

  let centerMap = {lat:57.150615, lng:65.546028};

	let myMap = new google.maps.Map(document.getElementById("map"), {
		center: centerMap,
    zoom: 11,
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
