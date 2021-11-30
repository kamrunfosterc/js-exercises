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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// todo: function solved below
// option 1 where s = "09:17:27 PM"
function timeConversion(s){
    //step 1
    let updatedHour = 0;
    let nightAndDay = s[s.length-2] + s[s.length-1];// reads AM/ PM
    let timeSlice = s.slice(0, s.length-2);//seperates time from "09:17:27 PM" to ['09','17','27']
    let splitTime = timeSlice.split(":");// returns 09:17:27

    //step 2 conditions
    if (nightAndDay === "PM" && parseInt(splitTime[0]) < 12){
        updatedHour = parseInt(splitTime[0]) + 12;//adds 12 to any number where PM is part of time
        // splitTime.shift();//console.log("shift: "+splitTime.shift());
        // splitTime.unshift(updatedHour.toString());//console.log("unshift & toString: "+splitTime.unshift(updatedHour.toString()));
        return splitTime.join(":");
    } else if(nightAndDay === "AM" && parseInt(splitTime[0]) === 12){
        updatedHour == "00";
        splitTime.shift();
        splitTime.unshift(updatedHour);
        return splitTime.join(":");
    }else {
        return splitTime.join(":");
    }
}
/*
- parseInt() function parses a string argument and returns an integer of the specified radix
    parseInt(string, radix
- shift() method removes the first element from an array and returns that removed element
- toString() method returns a string representing the object.
- unshift() method adds one or more elements to the beginning of an array
    and returns the new length of the array :: unshift(element0, element1, ... , elementN)
 */


console.log(timeConversion('09:07:23 PM')); //returns mil-time

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}


/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below.
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/