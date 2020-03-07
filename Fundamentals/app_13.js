// Function Declearationa and expression

// Function Declearation
// ES5 way to Define Defaults
function greet(firstName){
  if (typeof firstName === 'undefined')
    firstName = 'John';
  return 'hello ' + firstName ;
}
console.log(greet());

//ES6 way to define Defaults
function greets(firstName = 'John'){
  return 'hello ' + firstName ;
}
console.log(greet('steve'));

// Function Expression
const square = function(x){
  return x*x;
};
console.log(square(8));

// Immidiately Invokable function Expression - IIFEs

(
  function(name){
    console.log('IIFEs Ran...');
    console.log('hello '+ name);   
  }
)('brad');

console.clear();

// Property Methods
/*
    + When a function in put inside a object it is called method
*/

const todo ={
  add : function(){
    console.log('add todo...');
  },
  edit : function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo..');
};


todo.add();
todo.edit(22);
todo.delete();