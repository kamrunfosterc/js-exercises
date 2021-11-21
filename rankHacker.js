`use strict`

function plusMinus(arr) {
    // storing value
    let posNumb = 0;
    let negNumb = 0;
    let zeroNumb = 0;
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] > 0){// if value is positive add to pos
            posNumb++;
        } else if (arr[i] < 0){
            negNumb++;
        } else {
            zeroNumb++;
        }
    }
    // toFixed returns #of places after decimal
    let denom = arr.length;// using as denominator
    // let posPercent = (posNumb/ arr.length).toFixed(6); //OLD
    let posPercent = (posNumb/ denom).toFixed(3);
    let negPercent = (negNumb/ denom).toFixed(3);
    let zeroPercent = (zeroNumb/ denom).toFixed(3);
    console.log("positive value: "+posPercent+" | negative value: "+negPercent+" | zero value: "+ zeroPercent);
}
//TODO TEST 1
let arr = [-4, 3, -9, 0, 4, 1];
console.log("arr values:");
plusMinus(arr);
console.log("\n");

//TODO TEST 2
let abc = [10, 14, -88, 0, 9];
console.log("abc values: ");
plusMinus(abc);
console.log("\n");

//TODO TEST 3
let xyz = [-4, 5, 6, 1, 0, 0, 11, -14, 0];
console.log("xyz values: ");
plusMinus(xyz);

