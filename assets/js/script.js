
// Select the button using its ID
const button = document.getElementById('clickalert');

// Add a click event listener to the button
button.addEventListener('click', () => {
  alert('Button clicked!');
});


const myCarouselElement = document.querySelector('#carouselExampleIndicators');
 
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,
  ride: 'carousel',
});



