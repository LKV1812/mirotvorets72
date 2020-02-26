$(document).ready(function(){
  var owl = $('#carouselIndexPade');
  owl.owlCarousel({
    loop: true,
      smartSpeed: 1500,
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
  // Go to the next item
  $('.slider-head__buttom--next').click(function() {
    owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.slider-head__buttom--prev').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [1500]);
  });
});
