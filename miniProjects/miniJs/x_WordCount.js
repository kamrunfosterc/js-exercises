'use strict'
let countTarget = document.querySelector("#word-count-input");
let wordCount = document.querySelector("#word-count");
let characterCount = document.querySelector("#character-count");

let count = function(){
    let characters = countTarget.value;
    let characterLength = characters.length;// error found her when using .length()
    let words = characters.split(/[\n\r\s]+/g).filter(function (word){
        return word.length > 0;
    });
    wordCount.innerHTML = words.length;
    console.log(wordCount);
    characterCount.innerHTML = characterLength;
};
count();
window.addEventListener(
    "input",
    function(e){
        if (e.target.matches("#word-count-input")){
            count();
        }
    },
    false
);
