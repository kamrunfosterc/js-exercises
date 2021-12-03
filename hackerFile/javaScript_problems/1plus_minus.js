// Given an array of integers, calculate the ratios of its elements that are
// positive, negative, and zero. Print the decimal value of each fraction on a new
// line with  places after the decimal.
//

// Note: This challenge introduces precision problems. The test cases are
// scaled to six decimal places, though answers with absolute error of up to
// are acceptable.

/*

Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
*/
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

function plusMinus(arr) {
    // Write your code here
    const {
        pos,
        neg,
        zero
    } =
        arr.reduce((acc, val) => {
            if (val > 0) {
                acc.pos += 1;
            }
            if (val === 0) {
                acc.zero += 1;
            }
            if (val < 0) {
                acc.neg += 1;
            }
            return acc;
        }, {
            pos: 0,
            neg: 0,
            zero: 0
        });
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
