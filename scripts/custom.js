// Custom JS for CJPhoto.com Site

// Venobox Init
$(document).ready(function(){
  $('.venobox').venobox({
    framewidth: '1760px',        // default: ''
    border: '3px',             // default: '0'
    bgcolor: '#ffffff',         // default: '#fff'
    numeratio: true,            // default: false
    infinigall: true            // default: false
  });
});
// Owl carousel
$(document).ready(function(){
  $.getScript('scripts/owlcarousel/owl.carousel.min.js', function(){
    $(".owl-carousel").owlCarousel({
      items: '1.1',
      center: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7500,
      dots: false

    });
  });
  
});


// Disable Right Clicking
// $(document).ready(function(){
//   $('img').on("contextmenu", function(e){
//     return false;
//   });
// });


