

// document.querySelector("div.player").offsetHeight


$(document).ready(function() {
  // $("div.player")
  $(window).resize();
  // jQuery methods go here...

});
$(window).resize(function() {
  let width = parseInt(getComputedStyle(document.querySelector("div.player")).width);
  let height = width * 9 / 16;
  // console.log("width = " + width);
  // console.log("height = " + height);
  document.querySelectorAll("div.player").forEach(function(player) {
    player.style.height = height + "px";
  });

  // document.querySelector("div.player").style.height = height + "px";
});
