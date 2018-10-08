'use strict';

//Event listerner that gets users submission//
function inputSubmit() {
  $('#search-bar').submit(event => {
    event.preventDefault();
    let dogNumber = $('#search-input').val();
    if (dogNumber <= 50) {
      getDogImage(dogNumber);
    } else {
      alert('Please enter less than 50')
    }

  });
}

//get request
function getDogImage(dogNumber) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response => response.json())
    .then(responseJson =>
      dogDisplay(responseJson))

    .catch(error => console.log(('Something went wrong. Try again later.')));
}

//dispalys thumbnail and title
function dogDisplay(responseJson) {
let imageAmount = responseJson.message;
imageAmount.forEach(function(imageAmounts) {
  console.log(imageAmounts);


//  $('.results').replaceWith(
    //`<img src=${imageAmounts} alt="results">`
//  )
  //display the results section
 //$('.results').removeClass('hidden');
});
}

//function handler
function handleDogApi() {
  inputSubmit();
}

$(handleDogApi);
