'use strict'

// create variables to access character and block
let character = document.getElementById("character");
let block = document.getElementById("block");

//function to get character to be interactive
function jump(){
    if (character.classList != "jumpAnimate"){
        character.classList.add("jumpAnimate");
    }
    setTimeout(function (){
        character.classList.remove("jumpAnimate")
    }, 500);//this adds in the animation and reloads after 500ms so it can run again
}
// onclick(jump()) could've used an event listener here as well
// $(selector).click()

// function that runs every so often to see if you've lost or not
let checkDead = setInterval(function (){
    // get top position of character and left position of block
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('OH NO! YOU LOSE!')
    }
    },10)

