/**
 * VARIABLES:
 * 
 * 0. In order to keep track of particular values in a computer program, we give unique names to different values and data-types. Much like the variables used in math equations, giving data a name or address allows us to change and transform their value, or even the type of data itself.  
 * 1. Unlike math though, variables in JavaScript can contain any of the data-types that are permitted in JavaScript.  A variable is merely the identifier for that data.  
 * 2. Historically, 'var' used to be the only declarative keyword in the language.  However, recent updates added 'let' and 'const' to further refine how variables are declared and assigned values.  Each of these keywords has distinct differences in how the variable is treated by the compiler in its precedence and scope.  How variables are treated in run-time is called hoisting.
 */

// 1. Declaration and Assignment
// When a variable is first created with any keyword, we call that declaration.  Variable names have a few rules and conventions they must follow.  Most importantly, they should follow camelCase, where the first character is lowercase, but any subsequent word is capitalized for readability.  They should be concise and reflect the data that they represent, without being too long or cumbersome to type while programming.

var variable; //variable called 'variable' declared.
let otherVariable; //notice that semicolons follow lines of code

// Assignment is when a value is 'assigned' to any given variable.  When a variable is assigned a value in the same line of code that it was declared, it is called 'initialization.' In fact, when using the 'const' keyword, variables must be initialized or JavaScript will throw an error.

// const eyeColor; //this is not allowed, must be initialized.
const eyeColor = 'brown'; //const variables must be initialized

// Re-assignment is assigning a new value to a variable.  As the 'const' keyword implies, 'const' are constant variables, and cannot be re-assigned, but variables created with 'var' and 'let' can be.

variable = 8; //variable given initial value
variable = 'blue'; //variable reassigned new value, even a different data type

// JavaScript is dynamically-typed language, so the data-type of the variable doesn't need to be explicitly expressed.  In fact, as you can see above, variables can be re-assigned values that are completely different data-types.


// 2. var, let, const
// As mentioned above, 'var' used to be the only keyword available for declaring variables. An unintended side-effect of this keyword, though, is that variables declared with var can be 're-declared', which is not ideal.  'let' was created in a recent update, along with 'const' to add versatility to variable declaration.  One of the main differences is that 'let' and 'const' do not allow variables to be re-declared.  In fact, as we saw above, 'const' does not even allow a variable to be re-assigned.  

var number = 1;
let sentence = 'I am.';
const pi = 3.14;  //this value cannot be re-assigned 

//The other main difference lies in the scope of the variables.  Scope refers to the availability or visibility of a value or expression. Var variables are globally scoped, meaning they are visible to the outermost scope of a program, regardless of where they were declared.  Let and const are 'block-scoped', so they are only hoisted to the top of whatever code block they were initially declared in.  However, it is important to note that variables declared in a parent scope are visible to the child scopes within it, but variables that are declared with let or const in a child scope are not available in their parent scopes.

function doSomething() {
  var varTest = 'Hello from child scope';
  console.log(varTest); //this is the only place where the var variable is available.  It is function-scoped to the function code block.
};
// console.log(varTest); //var is function-scoped, so not visible in the global scope since it was declared in the function block 
doSomething();

if (true) {
  let blockScopedLet = "I'm only accessible inside this code block";
  const blockScopedConst = 9;
  /** 
  console.log(blockScopedLet); //this code will successfully access the variable declared with "let" 
  console.log(blockScopedConst); // "const" variables behave the same as let variables. These two console.log functions will work as the variables they reference are in the same code block.
  */
}
/** 
console.log(blockScopedLet); //This code however will return an error
console.log(blockScopedConst); //as will this one.
*/

//On top of the differing scopes between variables declared with var and variables declared with let or const, another difference is that let and const variables cannot be redeclared.  This will cause an error, while var variables can be redeclared.  While your code will still run, redeclaring a var variable could have consequences with the expected behavior of a function or program.

let z = 9;
// let z = 10; //This would return a SyntaxError warning you that the variable z has already been declared.
const constant = 1;
// constant = 2; //The difference between let and const is that while neither can be redeclared, const variables cannot even be reassigned.  This will throw a TypeError informing you of this particularity of const variables.

// 3. Hoisting
// Hoisting refers to the process that our higher-levl code undergoes when interpreted by a compiler.  In simple terms, function and var variable declarations are brought to the top of each scope.  Function declarations have precedent over variables, and the entire code block of a function is hoisted. Functions can be invoked anywhere because their declaration and ensuing code blocks are always hoisted.  However, with var variables, only the declaration is hoisted to the top.  That variable is assigned a value of 'undefined' until the assignment is encountered when executing the code. In a similar sense, functions expressions are only hoisted like variables, only the identifier is hoisted, not its assignment.

// console.log(x, y);  //expects undefined and type error
//x is undefined because it is a var variable, and its declaration is at least hoisted.  y is a let variable, so its declaration isn't hoisted, so the console.log does not have a variable y yet to access.
var x = 2;
let y = 3;

console.log(functionDeclaration());  //function code block was hoisted
console.log(functionExpression());  //expects undefined, as only variable identifier was hoisted, not the subsequent function code block.
function functionDeclaration(){
  return 'I was hoisted!';
}
var functionExpression = function(){
  return 'I might not be hoisted!';
}