// if Statement and Comparision Operator

const id = 95 ;

// // Equal To
// if ( id == 100){
//   console.log('True');
// } else {
//   console.log('False');
// }


// // Not Equal Too
// if ( id != 100){
//   console.log('True');
// } else {
//   console.log('False');
// }

// // EQUAL TO VALUE AND TYPE
// if ( id === 100){
//   console.log('True');
// } else {
//   console.log('False');
// }

// // NOT EQUAL TO VALUE AND TYPE
// if ( id !== 100){
//   console.log('True');
// } else {
//   console.log('False');
// }

// Test if Underfined
if (typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// Greater Than and Less than
if ( id >= 100){
  console.log(`Greater than and equal ${id}`);
} else if ( id <= 100) {
  console.log(`Less than or Equal to ${id}`);
}

//IF ELSE
if ( id >= 100){
  console.log(`Greater than and equal ${id}`);
} else if ( id <= 100) {
  console.log(`Less than or Equal to ${id}`);
}

// Logical Operators
const name = 'steve';
const age = 10 ;

if (age > 0 && age < 12){
  console.log(`${name} is a child`);
}

/*
    + || -> This is OR Operator
    + && -> This is AND Operator
*/

// Ternary Operator
/*
    + (Condition) ? True : False
*/

const ver = 11;
console.log(ver === 10 ? 'True' : 'False');

// Without the Curly Braces
// Use Intend (Not Suggested)

