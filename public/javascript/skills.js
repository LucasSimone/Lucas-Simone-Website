

let currCard = 1;
let cardWidth = 340;
let scrollPosition = 0;
let carouselWidth = $( '#skillsWrapper' ).width();
let numCardsOnScreen = Math.floor(carouselWidth/cardWidth);
var multipleCardCarousel = document.querySelector("#demo");

window.addEventListener('resize', function(event) {
    resetCarouselSizes();





});




function resetCarouselSizes() {
  carouselWidth = $( '#skillsWrapper' ).width();
  currCard = 1;
  numCardsOnScreen = Math.floor(carouselWidth/cardWidth);
  scrollPosition = 0;

  $("#demo .carousel-inner").animate(
    { scrollLeft: 0 },
    0
  );

  $("#nextButt").attr('data-bs-slide','next');
  $("#prevButt").attr('data-bs-slide','prev');

  if (window.matchMedia("(min-width: 768px)").matches) {
      $("#nextButt").removeAttr("data-bs-slide");
      $("#prevButt").removeAttr("data-bs-slide");

  } else{
    $(multipleCardCarousel).addClass("slide");
  }


};


$("#demo .carousel-control-next").on("click", function () {

  if (currCard <= $('.carousel-item').length - numCardsOnScreen ) {

    currCard += 1;
    scrollPosition += cardWidth;


    console.log("Current Card: ",currCard);


    $("#demo .carousel-inner").animate(
      { scrollLeft: scrollPosition },
      400
    );
  }
});


$("#demo .carousel-control-prev").on("click", function () {
  if (currCard >= 2) {
    console.log("Current Card: ",currCard);
    currCard -= 1;
    scrollPosition -= cardWidth;
    $("#demo .carousel-inner").animate(
      { scrollLeft: scrollPosition },
      400
    );
  }
});




// function feefe() {
//
//   var multipleCardCarousel = document.querySelector("#demo");
//
//   // var carouselWidth = window.innerWidth;
//   var carouselWidth = $( '#skillsWrapper' ).width();
//   var cardWidth = 480;
//
//   $("#nextButt").attr('data-bs-slide','next');
//   $("#prevButt").attr('data-bs-slide','prev');
//
//
//   if (window.matchMedia("(min-width: 768px)").matches) {
//
//     $("#nextButt").removeAttr("data-bs-slide");
//     $("#prevButt").removeAttr("data-bs-slide");
//
//
//
//
//
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//       interval: false,
//
//     });
//
//
//     var numCardsOnScreen = Math.floor(carouselWidth/cardWidth);
//     console.log("CARD ON SCREEN: ",numCardsOnScreen);
//
//
//     var currCard = 1;
//     var scrollPosition = 0;
//
//     $("#demo .carousel-inner").animate(
//       { scrollLeft: scrollPosition },
//       0
//     );
//
//     $("#demo .carousel-control-next").on("click", function () {
//
//
//
//       if (currCard <= $('.carousel-item').length - numCardsOnScreen ) {
//
//         currCard += 1;
//         scrollPosition += 480;
//
//
//         console.log("Current Card: ",currCard);
//
//
//         $("#demo .carousel-inner").animate(
//           { scrollLeft: scrollPosition },
//           400
//         );
//       }
//     });
//
//
//     $("#demo .carousel-control-prev").on("click", function () {
//       if (currCard >= 2) {
//         console.log("Current Card: ",currCard);
//         currCard -= 1;
//         scrollPosition -= 480;
//         $("#demo .carousel-inner").animate(
//           { scrollLeft: scrollPosition },
//           400
//         );
//       }
//     });
//
//
//   } else {
//     $(multipleCardCarousel).addClass("slide");
//   }
//
//
//
// }
