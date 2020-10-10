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
import {callsModalWindow} from './modules/modal-window.js';
import {openPhotoGallery} from './modules/photogallery.js';

let modalPhotoGallery = document.getElementById('photoGalerry');
let galleryContainer = modalPhotoGallery.querySelector('.photo-gallery');
let parentPhoto = document.getElementById('awards-carousel');
let photoCollection = parentPhoto.querySelectorAll('img');

photoCollection.forEach((item, index) => {
  callsModalWindow(item, modalPhotoGallery);

  item.addEventListener('click', (e) => {
    openPhotoGallery(photoCollection, index, galleryContainer, modalPhotoGallery);
  });
});
