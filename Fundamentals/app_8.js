// Array and Array Methods

const number = [1,2,3,4,5,6];
const number2 = new Array(22,33,45,54,26,36);

const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = ['Apple', 22, 'Ipad', new Date(), {a:1,b:2}];

let val ;

// Length
val = number.length;

// Check if is array
val = Array.isArray(number);

// Get a single Value
val = number[3]; // O-Indexing
val = number[0];

// Insert into array
number[2] = 100 ;

// Find the Index value
val = number.indexOf(4);

// MUTATING ARRAY
// Add on to the Array
number.push(250);

// Add on to Front
number.unshift(120);

// take of from end
number.pop();

//take of from Front
number.shift();

// Splice out values
number.splice(1,3);

// Reverse the array
number.reverse();

// Concatenate arrays
val = number.concat(number2);

// sort
val = fruit.sort();
val = number2.sort();

/// reverse sort
val = number2.sort(function(x,y){
  return y - x ;
})



console.log(number);
console.log(val);
