// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
//declared function to test if parameter passed into function is an array
function isArray(value) {
    // YOUR CODE BELOW HERE //
   
    return (Array.isArray(value));  //cannot use typeof as that would only return 'object'
    //above method already returns a boolean, so only need to return the result of that method
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
//declared function to test if value is object.  requires chained conditional to rule out several non-container object
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //because the typeof operator returns 'object' for several non-container datatypes, additional nested conditional statements required
    if(typeof value === 'object') {
        //use of or operator to rule out null, arrays, and dates
        if (value === null || isArray(value) || (value instanceof Date)) {
            return false;   //returns false even if the original typeof was true
        } else {
            return true; //only container objects should remain.
        }
    } else {
        return false; //returns false for all other simple datatypes and otherwise that never returned object in initial typeof 
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
//function declared to test if value is a collection
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    return (isArray(value) || isObject(value)); //can use two previously declared functions to test for arrays or objects 
    //previous functions already return boolean, so just have to return their result
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
//function declared to return string representation of datatype. function structured similar to isObject, except instead of returning Boolean values, returns string.
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (value === null) { //before default else code block, must sift out null, arrays, and dates that would give inaccurate datatypes when using typeof.
        return "null";
    } else if (isArray(value)) { //using previously declared function that uses Array.isArray(value)
        return "array";
    } else if (value instanceof Date === true) { //testing for date constructor
        return "date";
    } else { //simple datatypes, undefined, and remaining objects return their typeof
        return typeof value;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
