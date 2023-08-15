// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/**
function declared that takes no argument, merely prints numbers 1 to 100 to console.
if number is divisible by 3 and/or 5, it outputs a string message instead of the number.
*/

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    for (var i = 1; i <= 100; i++) {
        let message = "";
        if (i % 3 === 0) {message += "Fizz"};
        if (i % 5 === 0) {message += "Buzz"};
        console.log(message || i);
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}