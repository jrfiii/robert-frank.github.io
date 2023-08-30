'use strict';

// documentation for underpants.js


/**
 * identity: function takes in value and returns it unchanged.
 * @param {any data-type} value 
 * @returns input value unchanged
 */
function identity (value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: function that accepts value of any datatype and returns its datatype as a string
 * @param {any datatype} values
 * @returns a string representation of the datatype of value
*/
function typeOf(value){
    if (value === null) { //before default else code block, must sift out null, arrays, and dates that would give inaccurate datatypes when using typeof.
        return "null";
    } else if (Array.isArray(value)) { //using previously declared function that uses Array.isArray(value)
        return "array";
    } else if (value instanceof Date === true) { //testing for date constructor
        return "date";
    } else { //simple datatypes, undefined, and remaining objects return their typeof
        return typeof value;
    }
}
module.exports.typeOf = typeOf;


/**
 * first: function returns a certain number of elements from the start of an array.
 * @param {array} array if argument is not an array, returns []
 * @param {number} number if argument is not a number, returns zero index of array
 * @returns however many elements from the start of an array, as determined by number parameter
 */
function first (array, number) {
   //tests for expected inputs, returns an empty array if array isn't an array or if number is negative
   if(!Array.isArray(array) || number < 0)return [];
   else if (typeof number !== 'number') {
       return array[0];    //returns zero index if number parameter not passed or if it is NaN
   } else {
        return array.slice(0, number);
   }
}
module.exports.first = first;


/**
 * last: function returns a certain number of elements from the end of an array.
 * @param {array} array if input is not array, returns empty array []
 * @param {number} number if input is not a number, returns the zero index of array
 * @returns however many elements from the end of an array, as determined by number parameter
 */
function last (array, number) {
    //tests for expected inputs, returns an empty array if array isn't an array or if number is negative
    if(!Array.isArray(array) || number < 0)return [];
    else if (typeof number !== 'number') {  //returns last index if number not passed or if it is NaN
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        //returns the last elements of array with slice and length property
        return array.slice(array.length - number, array.length);
    }
}
module.exports.last = last;


/**
 * indexOf: function that returns the index of the first occurrence of the value that is found while iterating through an array, either from the start or from a given index parameter
 * @param {array} array that is an array which is searched
 * @param {primitive value} value target value that is a simple datatype that is compared for strict equality in the search 
 * @param {number} idx if given as parameter, modifies the start point of the search. if not given, search starts at zero index
 * @returns the index at which the value is found in array. if value does not occur in array, returns -1.
 */
function indexOf (array, value, idx) {
    //tests if idx is passed into function and assigns i its value or 0 if it's undefined
    for(let i = (idx === undefined) ? 0 : idx ; i < array.length; i++) {
        if(array[i] === value){
            return i;
        }
    }
    return -1;  //returns -1 if value is not encountered
}
module.exports.indexOf = indexOf;


/**
 * contains: function that returns a boolean value whether or not an array contains a given simple value
 * @param {array} array to be searched
 * @param {primitive datatype} value to be searched for, must be simple value because function compares strict equality
 * @returns boolean value of true if value is found or false if value is not encourntered
 */
function contains (array, value) {
    let bool = false;   //initializing bool to false
    let i = 0;          //initializing count variable to 0, to represent zero index of array
    //use of while loop in order to break out of iterating through array as soon as first occurance of value is reached, or if entire array has been compared.
    while(bool === false && i < array.length){
        (array[i] === value) ? bool = true : i++;
    }
    return bool;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the func Function to each value in the collection.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the collection
 * @returns nothing, has no return statement
 */
function each (collection, func){
    //first if statement for any arrays that are passed into function as collection
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    //second conditional for the objects that are passed as collection
    } else {
        for(let key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: function that culls an array of any duplicated or redundant elements
 * @param {array} array to be sifted through
 * @returns new array containing only unique elements from input array
 */
function unique (array) {
    let uniqueArr = []; //empty array initialized to be output
    for(let i = 0; i < array.length; i++) {
        if(!uniqueArr.includes(array[i])) {     //compares each element of input array
            uniqueArr.push(array[i]);           //& adds them to output array if they are not already present in the output array
        }
    }
    return uniqueArr;
}
module.exports.unique = unique;


