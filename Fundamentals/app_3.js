// Datatypes in Javascript

/*
  - Premitive Data Types
    + String
    + Number
    + Boolean
    + Null 
    + Undefined
    + Symbols ( After ES6)
  - Reference Data Type
    + Array
    + Object Literals
    + Function
    + Dates, etc.
*/

// Premitive Type 

// Strings
const name = "John Don";
// Number
const age = 45 ;
// Boolean
const hasKid = true ;
// NULL
const car = null ;

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKid);
console.log(typeof car);
/*
  + In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.
*/

// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof test);
console.log(typeof sym);

// REFERENCE TYPE - Objects
console.clear();

// Array
const arr = [1,2,3,4,5];
// Object Literal
const address = {
  city : "Delhi",
  country : "India"
}
// Date
const today = new Date();



console.log(typeof arr);
console.log(typeof address);
console.log(today);
console.log(typeof today);


