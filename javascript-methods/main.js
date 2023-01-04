var numOne = 47;
var numtwo = 23;
var numThree = 103;

var maximumValue = Math.max(numOne, numtwo, numThree);
console.log(`maximumValue: ${maximumValue}`);

var heroes = ['Batman', 'Superman', 'The Flash', 'Blackwidow'];
var randomNumber = Math.random(heroes);
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log(`randomIndex: ${randomIndex}`);
var randomHero = heroes[randomIndex];
console.log(`randomHero: ${randomHero}`);

var library = [
  {
    title: 'Where the Wild Things Are',
    author: 'Maurice Sendak'
  }, {
    title: 'Harry Potter and The Goblet of Fire',
    author: 'J.K Rowling'
  }, {
    title: 'Pigs Can Fly',
    author: 'Michael Van Doorn'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Michael VanDoorn';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(`sayMyName: ${sayMyName}`);
