// Build In Constructor

// Strings

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
// console.log(name1,name2);

//console.log(typeof name2);

if(name2 === 'Jeff'){
    console.log("yes");
} else {
    console.log("No");
}

// Normal Way of Creating thing

const num1 = 5 ;
const num2 = new Number(5);

// Boolean
const bool1 = true ;
const bool2 = new Boolean(false);

// function
const getSum1 = function (x,y) {
  return x + y ;
}

const getSum2 = new Function('x','y' , 'return 1+1');

// Object 
const john1 = {name : 'John'};
const john2 = new Object({name : 'John'});

// This is not a efficient way since its slower

// Regular Expression
const rel1 = /\w+/;
const rel2 = new RegExp('\w+');

console.log(rel2);
