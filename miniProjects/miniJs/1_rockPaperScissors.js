'use strict'
// grab and store element by the id for use later
const cpuChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const genResultDisplay = document.getElementById('result');

/*using a query selector to create possible choices*/
const possibleChoice = document.querySelectorAll('button');

// global storing variable
let userChoice;
let computerChoice;

/*4 each possible choice, grabbing the possible choice and listen for event click*/
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    /*this grabs event and displays user choice on html page in corresponding id section*/
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length) +1; //possibleChoice.length = 3 in this case, can sub
    //added 1 so that user doesn't get a 0 assoc w. random number
    // console.log(randomNumber);

    if (randomNumber === 1){
        computerChoice = 'Rock';
    }
    if (randomNumber === 2){
        computerChoice = 'Scissors';
    }
    if (randomNumber === 3){
        computerChoice = 'Paper';
    }
    cpuChoiceDisplay.innerHTML = computerChoice;
}
