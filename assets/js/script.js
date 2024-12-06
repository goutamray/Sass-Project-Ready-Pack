
// Select the button using its ID
const button = document.getElementById('clickalert');

// Add a click event listener to the button
button.addEventListener('click', () => {
  alert('Button clicked!');
});


/**
 * 
 * carousel js code 
 */
const myCarouselElement = document.querySelector('#carouselExampleIndicators');
 
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
  ride: 'carousel',
});

/**
 * 
 * slider js code 
 */

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});




