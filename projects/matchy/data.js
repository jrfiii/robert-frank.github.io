/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'kookaburra';  //australian bird
animal["name"] = 'Cookie';      //name Cookie
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = "kooka";      //bird name is an onomatopoeia of the noises it makes
noises.push("burra");
noises.unshift("guuguu");
noises[noises.length] = 'buuruu';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises; //adds the array to the object animal
animal.noises.push('haha oo oo'); //adds the iconic kookaburra laugh to the array.

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Objects are not inherently ordered.  Therefore, an object's properties must be accessed via bracket or dot notation.  Dot notation requires the literal key to be used to access the property value.  If accessing a value via the use of a variable, bracket notation must be used.
 * 2. What are the different ways of accessing elements on arrays?
 * Arrays are lists, that by their definition, are indexed.  To access a particular element, the array name followed by brackets that contain the index will access the element at that index position.  For example array[0] will access the first value of an array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal); //adds my kookaburra to this new array.
console.log(animals); //logs an array of one object

var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);
console.log(animals); //logs an array of two objects, animal and duck

var chipmunk = {
  species: "chipmunk",
  name: "Chip",
  noises: ["chip chip", "munk munk"]
};

var zyzzyx = {
  species: "zyzzyx",
  name: "Sandy the Sand Wasp",
  noises: ["zyz", "zyx"]
}

animals.push(chipmunk, zyzzyx);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//The following friends list should be an array, as arrays are the more appropriate complex data type for containing lists.
var friends = [];

//function declared to return a random index from animals array
function getRandom(animals) {
  let idx = Math.floor(Math.random() * animals.length); //rounds down to an integer to give us a randomly generated index
  return idx;
}

//adding a random name to friends array.
friends.push(animals[getRandom(animals)].name);
console.log(friends);

animal['friends'] = friends; //adding friends array to my Kookaburra animal object.
console.log(animal); //expects new friends property with a randomly generated friend.  note: may sometimes be a friend of itself

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}