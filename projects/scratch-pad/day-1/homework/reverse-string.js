// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/**
 * I: string
 * O: the string in reverse order
 * C: n/a
 * E: n/a
 */

//declare a function that returns an input string in reverse order
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //initialize an array literal to contain the character values of the input string
    let arr = [];
    // use of for loop to iterate through characters of input string
    for (var i = input.length - 1; i >= 0; i--) {
      arr.push(input[i]); //pushes each character of input to array in reverse order.
    }
    return arr.join(''); //joins the array, which is input reversed and returns the new string
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}