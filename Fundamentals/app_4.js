// TYPE CONVERSION

let val;

// Number to String
val = String(555);
// For Expression
val = String(4 + 4);

// Boolean to String
val = String(true);

// Date to string
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4])

// toString()
val = (55).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(null);
val = Number('hello')
val = Number([1,2,3,4,5]);
// NaN is given when it is not possible conver to number

// parseInt()
val = parseInt('100');
val = parseInt('100.30'); // Still get 100 since it will convert it int type
val = parseFloat('100.3'); // When you want to return Float Point

// // Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length); // gives length of the given string
// console.log(val.toFixed()); // Allow to put decimal to numbers


// Exlict Type Conversion
const val1 = String('5') ;
const val2 = 6 ;
const sum = Number(val1) + val2 ;

console.log(sum);
console.log(typeof sum);


