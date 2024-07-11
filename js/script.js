// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: -60,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa-light fa-angle-left'></i>",
      "<i class='fa-light fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      200: {
        items: 1,
        margin: 8,
      },
      400: {
        items: 1,
        margin: 8,
      },
      600: {
        items: 1,
        margin: 8,
      },
      768: {
        items: 1.5,
        margin: 5,
      },
      830: {
        items: 1.5,
        margin: 0,
      },
      1030: {
        items: 1.5,
        margin: -20,
      },
      1600: {
        items: 1.5,
        margin: -50,
      },
    },
  });
});




