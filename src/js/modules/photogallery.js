export function openPhotoGallery(galleryData) {
  let outputCurrentIndex = galleryData.modalWindow.querySelector('span[data-current-photo]');
  let outputLengthIndex = galleryData.modalWindow.querySelector('span[data-length-photo]');
  let closeGallery = galleryData.modalWindow.querySelector('.modal-close');

  let photoGallery = [];
  let indexActivePhoto;

  galleryData.originalPhotoCollection.forEach((item, index) => {
    let img = new Image();
    img.src = item.src;
    img.setAttribute('alt', item.getAttribute('alt'));
    galleryData.wrapPhoto.append(img);
    photoGallery.push(img);

    if (item != galleryData.originalPhotoCollection[galleryData.trgetIndex]) {
      img.style.display = 'none';
      img.style.opacity = '0';
      return;
    }

    indexActivePhoto = Number(index);
    outputCurrentIndex.innerText = index + 1;
  });

  outputLengthIndex.innerText = galleryData.originalPhotoCollection.length;

  let posX;
  galleryData.wrapPhoto.addEventListener('touchstart', (e) => {
    posX = e.changedTouches[0].pageX;
  });

  galleryData.wrapPhoto.addEventListener('touchend', (e) => {
    if (e.changedTouches[0].pageX > posX + 100) {
      posX = e.changedTouches[0].pageX;
      flipsToTheNextPhoto();
    }

    if (e.changedTouches[0].pageX < posX - 100) {
      posX = e.changedTouches[0].pageX;
      flipsToThePrevPhoto();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight') {
      flipsToTheNextPhoto();
    } else if (event.code == 'ArrowLeft') {
      flipsToThePrevPhoto();
    } else {
      return;
    }
  });

  galleryData.wrapPhoto.addEventListener('click', flipsToTheNextPhoto);
  closeGallery.addEventListener('click', () => galleryData.wrapPhoto.innerHTML = '', true);
  galleryData.btnNext.addEventListener('click', flipsToTheNextPhoto);
  galleryData.btnPrev.addEventListener('click', flipsToThePrevPhoto);

  function activeSlide(oldIndex, newActive) {
    photoGallery[oldIndex].style.opacity = '0';

    setTimeout(() => {
      photoGallery[oldIndex].style.display = 'none';
      photoGallery[newActive].style.display = 'block';
    }, 200);

    photoGallery[newActive].style.opacity = '1';

    outputCurrentIndex.innerText = newActive + 1;
  }

  function flipsToTheNextPhoto() {
    if (indexActivePhoto == photoGallery.length - 1) {
      activeSlide(indexActivePhoto, 0);
      indexActivePhoto = 0;
    } else {
      activeSlide(indexActivePhoto, ++indexActivePhoto);
    }
  }

  function flipsToThePrevPhoto() {
    if (indexActivePhoto == 0) {
      activeSlide(indexActivePhoto, photoGallery.length - 1);
      indexActivePhoto = photoGallery.length - 1;
    } else {
      activeSlide(indexActivePhoto, --indexActivePhoto);
    }
  }
}
