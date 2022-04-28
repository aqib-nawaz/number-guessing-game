let numberToGuess = Math.ceil(Math.random() * 100);
console.log(numberToGuess)

let turns = document.getElementById('turns');
let message = document.getElementById('message')
let category = document.getElementById('select-category');

let button = document.getElementById('check-button')