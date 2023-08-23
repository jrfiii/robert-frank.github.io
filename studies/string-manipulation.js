/**
 * STRING MANIPULATION
 * 
 * 0. A string is a primitive data-type that contains textual data. A string is immutable, meaning it cannot be changed, but there are a few operators and methods that make working with string variables easier
 * 1. The operator most often used with strings is the concatenating operator, or '+' sign.  Like mathematical addition, it combines together string data.  Likewise, the '+=' assignment operator can also be used with strings.
 * 2. There are many methods and properties available to manipulate string data.  A very useful property for determining the length of a string is '.length'.  And of the many methods used on strings, some of the most common are .slice(), .indexOf(), .replace(), .includes(), .toLowerCase(), .toUpperCase(), amongst many other useful methods.
 */

// 1. With Operators
// To concatenate, or combine together different pieces of textual data, we can simply use the concatenating operator, a plus sign '+'.

let name = 'R' + 'ob';
name += 'ert'; //name now 'Robert'

// 2. With String Methods
//For more nuanced manipulations, there are a number of string methods avaialble to us.  While not quite a method, one of the most used properties of a string is .length

name.length; //measuring length of 'Robert' above.  Expects '6'

//Like arrays, individual characters can be accessed in a string with bracket notation.  Like arrays, strings are also zero-indexed.

let letterR = name[0]; //the zero index of 'Robert' is a capital 'R'
let babyt = name[name.length - 1]; //last index of name is lowercase 't'

//If you want to find out the index of a particular character, or if a string of characters is found within a large string, you can use .indexOf().  The parameter passed to this function should be a 'string'.  It will return the index at which the 'string' is first found, or -1 if it is not present.

name.indexOf('ZZZ'); //expects -1 because there are not three ZZZ's in 'Robert'
name.indexOf('o'); //expects 1 because there is a lowercase 'o' at that index

//Much like .indexOf, .includes searches a string for the presence of its parameter.  However, instead of returning the index, it simply returns a boolean whether or not it is found.

let team = 'team';
team.includes('i'); //it is indeed 'false'

//.slice() is very useful for returning substrings from a string.  This method returns a new string.  The parameters passed to .slice() are the index at which you want to begin the 'cut'.  If a second parameter is not used, the remainder of the string remains a part of that cut.  If a second parameter is used, though, the cut continues up to that index, non-inclusive. 

let nickname = name.slice(2); //'bert' is not actually my nickname, please don't call me that.  But notice that because a second paramter was used, the 'sliced' characters are everything from the 2nd index onward.

// The .replace() method is useful for replacing a character or substring with a new string.  The two parameters passed to it is the target string to be replaced, and the second parameter the string to be placed in the target string's original position.  The .replace() method will only replace the first instance of the target string.  Use .replaceAll() if you want all instances replaced.   

name.replace('Rob', 'Bob'); //name is still 'Robert' as strings are immutable.  This must be assigned to a new variable to keep the changes
let newName = name.replace('Rob', 'Bob'); //newName is now 'Bobert';

let notAWord = 'banana'.replaceAll('a', 'i'); //what is a 'binini'? No idea, it's not a word, but at least you know how to replace all the a's in banana now, so you're welcome.

//To manipulate the capitalization of strings or characters, there are two useful, complementary methods.  .toLowerCase() returns a string with all of the letters converted to lower-case, while .toUpperCase() returns a string with all characters converted to upper-case.  Note that no parameters are passed with these methods.

newName.toUpperCase(); //Gotcha again, remember that strings are immutable.  Need to assign this to a new variable.
newNameAllCaps = newName.toUpperCase();
newNameLowercase = newNameAllCaps.toLowerCase();

//But what if you only wanted to capitalize the first letter of a word? Well, that is a bit more complicated, but using a couple of the methods above allows us to do that without too much fuss.

let noun = 'louis';
let properNoun = noun[0].toUpperCase() + noun.slice(1);
properNoun = `${noun[0].toUpperCase()}${noun.slice(1)}`; //Just for fun, this is how you could write the above line of code as a template literal. Maybe not super useful for just a single name, but is useful for larger constructions with spaces needed that would otherwise be cluttered up with concatenating operators and countless quotation marks.