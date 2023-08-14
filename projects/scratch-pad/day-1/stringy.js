// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //return length property of input length
    return string.length;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    //returns string parameter passed into function as all lowercase
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    //returns input string with all characters to UPPERCASE
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

//Declares a function that returns an input string with dashes instead of spaces and all characters forced to lowercase
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    let arr = string.split(' '); // initialize an array from input string, each element split at spaces
    let newString = arr.join('-');  // initialize a new string that joins elements of arr with dashes between
    console.log(newString);
    //Uses string methods split and array method join to replace all spaces (" ") with dashes (-)
    return toLowerCase(newString); // ensures that output will be lowercase as well
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/**
 * I: String and single character
 * O: Boolean value whether the string begins with the given character
 * C: must evaluate lowercase and uppercase as equivalents
 * E: N/A
 * @param {j} string 
 * @param {*} char 
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // tests if zero index of string matches uppercase or lowercase value of char
    if (string[0] === toLowerCase(char) || string[0] === toUpperCase(char)) {
        return true;    //returns true if character at zero index of string matches lower or uppercase value of char
    } else {
        return false; //returns false if char is not in the zero index of string
    }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //tests whether the final index of string matches the upper- or lower-case value of char
    if (string[string.length - 1] === toLowerCase(char) || string[string.length - 1] === toUpperCase(char)) {
        return true; // tests for strict equality between upper- or lower-case value of char at last index position of string
    } else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringOne + stringTwo; //Could also use concat(stringOne, stringTwo);
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // creating a local variable that makes an array from all arguments passed into function
    var args = Array.from(arguments);
    return args.join(''); //returns string with elements of above array all joined without spaces

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/**
 * I: two strings to be compared by length
 * O: whichever string is longer
 * C: n/a
 * E: prompt doesn't specify what should happen if strings are same length, but I've added a conditional branch for that
 * @param {} stringOne 
 * @param {*} stringTwo 
 * @returns 
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else if (stringTwo.length > stringOne.length) {
        return stringTwo;
    } else {
        return 'Same Length'; //
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/**
 * I: two strings to be tested for alphabetical order
 * O: either 1, -1, or 0 depending on the alphabetic relation of input strings
 * C: N/A
 * E: 1 if stringOne is higher in the alphabet, -1 if stringTwo is higher, or 0 if the two strings are the same
 * @param {} stringOne 
 * @param {*} stringTwo 
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne === stringTwo) { //tests for strict equality first
        return 0; //returns 0 if they are equal
    } else if (toLowerCase(stringOne) > toLowerCase(stringTwo)) { //must convert strings to lower or upper case as they are evaluated differently in comparisons
        return -1; //returns -1 if stringTwo is closer to 'a' than stringOne
    } else { //returns 1 if stringOne is earlier in the alphabet
        return 1;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if (stringOne === stringTwo) { //tests for strict equality first
        return 0; //returns 0 if they are equal
    } else if (toLowerCase(stringOne) > toLowerCase(stringTwo)) { //must convert strings to lower or upper case as they are evaluated differently in comparisons
        return 1; //returns 1 if stringTwo is closer to 'z' than stringOne
    } else { //returns -1 if stringOne is later in the alphabet
        return -1;
    }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
