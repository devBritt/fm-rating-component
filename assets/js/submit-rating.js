// DOM element references
// card states
const ratingStateEl = document.querySelector('#rate-state');
const thankStateEl = document.querySelector('#thank-state');
const ratingScaleEl = document.querySelector('#scale');
const userRating = document.querySelector('#user-rating');
let ratingOptsEl = ratingScaleEl.querySelectorAll('label > input');

// event handlers
const submitRating = (e) => {
  let selectedRating;

  ratingOptsEl.forEach(item => {
    if (item.checked) {
      selectedRating = item.value;
    }
  });

  userRating.innerHTML = selectedRating;
}

// event listeners
document.querySelector('#submit-rating').addEventListener('click', submitRating);
