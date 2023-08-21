/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function declaration to search through an array to match any object whose name property matches name string passed as second parameter
function search(animals, str) {
    //for loop to iterate through each element of array
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === str) {return animals[i];}   //returns object at that index of animals if name property value matches argument passed as str parameter.
    }
    return null;    //returns null if entire array of animals is searched and no name matches.
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function declaration that takes 3 parameters, an array, a string, and a replacement object.
function replace(animals, name, replacement) {
    //for loop to iterate through animals array
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {     //returns true if name parameter matches name property value of the particular object
            animals[i] = replacement;       //reassigns that element to the replacement object if match found
        }
    }
    //else does nothing if no match found
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function declaration to remove animal from website if name matches any animal object with that value at its name property.
function remove(animals, name) {
    for (let i = animals.length - 1; i >= 0; i--) {
        if (animals[i].name === name) {
            animals.splice(i, 1);           //splices out array element if name passed as parameter matches name property value of object at that index
        }
    }
    //else does nothing if no match found
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function declaration to add a new animal object to animals array as long as new animal object doesn't have a matching name, and as long as animal object has a value at 'name' and 'species' property that is longer than an empty string. 
function add(animals, animal) {
    //use of chained logical AND operators to satisfy constraints of function
    if ((search(animals, animal.name) === null) && (animal['name'].length > 0 && animal['species'].length > 0)) {
        animals.push(animal);   //only pushes new animal object if the three above conditions are all true
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
