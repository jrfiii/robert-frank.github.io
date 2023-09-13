/**
 * FUNCTIONS
 * 
 * 0. The word 'function' has been in use almost 500 years, its first recorded use in English in the 1530s.  It originally referred to a purpose, or one's proper work. From the Latin 'functio' for performance, execution, discharge, the latter of which might also explain the root for Fungi, a kingdom of organisms.  Indeed, we see words related to functions littered throughout English: malfunction, defunct, perfunctory, fungible, dysfunction. A function could refer to a get-together.  Function refers even to practical design, as a counterpoint to superfluous, stylistic choices.  In computer programming, the particular connotation that we are usually referring to is most likely a descendent of Leibniz, a contemporary of Isaac Newton who in the 1690s was concurrently discovering the principles of calculus, who popularized its use for a mathematical relationship between two or more variables.
 * 1. The first recorded use of function in reference to modern computing occurred in 1947, with the construction of ENIAC, the Electronic Numerical Integrator And Calculator in reference to the programmable “sub-routines” that the “Giant Brain” could perform.
 * 2. A common metaphor used in describing a website's code is that HTML is the skeleton or structure, CSS is the skin or appearance, and JavaScript is the muscles that allow the entire thing to operate and move.  If we add functions to this metaphor, then functions are the individual muscle fibers that we can assemble together to do myriad different behaviors.
 */

// 1. Declaration/Definition and Invocation/Calling
// Before a function can be used, it must first be defined.  There are a few different ways to do so, but the most straight-forward is by using the 'function' keyword, like so:

function exampleFxn (exampleParameter) {
    //code block
  }
  
  //Note that the name of the function follows the 'function' keyword and that the conventions used to name functions follows the same general rules that we use with other variables, namely camelCase.  After the function's name is a set of parentheses, inside of which we name the parameters of the function.  Lastly, we have a set of curly braces that contain the code block of the function.   When a function is invoked, we simply call it by its name, pass in values as arguments (although some functions are defined with no parameters and thus no arguments), and the code block contained in the function definition will be executed, like so:
  
  exampleFxn("argument");
  
  
  // 2. Parameters vs Arguments
  //An important distinction to understand is the difference between parameters and arguments.  A parameter is essentially a placeholder, or a special name given to the local variables that the function will act upon.  Like variables, they can be named anything but should generally give someone reading your function an idea about the type of values that they will represent.  When a function is invoked, specific values are passed into the function as 'arguments', taking the place of these placeholder parameters, respectively.
  
  function sum (number, secondNumber) {  //function definition of sum
    //parameters named number and secondNumber
    return number + secondNumber;  //most functions will have a return keyword, which will end the execution of the code block and 'return' a value
  }
  sum(1, 2);   //example function invocation.
  //In the above example, the numbers '1' and '2' are the 'arguments' we pass into the function 'sum'.  They will be inserted into the code block where their respective parameters were mentioned in the function definition.  In this case, the function will return '3'.
  
  
  // 3. Function Syntax with keyword 'function'
  // In the above examples, functions have been defined with the 'function' keyword.  This is the most straightforward way of defining a function, but functions can also be defined in a couple of other fashions.  But just to re-iterate the particular syntax associated with the function keyword, let's define a function that converts a numerical 4-digit year to a string value of the decade it is in.
  
  function yrToDecade (year) {
    let yrStr = year + "";      //converts number to string
    return yrStr[2] + "0s";     //returns the "tens" digit with "0s" added
  }
  
  
  // 4. Function Expression as Variables
  // Another way we can define a function is by expressing it as a variable.  The syntax we see above requires minor manipulation, but the result is the same.  Just to keep it exciting, let's change the code block slightly to use a string method.
  
  var yrToDecade = function(year) {
    return year.toString()[2] + "0s";    //method that converts to string data
  };
  
  // When expressing a function as a variable, one must use any of the variable keywords before the function name, such as var, let, or const.  An assignment operator then attaches the name to the 'function' keyword, then followed by the parameters enveloped in parentheses, followed as usual by the curly braced code block.  In all other respects, however, these functions will return the same outputs. They are invoked in the same way.
  
  //Lastly, let's look at one final way to define a function.  The most stripped down way to write a function is referred to as 'arrow syntax'.  To the untrained eye, this is the least explicit way to define a function as the 'function' keyword is nowhere to be seen.  However, in its place we use an 'arrow', which is actually just an equals sign and a greater than symbol, like so "=>".  Let's re-write this yrToDecade function one last time as an arrow function:
  
  var yrToDecade = (year) => year.toString()[2] + "0s";
  
  //Because this function is simple enough to write in one line, we don't need to use the 'return' keyword either after the arrow to denote what we are returning from the function.  In fact, because we also only have one parameter, we could even omit the parentheses around 'year'.  There are plenty of other nuances in regards to arrow functions, but the important thing to note is that no matter how a function is defined, it is always invoked in the same manner.
  
  console.log(yrToDecade(1989));
  
  
  // 5. Inputs and Outputs: Returning Values from Parameters
  // A simple way to understand how functions 'function' is that they take in an input or inputs and return an output or outputs.  The parameters of a function, as we saw earlier, are simply placeholders for these eventual inputs.  The return statement will provide us with an output.  Note: if a function has no return statement, its output will always be 'undefined'.
  
  function greeting (word, name, punctuation) {
    return `${word}, ${name}${punctuation}`;//this is a template literal
    // return word + ", " + name + punctuation; //same as writing this
  }
  
  //We've written a function that will return a greeting for someone.  Let's pass in some inputs and see what is output!
  
  let wildWestWelcome = greeting("Howdy", "Partner", "!");
  console.log(wildWestWelcome);
  
  
  // 6. Scope
  // Scope refers to the accessibility of variables.  Depending on how and where a variable is declared affects its ability to be accessed or seen by different parts of a function.  Functions can see and modify variables in parent or global scopes.  The inverse is NOT true.  Let's look at parameters.  As I've simplified before, a parameter is a placeholder variable to be used in the ensuing code block of a function.  To put it more technically, a parameter is a locally-scoped variable that is only accessible inside the function block. Variables declared with 'var' are function scoped.  They are the most globally accessible variables.  If a var variable is declared within a function, however, it is not visible in the global scope.  On the other hand, let and const are block-scoped variables.  One must pay careful attention to where these variables are declared, as they are only accessible in the immediate block they were defined in.  Let's look at an example.
  
  let x = "x";
  function scopeTest (parameter) {
    console.log(x); //this should return "x" as this variable is accessible in a more inner-scope, or a variable defined in an outer scope is available in any child scope.
    console.log(parameter); //additionally, this will return whatever is passed into the function as parameter, as parameters are locally-accessible variables.
  }
  scopeTest("parameter"); //for sake of example, simply passing in a string 'parameter' as the parameter
  // console.log(parameter); //this will return a ReferenceError as we are now outside the scope of the function, and cannot access 'parameter' in a parent scope.
  
  
  // 7. Closures
  // A closure is a function that retains access to an outer functions variables even after the outer function has returned. These inner functions retain the references to their surrounding lexical environment.  Let's re-write that greeting function from earlier in a different way to create a closure.
  
  function greetingClosure () {
    let word = "Cheerio";
    let punctuation = "!";
    let name = "Chap";
    return function () {
      console.log(word + ", " + name + punctuation);
    }
  }
  let britishClosure = greetingClosure();
  britishClosure();
  
  //The function 'britishClosure' is the function that is returned fro the outer function 'greetingClosure'.  Even though the variables declared within that outer function would not normally be accessible in this outer scope, the inner function retains the lexical state that it was created in, allowing it to access their values in the outer scope.