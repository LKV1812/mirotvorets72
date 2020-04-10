(function() {
  'use strict';
  let viber = document.querySelectorAll('.viber');

  viber.forEach(item => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      item.href = "viber://add?number=79634521601";
    } else {
      item.href = "viber://chat?number=+79634521601";
    }
  });


})();
