export function openPhotoGallery(photoCollection, trgetIndex, wrapPhoto, modalWindow) {
  let outputCurrentIndex = modalWindow.querySelector('span[data-current-photo]');
  let outputLengthIndex = modalWindow.querySelector('span[data-length-photo]');
  let closeGallery = modalWindow.querySelector('.modal-close');
  let firstImg;
  let lastImg;

  outputCurrentIndex.innerText = Number(trgetIndex) + 1;
  outputLengthIndex.innerText = photoCollection.length;

  photoCollection.forEach((item, index) => {
    let img = new Image();
    img.src = item.src;
    img.setAttribute('alt', item.getAttribute('alt'));
    wrapPhoto.append(img);

    if (index == 0) firstImg = img;
    if (index == Number(photoCollection.length) - 1) lastImg = img;

    if (item != photoCollection[trgetIndex]) {
      img.style.display = 'none';
      img.style.opacity = '0';
      return;
    }

    let accessAction = true;
    img.addEventListener('click', () => {
      if (accessAction) flipsToTheNextPhoto(img, Number(index) + 1);
    }, true);

    closeGallery.addEventListener('click', () => {wrapPhoto.innerHTML = '';}, true);

    function flipsToTheNextPhoto(img, index) {
      accessAction = false;
      let count = Number(index) + 1;
      img.style.opacity = '0';
      img.style.display = 'none';

      if (img == lastImg) {
        count = 1;
        outputCurrentIndex.innerText = count;
        firstImg.style.display = 'block';
        firstImg.style.opacity = '1';

        firstImg.addEventListener('click', () => {
          flipsToTheNextPhoto(firstImg, count);
        }, true);
      } else {
        outputCurrentIndex.innerText = count;
        img.nextElementSibling.style.display = 'block';
        img.nextElementSibling.style.opacity = '1';

        img.nextElementSibling.addEventListener('click', () => {
          flipsToTheNextPhoto(img.nextElementSibling, count);
        }, true);
      }

      accessAction = true;
    }
  });
}
