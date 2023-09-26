/**
 * CONTROL FLOW
 * 
 * 0. Control flow refers to the order in which code is executed.  Much like a book, code is read from top to bottom, left to right. However, with code, many times we want certain blocks of code to execute instead of others, depending on a litany of conditions.  Like a shepherd leading his flock through a fenced field, conditional statements are border collies that control the flow of our code sheep through the 'gates' that we want to guide them through.
 * 1. As mentioned above in the heavy-handed, convoluted metaphor, conditional statements are generally the way that we control the flow of our code.  Conditional statements depend on the evaluation to a boolean value.  In short, if they evaluate to true, the ensuing code block is executed.  If false, the following code block is skipped.
 * 2. The most common conditional statement used in JavaScript programming are if statements, else statements, else-if chained conditional statements, and switches.
 */

// 1. If
//An if statement has the following syntax: if(expression) {code block if expression evaluates as true}.  While the expression that is contained in parentheses following an if statement generally includes an operator or method that inherently returns a boolean value, the if statement will coerce a truthy or falsy value from any expression that is not already a boolean.  Falsy values to be aware of are null, undefined, 0, NaN, -0, bigInt 0n, an empty string "", and the only falsy object in JavaScript 'document.all'.

if(2 > 1) {
    //this code will always run because the conditional above will always evaluate as true
  }
  if('') {
    //this code will never run because "" is a falsy value
  }
  
  
  // 2. Else
  // We have covered the simplest conditional statement above.  But what should we do if the if statement doesn't execute.  An else statement that follows provides us with an alternative code block that will execute if the if condition is false.
  
  let name = 'Robert';
  if (name === 'Robert') {
    console.log('Does anyone call you Bob?');
  } else {
    console.log(`I don't really know anything about you except that your name isn't Robert`);
  }
  
  // In the above example, the else statement is an optional catch-all that will execute if the if statement does not execute.  However, because name is 'Robert', the console will log 'Does anyone call you Bob?'
  
  
  // 3. Else-if
  // Okay, one of our border collies named "If" has guided our code flock successfully through one gate of the pasture into an "Else" field.  But what if we need to sort and refine our code further before we get to this final code block.  We can chain together conditionals with a pack of border collies called else-if statements.
  // To further illustrate the control flow of a large chain of conditional statements, we can think of the code block behind conditional statements that evaluate to false as being behind closed gates.  When the condition evaluates to a truthy value, the gate is opened and our program will run the code behind that open gate.  When chaining together if-else if-else statements, as soon as one open gate is found (or the conditional statement evaluates to true), the rest of the chain is ignored, and the code block following the first true condition will be the only that is run.  In other words, a final else statement would only execute if all previous if-else if statements had evaluated to false. If any one evaluates to true, the chain is broken and the code block following whichever truthy condition executes.

  if(false) {
    //this is skipped
  } else if (false) {
    //this is also skipped
  } else if (false) {
    //NEXT!!!
  } else if (true) {
    //We have a winner! This code block execute because the preceding chain of conditionals are all falsy values.
  } else {
    //the else block is not reached here because the else-if statement before evaluated to a truthy value.
  }
  
  // 4. Switch
  // A switch statement is another type of conditional statement that has a much different structure and syntax than the if, else if statements above.  Switch statements are more appropriate when you have a finite number of possibilities.  The switch statement bypasses the logical component of if/else if statements and executes a case's code block based simply on equality of the variable passed into the switch statement.  
  
  let color = "green";
  switch(color) {
    case "red":
      console.log("like fire");
      break;
    case "orange":
      console.log("like the fruit");
      break;
    case "yellow":
      console.log("like a sunflower");
      break;
    case "green":
      console.log("like the leaves");
    case "blue":
      console.log("like the sky");
      break;
    case "indigo":
      console.log("like blueberries?");
      break;
    case "violet":
      console.log("like eggplants");
      break;
    default:
      console.log("you didn't say a color in ROYGBIV");
  }
  
  // Note the syntax in each case line.  The variable or expression passed into the switch statement must be equal to one of the following cases in order for the case's code block to execute.  Note also that each case must have 'break;' to exit the switch, otherwise the code will continue to execute until a break is reached.  Notice that there is no 'break;' in the 'green' case.  The console.log statement for 'blue' is also logged due to the absense of 'break'.  The one case that doesn't need a break is the default, which is always the 'caboose' of a switch statement.  If equality isn't found in any of the listed cases, the code following a default statement will be executed.  Since this is the end of the switch statement anyway, no break is required.