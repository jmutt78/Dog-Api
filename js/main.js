'use strict';


//get request
function getDogImage(dogNumber) {
  fetch('https://dog.ceo/api/breeds/image/random/${dogNumber}')
    .then(response => response.json())
    .then(responseJson =>
      dogDisplay(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


//Event listerner that gets users submission//
function inputSubmit() {
  $('#search-bar').submit(event => {
    event.preventDefault();
    let dogNumber = $('#search-input').val();
    getDogImage(dogNumber);

  });
}


//dispalys thumbnail and title
function dogDisplay(responseJson) {
  console.log(responseJson.message);
}


//function handler
function handleDogApi() {
  inputSubmit();
}

$(handleDogApi);
