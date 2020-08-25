$(document).ready(function(){

  let sliderLaunched = false;

  if (window.innerWidth < 768) {
    sliderLaunched = runСarousel();
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      sliderLaunched = runСarousel();
    }
    if (sliderLaunched && window.innerWidth > 768) {
      sliderLaunched.trigger('destroy.owl.carousel');
    }
  });

});

function runСarousel() {
  let indexHeaderSlider = $('#carouselHistoryData');
  let mobileParentDotsWrap = document.querySelector('.history-body__row-show-mobile');

  if (!mobileParentDotsWrap.firstChild) {
    let dotsWrap = document.createElement('div');
    dotsWrap.className = 'history-body__owl-dots-container';
    mobileParentDotsWrap.appendChild(dotsWrap);
  }

  indexHeaderSlider.owlCarousel({
    items: 1,
    loop: false,
    dragEndSpeed: 500,
    dotsContainer: '.history-body__owl-dots-container',
    autoplay: false,
    dots: true
  });

  return indexHeaderSlider;
}
