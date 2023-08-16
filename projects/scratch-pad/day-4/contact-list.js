// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

//a factory function that returns an object with each respective parameter passed into three key-value pairs
function makeContact(id, nameFirst, nameLast) {
    return {            //a factory function returns an object.
        id: id,                     //each parameter in factory function corresponds to a key for contact object
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 

//factory function that returns an object of methods to manage a contact-list
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];  //contacts must be an indexed array for several of the following methods to function properly
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        //method 'addContact' adds a contact object to the contacts list above
        addContact: function(contact) {
            contacts.push(contact);
            return contacts;
        },
        //search method 'findContact' uses a for loop to iterate through array and tests each object for strict equality of input parameter 'fullName'
        findContact: function(fullName) {
            //uses for loop to test each element of array
            for (var i = 0; i < contacts.length; i++) {
                //use template literal to format object key-values into appropriate test for strict equality with parameter passed into method
                if (fullName === `${contacts[i].nameFirst} ${contacts[i].nameLast}`) {
                    return contacts[i];
                }
            }
        },
        //'removeContact' method uses indexOf method of arrays to determine if object is present as an element in contacts
        removeContact: function(contact) {
            let idx = contacts.indexOf(contact);
            if (idx > -1) { //if idx is any value of 0 or greater, that element is removed from array
                contacts.splice(idx, 1);        //removes 1 element at idx index
            }
        },
        printAllContactNames: function() {
            let allNameStr = [];    //local variable initialized as empty array to accept strings of full names of each contact
            //use of empty array allows us to use .push (and later .join) to accept template literals of every full name in contacts.  
            for (var i = 0; i < contacts.length; i++) {
                allNameStr.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
            }
            return allNameStr.join('\n'); //inserts a new-line character between each element of array
            //returns a string that only has new line characters between names, not at beginning or end of string.
        }
    }
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
