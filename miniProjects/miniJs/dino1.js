'use strict'

// create variables to access character and block
let character = document.getElementById("character");
let block = document.getElementById("block");

//function to get character to be interactive
function jump(){
    character.classList.add("jumpAnimate");
    setTimeout(function (){}, 500);//this adds in the animation and reloads after 500ms so it can run again
}
// onclick(jump()) could've used an event listener here as well

