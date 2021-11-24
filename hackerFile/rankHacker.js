`use strict`

// TODO OPTION 1
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
// //TODO TEST 1
// let arr = [-4, 3, -9, 0, 4, 1];
// console.log("arr values:");
// plusMinus(arr);
// console.log("\n");
//
// //TODO TEST 2
// let abc = [10, 14, -88, 0, 9];
// console.log("abc values: ");
// plusMinus(abc);
// console.log("\n");
//
// //TODO TEST 3
// let xyz = [-4, 5, 6, 1, 0, 0, 11, -14, 0];
// console.log("xyz values: ");
// plusMinus(xyz);

// Todo option 2 that works on hackerRank
function plusMinus(arr){
    let postiveNumber = 0;// starting positive value
    let negativeNumber= 0;// starting negative value
    let zeroNumber = 0;// starting zero count
    /* loop through the array check for each condition and */
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            postiveNumber++;
        }
        if(arr[i] < 0){
            negativeNumber++;
        }
        if(arr[i] == 0){
            zeroNumber++
        }
    }
    let pp = (postiveNumber/ arr.length);// pp: positive %
    let np = (negativeNumber/ arr.length);// np: negative %
    let zp = (zeroNumber/ arr.length);// zp: zero %
    console.log(pp);
    console.log(np);
    console.log(zp);
}


/*
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function plusMinus(arr) {
//     // storing value
//     let posNumb = 0;
//     let negNumb = 0;
//     let zeroNumb = 0;
//     for (let i = 0; i <= arr.length; i++){
//         if (arr[i] > 0){// if value is positive add to pos
//             posNumb++;
//         } else if (arr[i] < 0){
//             negNumb++;
//         } else {
//             zeroNumb++;
//         }
//     }
//     // toFixed returns #of places after decimal
//     let denom = arr.length;// using as denominator
//     let posPercent = (posNumb/ denom).toFixed(3);
//     let negPercent = (negNumb/ denom).toFixed(3);
//     let zeroPercent = (zeroNumb/ denomh).toFixed(3);
//
//     console.log("positive value: "+posPercent+" negative value: "+negPercent+" zero value: "+ zeroPercent);
// }


// function main() {
//     const n = parseInt(readLine().trim(), 10);
//
//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//
//     plusMinus(arr);
// }



/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .
*/




