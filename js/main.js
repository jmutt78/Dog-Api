$(document).ready(function(){
  console.log('ready');
});

//get request
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//Event listerner that gets users submission//
function inputSubmit(){


}

//dispalys thumbnail and title
function dogDisplay(){

}

//function handler
function handleDogApi(){


}

$(handleDogApi);
