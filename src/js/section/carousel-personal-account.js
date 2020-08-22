$(document).ready(function(){
  var indexHeaderSlider = $('#carouselIndexPade');

  indexHeaderSlider.owlCarousel({
    autoplayHoverPause: true,
    loop: false,
    dragEndSpeed: 500,
    responsive: {
      0:{
        dots: true
      },
      768:{
        autoplay: false,
        mouseDrag: false,
        touchDrag: false,
        dots: false
      },
    }
  });
});
