// index.js

var textToChange = document.querySelector('.text-to-change')
var buttonForText = document.querySelector('#text-button');

buttonForText.addEventListener('click', function(){
  textToChange.innerText = "You've Changed!";
})