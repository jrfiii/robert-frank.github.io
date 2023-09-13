/**
 * LOOPS
 * 
 * 0. A loop is a useful expression that allows a code block to be executed repeatedly.  This is useful in making code shorter and simpler to write, and allows us to do something that we might not know how many times we need to do it.
 * 1. In a general sense, all loops behave by first evaluating the truthiness of a condition.  If that condition evaulates to true or a truthy value, the code block is executed.  The condition is then re-tested, and this pattern repeats until the condition is no longer true and returns false or a falsy value. The biggest pitfall when creating loops is inadvertently creating an infinite loop, which will eventually crash the program, so special care must be taken to make sure that the loop will eventually terminate.
 * 2. Where the various loops differ is in the particular syntax that each requires to be implemented.  The most common loops we use in JavaScript are 'while' loops, 'for' loops, and 'for-in' loops.
 */

// 1. while, for, for-in
// A while loop is written thusly:
/*
(external variable outside the while loop to serve as a count, or something that can be affected by the update statement within the while loop so that the conditional statement will eventually evaluatre to false.)
while(conditional statement) {
  //code block
  //update statement
}
*/
//In simple english, a while loop will continue to loop over itself 'while' the conditional statement inside the parentheses continues to evaluate to true.  Let's write a while loop that will countdown from 5 to 0.

let count = 5
while (count >= 0) {    //each loop checks to see the current value of count and ensure that it is still greater than or equal to 0
  console.log(count);   //then logs count
  count--;              //and lastly updates the variable 
}

//A for loop is syntatically quite different from the while loop above, but effectively accomplishes a similar goal.  A for loop is written thusly:

/** 
for(1; 2; 3) {
  //code block
}
Where 1 is an initialization of some sort of count variable, 2 is the conditional statement that is evaluated before the start of each loop, and 3 is the update statement that generally manipulates the count variable in some way so that the conditional statement will eventually evaluate to false
*/
//Both a for loop and while loop have their advantages, but for the sake of seeing a for loop in action, let's create one that also counts to 5, but this time let's count upwards.

for (let i = 0; i < 6; i++){
  console.log(i);
}


// 2. Counting over Loops
// The above two examples show simple ways to use increment or decrement operators to count by 1.  But we can make the loop count in any number of ways.  What if we want to count up by multiples of 3 until we get to 20? Let's find out how:

count = 3;
while (count < 20) {
  console.log(count);
  count += 3;
}
//let's do the same thing with a for loop, but count down by 3 from 18.
for (let i = 18; i > 0; i -= 3) {
  console.log(i);
}


// 3. Looping over an array, forwards and backwards
// Loops become highly useful when iterating through complex datatypes.  A for loop is set up perfectly to perform a block of code on each element of an array.  Since arrays are indexed, we can easily create a for loop to traverse over its contents.  Let's say we have an array of lowercase letters.  Let's write a for loop that will convert them all to uppercase letters.

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let j = 0; j < letters.length; j++) {
  //note that the variable we use can be named anything.  'i' is common, but it can be anything
  //we're using the .length property of the array in our conditional so that the for loop can loop dynamically if the number of elements in the letters array changes.
  letters[j] = letters[j].toUpperCase();  //we access each index of the letters array with the j variable in bracket notation
  console.log(letters); //for the sake of illustration, let's look at the array as it is looped over.
}

//Let's write another for loop to undo this work.  I decided that I want my letters to be lowercase.  But let's iterate over the array from its last element to the first.  Notice the different ways we set up the for loop:

for (let g = letters.length - 1; g >= 0; g--) {
  letters[g] = letters[g].toLowerCase();
  console.log(letters);
}


// 4. Looping over an object
// Arrays aren't the only complex data-type though, and many times we need to loop over the contents of an object.  Objects are not indexed though, so we can't easily use the generic for loop in the examples above.  That's where 'for-in' loops come in, to help us iterate over the key-value pairs of an object.  Their general syntax is written thusly:

/** 
for (let key in object) {
  //code block
}
}
*/

//The 'key' above is similar to the initialized counting variable 'i' or 'j' that we used in the arrays above.  Any variable name can be used, it is just important to note that it represents each property of whatever 'object' you are directing the for-in loop over. Let's say we have an object representing someone's full name:

let person = {
  firstName: "John",
  middleName: "Robert",
  lastName: "Frank"
};

//But let's say we need to standardize these 'person' objects so that all of the names are in capital letters.  Let's write a for-in loop to do the work for us.

for(let name in person){
  person[name] = person[name].toUpperCase();
  console.log(person); //for the sake of illustration, let's see how the object is transformed with each loop.
}