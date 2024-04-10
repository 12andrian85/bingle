// Import the Bootstrap bundle
//
// Includes Popper and all of Bootstrap's JS plugins.
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


var splideOne = new Splide('.splideone' , {
  type: 'loop',
  // margin: '2rem',
  arrow: false,
  focus: 'center',
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1200: {
      perPage: 4,
    },
    2560: {
      perPage: 5,
    },
  }

});

splideOne.mount();

  // REVIEWS
var splideTwo = new Splide('.review', {
  type: 'loop',
  arrow: false,
  // autoWidth: false,
  perPage: 3,
  focus: 'center',
  // classes: {
		pagination: false,

  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1200: {
      perPage: 3,
    },
    2560: {
      perPage: 3,
    },
  }
});

splideTwo.mount();


