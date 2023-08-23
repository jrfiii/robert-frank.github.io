/**
 * DATA TYPES
 * 0. JavaScript allows values to be represented in several different types.  Most types are primitive or simple, as opposed to complex.  Once a variable is declared, it can be assigned dynamically to a value of any type, meaning the data type of a variable does not have to be explicitly stated in JavaScript.
 * 1. The primitive data types are number, string, boolean, symbol, bigInt, null, and undefined.
 * 2. The complex data types are arrays and objects.  They have no defined size, and are thus assigned values by reference.
 */


// 1. number
// A number is a numerical value.  It is the largest-sized primitive data type, with 8 bytes allocated for number values.  It can store any numerical value, as long as it's not bigger than nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-one, or +/- 9,007,199,254,740,991.  Anything bigger and you'll need bigInt.

const zero = 0;
let exponentNum = 2e6 //another way of writing 2,000,000
var pi = 3.141592653589 //pi with some sigfigs


// 2. String
// A string contains textual data, like words or anything you can represent with a bunch of inter-connected characters. They are bound by single- or double-quotes.

let char = 'a';
let word = 'hello';
let concat = 'hemi';
concat += 'sphere'; //concat now equals 'hemisphere'


// 3. Boolean
// A boolean value is actually the smallest primitive value, contained in only one bit.  The only two boolean values are 'true' or 'false'.

const noCap = true;
const cap = false;


// 4. Array
// The first complex data type we encounter is array.  But wait! typeof [array] = object?  Yes, an array returns 'object' when operated upon by typeof.  An array basically a list, but it is also a highly specialized container object with its own methods, and as such is considered its own data-type.  An array literal is defined as open brackets: '[]'.  As a list, an array is indexed.  Each element in an array has a position in the list, starting at zero.  To further delineate the typeof operator, one could use Array.isArray() to determine if a variable is an array.

let arrayLiteral = [];
var numArr = [1, 2, 3, 4, 5];
var stringArr = ['zero', 'one', 'two'];
var mixedArr = [1, 'one', false];
typeof numArr; // returns 'object'
Array.isArray(stringArr); // returns 'array'


// 5. Object
// Objects, like arrays before and functions that follow, are another complex data type.  Unlike arrays, which are more like a numbered list, objects are more like a collection of properties.  Their values are associated with keys in key-value pairs, which are unordered.  Like arrays, though, objects can contain any and all of the other data-types in their collection.

let objLiteral = {};
let object = {key1: "value 1", key2: 2, key3: "3rd"};
let person = {
  name: "John Doe",
  age: 77,
  isReal: false
};


// 6. Function
// Functions are a fundamental part of any programming language.  They can be thought of as procedures that code can perform to return different values.  Functions are declared with the 'function' keyword, but functions can also be expressed as variables.  In fact, functions are thought of as first-class objects, meaning they can go almost anywhere.  Functions can even be passed as arguments into other functions.  And that function could even return yet another function.

function fxnName (parameter) {
  //code block wrapped in curly braces
  //return statement after code has been run
}
function add (x, y) {
  return x + y;      //function that simply returns the sum of two parameters
}
const addAsVariable = function(x, y) {  //function expressed as a variable
 return x + y; 
}
const addArrow = (x, y) => x + y;  //function written with arrow syntax


// 7. undefined
// Undefined is the primitive data type that is assigned to variables that have been declared, but not yet assigned a value or initialized in any way.  Additionally, undefined is what is returned from a function that has no return statement.  

let whatValue;
console.log(whatValue); //undefined because variable is only declared
function noReturn(){}
console.log(noReturn()); //also undefined as the function has no return


// 8. null
// Null is a primitive data type that represents the intentional absense of any object value.  It is a reference that points at an invalid or nonexistent object or address.  It has a falsy value for boolean operations.  Strangely enough, due to its original configuration in JavaScript, 'typeof null' returns 'object'.

typeof null; //returns 'object', considered a bug of the typeof operator


// 9. NaN
// // While NaN literally means "Not-a-Number", the typeof operator returns 'number' on NaN. It is returned by failed number conversions, math operations that would return non-real numbers, like the square root of a negative number or multiplying or dividing by Infinity.

Number.isNaN(NaN); //returns 'true'
isNaN(NaN); //returns 'true'
console.log(typeof NaN); //returns 'number'
Math.sqrt(-1); //returns 'NaN'
1 ** Infinity; //returns 'NaN'


// 10. Infinity and -Infinity
// Infinity represents a number larger than all other numbers.  It is represented in JavaScript as "Infinity" or "Number.POSITIVE_INFINTIY". It is actually a property of the global object, or a variable representing infinity with global scope.

Infinity > 'All other positive integers';  //Infinity represents the largest integer
-Infinity < 'All other negative integers';  //Likewise, negative infinity is the smallest integer
console.log(typeof Infinity); //returns 'number'


// 11. Primitive/Simple & Complex Data Types
// Simple or primitive data types have size limits.  As mentioned above, the largest primitive value is a number, stored in 8 bytes.  Whereas a boolean can be stored in one bit.  On the flip side, complex data types, such as array, objects, and functions, have no size limit.  

let simpleNum = 3;
let anotherSimpleNum = simpleNum;
anotherSimpleNum += 4;
console.log(anotherSimpleNum); //expects '7'
console.log(simpleNum); //is this 3 or 7?


// 12. Values by Copy vs Values by Reference
// If a variable is assigned a value that is a primitive data type, if a new variable is initialized with the value of the original variable, a copy of that value is made.  If, however, the original variable is assigned a data type that is complex, any new variable that points at the original variable for assignment will merely get its values by reference.  What this means is that any mutation made to the new variable will also mutate the original complex variable, as the value is merely a reference to its original location.  If you are dealing with simple data types, any change to the new variable will not affect the value of the original variable as its value has been copied when it was assigned to the new variable.

let complexArr = [1, 2, 3];
let anotherComplexArr = complexArr;
anotherComplexArr.push(4);
console.log(anotherComplexArr); //expects [1, 2, 3, 4]
console.log(complexArr); //Why was 4 pushed to this array as well?

console.log(simpleNum); //This is still 3 because its value was copied when anotherSimpleNum was assigned its value.  So when that new variable was re-assigned, the value of simpleNum remains unchanfged.
console.log(complexArr); //This array is mutated because when anotherComplexArr was assigned the value of complexArr, it was merely given the same reference or address that the original array has.  No copy was made, so any change to the new variable changes the original, as they both reference the same values.