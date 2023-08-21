/**
 * OPERATORS
 * 
 * 0. Operators perform a variety of different functions, from simple tasks like assigning and naming variables, to basic arithmetic like addition.  In short, expressions are units of code that resolve to values.  Operators are the means by which we join together a myriad of expressions.
 * 1. Operators operate on Operands.  We can define three types of operators in JavaScript based on how many operands the operators acts upon.  Most operators we will deal with are binary operators, with an operand on either side of the operator.  There are also Unary Operators, that take only one operand, and even one ternary operator in JavaScript, with 3 Operands!
 * 2. Operators can be more finely grouped in the following categories: Assignment, Arithmetic, Comparison, Logical, Unary and Ternary Operators
 */

// 1. Assignment Operators (=)
// To define, declare, or initialize a variable, one must use an assignment operator "=".  It assigns the value of the operand on the right side of itself to the operand on its left side.

let num = 9;
let word = "characters";
let bool = false;

// There are also a variety of arithmetic assingment operators, like '+=', '-=', '*=', '/='.

num += 5; // the same as num = num + 5;
num /= 3; // the same as num = num / 3;

// 2. Arithmetic Operators
// These operators are your usual mathematical operations, +, -, *, /

let x, y;
x + y // addition: x plus y
x - y // subtraction: x minus y
x * y // multiplication: x times y
x / y // division: x divided by y

// 3. Comparison Operators ( < , > , == , >= , <= , != , === , !==)
// Comparison operators, simply put, are binary operators that compare both operands and return a boolean value whether or not the comparison is true or false.  For example, x < y. If x is less than y, true is returned.  If x is not less than y, the expression is then false.

x > y   // greater than
x < y   // x less than y
x >= y  // greater than or equal to  
x == y  // loose equality
x <= y  // x less than or equal to y
x !== y // not strictly equal to 
x === y // strict equality

// 4. Logical Operators (AND && , OR || , NOT !)
// Both sides of the AND operator must resolve to true in order for an && expression to return true.  If either side resolves to false, an && operator will return false.

x > 10 && x < 15 // x must be greater than 10 AND less than 15 for the expression to return true

// The Logical OR operator, however, returns true as long as one operand resolves to true.  It only returns false if both sides resolve to false.

x < 10 || x > 15 // x must be less than 10 OR greater than 15

// The logical NOT (or BANG) operator (!) can be understood as negation, or the logical complement. It 'takes truth to falsity, and vice versa'.  In other words, an expression preceded by ! must resolve to false to return true, and those expressions that resovle to true will actually return false.

let input;
if (input !== 'PASSWORD') {
  //code block performed if input is anything other than 'PASSWORD'
};

!true // returns false, aka 'not true'

// 5. Unary Operators
// Unary operators only operate upon one operand, so we can group them as either pre-fix unary operators or post-fix unary operators.  And actually, the only post-fix unary operators in JavaScript are the INCREMENT and DECREMENT operators, or ++ and --.

x++ //Increment, the same as writing x = x + 1
x-- //Decrement, the same as writing x = x - 1

// The rest of the unary operators are pre-fix, meaning the operator comes before, or operates on an operand that comes after, or to the right of the operator. The Logical NOT (!) Operator is actually a pre-fix unary operator when used on an expression.  JavaScript also has several built-in keywords that are unary operators, such as 'typeof', 'delete', or 'instanceof'

let z = 'string variable';
typeof z; //returns the data-type of z, in this case 'string'
delete z; //Deletes variable z.

let day = new Date(); //
day instanceof Date; //returns true if day is an instance of the Date object.
delete day; //deletes the variable day;

// 6. Ternary Conditional Operators
// The only operator in JavaScript that takes 3 operands, a ternary operator has the form a ? b : c, where a is a conditional expression, which returns b if a resolves to true, or c if it resolves to false.

input === 'password' ? unlock() : lock()
// If the input is equal to the string 'password', function unlock is performed.  
//If the input is anything other than the string 'password', the function lock is invoked.