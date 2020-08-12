const images = document.querySelectorAll('.news-body__img>img');

images.forEach(img => {
  img.onload = function() {
    let imgWrap = this.closest('.news-body__img');
    imgWrap.style.height = this.clientHeight + 'px';
  };
});
