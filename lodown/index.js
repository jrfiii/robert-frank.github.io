'use strict';

// documentation for underpants.js


/**
 * identity: function takes in value and returns it unchanged.
 * @param value {any datatype} Function takes in value 
 * @returns {any datatype} Function returns input value unchanged
 */
function identity (value){
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: function that accepts value of any datatype and returns its datatype as a string
 * @param value { Any datatype }: Function takes in a value of 
 * @returns { String }: Function returns a string representation of the datatype of value
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
 * @param array { Array }: Function takes in input array
 * @param number { Number }: Function takes in number specifying how many elements to return from beginning
 * @returns { Array }: Function returns however many elements from the start of an array, as determined by number parameter
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
 * @param array { Array }: Function takes in input array
 * @param number { Number }:  Function takes in number specifying number of elements to return from end of array
 * @returns { Array }: Function returns however many elements from the end of an array, as determined by number parameter
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
 * @param array { Array }: Function takes in input array that is searched
 * @param value { String, Number, Boolean }: Function takes in primitive value target that is a simple datatype that is compared for strict equality in the search 
 * @param idx { Number }: Function takes in number if given as parameter, modifies the start point of the search. if not given, search starts at zero index
 * @returns { Number }: Function returns a number value representing the index at which the value is found in array. if value does not occur in array, returns -1.
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
 * @param array { Array }: Function take in input array to be searched
 * @param value { String, Number, Boolean }: Function takes in primitive value to be searched for, must be simple value because function compares strict equality
 * @returns { Boolean }: Function returns boolean value of true if value is found or false if value is not encountered
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
 * @param collection { Array, Object }: Function takes in input collection over which to iterate.
 * @param func { Function }: Function takes in input function to be applied to each value in the collection
 * @returns { Undefined }: Function returns undefined as it has no return statement
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
 * @param array { Array }: Function takes in input array to be sifted through
 * @returns { Array }: Function returns new array containing only unique elements from input array
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


/**
 * filter: function to pass an array through a test and return those elements that 'pass' the test, or return a true value from the test function
 * @param array { Array }: Function takes in input array to be tested by second parameter func
 * @param func { Function }: Function takes in callback function to be used as a test on each element of above array, returns a boolean 
 * @returns { Array }: Function returns a new array with only the elements from the input array that pass the filter test function, or that return a truthy value from the callback function.
 */
function filter (array, func) {
    let output = [];    //initialize empty array to be output
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array) === true) {
            output.push(array[i]);  //adds element if it returns a true value from input test function
        }
    }
    return output;
}
module.exports.filter = filter;


/**
 * reject: function that returns an array of elements from input array that DO NOT return a true value from an input test function.,
 * @param array { Array }: Function takes in input array to be iterated over with input test function
 * @param func { Function }: Function takes in callback function that will 'test' each input value from above array and return a boolean
 * @returns { Array }: Function returns a new array containing elements from input array that return false values from test function, or those elements that 'fail' the input test.
 */
function reject (array, func) {
    let output = [];    //initialize an empty array to be the eventual output
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array) === false) {
            output.push(array[i]);  //adds element to output array if it is 'rejected' by test, or if it returns a false value from func
        }
    }
    return output;
}
module.exports.reject = reject;


/**
 * partition: function that divides an input array into two new arrays of those that pass an input test func and those that do not pass.
 * @param array { Array }: Function takes in input array to be iterated over, with each element passed through a test func
 * @param func { Function }: Function takes in callback function that returns a boolean value
 * @returns { Array }: Function returns two arrays, the first of elements from input array that return true values from test func, and the second of the remaining values that return a false value from input test func.
 */
function partition (array, func) {
    let truthyArr = [];     //empty array to contain elements that return true from test func
    let falsyArr = [];      //empty array to contain elements that return false from test func
    for (let i = 0; i < array.length; i++) {
        if(func(array[i], i, array) === true) {
            truthyArr.push(array[i]);
        }
        if(func(array[i], i, array) === false) {
            falsyArr.push(array[i]);
        }
    }
    return [truthyArr, falsyArr];   //basically a combination of filter and reject in one
}
module.exports.partition = partition;



/**
 * map: takes an input collection and passes each value through a function to return a new, transformed collection
 * @param collection { Array, Object }: Function takes in input collection of either array or object
 * @param fuc { Function }: Function takes in callback function that each element or property of above input will be passed through
 * @returns { Array }: Function returns new array with return values from passing input collection through input function
 */
function map (collection, func) {
    let mappedArr = []; //empty array to be eventual output
    if(Array.isArray(collection)){  //if statement for arrays
        for(let i = 0; i < collection.length; i++){ //for loop for collections with indices
            mappedArr.push(func(collection[i], i, collection));
        }
    } else {    //else statement for objects
        for(let key in collection) {    //for-in loop for each key of object
            mappedArr.push(func(collection[key], key, collection));
        }
    }
    return mappedArr;
}
module.exports.map = map;


/**
 * pluck: function that iterates over an array of objects and pulls the value at property from each object
 * @param array { Array }: Function takes in an array of objects
 * @param property { String }: Function takes in string value that represents a property that should exist in each object of each element of above array.
 * @returns { Array }: Function returns a new array of values from the input property of each object
 */
function pluck (array, property) {
    //use of map to return an array of each object's value at whatever input property is passed
    return _.map(array, function(obj){
        return obj[property];
    });
}
module.exports.pluck = pluck;



/**
 * every: function that passes every element of array or every key value of object through a test function. EVERY value must return true from test to return true, else returns false.
 * @param collection { Array, Object }: Function takes in input collection that test is applied to
 * @param func { Function }: Function takes in callback function that is a test function that returns a boolean value
 * @returns { Boolean }: Function returns a boolean value.  Returns true only if every value returns true from test function, or if every value is truthy if no function is passed.
 */
function every (collection, func) {
    //If no function is passed into every, merely tests the truthiness of each element of array
    if(func === undefined && Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(!Boolean(collection[i])){
                return false;       //if even one element is falsy, returns false
            };
        }
        //if function is defined, and collection is array
    } else if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++){
            //tests every element of array with input function
            if(func(collection[i], i, collection) === false) {
                return false;       //if even one element tests false, returns false
            }
        }
        //if function is undefined and collection is object, merely tess the truthiness of all values at each key of object
    } else if (func === undefined) {
        for(let key in collection) {
            if(!Boolean(collection[key])){
                return false;       //if even one value is falsy, returns false
            }
        }
        //if function is defined, and collection is object, tests each value at every key with input function
    } else {
        for(let key in collection) {
            if(func(collection[key], key, collection) === false) {
                return false;   //returns false if even one value returns false from test function
            }
        }
    }
    return true;    //can only return true if all values are truthy or return true from test func.
}
module.exports.every = every;


/**
 * some: function that passes every value from array or object into a test function, returns true if at least one element passes test. returns false if all elements fail.
 * @param collection { Array, Object}: Function takes in input collection to be tested with following function
 * @param func { Function }: Function takes in callback function that tests each element of above collection.
 * @returns { Boolean }: Function returns boolean value.  Returns true if at least one element returns true value from test function, else returns false.
 */
function some (collection, func) {
    //if no function in invocation and collection is array, tests truthiness of each element
    if(func === undefined && Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(Boolean(collection[i])){
                return true;    //returns true if at least one element is truthy
            };
        }
        //if function is defined and collection is array
    } else if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++){
            if(func(collection[i], i, collection) === true) {
                return true;    //returns true if at least one element returns true from test func
            }
        }
        //if collection is object, but no function is defined, tests each value at every key of object
    } else if (func === undefined) {
        for(let key in collection) {
            if(Boolean(collection[key])){
                return true;    //returns true if at least one key-value is truthy
            }
        }
        //if function is defined, passes value at each key into test func
    } else {
        for(let key in collection) {
            if(func(collection[key], key, collection) === true) {
                return true;    //returns true if even one key-value returns true from test func.
            }
        }
    }
    return false;   //only returns false if all elements fail to pass test func or if all values are falsy.
}
module.exports.some = some;



/**
 * reduce: function that passes each element through a function that updates an 'accumulating' variable on each iteration through array and returns the final result.
 * @param array { Array }: Function takes in input array
 * @param func { Function }: Function takes in callback function that updates a 'compounding' result with each return value of function as it iterates through input array.
 * @param seed { Any datatype }: Function takes in seed starting value for the 'previousResult' of above function, if defined in function.
 * @returns { Any datatype }: Function returns the final result of passing each previous result into each successive function call as it iteraters through input array.
 */
function reduce (array, func, seed) {
    let previousResult; //declared variable to be updated with each iteration of for loop 
    if (seed === undefined) {   //if no seed parameter is passed, the starting 'seed' is the first element at the zero index of array.
        previousResult = array[0];
        for (let i = 1; i < array.length; i++) {    //for loop then starts on 2nd element
            previousResult = func(previousResult, array[i], i); //previousResult updated with each iteration
        }
    } else {
        previousResult = seed;  //if seed is defined, assigns value of seed to previousResult
        for(let i = 0; i < array.length; i++) {     //for loop starts on 1st element if seed is defined.
            previousResult = func(previousResult, array[i], i); //updates previousResult with each iteration
        }
    }
    return previousResult;
}
module.exports.reduce = reduce;


/**
 * extend: function that copies all key-value pairs from any number of objects to first object that is passed as parameter into function. Assigns keys to first object or re-assigns value if key already exists in order that objects are listed as paramters.
 * @param  objs { Array }: Function takes in array of any number of objects 
 * @returns { Object }: Function returns a single object that has been assigned and/or re-assigned all the key-value pairs from all objects passed into function
 */
function extend (...objs) { //rest parameter used since any number of objects can be passed into function.
    let primeObj = objs[0]; //initializes the zero index of objs array as the primeObj that all subsequent objects will be added to.
    for(let i = 1; i < objs.length; i++) {  //iterates through remaining elements of parameter array 
        for(let key in objs[i]) {           //iterates through each key of each object 
            primeObj[key] = objs[i][key];   //updates primeObj with key-value of each object
        }
    }
    return primeObj; //returns singular object with all object value pairs assigned and/or updated from all following objects
}
module.exports.extend = extend;