'use strict'

// Attempt 1

function fibonacciModified(t1, t2, n){
    let fib = [];
    fib[0] = t1;
    fib[1] = t2;

    for (let i = 2; i < n; i++){
        let prev = fib[i-1];
        let old = fib[i-2];

        fib[i] = old + (prev**2);
        console.log(fib);
    }
    let  last = fib[fib.length - 1];
    return last;
}





/*
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
 * Complete the 'fibonacciModified' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER t1
 *  2. INTEGER t2
 *  3. INTEGER n
 */

/*
function fibonacciModified(t1, t2, n) {
    // Write your code here
    let fib = [];// empty placeholder

    fib[0] = t1;// reps t1
    fib[1] = t2;// reps t2

    //*** Everything is working just prior to loop ***
    for(let i=2; i < n; i++){
        let prev = fib[i-1];
        let old = fib[i-2];
        // fib[i] = fib[i-2] + Math.pow(fib[i-1],2);// ti = t0 + t1^2
        // t6 = t4 + t5^2

        //new function attempt
        fib[i] = old + prev**2;// value**2, **2 alt way to create exp value
        console.log(fib);
    }
    let last = fib[fib.length -1];// grabs last value in generated array
    // let lastAns = last/100;
    return last;// works for up to i = 9, any larger and becomes formatting issue
}

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
function fibonacciModified(t1, t2, n) {
    // Write your code here
    let fib = [];// empty placeholder

    fib[0] = t1;// reps t1
    fib[1] = t2;// reps t2
    console.log(fib[0], fib[1]);

    for(let i=2; i < n; i++){
        let old = fib[i-2]; // i.e. t1
        let prev = fib[i-1]; // i.e. t2

        if(i >= 9){
            // uniqueValue[i] = BigInt((old + prev**2));//fib equation
            // //BigInt((old + prev**2)/(10**7)) previous uniqueValue[i]=
            // console.log("greater than value: "+uniqueValue);

            // fib[i] = BigInt((old + prev**2));
            // console.log("greater than: "+ fib);

            let math = (old + (prev**2))/(10**3);
            fib[i] = math.toPrecision(22);
            let lastly = fib[fib.length - 1];
            console.log("fixed tested "+lastly)
            // let large = uniqueValue[uniqueValue.length -1];//last values
            // let convLarge = large[i]*(10**-22);
            // return large;
        } else {
            //new function attempt
            fib[i] = old + prev**2;// value**2, **2 alt way to create exp value
            console.log("less than value: "+fib);
        }
    }
//expected  84266613096281243382112
    let last = fib[fib.length -1];// grabs last value in generated array
    // let lastAns = last/100;
    return last + " final answer";// 84266613096281243648.00
}

// *** Length property ***
// let arry = [2, 4, 6, 8, 10, 12, 14, 16];
// let lastElement = arry[arry.length - 1];

// console.log(lastElement);//Output: 16

// *** slice() method ***
// let arry = [2, 4, 6, 8, 10, 12, 14, 16];
// let lastElement = arry.slice(-1);

// console.log(lastElement);//Output: 16



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const t1 = parseInt(firstMultipleInput[0], 10);

    const t2 = parseInt(firstMultipleInput[1], 10);

    const n = parseInt(firstMultipleInput[2], 10);

    const result = fibonacciModified(t1, t2, n);

    ws.write(result + '\n');

    ws.end();
}

/*
Implement a modified Fibonacci sequence using the following definition:

Given terms  and  where , term  is computed as:

Given three integers, , , and , compute and print the  term of a modified Fibonacci sequence.

Example



Return .

Function Description

Complete the fibonacciModified function in the editor below. It must return the  number in the sequence.

fibonacciModified has the following parameter(s):

int t1: an integer
int t2: an integer
int n: the iteration to report
Returns

int: the  number in the sequence
Note: The value of  may far exceed the range of a -bit integer. Many submission languages have libraries that can handle such large results but, for those that don't (e.g., C++), you will need to compensate for the size of the result.

Input Format

A single line of three space-separated integers, the values of , , and .

Constraints

 may far exceed the range of a -bit integer.
Sample Input

0 1 5
Sample Output

5
Explanation

The first two terms of the sequence are  and , which gives us a modified Fibonacci sequence of . The  term is .
*/
