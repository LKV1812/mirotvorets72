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

  $('.slider-head__buttom--next').click(function(e) {
    e.preventDefault();
    indexHeaderSlider.trigger('next.owl.carousel', [300]);
  });

  $('.slider-head__buttom--prev').click(function(e) {
    e.preventDefault();
    indexHeaderSlider.trigger('prev.owl.carousel', [300]);
  });

  var awardsCarousel = $('#awards-carousel');

  awardsCarousel.owlCarousel({
    // center: true,
    loop: true,
    // dots: true,
    margin: 30,
    dotsContainer: '.awards-carousel__dots-container',

    responsive: {
      0: {
        items: 1,
        stagePadding: 70,
      },
      350: {
        items: 1,
        stagePadding: 90,
      },
      400: {
        items: 2,
        stagePadding: 40,
      },
      450: {
        items: 2,
        stagePadding: 60,
      },
      500: {
        items: 2,
        stagePadding: 80,
      },
      576: {
        items: 2,
        stagePadding: 70,
      },
      768: {
        items: 2,
        stagePadding: 100,
      },
      992: {
        items: 3,
        stagePadding: 90,
      },
      1200: {
        items: 3,
        stagePadding: 130,
      }
    }
  });

  $('.slider-head__buttom--awards-next').click(function(e) {
    e.preventDefault();
    awardsCarousel.trigger('next.owl.carousel', [300]);
  });

  $('.slider-head__buttom--awards-prev').click(function(e) {
    e.preventDefault();
    awardsCarousel.trigger('prev.owl.carousel', [300]);
  });
});
