'use strict';

//Event listerner that gets users submission//
function inputSubmit() {
  $('#search-bar').submit(event => {
    event.preventDefault();
    let breedName = $('#search-input').val();
      getDogImage(breedName);
  });
}

//get request
function getDogImage(breedName) {
  fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      dogDisplay(responseJson))

    .catch(error => console.log(('Something went wrong. Try again later.')));
}

//dispalys thumbnail and title
function dogDisplay(responseJson) {
let imageAmount = responseJson.message;
  console.log(imageAmount);

 $('.results').replaceWith(
`<img src=${imageAmount} alt="results">`
 )
  //display the results section
$('.results').removeClass('hidden');

}
function tryAgain() {
  $('#try-again').click(function() {
    location.reload();
  });
}

//function handler
function handleDogApi() {
  inputSubmit();
  tryAgain();
}

$(handleDogApi);
