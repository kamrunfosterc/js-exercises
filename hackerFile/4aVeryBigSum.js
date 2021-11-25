'use strict';

const fs = require('fs');

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
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;//starting point
    for(let i =0; i <= ar.length-1; i++){ //start, while is true, increment by
        sum += ar[i];//stores each iteration & adds next value in array index
    }
    return sum;// returns the sum
}

//Initial approach
/*
function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for(let i =0; i <= ar.length; i++){
        sum += sum[i];
    }
    return sum;
}
*/

// ALTERNATIVE WAY TO SOLVE FUNCTION
function aVeryBigSum2(ar) {
    // Write your code here
    let sum = 0;
    for(let i =0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}



//NOTED
/*
In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints


Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005
Output

5000000015
Note:

The range of the 32-bit integer is .
When we add several integer values, the resulting sum might exceed the above
range. You might need to use long int C/C++/Java to store such sums.
*/