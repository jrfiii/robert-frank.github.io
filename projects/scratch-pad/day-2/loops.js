// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use of for loop to iterate through all elements of input array and print each value to console.
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]); //logs each element in order
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // For loop manipulated to print values of input array in reverse
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]); //logs each element in reverse
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //use of dedicated method to return an array of object keys
  return Object.keys(object); // Object.keys() method returns an array of the properties of an object  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //For-in loop used to print parameter object's keys to console.
  for (var key in object) {
    console.log(key); //logs each key in order as for-in loop iterates through input obj
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //initialize an empty array to accept each value of input parameter
  let objVals = [];
  for (var key in object) { //use of for-in loop to iterate through all keys of an object
    objVals.push(object[key]); //pushes value of each property to local array defined above;
  }
  return objVals; //returns an array of the object's values, not its keys
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // for-in loop iterates over all keys/props of an object and prints each successive value to the console.
  for (var key in object) {
    console.log(object[key]); //prints the value at each key, not the key itself
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // initialized a local count variable to return the number of keys in parameter passed into function
  let count = 0;
  //use of for-in loop to iterate through all props of object and increment count variable for each key/value pair
  for (var key in object) {
    count++;
  }
  return count; //returns the number of properties in input object
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

//function declared to print the values of an object parameter in reverse
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  let arr = getObjectValues(object); //called previously declared function to create an array of the values of input object
  //use of for-in loop to iterate through local arr variable above to print values in reverse
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]); // prints values backwards
  }  
  
  // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
