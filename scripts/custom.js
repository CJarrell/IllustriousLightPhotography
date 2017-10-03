// Custom JS for CJPhoto.com Site
// Init Isotope for Jumbotron Grid
// $(document).ready(function(){
//   $grid = $(.grid).imagesLoaded( function(){
//     $grid.isotope({
//       // Options

//     })
//   })
// })
// Venobox Init
$(function(){
  $('.venobox').venobox({
    framewidth: '1920px',        // default: ''
    border: '3px',             // default: '0'
    bgcolor: '#ffffff',         // default: '#fff'
    numeratio: true,            // default: false
    infinigall: true            // default: false
  });
});
// Owl carousel
$(function(){
  $('#jumbo-carousel').owlCarousel({
    items: '1.5',
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    animateIn: true,
    animateOut: false,
    loop: true
  });
});
// Disable Right Clicking
$(function(){
  $('img').on("contextmenu", function(e){
    return false;
  });
});
