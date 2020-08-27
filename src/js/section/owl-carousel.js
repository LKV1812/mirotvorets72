$(document).ready(function(){
  var indexHeaderSlider = $('#carouselIndexPade');

  indexHeaderSlider.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    autoplaySpeed: 1500,
    dotsSpeed: 300,
    dragEndSpeed: 300,
    lazyLoad: true,
    responsive: {
      0:{
          items:1,
          dots: true
      },
      992:{
          items:1,
          dots: false
      },
    }
  });

  $('.slider-head__buttom--next').click(function() {
    indexHeaderSlider.trigger('next.owl.carousel', [300]);
  });

  $('.slider-head__buttom--prev').click(function() {
    indexHeaderSlider.trigger('prev.owl.carousel', [300]);
  });
});
