var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'FnMAMY1fVto',
    playerVars: {
      'autoplay': 0,
      'rel': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'disablekb': 1,
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    $('#startVideo').fadeIn('normal');
  }
}

// var player = document.getElementById ("player");
$(player).hide();

var thumbnail = document.getElementById ("thumbnail");

$(document).on('click', '#startVideo', function () {
  $(this).hide();
  $("#player").show();
  $("#thumbnailContainer").hide();
  player.playVideo();
});
