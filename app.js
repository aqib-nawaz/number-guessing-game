let numberToGuess = Math.ceil(Math.random() * 100);
console.log(numberToGuess)

let turns = document.getElementById('turns');
let message = document.getElementById('message')
let category = document.getElementById('select-category');

let button = document.getElementById('check-button')

button.disabled = true;

let onCategorySelect = () => {
    
    let categoryVal = category.value;
    // console.log(typeof categoryVal)

    button.disabled = false;


    if(categoryVal === "easy"){
        turns.textContent = 7;

    } else if(categoryVal == "medium"){
        turns.textContent = 5;

    } else if( categoryVal === "hard"){
        turns.textContent = 3;

    } else {
        turns.textContent = "";
        button.disabled = true;
    }
}
category.onchange = onCategorySelect;