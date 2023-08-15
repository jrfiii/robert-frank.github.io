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
    if (Array.isArray(value)) { //cannot use typeof as that would only return 'object'
        return true;
    } else {
        return false;
    } 
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
//declared function to test if value is object.  requires long chained conditional to rule out several edge cases
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if (value === null) { //testing directly for null as typeof null returns object.
        return false;
    } else if (isArray(value) === true) { //calling previously defined function to parse out this complex datatype whose typeof is also object
        return false;
    } else if (value instanceof Date === true) { //testing for date constructors as date() is also an object
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else { //returns false for undefined and other simple datatypes
        return false;
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
    if (isArray(value) || isObject(value)) { //can use two previously declared functions to test for arrays or objects 
        return true;
    } else {
        return false;
    }
    
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
