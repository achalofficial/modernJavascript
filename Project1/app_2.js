// Declear variable using VAR keyword

var name = "Zapp";
console.log(name);

var greeting ;
console.log(greeting);
greeting = "John";
console.log(greeting);

// A Variable in Javascript can incloude only numbers , letters , _ and $ sign
// They Cant Start with a number.
// multiname Varables

var firstName = "Johnson"; // camel case
var first_name = "sara"; // underscore
var FirstName = "Son"; // Pascal Case

console.log(firstName);
console.log(first_name);
console.log(FirstName);


// Declear using the LET Keyword

console.clear(); // To clear the log 
let fName = "Jaszz";
console.log(fName);

// Declearation using the CONST Keyword

/*
+ We cant reassign the const value
+ We have to assign the Value
*/

const Fname = "Johnny";
console.log(Fname);
// Fname = "Panda"; Produce an Error

console.clear();
// Const in Objects
const person = {
    name : "Panda",
    age : 22
}

console.log(person);

/*
+ We can change the Data Value of the Variable inside the Object Person
+ We can't chnage the Person as whole 
*/

person.name = "cutePanda";
person.age = 21;

console.log(person);

// CONST in Arrays

const numbers = [1,2,3,4,5,6] ;
numbers.push(7);

console.log(numbers);

/*
+ For the objects and numbers we cant resign them. We can mutate to the existing values.
*/

// numbers = [7,6,5,4,3,2,1]; // This will Pop an error since we cant reassign

