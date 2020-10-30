export function setHeightImgWrap(images, imgWrapSelector) {
  images.forEach(img => {
    img.style.opacity = 0;

    if (img && img.complete) {
      showImage(img);
    }

    img.onload = function() {
      showImage(img);
    };
  });

  function showImage(img) {
    let imgWrap = img.closest(imgWrapSelector);
    imgWrap.style.height = img.clientHeight + 'px';
    img.style.opacity = 1;
  }
}
