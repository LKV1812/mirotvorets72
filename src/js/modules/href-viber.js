(function() {
  'use strict';
  let viber = document.getElementById('viber');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    viber.href = "viber://add?number=+79634521601";
  } else {
    viber.href = "viber://chat?number=+79634521601";
  }
})();
