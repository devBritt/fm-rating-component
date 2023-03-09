// DOM element references
// card states
const ratingStateEl = document.querySelector('#rate-state');
const thankStateEl = document.querySelector('#thank-state');
const ratingScaleEl = document.querySelector('#rating-scale');
const userRating = document.querySelector('#user-rating');
const submitErrorEl = document.querySelector('#submit-error');
let ratingOptsEl = ratingScaleEl.querySelectorAll('.scale-opt');

// event handlers
const selectRating = (e) => {
  e.target.id = 'isSelected';
}

const submitRating = (e) => {
  let selectedRating;

  // check each rating option to see if it has the id 'isSelected'
  ratingOptsEl.forEach(el => {
    if (el.id) {
      selectedRating = el.innerHTML;
      
      // update the DOM to remove rate-state and display thank-state
      ratingStateEl.className = 'hide';
      thankStateEl.className = '';
    
      // display selected rating in pill
      userRating.innerHTML = selectedRating;
    }
  })

  if (!selectedRating) {
    submitErrorEl.className = ''
  }
}

// event listeners
document.querySelector('#submit-rating').addEventListener('click', submitRating);

ratingOptsEl.forEach(item => {
  item.addEventListener('click', selectRating);
});
