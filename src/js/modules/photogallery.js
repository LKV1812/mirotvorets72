export function openPhotoGallery(originalPhotoCollection, trgetIndex, wrapPhoto, modalWindow, navButton) {
  let outputCurrentIndex = modalWindow.querySelector('span[data-current-photo]');
  let outputLengthIndex = modalWindow.querySelector('span[data-length-photo]');
  let closeGallery = modalWindow.querySelector('.modal-close');
  let firstImg;
  let lastImg;
  let photoGallery = [];
  let indexActivePhoto;

  originalPhotoCollection.forEach((item, index) => {
    let img = new Image();
    img.src = item.src;
    img.setAttribute('alt', item.getAttribute('alt'));
    wrapPhoto.append(img);
    photoGallery.push(img);

    if (item != originalPhotoCollection[trgetIndex]) {
      img.style.display = 'none';
      img.style.opacity = '0';
      return;
    }

    indexActivePhoto = Number(index);
    outputCurrentIndex.innerText = index + 1;
  });

  outputLengthIndex.innerText = originalPhotoCollection.length;

  function activeSlide(oldIndex, newActive) {
    photoGallery[oldIndex].style.opacity = '0';
    photoGallery[oldIndex].style.display = 'none';

    photoGallery[newActive].style.display = 'block';
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

  let posX;
  wrapPhoto.addEventListener('touchstart', (e) => {
    posX = e.changedTouches[0].pageX;
    // console.log(e.changedTouches[0].pageX)
    // console.log(e)
  });

  wrapPhoto.addEventListener('touchmove', (e) => {
    if (e.changedTouches[0].pageX > posX + 150) {
      posX = e.changedTouches[0].pageX;
      flipsToTheNextPhoto();
    }

    if (e.changedTouches[0].pageX < posX - 150) {
      posX = e.changedTouches[0].pageX;
      flipsToThePrevPhoto();
    }
  });

  wrapPhoto.addEventListener('click', flipsToTheNextPhoto);
  closeGallery.addEventListener('click', () => {wrapPhoto.innerHTML = '';}, true);
  navButton.next.addEventListener('click', flipsToTheNextPhoto);
  navButton.prev.addEventListener('click', flipsToThePrevPhoto);


  // outputCurrentIndex.innerText = Number(trgetIndex) + 1;
  // outputLengthIndex.innerText = photoCollection.length;

  // photoCollection.forEach((item, index) => {
  //   let img = new Image();
  //   img.src = item.src;
  //   img.setAttribute('alt', item.getAttribute('alt'));
  //   wrapPhoto.append(img);

  //   if (index == 0) firstImg = img;
  //   if (index == Number(photoCollection.length) - 1) lastImg = img;

  //   if (item != photoCollection[trgetIndex]) {
  //     img.style.display = 'none';
  //     img.style.opacity = '0';
  //     return;
  //   }

  //   let accessAction = true;
  //   img.addEventListener('click', () => {
  //     if (accessAction) flipsToTheNextPhoto(img, Number(index) + 1);
  //   }, true);

  //   function flipsToTheNextPhoto(img, index) {
  //     accessAction = false;
  //     let count = Number(index) + 1;
  //     img.style.opacity = '0';
  //     img.style.display = 'none';

  //     if (img == lastImg) {
  //       count = 1;
  //       outputCurrentIndex.innerText = count;
  //       firstImg.style.display = 'block';
  //       firstImg.style.opacity = '1';

  //       firstImg.addEventListener('click', () => {
  //         flipsToTheNextPhoto(firstImg, count);
  //       }, true);
  //     } else {
  //       outputCurrentIndex.innerText = count;
  //       img.nextElementSibling.style.display = 'block';
  //       img.nextElementSibling.style.opacity = '1';

  //       img.nextElementSibling.addEventListener('click', () => {
  //         flipsToTheNextPhoto(img.nextElementSibling, count);
  //       }, true);
  //     }

  //     accessAction = true;
  //   }
  // });
}
