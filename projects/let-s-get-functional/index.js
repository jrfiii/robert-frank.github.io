// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./robert-frank.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return array.filter(customer => customer.gender === 'male').length;
};

var femaleCount = function(array) {
    return array.reduce((count, customer) => {
        if (customer.gender === 'female') {
            count++;
        }
        return count;
    }, 0);
};

var oldestCustomer = function(array) {
    let oldestCustomer = array.reduce((oldest, customer) => {
        if(customer.age > oldest.age){
            oldest = customer;
        }
        return oldest;
    });
    return oldestCustomer.name;
};

var youngestCustomer = function(array) {
    let youngestCustomer = array.reduce((yung, customer) => {
        if(customer.age < yung.age) {
            yung = customer;
        }
        return yung;
    });
    return youngestCustomer.name;
};

var averageBalance = function(array) {
    return array.map(customer => parseFloat(customer.balance.slice(1, 2) + customer.balance.slice(3)))
                .reduce((sum, customer) => sum += customer) / array.length;
};

var firstLetterCount = function(array, letter) {
    return array.filter(customer => (customer.name[0].toLowerCase() === letter.toLowerCase())).length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let ourCustomer = array.filter(obj => obj.name === customer);
    let friendArr = ourCustomer[0].friends;
    return friendArr.filter(amigo => amigo.name[0].toLowerCase() === letter.toLowerCase()).length;
};

var friendsCount = function(array, customer) {
    let friendOf = array.filter(obj => obj.friends.some(friend => friend.name === customer));
    return friendOf.map(person => person.name);
};

var topThreeTags = function (array, number = 3) {
    let output = [];
    let tagObj = {};
    array.map(customer => {
      customer.tags.map(tag => {
        if (!tagObj.hasOwnProperty(tag)) {
          tagObj[tag] = 1;
        } else {tagObj[tag]++;}
      });
    });
    for(let count in tagObj) {
      output.push([count, tagObj[count]]);
    }
    output.sort((a, b) => {
      return b[1] - a[1];
    });
    return output.slice(0, number).map(tag => tag[0]);
};

var genderCount = function (array) {
    let output = {};
    array.map(customer => {
        if (!output.hasOwnProperty(customer.gender)) {
          output[customer.gender] = 1;
        }
        else {output[customer.gender]++;}
    });
    return output;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
