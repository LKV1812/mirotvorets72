// вызов прослушки вызова модального окна для фотогаллереи подключена в файле owl-carousel.js так как необходимо чтобы слайдер полностью прогрузился, чтоб на его слайды навешать прослушку клика.
import './entry';
import './section/owl-carousel';
import './section/cards-product';
import './modules/form-order';
import './modules/form-review';
import './section/map.js';
import './section/calculator.js';
import './modules/ranges.js';
import './modules/сheckbox.js';
import './modules/tabs.js';
import './modules/phone-mask.js';
import {openPhotoGallery} from './modules/photogallery.js';

let modalPhotoGallery = document.getElementById('photoGalerry');
let galleryContainer = modalPhotoGallery.querySelector('.photo-gallery');
let parentPhoto = document.getElementById('awards-carousel');
let photoCollection = parentPhoto.querySelectorAll('img');


parentPhoto.addEventListener('click', (e) => {
  photoCollection.forEach( (itemImg, index) => {
    if (e.target.src == itemImg.src) {
      openPhotoGallery({
        originalPhotoCollection: photoCollection,
        trgetIndex: index,
        wrapPhoto: galleryContainer,
        modalWindow: modalPhotoGallery,
        btnNext: modalPhotoGallery.querySelector('[data-btn-callery="next"]'),
        btnPrev: modalPhotoGallery.querySelector('[data-btn-callery="prev"]'),
      });
    }
  });
});
