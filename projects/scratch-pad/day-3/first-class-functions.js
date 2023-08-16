// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
//declare function that accepts base parameter and returns function that tests whether a value is greater than base.
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {    //returns a function that evaluates if a value is greater than the base input above.
        if (value > base) {
            return true; //returns a boolean after above expression is evaluated.
        } else {
            return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
*/
//declare function that accepts base parameter and returns function that tests whether a value is less than base.
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {    //returns a function that evaluates if a value is less than the base input above.
        if (value < base) {
            return true; //returns a boolean after above expression is evaluated.
        } else {
            return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
//function that returns a function that tests whether a string input starts with a given character.
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(string) {
        //tests if first character of string matches either upper or lower case startsWith character passed into above function
        if(string[0] === startsWith.toLowerCase() || string[0] === startsWith.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */

//function that returns a function that tests whether a string input ends with a given character.
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(string) {
        //tests if last character of string matches either upper or lower case startsWith character passed into above function
        if(string[string.length - 1] === endsWith.toLowerCase() || string[string.length - 1] === endsWith.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
//function declaration that accepts two parameters, an array 'strings' and a function parameter 'modify'. returns an array 'modStrings'of modified strings
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let modStrings = []; //empty array to accept modified strings in for loop below.
    for (var i = 0; i < strings.length; i++) {      //for loop to iterate through all elements of 'strings'
        modStrings.push(modify(strings[i]));        //pushes each modified value to eventual return variable.
    }
    return modStrings;          //array of modified strings
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

//function declaration that accepts two parameters, an array of 'strings', and a function parameter 'test'. 
//function returns boolean based on whether all elements of array return true when passed through 'test' function.
//returns false once an element returns a false on the 'test'
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //for loop to iterate through all elements of 'strings' array and pass them to 'test' function
    for (var i = 0; i < strings.length; i++) {
        if (!test(strings[i])) {return false;} //if any element returns false, it can stop testing the array and return false.
    }
    return true; //if the entire array 'strings' passes through the for loop, then no 'test' returned a false boolean, therefore 'allStringsPass'.

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
