var myBooks = [
  {
    isbn: 142410314,
    name: 'Charlie and the Chocolate Factory',
    author: 'Roadl Dahl'
  },
  {
    isbn: 64431789,
    name: 'Where the Wild Things Are',
    author: 'Maurine Sendak'
  },
  {
    isbn: 9780439358071,
    name: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K Rowling'
  }
];

console.log('Your array of books is: ', myBooks);
console.log('Your list of books is of type: ', typeof myBooks);

console.log('myBooks stringified is: ', JSON.stringify(myBooks));
console.log('myBooks stringified is type of: ', typeof JSON.stringify(myBooks));

var myStudent = '[{"number_id":45234,"name":"Michael Van Doorn"}]';
console.log('myStudent is:', myStudent);
console.log('myStudent is of type:', typeof myStudent);

console.log('myStudent JSON parsed is: ', JSON.parse(myStudent));
console.log('JSON Parse of myStudent is type of: ', typeof JSON.parse(myStudent));
