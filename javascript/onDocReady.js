// This file consists of functions that are called after the DOM is loaded
$(document).ready(function() {
  // Boot up quote-revolver widget
  $("#quote-revolver").quovolver({
    transitionSpeed: 300,
    autoPlay: true,
    autoPlaySpeed: 6000,
  });
});
