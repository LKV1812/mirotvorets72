function initMap() {
  let marksPromo = {
    '1': {
      сoords: {lat:57.136144, lng:65.561162},
      date: '31.10.20',
      address: '09:00-09:15 - Малыгина, 86 к1'
    },
    '2': {
      сoords: {lat:57.138141, lng:65.566931},
      date: '31.10.20',
      address: '09:30-09:45 - Республики, 142'
    },
    '3': {
      сoords: {lat:57.127251, lng:65.582705},
      date: '31.10.20',
      address: '10:00-10:15 - Геологоразведчиков, 42'
    },
    '4': {
      сoords: {lat:57.129888, lng:65.591293},
      date: '31.10.20',
      address: '10:30-10:45 - Пермякова, 22'
    },
    '5': {
      сoords: {lat:57.134108, lng:65.598076},
      date: '31.10.20',
      address: '11:00-11:15 - Энергетиков, 53'
    },
    '6': {
      сoords: {lat:57.137084, lng:65.593542},
      date: '31.10.20',
      address: '11:30-11:45 - Севастопольская, 7'
    },
    '7': {
      сoords: {lat:57.140649, lng:65.592212},
      date: '31.10.20',
      address: '12:00-12:15 - 50 лет Октября, 57Б'
    },
    '8': {
      сoords: {lat:57.146040, lng:65.656255},
      date: '31.10.20',
      address: '12:30-12:45 - Западносибирская, 28'
    },
    '9': {
      сoords: {lat:57.175978, lng:65.653618},
      date: '31.10.20',
      address: '13:00-13:15 - Беляева, 35 к1'
    },
    '10': {
      сoords: {lat:57.179191, lng:65.643183},
      date: '31.10.20',
      address: '13:30-13:45 - Судоремонтная, 28 к2'
    },
    '11': {
      сoords: {lat:57.181425, lng:65.631205},
      date: '31.10.20',
      address: '14:00-14:15 - Академика Сахарова, 7'
    },
    '12': {
      сoords: {lat:57.184853, lng:65.623299},
      date: '31.10.20',
      address: '14:30-14:45 - Газопромысловая, 3'
    },
    '13': {
      сoords: {lat:57.186372, lng:65.622774},
      date: '31.10.20',
      address: '15:00-15:15 - Газопромысловая, 4'
    },
    '14': {
      сoords: {lat:57.186287, lng:65.616648},
      date: '31.10.20',
      address: '15:30-15:45 - Игримская, 31а'
    },
    '15': {
      сoords: {lat:57.185682, lng:65.608399},
      date: '31.10.20',
      address: '16:00-16:15 - Малышева, 14'
    },
    '16': {
      сoords: {lat:57.115374, lng:65.560798},
      date: '07.11.20',
      address: '09:00-09:15 - Николая Федорова, 17 к1'
    },
    '17': {
      сoords: {lat:57.113141, lng:65.569268},
      date: '07.11.20',
      address: '09:30-09:45 - Пермякова, 68 к2'
    },
    '18': {
      сoords: {lat:57.112230, lng:65.565457},
      date: '07.11.20',
      address: '10:00-10:15 - Николая Зелинского, 23'
    },
    '19': {
      сoords: {lat:57.109899, lng:65.560546},
      date: '07.11.20',
      address: '10:30-10:45 - Бориса Опрокиднева, 12'
    },
    '20': {
      сoords: {lat:57.110594, lng:65.580731},
      date: '07.11.20',
      address: '11:00-11:15 - Широтная, 104'
    },
    '21': {
      сoords: {lat:57.105316, lng:65.587154},
      date: '07.11.20',
      address: '11:30-11:45 - Широтная, 148 к1'
    },
    '22': {
      сoords: {lat:57.101877, lng:65.585688},
      date: '07.11.20',
      address: '12:00-12:15 - Широтная, 136'
    },
    '23': {
      сoords: {lat:57.100290, lng:65.586308},
      date: '07.11.20',
      address: '12:30-12:45 - Бориса Житкова, 8 к1'
    },
    '24': {
      сoords: {lat:57.099078, lng:65.593997},
      date: '07.11.20',
      address: '13:00-13:15 - Бориса Житкова, 10'
    },
    '25': {
      сoords: {lat:57.097960, lng:65.599649},
      date: '07.11.20',
      address: '13:30-13:45 - Линейная, 17'
    },
    '26': {
      сoords: {lat:57.101951, lng:65.598089},
      date: '07.11.20',
      address: '14:00-14:15 - Широтная, 170 к3'
    },
    '27': {
      сoords: {lat:57.095402, lng:65.616792},
      date: '07.11.20',
      address: '14:30-14:45 - Широная, 192 к1'
    },
    '28': {
      сoords: {lat:57.095412, lng:65.619671},
      date: '07.11.20',
      address: '15:00-15:15 - Родниковая, 2'
    },
    '29': {
      сoords: {lat:57.097128, lng:65.630998},
      date: '08.11.20',
      address: '09:00-09:15 - Энергостроителей, 6а'
    },
    '30': {
      сoords: {lat:57.096681, lng:65.633888},
      date: '08.11.20',
      address: '09:30-09:45 - Энергостроителей, 9'
    },
    '31': {
      сoords: {lat:57.093594, lng:65.629241},
      date: '08.11.20',
      address: '10:00-10:15 - Широтная, 213'
    },
    '32': {
      сoords: {lat:57.100486, lng:65.623902},
      date: '08.11.20',
      address: '10:30-10:45 - Энергостроителей, 20 к1'
    },
    '33': {
      сoords: {lat:57.099514, lng:65.617102},
      date: '08.11.20',
      address: '11:00-11:15 - Ивана Словцова, 23'
    },
    '34': {
      сoords: {lat:57.107464, lng:65.607289},
      date: '08.11.20',
      address: '11:30-11:45 - Моторостроителей, 4а'
    },
    '35': {
      сoords: {lat:57.113441, lng:65.597531},
      date: '08.11.20',
      address: '12:00-12:15 - Олимпийская, 51'
    },
    '36': {
      сoords: {lat:57.118546, lng:65.586308},
      date: '08.11.20',
      address: '12:30-12:45 - 30 лет Победы, 92'
    },
    '37': {
      сoords: {lat:57.120227, lng:65.579594},
      date: '08.11.20',
      address: '13:00-13:15 - Пермякова, 48'
    },
    '38': {
      сoords: {lat:57.118335, lng:65.574259},
      date: '08.11.20',
      address: '13:30-13:45 - Пермякова, 54А'
    },
    '39': {
      сoords: {lat:57.117759, lng:65.567412},
      date: '08.11.20',
      address: '14:00-14:15 - Широтная, 45'
    },
    '40': {
      сoords: {lat:57.120439, lng:65.553469},
      date: '08.11.20',
      address: '14:30-14:45 - Широтная, 17'
    },
    '41': {
      сoords: {lat:57.126204, lng:65.547131},
      date: '14.11.20',
      address: '09:00-09:15 - Демьяна Бедного, 104 к1'
    },
    '42': {
      сoords: {lat:57.127798, lng:65.541350},
      date: '14.11.20',
      address: '09:30-09:45 - Демьяна Бедного, 83 к1'
    },
    '43': {
      сoords: {lat:57.129763, lng:65.541786},
      date: '14.11.20',
      address: '10:00-10:15 - Депутатская, 78 к1'
    },
    '44': {
      сoords: {lat:57.129331, lng:65.533034},
      address: '10:30-10:45 - Молодежная, 28'
    },
    '45': {
      сoords: {lat:57.118518, lng:65.541381},
      date: '14.11.20',
      address: '11:00-11:15 - Мельникайте, 136 к6'
    },
    date: '14.11.20',
    '46': {
      сoords: {lat:57.120092, lng:65.529360},
      date: '14.11.20',
      address: '11:30-11:45 - Самарцева, 30'
    },
    '47': {
      сoords: {lat:57.129543, lng:65.500463},
      date: '14.11.20',
      address: '12:00-12:15 - Московский тракт, 83 к4'
    },
    '48': {
      сoords: {lat:57.129437, lng:65.488395},
      date: '14.11.20',
      address: '12:30-12:45 - Московский тракт, 163'
    },
    '49': {
      сoords: {lat:57.132328, lng:65.493314},
      date: '14.11.20',
      address: '13:00-13:15 - Московский тракт, 137'
    },
    '50': {
      сoords: {lat:57.135615, lng:65.473091},
      date: '14.11.20',
      address: '13:30-13:45 - Кремлевская, 114'
    },
    '51': {
      сoords: {lat:57.134017, lng:65.475655},
      date: '14.11.20',
      address: '14:00-14:15 - Кремлевская, 89'
    },
    '52': {
      сoords: {lat:57.138564, lng:65.484850},
      date: '14.11.20',
      address: '14:30-14:45 - Кремлевская, 102'
    },
    '53': {
      сoords: {lat:57.125664, lng:65.489183},
      date: '14.11.20',
      address: '15:00-15:15 - Обдорская, 1'
    },
    '54': {
      сoords: {lat:57.116788, lng:65.485496},
      date: '14.11.20',
      address: '15:30-15:45 - Фармана Салманова, 4'
    },
    '55': {
      сoords: {lat:57.118943, lng:65.502836},
      date: '14.11.20',
      address: '16:00-16:15 - Александра Протозанова, 10 к1'
    },
    '56': {
      сoords: {lat:57.118943, lng:65.502836},
      date: '14.11.20',
      address: '16:30-16:45 - Василия Подшибякина, 4'
    },
    '57': {
      сoords: {lat:57.118943, lng:65.502836},
      date: '14.11.20',
      address: '17:00-17:15 - Заполярная, 13'
    },
    '58': {
      сoords: {lat:57.137065, lng:65.500413},
      date: '15.11.20',
      address: '09:00-09:15 - Магнитогорская, 4'
    },
    '59': {
      сoords: {lat:57.139217, lng:65.499315},
      date: '15.11.20',
      address: '09:30-09:45 - Амурская, 39'
    },
    '60': {
      сoords: {lat:57.148031, lng:65.487163},
      date: '15.11.20',
      address: '10:00-10:15 - Восстания, 19'
    },
    '61': {
      сoords: {lat:57.143609, lng:65.511568},
      date: '15.11.20',
      address: '10:30-10:45 - Мира, 57'
    },
    '62': {
      сoords: {lat:57.141293, lng:65.521869},
      date: '15.11.20',
      address: '11:00-11:15 - Карла Маркса, 8'
    },
    '63': {
      сoords: {lat:57.147445, lng:65.520255},
      date: '15.11.20',
      address: '11:30-11:45 - Первомайская, 60 к1'
    },
    '64': {
      сoords: {lat:57.152423, lng:65.524589},
      date: '15.11.20',
      address: '12:00-12:15 - Орловская, 50'
    },
    '65': {
      сoords: {lat:57.153211, lng:65.522935},
      date: '15.11.20',
      address: '12:30-12:45 - Туринская, 7'
    },
    '66': {
      сoords: {lat:57.157682, lng:65.508428},
      date: '15.11.20',
      address: '13:00-13:15 - Чернышевского, 2а'
    },
    '67': {
      сoords: {lat:57.160728, lng:65.507375},
      date: '15.11.20',
      address: '13:30-13:45 - Полевая, 12а'
    },
    '68': {
      сoords: {lat:57.160038, lng:65.494603},
      date: '15.11.20',
      address: '14:00-14:15 - Ямская, 73 к2'
    },
    '69': {
      сoords: {lat:57.168287, lng:65.491087},
      date: '15.11.20',
      address: '14:30-14:45 - Полевая, 105/2'
    },
    '70': {
      сoords: {lat:57.163678, lng:65.480361},
      date: '15.11.20',
      address: '15:00-15:15 - Бакинских Комиссаров, 1'
    },
    '71': {
      сoords: {lat:57.172288, lng:65.469115},
      date: '15.11.20',
      address: '15:30-15:45 - Петербургская, 27'
    },
    '72': {
      сoords: {lat:57.169448, lng:65.452438},
      date: '15.11.20',
      address: '16:00-16:15 - Зеркальная, 22'
    },
    '73': {
      сoords: {lat:57.139083, lng:65.556080},
      date: '21.11.20',
      address: '09:00-9:15 – Холодильная, 136'
    },
    '74': {
      сoords: {lat:57.140261, lng:65.552063},
      date: '21.11.20',
      address: '09:30-09:45 - Салтыкова-Щедрина, 53'
    },
    '75': {
      сoords: {lat:57.143772, lng:65.549452},
      date: '21.11.20',
      address: '10:00-10:15 - Шиллера, 22'
    },
    '76': {
      сoords: {lat:57.147805, lng:65.539416},
      date: '21.11.20',
      address: '10:30-10:45 - Орджоникидзе, 67'
    },
    '77': {
      сoords: {lat:57.160317, lng:65.561882},
      date: '21.11.20',
      address: '11:00-11:15 - Циолковского, 9 к1'
    },
    '78': {
      сoords: {lat:57.168639, lng:65.557470},
      date: '21.11.20',
      address: '11:30-11:45 - Тихий проезд, 6'
    },
    '79': {
      сoords: {lat:57.171275, lng:65.560229},
      date: '21.11.20',
      address: '12:00-12:15 - Эрвье, 30 к4'
    },
    '80': {
      сoords: {lat:57.176252, lng:65.559984},
      date: '21.11.20',
      address: '12:30-12:45 - Заречный проезд, 39'
    },
    '81': {
      сoords: {lat:57.179712, lng:65.566600},
      date: '21.11.20',
      address: '13:00-13:15 - Солнечный проезд, 25'
    },
    '82': {
      сoords: {lat:57.186888, lng:65.569992},
      date: '21.11.20',
      address: '13:30-13:45 - Шишкова, 16 к1'
    },
    '83': {
      сoords: {lat:57.201426, lng:65.555229},
      date: '21.11.20',
      address: '14:00-14:15 - Избышева, 8'
    },
    '84': {
      сoords: {lat:57.212017, lng:65.599240},
      date: '21.11.20',
      address: '14:30-14:45 - Голышева, 2'
    },
    '85': {
      сoords: {lat:57.175171, lng:65.597282},
      date: '21.11.20',
      address: '15:00-15:15 - Мельникайте, 2 к5'
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
