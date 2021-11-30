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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let stairs = '';//blank storage variable
    for(let i = 0; i <= n; i++){
        //1st loop tracks number of rows (n) times
        for(let j = n-1; j >= i; s--){
            //2nd loop tracks the spaces on each line
            stairs += '';
            /* start out at end n-1 of sq matrix.
              should be >= i bc numb of spaces decreases as i increases
              reduce j bc numb of spaces decreases as i increases */
        }
        for(let x = 1; x <= i; x++){
            /*
            3rd loop to track #'s on each line, x should start at one bc
            1st line will always have 1 #, x should be <= the row that we are on
            since x will approach & eventually equal note,
            x increases since we increment x to = i which will eventually = n
            */
            stairs += '#';
        }
        //new line
        stairs += '\n';
    }
    // log final resutl
    console.log(output);
}// end of function

/*2ND SOLUTION*/

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "#".repeat(i))
    }
}

function staircase(xr) {

    // want to declare a variable that will hold the final output that we will print
    let output = ''

    // outer for loop to keep track of the overall number of rows (n)
    for (let i = 1; i <= xr; i++) {
        for (let s = xr - 1; s >= i; s--) {
            output += ' '
        }
        for (let h = 1; h <= i; h++) {
            output += '#'
        }
        output += "\n"
    }
    // log the final result
    console.log(output)
}
/* ************************************************************* */
function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}


/*
Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces,
 and has a height and width of .
*/


//1ST OPTION SOLN FOUND ON SEARCH
// function staircase(n) {
//
//     // want to declare a variable that will hold the final output that we will print
//     let output = ''
//
//     // outer for loop to keep track of the overall number of rows (n)
//     for (let i = 1; i <= n; i++) {
//
//         // inner for loop to keep track of the preceding spaces on each line
//             // s should start out at n-1 which we can see from the pic I drew
//             // s should be greater than or equal to i because the number of spaces decreases as i increases
//             // decrease s bc the number of spaces decreases as i increases
//         for (let s = n - 1; s >= i; s--) {
//             output += ' '
//         }
//
//         // inner for loop to keep track of the #s on each line
//             // h should start at one because the first line will always have one #
//             // h should be less than or equal to the row that we are on since h will approach and eventually equal n
//             // h increases since we increment h to equal i which will eventually equal n
//         for (let h = 1; h <= i; h++) {
//             output += '#'
//         }
//         // new line
//         output += "\n"
//
//     }
//     // log the final result
//     console.log(output)
// }



//2nd OPTION SOLN FOUND ON SEARCH
// function staircase(n) {
//   // Two dimensional array concept
//     for(let i = 0; i < n; i++){
//         // Clear the output after each loop
//         let output = '';
//         for(let j = 0; j < n; j++){
//           // Loop through, whenever (n-1-i) is bigger than j concat a space else #
//            j < (n -1 -i) ? output += ' ': output += '#';
//         }
//         console.log(output);
//     }
// }
