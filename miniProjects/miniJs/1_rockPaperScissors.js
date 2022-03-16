'use strict'
// grab and store element by the id for use later
const cpuChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result-generated');
const possibleChoice = document.querySelectorAll('button');/*using a query selector to create possible choices*/

// global storing variable
let userChoice;
let computerChoice;
let result;
/*4 each possible choice, grabbing the possible choice and listen for event click*/
//handle user choice based on clicks
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    /*this grabs event and displays user choice on html page in corresponding id section*/
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    //Call functions here
    generateComputerChoice();
    // getResult();
    newResults();
}));

// generating computer choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    //possibleChoice.length = 3 in this case, can substitute
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
    cpuChoiceDisplay.innerHTML = computerChoice; //check code point
}

// generating results
// function getResult(){
//     if (computerChoice === userChoice){
//         result = 'Its a Draw';
//     }
//     if (computerChoice === 'rock' && userChoice === 'paper'){
//         result = 'Winner Winner Chicken Dinner';
//     }
//     if (computerChoice === 'rock' && userChoice === 'scissors'){
//         result = 'Sorry, you lost';
//     }
//     if (computerChoice === 'paper' && userChoice === 'scissors'){
//         result = 'Winner Winner Chicken Dinner';
//     }
//     if (computerChoice === 'paper' && userChoice === 'rock'){
//         result = 'Sorry, you lost';
//     }
//     if (computerChoice === 'scissors' && userChoice === 'rock'){
//         result = 'Winner Winner Chicken Dinner';
//     }
//     if (computerChoice === 'scissors' && userChoice === 'paper'){
//         result = 'Sorry, you lost';
//     }
//     resultDisplay.innerHTML = result;
// }

function newResults(){
    // const randomNumber = Math.floor(Math.random() * 3) + 1;
    // //possibleChoice.length = 3 in this case, can substitute
    // //added 1 so that user doesn't get a 0 assoc w. random number
    // // console.log(randomNumber);
    //
    // if (randomNumber === 1){
    //     computerChoice = 'Rock';
    // }
    // cpuChoiceDisplay.innerHTML = computerChoice; //check code point

    if(computerChoice === "Scissors" || userChoice === "Paper"){
        result = "Cut it out!";
    }
    resultDisplay.innerHTML = result;

}

