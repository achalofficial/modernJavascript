// const sayHello = function () {
//   console.log('Hello'); 
// }


// One line function dont need curley braces
// const sayHello = () => {
//   console.log('Hello'); 
// }

// One line return 
//const sayHello = () => console.log('Hello');

//const sayHello = () => 'Hello'; 

//return Object
//const sayHello = () => ({msg : 'hello'})

// Single param doesnot need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName + ' ' + lastName}`);


// sayHello('Brad','Teddy');

const users = ['Nathan', 'John', 'Brad'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });


// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);


