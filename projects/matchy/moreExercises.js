var data = { results: [ 
  { animal: 'fox', 
    numberOfLegs: 4, 
    says: '??', 
    matches: 
      [ 'dog', 'cat', 'pig']
  },
  { animal: 'frog', 
    numberOfLegs: 4, 
    says: 'ribbit', 
    matches: 
      [ 'whale', 'cat', 'pig', 'rabbit']
  },
  { animal: 'dog', 
    numberOfLegs: 4, 
    says: 'woof', 
    matches: 
      [ 'dog', 'fish', 'pig']
  },
  { animal: 'human', 
    numberOfLegs: 2, 
    says: 'hello', 
    matches: 
      [ 'frog', 'duck', 'pig']
  },
  { animal: 'fish', 
    numberOfLegs: 0, 
    says: 'blub', 
    matches: 
      [ 'dog', 'rabbit', 'frog', 'human']
  },
  { animal: 'whale', 
    numberOfLegs: 0, 
    says: 'aaarrrhhh', 
    matches: 
      [ 'duck', 'fish', 'pig']
  },
  { animal: 'duck', 
    numberOfLegs: 2, 
    says: 'quack', 
    matches: 
      [ 'fish', 'human', 'chicken', 'whale']
  }
  ]};

  // Use the .length property to console.log the length of the results
  // array.

console.log(data.results.length);

  // Imagine you want are making a search results page,
  // (console.log) all of the animal names in order.

for (var i = 0; i < data.results.length; i++) {
  console.log(data.results[i].animal);
}

  // Next, Capitalize the first letter of each name and put a label
  // Your end result should look like this:
  // Name: Fox
  // Name: Dog
  // Name: Frog
  // Name: Human
  // Name: Fish
  // etc.

for (var i = 0; i < data.results.length; i++) {
  console.log(`Name: ${data.results[i].animal[0].toUpperCase()}${data.results[i].animal.slice(1)}`);
}

  // Next, console.log the number of legs next to their name.
  // Your end result should look like this:
  // Name: Fox, Legs: 4
  // Name: Dog, Legs: 4
  // Name: Frog, Legs: 4
  // Name: Human, Legs: 2
  // Name: Fish, Legs: 0

for (var i = 0; i < data.results.length; i++) {
  console.log(`Name: ${data.results[i].animal[0].toUpperCase()}${data.results[i].animal.slice(1)}, Legs: ${data.results[i].numberOfLegs}`);
}

  // Now, redo the steps in the previous one and 
  // take this data and add it to an array with nested objects. 
  // Your result should look like this:
  // var results = [
  // {Name: 'Fox', Legs: 4},
  // {Name: 'Dog', Legs: 4},
  // {Name: 'Frog', Legs: 4},
  // {Name: 'Human', Legs: 2},
  // {Name: 'Fish', Legs: 0}
  // ];

var results = [];
for (var i = 0; i < data.results.length; i++) {
    results.push({Name: `${data.results[i].animal[0].toUpperCase()}${data.results[i].animal.slice(1)}`, Legs: `${data.results[i].numberOfLegs}`});
}
console.log(results);

  // For another search result, console.log the animals whose matches are 'fish'
  // Next, add it to an array called 'FishMatches'. 
  // Make each match an object with two properties 'name' and 'index'
  // Your end result should look like this:
 // var fishMatches = [{name: 'dog', index: 2}, {name: 'whale', index:5}];

var fishMatches = [];
for (var i = 0; i < data.results.length; i++) {
  let idx = data.results[i].matches.indexOf('fish');
  if(idx > -1) {
    fishMatches.push({name: `${data.results[i].animal}`, index: i});
  }
}
console.log(fishMatches);